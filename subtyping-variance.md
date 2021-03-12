---
date: 2021-03-12
---

# Subtyping and Variance

## Overview

- **Subtyping** is a kind of polymorphism that lets us define hierarchical relations on types, with specific types being subtypes of more generic types
- Example: `nat <: int <: num`
- Functions that accept `int` should accept `nat` too. This is known as _Liskov substitution principle_:

> Let $\phi(x)$ be a property provable about objects x of type T. Then $\phi(y)$ should be true for objects y of type S where S is a subtype of T.

- To indicate `S` is a subtype of `T`, we write `S <: T`
- `<:` can be thought of "is less general"
- `<:` is transitive and reflexive

## Kinds of variance

Given types `S` and `T` with the relation `S <: T`, variance describes the relation between
composite types:

- **Covariant**: means the ordering is preserved: `Composite<S> <: Composite<T>`
- **Contravariant**: means the ordering is _reversed_: `Composite<T> <: Composite<S>`
- **Invariant**: means _neither_ covariant nor contravariant

## Covariant arrays in Java

> Early on in the design of Java, before it had generics, it was decided that array types should be covariant.
> If sort accepted an Object[], you wouldn’t be able to pass in a String[] without covariant arrays!

- In Java arrays are covariant
- Since `String <: Object`, we have `String[] <: Object[]`

```java
String strings[] = { "Apple", "Banana" };
// this type-checks!
Object objects[] = strings;

// works fine
objects[1] = "Watermelon";

// will throw a runtime exception!
objects[0] = 5;
```

- From this point on `objects` is an array of `Object`s as far as the compiler is concerned
- Assigning an integer fails because at runtime it is known that `objects` is an array of strings (arrays are homegeneous, they can only store elements of _one_ type)
- Covariance together with mutability makes array types, or any composite type, unsound!

## Contravariance for function types

- Let's take a function: `f : int -> int`. Which function types are valid subtypes of `f`?

```java
func user(f : int -> int) {
  x: int = f(...);
}
```

### Function return types

- Can we call user providing it a function of type `int -> nat`?
- Yes, because `nat <: int`, so `nat` is also an `int`. In this case _covariance_ for function return types works!
- A function `int -> num` does not work, because the function could return `1.5` which is a `num` but not an `int`!
- That is why function return types are _not_ contravariant!

### Function parameters

- Can we pass in a function of type `nat -> int`?
- No because user expects to be able to pass in any `int` to `f` and not just positive numbers
- So function parameters are _not_ covariant
- What about `num -> int`?
- This works because that function can take any `int` which use might pass to it

> be liberal in what you accept and conservative in what you produce!

## References

- [Why variance matters](https://www.tedinski.com/2018/06/26/variance.html)
- [Covariance and contravariance in subtyping](https://eli.thegreenplace.net/2018/covariance-and-contravariance-in-subtyping/)
