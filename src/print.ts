import {
  ArrayChild,
  ArrayContainer,
  ArrayField,
  Block,
  BooleanPrimitive,
  Expression,
  Field,
  FunctionExpression,
  Node,
  NullPrimitive,
  NumberPrimitive,
  ObjectChild,
  ObjectContainer,
  ObjectField,
  PipeExpression,
  StringPrimitive,
} from './ast'

export function print(node: Node): string {
  // Primitives ----------------------------------------------------------------

  if (
    node instanceof StringPrimitive ||
    node instanceof NumberPrimitive ||
    node instanceof BooleanPrimitive ||
    node instanceof NullPrimitive
  ) {
    return JSON.stringify(node.value)
  }

  // Containers ----------------------------------------------------------------

  if (node instanceof ArrayContainer) {
    if (node.isEmpty) return '[]'
    return node.children.map((item) => print(item)).join('\n')
  }

  if (node instanceof ObjectContainer) {
    if (node.isEmpty) return '{}'
    return node.children.map((item) => print(item)).join('\n')
  }

  // Container Children --------------------------------------------------------

  if (node instanceof ArrayChild) {
    return node.value instanceof ArrayContainer && !node.value.isEmpty
      ? `- \n${indent(print(node.value), 2)}`
      : `- ${indent(print(node.value), 2, 0)}`
  }

  if (node instanceof ObjectChild) {
    return (node.value instanceof ArrayContainer || node.value instanceof ObjectContainer) && !node.value.isEmpty
      ? `${node.key}: \n${indent(print(node.value), 2)}`
      : `${node.key}: ${indent(print(node.value), 2, 0)}`
  }

  // Fields --------------------------------------------------------------------

  if (node instanceof ArrayField || node instanceof ObjectField) {
    return 'TODO:ARRAY/OBJECT'
  }

  // Expressions ---------------------------------------------------------------

  if (node instanceof Expression) {
    if (node.type === 'string') return `"{{ ${printExpression(node)} }}"`
    else return `{{ ${printExpression(node)} }}`
  }

  // Block ---------------------------------------------------------------------

  if (node instanceof Block) {
    const lines: string[] = []
    for (const child of node.children) {
      lines.push(`{{- ${printExpression(child.expression)} }}`)
      lines.push(...child.children.map((child) => print(child)))
    }
    lines.push('{{- end }}')
    return lines.join('\n')
  }

  throw new Error(`Unsupported node: ${node}`)
}

function printExpression(exp: Expression): string {
  if (exp instanceof Field) return '.' + exp.path.join('.')

  if (exp instanceof PipeExpression) return `${printExpression(exp.left)} | ${exp.right}`

  if (exp instanceof FunctionExpression)
    return `${exp.name} ${exp.params.map((param) => printExpression(param)).join(' ')}`

  throw new Error(`Unsupported expression: ${exp}`)
}

function indent(value: string, indent: number, indentFirst = indent): string {
  const lines = value.split('\n')
  const indentStr = ' '.repeat(indent)
  const indentFirstStr = ' '.repeat(indentFirst)

  return lines.map((line, idx) => (idx === 0 ? `${indentFirstStr}${line}` : `${indentStr}${line}`)).join('\n')
}
