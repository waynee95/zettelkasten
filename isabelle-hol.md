---
date: 2021-03-12
---

# Isabelle/HOL

## Overview

- Isabelle is a generic _proof assistant_
- HOL = Higher-Order Logic = Functional Programming + Logic
- Isabelle's interface is based on the [jEdit editor](http://www.jedit.org/)
- In textual form most symbols are displayed as `\<name>`
  - `\<Rightarrow>` is rendered as $\Rightarrow$
- File extension is `*.thy`

## Basics

- Each file is a theory
- A theory is a collection of definitions, functions and proofs
  - Similar to modules in other languages

```
theory T
  imports T_1 ... T_n
begin
  definitions, theorems and proofs here...
end
```

- Theory name must be equal to the file name

### Syntax

```
datatype bool = True | False

fun conj :: "bool \<Rightarrow> bool \<Rightarrow> bool" where
"conj True True = True" |
"conj _ _ = False"

datatype nat = 0 | Suc nat

fun add :: "nat \<Rightarrow> nat \<Rightarrow> nat" where
"add 0 n = n" |
"add (Suc m) n = Suc (add m n)"

lemma add_02: "add m 0 = m"
  apply (induction m)
  apply (auto)
  done
```

### Quotation Marks

- We need to distinguish between meta-level and HOL-level
- Everything HOL-specific (terms and types) must be enclosed in `" ... "`
  - Quotation marks around a _single_ identifier can be omitted

## References

- [Isabelle/HOL website](https://isabelle.in.tum.de/overview.html)
- [Concrete Semantics book](http://concrete-semantics.org/concrete-semantics.pdf)
- [Semantics of Programming Languages course @ TUM](https://www21.in.tum.de/teaching/semantik/WS20/)
