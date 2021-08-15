---
date: 2021-08-15
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

## Isar - Proof Language

- Structured language for human-readable and machine-checkable proof documents
- Apply-scripts are unreadable and hard to maintain
  - The language of choice for larger proofs is therefor _Isar_
- Two main features of Isar are:
  1. It is _structured_, not linear
  2. It is readable without actually executing it because you need to state what you are proving at any point
- Apply-scripts are like assembly programs, Isar proofs are structured programs with comments

```
proof
  assume "formula_0"
  have "formula_1" by simp
  .
  .
  .
  have "formula_n" by blast
  show "formula_{n+1}" by ...
qed
```

- Proves $formula_0 \Longrightarrow formula_{n+1}$, provided each proof step is successful
- A proof can either be an atomic `by` with a single proof method that finishes off the final goal
- Or it can be a `proof ... qed` block of multiple steps
  - Such a block can optionally begin with a proof method that indicates how to start of the proof
  - Every step either assumes a proposition or states a proposition together with its proof
- `from`: indicates which facts are used in the proof
- `have`: states intermediate propositions
- `show`: states the overall goal which is to be proved
- `fix`: introduces new local variable
- `assume`: introduces the assumption of an implication ($\Longrightarrow$) and `have`/`show` introduce the conclusion
- Propositions are _optionally named_ formulas which names can be later referenced
- The usage of labels is discouraged
- `this`: refers to the proposition proved in the previous step
- `then` = `from this`
- `thus` = `then show`
- `hence` = `then have`
- `(have|show) <prop> using <facts>` = `form <facts> (have|show) <prop>`
- `with <facts>` = `from <facts> this`

TODO: `finally`, `moreover`, `.`, `..`, `...`, Proof patterns

## The Isabelle Framework

- Isabelle/Pure: _meta-logic_ that allows formalization of the syntax and inference rules of _object-logics_
- Logical core is implemented using the "LCF approach" in ML
- Isabelle/Isar: provides sophisticated extra-logical infrastructure supporting structured proofs and specifications
- Isabelle/HOL: object-logic with plenty logic-specific add-ons and a large theory library
  - There is also Isabelle/ZF (Zermelo-Fraenkel set-theory)

## References

- [Isabelle/HOL website](https://isabelle.in.tum.de/overview.html)
- [Concrete Semantics book](http://concrete-semantics.org/concrete-semantics.pdf)
- [Semantics of Programming Languages course @ TUM](https://www21.in.tum.de/teaching/semantik/WS20/)
- [Isabelle Cheatsheet](https://www.inf.ed.ac.uk/teaching/courses/ar/isabelle/FormalCheatSheet.pdf)
- [Wenzel, Paulson, Nipkow. "The Isabelle Framework", 2008](https://www21.in.tum.de/~nipkow/pubs/tphols08t.pdf)
