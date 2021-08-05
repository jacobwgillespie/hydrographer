# Class: StringField

## Hierarchy

- [`Field`](field.md)<`"string"`\>

  ↳ **`StringField`**

## Table of contents

### Constructors

- [constructor](stringfield.md#constructor)

### Properties

- [path](stringfield.md#path)
- [type](stringfield.md#type)

### Methods

- [pipe](stringfield.md#pipe)

## Constructors

### constructor

• **new StringField**(`path`)

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `path` | `string` \| `string`[] |

#### Overrides

[Field](field.md).[constructor](field.md#constructor)

#### Defined in

[ast.ts:137](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L137)

## Properties

### path

• `Readonly` **path**: `string`[]

#### Inherited from

[Field](field.md).[path](field.md#path)

#### Defined in

[ast.ts:129](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L129)

---

### type

• `Readonly` **type**: `"string"`

#### Inherited from

[Field](field.md).[type](field.md#type)

#### Defined in

[ast.ts:128](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L128)

## Methods

### pipe

▸ **pipe**<`Next`\>(`next`): [`PipeExpression`](pipeexpression.md)<`Next`\>

#### Type parameters

| Name   | Type                                                     |
| :----- | :------------------------------------------------------- |
| `Next` | extends [`ExpressionType`](../modules.md#expressiontype) |

#### Parameters

| Name   | Type                                   |
| :----- | :------------------------------------- |
| `next` | [`Expression`](expression.md)<`Next`\> |

#### Returns

[`PipeExpression`](pipeexpression.md)<`Next`\>

#### Inherited from

[Field](field.md).[pipe](field.md#pipe)

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
