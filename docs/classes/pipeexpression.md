# Class: PipeExpression<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

## Hierarchy

- [`CompoundExpression`](compoundexpression.md)<`T`\>

  ↳ **`PipeExpression`**

## Table of contents

### Constructors

- [constructor](pipeexpression.md#constructor)

### Properties

- [left](pipeexpression.md#left)
- [right](pipeexpression.md#right)
- [type](pipeexpression.md#type)

### Methods

- [pipe](pipeexpression.md#pipe)

## Constructors

### constructor

• **new PipeExpression**<`T`\>(`left`, `right`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\> |
| `right` | [`Expression`](expression.md)<`T`\> |

#### Overrides

[CompoundExpression](compoundexpression.md).[constructor](compoundexpression.md#constructor)

#### Defined in

[ast.ts:114](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L114)

## Properties

### left

• `Readonly` **left**: [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\>

___

### right

• `Readonly` **right**: [`Expression`](expression.md)<`T`\>

___

### type

• `Readonly` **type**: `T`

#### Overrides

[CompoundExpression](compoundexpression.md).[type](compoundexpression.md#type)

#### Defined in

[ast.ts:114](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L114)

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
