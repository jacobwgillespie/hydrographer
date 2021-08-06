import {parse, Template} from '.'

// Base node -------------------------------------------------------------------

export abstract class Node {
  eval(_data: any): Node {
    return this
  }
}

// Primitives ------------------------------------------------------------------

export abstract class Primitive<T> extends Node {
  abstract readonly value: T
}

export class StringPrimitive extends Primitive<string> {
  constructor(public readonly value: string) {
    super()
  }
}

export class NumberPrimitive extends Primitive<number> {
  constructor(public readonly value: number) {
    super()
  }
}

export class BooleanPrimitive extends Primitive<boolean> {
  constructor(public readonly value: boolean) {
    super()
  }
}

export class NullPrimitive extends Primitive<null> {
  readonly value = null
}

// Containers ------------------------------------------------------------------

export abstract class Container extends Node {}

export class ArrayContainer extends Container {
  constructor(public readonly children: ArrayChild[]) {
    super()
  }
  get isEmpty() {
    return this.children.length === 0
  }
}

export class ArrayChild extends Node {
  constructor(public readonly value: Node) {
    super()
  }
}

export class ObjectContainer extends Container {
  constructor(public readonly children: ObjectChild[]) {
    super()
  }
  get isEmpty() {
    return this.children.length === 0
  }
}

export class ObjectChild extends Node {
  constructor(public readonly key: string, public readonly value: Node) {
    super()
  }
}

// Blocks ----------------------------------------------------------------------

export class Block extends Node {
  constructor(public readonly children: BlockChild[]) {
    super()
  }

  override eval(data: any): Node {
    console.log('called')
    return new Block(this.children.map((child) => child.eval(data)))
  }
}

export class BlockChild extends Node {
  constructor(public readonly expression: Expression, public readonly children: Node[]) {
    super()
  }

  override eval(data: any): BlockChild {
    return new BlockChild(
      this.expression.eval(data),
      this.children.map((child) => child.eval(data)),
    )
  }
}

export class IfBlock extends Block {
  constructor(children: BlockChild[]) {
    super(children)
  }

  elseIf(condition: Expression, block: Template): IfBlock {
    const expression = new FunctionExpression('boolean', 'else if', [condition])
    const child = new BlockChild(expression, [parse(block)])
    const children = [...this.children, child]
    return new IfBlock(children)
  }

  else(block: Template): Block {
    const expression = new FunctionExpression('boolean', 'else', [])
    const child = new BlockChild(expression, [parse(block)])
    const children = [...this.children, child]
    return new IfBlock(children)
  }

  override eval(data: any): Node {
    for (const child of this.children) {
      const exp = child.expression.eval(data)

      if (!(exp instanceof PrimitiveExpression)) {
        return this
      }

      if (exp.value) {
        return child.children[0]
      }
    }

    return this
  }
}

// Expressions -----------------------------------------------------------------

export type ExpressionType = 'null' | 'string' | 'number' | 'boolean' | 'array' | 'object'

export abstract class Expression<T extends ExpressionType = ExpressionType> extends Node {
  abstract readonly type: T
  pipe<Next extends ExpressionType>(next: Expression<Next>): PipeExpression<Next> {
    return new PipeExpression(this, next)
  }

  override eval(_data: any): Expression {
    return this
  }
}

export abstract class PrimitiveExpression<T> extends Expression<ExpressionType> {
  abstract readonly value: T
}

export class StringExpression extends PrimitiveExpression<string> {
  readonly type = 'string'
  constructor(public readonly value: string) {
    super()
  }
}

export class NumberExpression extends PrimitiveExpression<number> {
  readonly type = 'number'
  constructor(public readonly value: number) {
    super()
  }
}

export class BooleanExpression extends PrimitiveExpression<boolean> {
  readonly type = 'boolean'
  constructor(public readonly value: boolean) {
    super()
  }
}

export class NullExpression extends PrimitiveExpression<null> {
  readonly type = 'null'
  readonly value = null
}

/** Compound expressions are complex expressions that may need to be surrounded by parentheses. */
export abstract class CompoundExpression<T extends ExpressionType = ExpressionType> extends Expression<T> {}

export class PipeExpression<T extends ExpressionType = ExpressionType> extends CompoundExpression<T> {
  readonly type: T
  constructor(public readonly left: Expression, public readonly right: Expression<T>) {
    super()
    this.type = right.type
  }
}

export class FunctionExpression<T extends ExpressionType = ExpressionType> extends CompoundExpression<T> {
  constructor(public readonly type: T, public readonly name: string, public readonly params: Expression[]) {
    super()
  }

  override eval(data: any): Expression {
    const evaluatedParams = this.params.map((param) => param.eval(data))

    console.log({name: this.name, evaluatedParams})

    if (this.name === 'if' && evaluatedParams.every((param) => param instanceof PrimitiveExpression)) {
      return new BooleanExpression(
        (evaluatedParams as PrimitiveExpression<boolean>[]).every((param) => Boolean(param.value)),
      )
    }

    return this
  }
}

export abstract class Field<T extends ExpressionType = ExpressionType> extends Expression<T> {
  readonly type: T
  readonly path: string[]
  constructor(type: T, path: string | string[]) {
    super()
    this.type = type
    this.path = typeof path === 'string' ? path.split('.') : path
  }

  override eval(data: any): Expression {
    const key = this.path.join('.')
    return key in data ? parseExpression(data[key]) : this
  }
}

function parseExpression(value: any) {
  if (typeof value === 'string') return new StringExpression(value)
  if (typeof value === 'boolean') return new BooleanExpression(value)
  if (typeof value === 'number') return new NumberExpression(value)

  throw new Error(`Unable to parse expression: ${value}`)
}

export class StringField extends Field<'string'> {
  constructor(path: string | string[]) {
    super('string', path)
  }
}

export class NumberField extends Field<'number'> {
  constructor(path: string | string[]) {
    super('number', path)
  }
}

export class BooleanField extends Field<'boolean'> {
  constructor(path: string | string[]) {
    super('boolean', path)
  }
}

export class NullField extends Field<'null'> {
  constructor(path: string | string[]) {
    super('null', path)
  }
}

export class ArrayField extends Field<'array'> {
  constructor(path: string | string[]) {
    super('array', path)
  }
}

export class ObjectField extends Field<'object'> {
  constructor(path: string | string[]) {
    super('object', path)
  }
}
