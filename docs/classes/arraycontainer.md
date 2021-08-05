# Class: ArrayContainer

## Hierarchy

- [`Container`](container.md)

  ↳ **`ArrayContainer`**

## Table of contents

### Constructors

- [constructor](arraycontainer.md#constructor)

### Properties

- [children](arraycontainer.md#children)

### Accessors

- [isEmpty](arraycontainer.md#isempty)

## Constructors

### constructor

• **new ArrayContainer**(`children`)

#### Parameters

| Name       | Type                            |
| :--------- | :------------------------------ |
| `children` | [`ArrayChild`](arraychild.md)[] |

#### Overrides

[Container](container.md).[constructor](container.md#constructor)

#### Defined in

[ast.ts:39](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L39)

## Properties

### children

• `Readonly` **children**: [`ArrayChild`](arraychild.md)[]

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[ast.ts:43](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L43)
