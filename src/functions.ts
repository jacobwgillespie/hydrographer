import {Block, BlockChild, Expression, FunctionExpression} from './interpolations'
import {parse} from './parse'
import {Template} from './types'

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

export const fn = {
  toYaml(input: Expression): Expression {
    return input
  },

  if(condition: Expression, block: Template) {
    const expression = new FunctionExpression('boolean', 'if', [condition])
    const child = new BlockChild(expression, [parse(block)])
    return new IfBlock([child])
  },
}
