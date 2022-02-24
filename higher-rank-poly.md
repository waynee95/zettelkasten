---
date: 2022-02-24
---

# Higher-Rank Polymorphism

- Polymorphic type systems in functional programming languages have quantifiers in type signatures
  at the start of the type
- In the example:

```
map :: (a -> b) -> [a] -> [b]
```

the type signature is understood as: `forall a. forall b. (a -> b) -> [a] -> [b]`

- Therefor, the type variables `a` and `b` must be instantiated _exactly once_ in the body of the function
- If we consider the following function:

```
g :: a -> Int
g x = 1
```

- `g` ignores its argument and always returns `1`
- If now imagine to write

```
f :: (a -> Int) -> Int
f h = h 0 + h "hello world"
```

one would think `f g` would result in `2`

- BUT, since polymorphism is restricted to _rank-1_ the type signature of `f` actually expands to `forall a. (a -> Int) -> Int`
- Hence, as soon as `h` is bound for the first time, its type is either `Int` OR `String` but never both
  - So `f` does not type check
  - So the type signature of `f` would need to be `(forall a. a -> Int) -> Int` to make this work
  - For this, the scope of `forall` would need to be of _higher-order_ to be able to instantiate it twice
  - This type for `f`, where the quantifier does not occur at the very beginning of its type, is what we call a _rank-2 polymorphic function_
  - Ranks increase the more _nested_ the quantifiers are
  - Such functions are allowed in [[System F]]# but not in Haskell or ML
    - They are restricted to rank-1 such that [[type inference]]# is decidable

## References

- https://www.pls-lab.org/en/Higher-rank_polymorphism
