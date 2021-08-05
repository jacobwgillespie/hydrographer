# Class: Field<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

## Hierarchy

- [`Expression`](expression.md)<`T`\>

  ↳ **`Field`**

  ↳↳ [`StringField`](stringfield.md)

  ↳↳ [`NumberField`](numberfield.md)

  ↳↳ [`BooleanField`](booleanfield.md)

  ↳↳ [`NullField`](nullfield.md)

  ↳↳ [`ArrayField`](arrayfield.md)

  ↳↳ [`ObjectField`](objectfield.md)

## Table of contents

### Constructors

- [constructor](field.md#constructor)

### Properties

- [path](field.md#path)
- [type](field.md#type)

### Methods

- [pipe](field.md#pipe)

## Constructors

### constructor

• **new Field**<`T`\>(`type`, `path`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `path` | `string` \| `string`[] |

#### Overrides

[Expression](expression.md).[constructor](expression.md#constructor)

#### Defined in

[ast.ts:129](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L129)

## Properties

### path

• `Readonly` **path**: `string`[]

#### Defined in

[ast.ts:129](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L129)

___

### type

• `Readonly` **type**: `T`

#### Overrides

[Expression](expression.md).[type](expression.md#type)

#### Defined in

[ast.ts:128](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L128)

## Methods

### pipe

▸ **pipe**<`Next`\>(`next`): [`PipeExpression`](pipeexpression.md)<`Next`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Next` | extends [`ExpressionType`](../modules.md#expressiontype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | [`Expression`](expression.md)<`Next`\> |

#### Returns

[`PipeExpression`](pipeexpression.md)<`Next`\>

#### Inherited from

[Expression](expression.md).[pipe](expression.md#pipe)

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
