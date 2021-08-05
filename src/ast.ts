import {parse, Template} from './parse'

// Base node -------------------------------------------------------------------

export abstract class Node {}

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
}

export class BlockChild extends Node {
  constructor(public readonly expression: Expression, public readonly children: Node[]) {
    super()
  }
}

export class IfBlock extends Block {
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
    return new Block(children)
  }
}

// Expressions -----------------------------------------------------------------

export type ExpressionType = 'null' | 'string' | 'number' | 'boolean' | 'array' | 'object'

export abstract class Expression<T extends ExpressionType = ExpressionType> extends Node {
  abstract readonly type: T
  pipe<Next extends ExpressionType>(next: Expression<Next>): PipeExpression<Next> {
    return new PipeExpression(this, next)
  }
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
}

export abstract class Field<T extends ExpressionType = ExpressionType> extends Expression<T> {
  readonly type: T
  readonly path: string[]
  constructor(type: T, path: string | string[]) {
    super()
    this.type = type
    this.path = typeof path === 'string' ? path.split('.') : path
  }
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
