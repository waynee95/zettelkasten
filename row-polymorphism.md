---
date: 2021-06-23
---

# Row Polymorphism

> In programming language type theory, row polymorphism is a kind of polymorphism that allows one to write programs that are polymorphic on record field types (also known as rows, hence row polymorphism).
> 
> -- <cite>https://en.wikipedia.org/wiki/Row_polymorphism</cite>

- Has not yet found its ways into many mainstream languages
- Supported by [Ocaml](https://ocaml.org/) and [PureScript](https://www.purescript.org/)

## Background

- Quick review of _subtyping_:

```java
public class Human {
   Color hairColor;
   Color eyeColor;
   int height;
   int weight;
}

public class Employee extends Human {
   Job job;
   int salary;
}
```

- Polymorphism allows us to use `Employee` anywhere a `Human` is expected

```java
public feed(Human h) {
   h.weight += 16;
}

Employee e = new Employee();
feed(e); // works!
```

- `feed` expects a `Human` but we can pass it an `Employee` or any other type that inherits from `Human`

## Rows

- A _row_ is the list of fields in a record (or class)
- `Human` is a row comprised of `height` and `weight`
- To be polymorphic over rows means that we can provide any row that contains the _expected_ fields

```java
class Fish {
   int height;
   int weight;
}

Fish f = new Fish();
feed(f); // does not compile!
```

- Even though `Fish` has the field `weight` that the method `feed` uses, the above example will not compile, since `Fish` does not extend `Human`
  - Possible fix would be to make `Fish` and `Human` be subtypes of the same class, e.g. `Entity`
  - What if we could have such that `feed` would only care about a subset of fields

## Polymorphism over Rows

```hs
-- Function that calculates the area of something
area thing = thing.width * thing.height
```

```hs
-- Type Signature
-- Expects a record with fields width and height.
-- With | p we indicate that there might be _other_ fields
area : forall r. { width : Int, height : Int | p } -> Int
```

- We can pass any type that contains the fields `width` and `height` to `area`
  - There can be other fields because of `| p` at the end of the field list
  - This is what called _row polymorphism_

```hs
newtype Fish = Fish { width : Int, height : Int, length : Int }
```

- Now `Fish` can also be passed to `area` since it has the expected fields

## References

- [https://jadon.io/blog/row-polymorphism](https://jadon.io/blog/row-polymorphism)
