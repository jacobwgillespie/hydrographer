import {Expression} from './interpolations'
import {YamlValueType} from './types'

export abstract class Field<T extends YamlValueType = YamlValueType> extends Expression<T> {
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

interface BuilderMethods {
  asString(): StringField
  asNumber(): NumberField
  asBoolean(): BooleanField
  asNull(): NullField
  asArray(): ArrayField
  asObject(): ObjectField
}

interface Builder {
  [key: string]: Builder & BuilderMethods
}

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

export const Values: Builder = createBuilder(['Values'])
