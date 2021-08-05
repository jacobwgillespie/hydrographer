# Class: NullField

## Hierarchy

- [`Field`](field.md)<``"null"``\>

  ↳ **`NullField`**

## Table of contents

### Constructors

- [constructor](nullfield.md#constructor)

### Properties

- [path](nullfield.md#path)
- [type](nullfield.md#type)

### Methods

- [pipe](nullfield.md#pipe)

## Constructors

### constructor

• **new NullField**(`path`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |

#### Overrides

[Field](field.md).[constructor](field.md#constructor)

#### Defined in

[ast.ts:155](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L155)

## Properties

### path

• `Readonly` **path**: `string`[]

#### Inherited from

[Field](field.md).[path](field.md#path)

#### Defined in

[ast.ts:129](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L129)

___

### type

• `Readonly` **type**: ``"null"``

#### Inherited from

[Field](field.md).[type](field.md#type)

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

[Field](field.md).[pipe](field.md#pipe)

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
