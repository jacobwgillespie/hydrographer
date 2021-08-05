import {Node} from './ast'
import {YamlValueType} from './types'

// export class Interpolation<T extends YamlValueType = YamlValueType> extends Node {
//   constructor(
//     public readonly type: T,
//     public readonly contents: Expression<T>,
//     public readonly options: {trimLeft?: boolean; trimRight?: boolean},
//   ) {
//     super()
//   }
// }

export abstract class Expression<T extends YamlValueType = YamlValueType> extends Node {
  abstract readonly type: T
  pipe<Next extends YamlValueType>(next: Expression<Next>): PipeExpression<Next> {
    return new PipeExpression(this, next)
  }
}

/** Compound expressions are complex expressions that may need to be surrounded by parentheses. */
export abstract class CompoundExpression<T extends YamlValueType = YamlValueType> extends Expression<T> {}

export class PipeExpression<T extends YamlValueType = YamlValueType> extends CompoundExpression<T> {
  readonly type: T
  constructor(public readonly left: Expression, public readonly right: Expression<T>) {
    super()
    this.type = right.type
  }
}

export class FunctionExpression<T extends YamlValueType = YamlValueType> extends CompoundExpression<T> {
  constructor(public readonly type: T, public readonly name: string, public readonly params: Expression[]) {
    super()
  }
}

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
