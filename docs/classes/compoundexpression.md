# Class: CompoundExpression<T\>

Compound expressions are complex expressions that may need to be surrounded by parentheses.

## Type parameters

| Name | Type                                                                                                     |
| :--- | :------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

## Hierarchy

- [`Expression`](expression.md)<`T`\>

  ↳ **`CompoundExpression`**

  ↳↳ [`PipeExpression`](pipeexpression.md)

  ↳↳ [`FunctionExpression`](functionexpression.md)

## Table of contents

### Constructors

- [constructor](compoundexpression.md#constructor)

### Properties

- [type](compoundexpression.md#type)

### Methods

- [pipe](compoundexpression.md#pipe)

## Constructors

### constructor

• **new CompoundExpression**<`T`\>()

#### Type parameters

| Name | Type                                                                                                     |
| :--- | :------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

#### Inherited from

[Expression](expression.md).[constructor](expression.md#constructor)

## Properties

### type

• `Readonly` `Abstract` **type**: `T`

#### Inherited from

[Expression](expression.md).[type](expression.md#type)

#### Defined in

[ast.ts:104](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L104)

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

[Expression](expression.md).[pipe](expression.md#pipe)

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
