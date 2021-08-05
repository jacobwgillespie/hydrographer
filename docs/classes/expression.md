# Class: Expression<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

## Hierarchy

- [`Node`](node.md)

  ↳ **`Expression`**

  ↳↳ [`CompoundExpression`](compoundexpression.md)

  ↳↳ [`Field`](field.md)

## Table of contents

### Constructors

- [constructor](expression.md#constructor)

### Properties

- [type](expression.md#type)

### Methods

- [pipe](expression.md#pipe)

## Constructors

### constructor

• **new Expression**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ExpressionType`](../modules.md#expressiontype)[`ExpressionType`](../modules.md#expressiontype) |

#### Inherited from

[Node](node.md).[constructor](node.md#constructor)

## Properties

### type

• `Readonly` `Abstract` **type**: `T`

#### Defined in

[ast.ts:104](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L104)

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

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
