import {
  ArrayChild,
  ArrayContainer,
  Block,
  BooleanPrimitive,
  Expression,
  ExpressionType,
  Node,
  NullPrimitive,
  NumberPrimitive,
  ObjectChild,
  ObjectContainer,
  StringPrimitive,
} from './ast'

export type Template =
  | null
  | string
  | number
  | boolean
  | Expression<ExpressionType>
  | Block
  | Array<Template>
  | {[key: string]: Template}

export function parse(template: Template): Node {
  if (template instanceof Node) return template

  if (typeof template === 'string') return new StringPrimitive(template)
  if (typeof template === 'boolean') return new BooleanPrimitive(template)
  if (typeof template === 'number') return new NumberPrimitive(template)
  if (template == null) return new NullPrimitive()

  if (Array.isArray(template)) {
    return new ArrayContainer(template.map((item) => new ArrayChild(parse(item))))
  }

  if (typeof template === 'object') {
    return new ObjectContainer(Object.entries(template).map(([key, item]) => new ObjectChild(key, parse(item))))
  }

  assertNever(template)
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`)
}
