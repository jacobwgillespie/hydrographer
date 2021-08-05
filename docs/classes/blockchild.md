# Class: BlockChild

## Hierarchy

- [`Node`](node.md)

  ↳ **`BlockChild`**

## Table of contents

### Constructors

- [constructor](blockchild.md#constructor)

### Properties

- [children](blockchild.md#children)
- [expression](blockchild.md#expression)

## Constructors

### constructor

• **new BlockChild**(`expression`, `children`)

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `expression` | [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\> |
| `children`   | [`Node`](node.md)[]                                                              |

#### Overrides

[Node](node.md).[constructor](node.md#constructor)

#### Defined in

[ast.ts:77](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L77)

## Properties

### children

• `Readonly` **children**: [`Node`](node.md)[]

---

### expression

• `Readonly` **expression**: [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\>
