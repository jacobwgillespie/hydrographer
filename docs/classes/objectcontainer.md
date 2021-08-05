# Class: ObjectContainer

## Hierarchy

- [`Container`](container.md)

  ↳ **`ObjectContainer`**

## Table of contents

### Constructors

- [constructor](objectcontainer.md#constructor)

### Properties

- [children](objectcontainer.md#children)

### Accessors

- [isEmpty](objectcontainer.md#isempty)

## Constructors

### constructor

• **new ObjectContainer**(`children`)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `children` | [`ObjectChild`](objectchild.md)[] |

#### Overrides

[Container](container.md).[constructor](container.md#constructor)

#### Defined in

[ast.ts:54](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L54)

## Properties

### children

• `Readonly` **children**: [`ObjectChild`](objectchild.md)[]

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[ast.ts:58](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L58)
