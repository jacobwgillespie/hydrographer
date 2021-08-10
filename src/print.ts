import {HelperExpression, parse, PrimitiveExpression} from '.'
import {
  ArrayChild,
  ArrayContainer,
  ArrayField,
  Block,
  Expression,
  Field,
  FunctionExpression,
  Node,
  ObjectChild,
  ObjectContainer,
  ObjectField,
  PipeExpression,
  Primitive,
} from './ast'

export function print(node: Node, data: Record<string, any>, childIndent = 0): string {
  // Pre-evaluate node ---------------------------------------------------------

  node = node.eval(data)

  // Primitives ----------------------------------------------------------------

  if (node instanceof Primitive) {
    return JSON.stringify(node.value)
  }

  // Containers ----------------------------------------------------------------

  if (node instanceof ArrayContainer) {
    if (node.isEmpty) return '[]'
    return node.children.map((item) => print(item, data, childIndent)).join('\n')
  }

  if (node instanceof ObjectContainer) {
    if (node.isEmpty) return '{}'
    return node.children.map((item) => print(item, data, childIndent)).join('\n')
  }

  // Container Children --------------------------------------------------------

  if (node instanceof ArrayChild) {
    return node.value instanceof ArrayContainer && !node.value.isEmpty
      ? `- \n${indent(print(node.value, data, childIndent + 2), 2)}`
      : `- ${indent(print(node.value, data, childIndent + 2), 2, 0)}`
  }

  if (node instanceof ObjectChild) {
    const isMultiline =
      ((node.value instanceof ArrayContainer || node.value instanceof ObjectContainer) && !node.value.isEmpty) ||
      node.value instanceof Block
    return isMultiline
      ? `${node.key}: \n${indent(print(node.value, data, childIndent + 2), 2)}`
      : `${node.key}: ${indent(print(node.value, data, childIndent + 2), 2, 0)}`
  }

  // Fields --------------------------------------------------------------------

  if (node instanceof ArrayField || node instanceof ObjectField) {
    return `{{ ${printExpression(node)} | toYaml | nindent ${childIndent} }}`
  }

  // Expressions ---------------------------------------------------------------

  if (node instanceof PrimitiveExpression) {
    return print(parse(node.value), data, childIndent)
  }

  if (node instanceof Expression) {
    if (node.type === 'string') return `{{ ${printExpression(node)} | quote }}`
    if (node.type === 'object' || node.type === 'array')
      return `{{ ${printExpression(node)} | toYaml | nindent ${childIndent} }}`
    else return `{{ ${printExpression(node)} }}`
  }

  // Block ---------------------------------------------------------------------

  if (node instanceof Block) {
    const lines: string[] = []
    for (const child of node.children) {
      lines.push(`{{- ${printExpression(child.expression)} }}`)
      lines.push(...child.children.map((child) => print(child, data, childIndent)))
    }
    lines.push('{{- end }}')
    return lines.join('\n')
  }

  throw new Error(`Unsupported node: ${node}`)
}

function printExpression(exp: Expression): string {
  if (exp instanceof PrimitiveExpression) return JSON.stringify(exp.value)

  if (exp instanceof HelperExpression) return `include "${exp.name}" .`

  if (exp instanceof Field) return '.' + exp.path.join('.')

  if (exp instanceof PipeExpression) return `${printExpression(exp.left)} | ${exp.right}`

  if (exp instanceof FunctionExpression) {
    if (exp.params.length > 0) return `${exp.name} ${exp.params.map((param) => printExpression(param)).join(' ')}`
    else return exp.name
  }

  throw new Error(`Unsupported expression: ${exp}`)
}

function indent(value: string, indent: number, indentFirst = indent): string {
  const lines = value.split('\n')
  const indentStr = ' '.repeat(indent)
  const indentFirstStr = ' '.repeat(indentFirst)

  return lines.map((line, idx) => (idx === 0 ? `${indentFirstStr}${line}` : `${indentStr}${line}`)).join('\n')
}
