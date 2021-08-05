# Class: IfBlock

## Hierarchy

- [`Block`](block.md)

  ↳ **`IfBlock`**

## Table of contents

### Constructors

- [constructor](ifblock.md#constructor)

### Properties

- [children](ifblock.md#children)

### Methods

- [else](ifblock.md#else)
- [elseIf](ifblock.md#elseif)

## Constructors

### constructor

• **new IfBlock**(`children`)

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `children` | [`BlockChild`](blockchild.md)[] |

#### Inherited from

[Block](block.md).[constructor](block.md#constructor)

#### Defined in

[ast.ts:71](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L71)

## Properties

### children

• `Readonly` **children**: [`BlockChild`](blockchild.md)[]

#### Inherited from

[Block](block.md).[children](block.md#children)

## Methods

### else

▸ **else**(`block`): [`Block`](block.md)

#### Parameters

| Name    | Type                                 |
| :------ | :----------------------------------- |
| `block` | [`Template`](../modules.md#template) |

#### Returns

[`Block`](block.md)

#### Defined in

[ast.ts:91](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L91)

---

### elseIf

▸ **elseIf**(`condition`, `block`): [`IfBlock`](ifblock.md)

#### Parameters

| Name        | Type                                                                             |
| :---------- | :------------------------------------------------------------------------------- |
| `condition` | [`Expression`](expression.md)<[`ExpressionType`](../modules.md#expressiontype)\> |
| `block`     | [`Template`](../modules.md#template)                                             |

#### Returns

[`IfBlock`](ifblock.md)

#### Defined in

[ast.ts:84](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L84)
