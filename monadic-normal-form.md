---
title: Monadic Normal Form
date: 2023-03-05
---

- Monadic normal form = syntactic form which allows to distinguish expressions
  with side-effects from pure expressions
  - Enables simpler implementations of optimizations

```hs
type Var = String

-- small, pure expressions, okay to duplicate
data Operand = I Int | B Bool | V Var

-- lager, pure expressions, okay to eliminate
data Value
    = Op Operand
    | Fn Var Exp
    | Pair Operand Operand
    | Fst Operand
    | Snd Operand
    | Prim PrimOp (List Operand)

-- control and effects, needs care
data Exp
    = Return Operand
    | LetVal Var Value Exp
    | LetCall Var Operand Operand Exp
    | LetIf Var Operand Exp Exp Exp
```

# References

- https://groups.seas.harvard.edu/courses/cs153/2018fa/lectures/Lec16-Local-Optimization-II.pdf
