# Class: NumberField

## Hierarchy

- [`Field`](field.md)<`"number"`\>

  ↳ **`NumberField`**

## Table of contents

### Constructors

- [constructor](numberfield.md#constructor)

### Properties

- [path](numberfield.md#path)
- [type](numberfield.md#type)

### Methods

- [pipe](numberfield.md#pipe)

## Constructors

### constructor

• **new NumberField**(`path`)

#### Parameters

| Name   | Type                   |
| :----- | :--------------------- |
| `path` | `string` \| `string`[] |

#### Overrides

[Field](field.md).[constructor](field.md#constructor)

#### Defined in

[ast.ts:143](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L143)

## Properties

### path

• `Readonly` **path**: `string`[]

#### Inherited from

[Field](field.md).[path](field.md#path)

#### Defined in

[ast.ts:129](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L129)

---

### type

• `Readonly` **type**: `"number"`

#### Inherited from

[Field](field.md).[type](field.md#type)

#### Defined in

[ast.ts:128](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L128)

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

[Field](field.md).[pipe](field.md#pipe)

#### Defined in

[ast.ts:105](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L105)
