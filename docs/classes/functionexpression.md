# Class: FunctionExpression<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

## Hierarchy

- [`CompoundExpression`](compoundexpression.md)<`T`\>

  ↳ **`FunctionExpression`**

## Table of contents

### Constructors

- [constructor](functionexpression.md#constructor)

### Properties

- [name](functionexpression.md#name)
- [params](functionexpression.md#params)
- [type](functionexpression.md#type)

### Methods

- [pipe](functionexpression.md#pipe)

## Constructors

### constructor

• **new FunctionExpression**<`T`\>(`type`, `name`, `params`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `name` | `string` |
| `params` | [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\>[] |

#### Overrides

[CompoundExpression](compoundexpression.md).[constructor](compoundexpression.md#constructor)

#### Defined in

[ast.ts:121](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L121)

## Properties

### name

• `Readonly` **name**: `string`

___

### params

• `Readonly` **params**: [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\>[]

___

### type

• `Readonly` **type**: `T`

#### Inherited from

[CompoundExpression](compoundexpression.md).[type](compoundexpression.md#type)

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

[CompoundExpression](compoundexpression.md).[pipe](compoundexpression.md#pipe)

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
