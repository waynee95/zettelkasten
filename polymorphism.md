---
date: 2022-08-31
---

# Parametric Polymorphism vs. Ad-hoc Polymorphism

- Parametric polymorphism allows a single piece of code to be typed _generically_
  using variables in place of concrete types
  - These variables are then instantiated with concrete types as needed

```
swap :: (a, b) -> (b, a) where
swap (x, y) = (y, x)
```

- Here `a` and `b` can be instantiated with _all_ types

- Ad-hoc polymorphism allows to have different behaviour when "viewed" at different
  types
  - E.g.: overloading, which associates a single function symbol with many different
    implementations
  - The compiler (or runtime system) chooses the appropriate implementation for
    each application of the function, depending on the types of the arguments passed

```
between :: (Ord a) => a -> a -> a -> Bool where
between x y z = x ≤ y && y ≤ x
```

- Here `Ord` is the _class_ (or interface) that defines the function `(_ ≤ _)`

## References

- https://stackoverflow.com/questions/6730126/parametric-polymorphism-vs-ad-hoc-polymorphism
