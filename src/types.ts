import {Block, Expression} from './interpolations'

export type Template =
  | null
  | string
  | number
  | boolean
  | Expression<YamlValueType>
  | Block
  | Array<Template>
  | {[key: string]: Template}

export type YamlValueType = 'null' | 'string' | 'number' | 'boolean' | 'array' | 'object'
