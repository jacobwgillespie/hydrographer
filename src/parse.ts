import {
  ArrayChild,
  ArrayContainer,
  BooleanPrimitive,
  Node,
  NullPrimitive,
  NumberPrimitive,
  ObjectChild,
  ObjectContainer,
  StringPrimitive,
} from './ast'
import {Template} from './types'
import {assertNever} from './utils'

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
