export abstract class Node {}

export abstract class Primitive<T> extends Node {
  abstract readonly value: T
}

export class StringPrimitive extends Primitive<string> {
  constructor(public readonly value: string) {
    super()
  }
}

export class NumberPrimitive extends Primitive<number> {
  constructor(public readonly value: number) {
    super()
  }
}

export class BooleanPrimitive extends Primitive<boolean> {
  constructor(public readonly value: boolean) {
    super()
  }
}

export class NullPrimitive extends Primitive<null> {
  readonly value = null
}

export abstract class Container extends Node {}

export class ArrayContainer extends Container {
  constructor(public readonly children: ArrayChild[]) {
    super()
  }
  get isEmpty() {
    return this.children.length === 0
  }
}

export class ArrayChild extends Node {
  constructor(public readonly value: Node) {
    super()
  }
}

export class ObjectContainer extends Container {
  constructor(public readonly children: ObjectChild[]) {
    super()
  }
  get isEmpty() {
    return this.children.length === 0
  }
}

export class ObjectChild extends Node {
  constructor(public readonly key: string, public readonly value: Node) {
    super()
  }
}
