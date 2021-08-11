import {
  ArrayChild,
  ArrayContainer,
  ArrayField,
  Block,
  BlockChild,
  BooleanField,
  BooleanPrimitive,
  Expression,
  ExpressionType,
  FunctionExpression,
  IfBlock,
  Node,
  NullField,
  NullPrimitive,
  NumberField,
  NumberPrimitive,
  ObjectChild,
  ObjectContainer,
  ObjectField,
  StringField,
  StringPrimitive,
} from './ast'

export * from './ast'
export * from './chart'
export * from './print'

// Types -----------------------------------------------------------------------

export type Template =
  | null
  | string
  | number
  | boolean
  | Expression<ExpressionType>
  | Block
  | Array<Template>
  | {[key: string]: Template}

export interface BuilderMethods {
  asString(): StringField
  asNumber(): NumberField
  asBoolean(): BooleanField
  asNull(): NullField
  asArray(): ArrayField
  asObject(): ObjectField
}

export interface Builder {
  [key: string]: Builder & BuilderMethods
}

// Parse -----------------------------------------------------------------------

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

// Field builders --------------------------------------------------------------

export const Chart = Object.freeze({
  apiVersion: new StringField(['Chart', 'apiVersion']),
  name: new StringField(['Chart', 'name']),
  version: new StringField(['Chart', 'version']),
  kubeVersion: new StringField(['Chart', 'kubeVersion']),
  description: new StringField(['Chart', 'description']),
  type: new StringField(['Chart', 'type']),
  keywords: new ArrayField(['Chart', 'keywords']),
  home: new StringField(['Chart', 'home']),
  sources: new ArrayField(['Chart', 'sources']),
  dependencies: new ArrayField(['Chart', 'dependencies']),
  maintainers: new ArrayField(['Chart', 'maintainers']),
  icon: new StringField(['Chart', 'icon']),
  appVersion: new StringField(['Chart', 'appVersion']),
  deprecated: new BooleanField(['Chart', 'deprecated']),
  annotations: new ObjectField(['Chart', 'annotations']),
})

export const Release = Object.freeze({
  Name: new StringField(['Release', 'Name']),
  Namespace: new StringField(['Release', 'Namespace']),
  Service: new StringField(['Release', 'Service']),
  IsUpgrade: new BooleanField(['Release', 'IsUpgrade']),
  IsInstall: new BooleanField(['Release', 'IsInstall']),
})

export const Values: Builder = createBuilder(['Values'])

// Functions -------------------------------------------------------------------

export const fn = {
  toYaml(input: Expression): Expression {
    return input.pipe(new FunctionExpression(input.type, 'toYaml', []))
  },

  if(condition: Expression, block: Template) {
    const expression = new FunctionExpression('boolean', 'if', [condition])
    const child = new BlockChild(expression, [parse(block)])
    return new IfBlock([child])
  },
}

// Private ---------------------------------------------------------------------

function createBuilderMethods(path: string[]): BuilderMethods {
  return {
    asString: () => new StringField(path),
    asNumber: () => new NumberField(path),
    asBoolean: () => new BooleanField(path),
    asNull: () => new NullField(path),
    asArray: () => new ArrayField(path),
    asObject: () => new ObjectField(path),
  }
}

const builderCacheMap = new WeakMap<object, Map<string, BuilderMethods>>()
function createBuilder(parents: string[] = []): Builder {
  const builder = new Proxy(
    {},
    {
      get(target, key) {
        if (typeof key !== 'string') return undefined
        const cacheMap = builderCacheMap.get(target) ?? new Map()
        builderCacheMap.set(target, cacheMap)
        const methods = cacheMap.get(key) ?? createBuilderMethods(parents)
        if (key in methods) return methods[key]
        return createBuilder([...parents, key])
      },
    },
  )
  return builder as Builder
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`)
}
