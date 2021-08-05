export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`)
}

export function indent(value: string, indent: number, indentFirst = indent): string {
  const lines = value.split('\n')
  const indentStr = ' '.repeat(indent)
  const indentFirstStr = ' '.repeat(indentFirst)

  return lines.map((line, idx) => (idx === 0 ? `${indentFirstStr}${line}` : `${indentStr}${line}`)).join('\n')
}
