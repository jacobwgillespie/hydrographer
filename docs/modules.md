# hydrographer

## Table of contents

### Classes

- [ArrayChild](classes/arraychild.md)
- [ArrayContainer](classes/arraycontainer.md)
- [ArrayField](classes/arrayfield.md)
- [Block](classes/block.md)
- [BlockChild](classes/blockchild.md)
- [BooleanField](classes/booleanfield.md)
- [BooleanPrimitive](classes/booleanprimitive.md)
- [CompoundExpression](classes/compoundexpression.md)
- [Container](classes/container.md)
- [Expression](classes/expression.md)
- [Field](classes/field.md)
- [FunctionExpression](classes/functionexpression.md)
- [IfBlock](classes/ifblock.md)
- [Node](classes/node.md)
- [NullField](classes/nullfield.md)
- [NullPrimitive](classes/nullprimitive.md)
- [NumberField](classes/numberfield.md)
- [NumberPrimitive](classes/numberprimitive.md)
- [ObjectChild](classes/objectchild.md)
- [ObjectContainer](classes/objectcontainer.md)
- [ObjectField](classes/objectfield.md)
- [PipeExpression](classes/pipeexpression.md)
- [Primitive](classes/primitive.md)
- [StringField](classes/stringfield.md)
- [StringPrimitive](classes/stringprimitive.md)

### Interfaces

- [Builder](interfaces/builder.md)
- [BuilderMethods](interfaces/buildermethods.md)

### Type aliases

- [ExpressionType](modules.md#expressiontype)
- [Template](modules.md#template)

### Variables

- [Chart](modules.md#chart)
- [Release](modules.md#release)
- [Values](modules.md#values)
- [fn](modules.md#fn)

### Functions

- [parse](modules.md#parse)
- [print](modules.md#print)

## Type aliases

### ExpressionType

Ƭ **ExpressionType**: `"null"` \| `"string"` \| `"number"` \| `"boolean"` \| `"array"` \| `"object"`

#### Defined in

[ast.ts:101](https://github.com/k8ts/hydrographer/blob/main/src/ast.ts#L101)

---

### Template

Ƭ **Template**: `null` \| `string` \| `number` \| `boolean` \| [`Expression`](classes/expression.md)<[`ExpressionType`](modules.md#expressiontype)\> \| [`Block`](classes/block.md) \| [`Template`](modules.md#template)[] \| { [key: string]: [`Template`](modules.md#template); }

#### Defined in

[parse.ts:16](https://github.com/k8ts/hydrographer/blob/main/src/parse.ts#L16)

## Variables

### Chart

• `Const` **Chart**: `Readonly`<`Object`\>

#### Defined in

[index.ts:36](https://github.com/k8ts/hydrographer/blob/main/src/index.ts#L36)

---

### Release

• `Const` **Release**: `Readonly`<`Object`\>

#### Defined in

[index.ts:54](https://github.com/k8ts/hydrographer/blob/main/src/index.ts#L54)

---

### Values

• `Const` **Values**: [`Builder`](interfaces/builder.md)

#### Defined in

[index.ts:62](https://github.com/k8ts/hydrographer/blob/main/src/index.ts#L62)

---

### fn

• `Const` **fn**: `Object`

#### Type declaration

| Name     | Type                                                                                                                                                                                      |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `if`     | (`condition`: [`Expression`](classes/expression.md)<[`ExpressionType`](modules.md#expressiontype)\>, `block`: [`Template`](modules.md#template)) => [`IfBlock`](classes/ifblock.md)       |
| `toYaml` | (`input`: [`Expression`](classes/expression.md)<[`ExpressionType`](modules.md#expressiontype)\>) => [`Expression`](classes/expression.md)<[`ExpressionType`](modules.md#expressiontype)\> |

#### Defined in

[index.ts:66](https://github.com/k8ts/hydrographer/blob/main/src/index.ts#L66)

## Functions

### parse

▸ **parse**(`template`): [`Node`](classes/node.md)

#### Parameters

| Name       | Type                              |
| :--------- | :-------------------------------- |
| `template` | [`Template`](modules.md#template) |

#### Returns

[`Node`](classes/node.md)

#### Defined in

[parse.ts:26](https://github.com/k8ts/hydrographer/blob/main/src/parse.ts#L26)

---

### print

▸ **print**(`node`): `string`

#### Parameters

| Name   | Type                      |
| :----- | :------------------------ |
| `node` | [`Node`](classes/node.md) |

#### Returns

`string`

#### Defined in

[print.ts:20](https://github.com/k8ts/hydrographer/blob/main/src/print.ts#L20)
