---
date: 2021-12-25
---

# Isabelle/HOL

## Overview

- Isabelle is a generic _proof assistant_
  - generic framework for mechanizing logics
  - a (functional programming language)
  - an IDE for writing mathematical proofs
- HOL = Higher-Order Logic = Functional Programming + Logic
- Isabelle's interface is based on the [jEdit editor](http://www.jedit.org/)
- In textual form most symbols are displayed as `\<name>`
  - `\<Rightarrow>` is rendered as $\Rightarrow$
- File extension is `*.thy`
- User encodes syntax of the target logic in the simply typed $\lambda$-calculus
- Proof system should be represented in natural deduction style as sequents: $[\![ P_1 ; \dots ; P_n ]\!] \Rightarrow Q$
  - Where $P_i$ and $Q$ are propositions written in the syntax of the target logic
- The Isabelle kernel provides elementary functions for applying proof rules
  - And theorems can only be created by applying these functions
- The soundness of reasoning thus depends on the correctness of the kernel and the soundness of the logical system
  - Both are ensured by software-engineering techniques such as tests and code review
  - The usage of a strongly-typed functional programming language (Standard ML)
  - And that the actual kernel implementation is relatively small
- Isabelle also comes with a set of automated proof methods
  - First-Order reasoner, rewriting engine, etc.
  - Correctness for these proof methods is certified through applications of the kernel functions
- For verification projects, users do not encode a logic of their own
  - But rather use one of the predefined logics that come with a rich library of definitions and theorems
- A verification project consists of several _theories_ that contain definitions and proof of theorems
- Traditionally, proofs were written as a series of tactics which reduce the statement of a theorem to subproblems
  - Which can be established by already available theorems or some automatic proof method
- Nowadays, proofs are written in a _structured proof language_ called Isar
  - In which a user writes proofs in a language similar to standard mathematical prose
  - Isar proofs are more verbose but easier to read and maintain
    - Each subproblem is formulated explicitly, whereas with tactics, subproblems are derived implicitly
- Isabelle/HOL is the encoding of higher-order logic in Isabelle
  - It is the most widely used object logic in Isabelle
  - Has been used for numerous verification projects
    - Including
      - Proof of mathematical theorems
      - Encodings of programming language semantics
      - Verification of security protocols
      - Verification of hardware and an operating system
- Type constructors include `bool`, `'a => 'b`, product type `'a * 'b`
  - The function arrow is right-associative, so `'a => 'b => 'c = 'a => ('b => 'c)`
  - Functional values are defined as $\lambda$-terms
- Function type and product type constructors are polymorphic: `'a` and `'b` can be instantiated by arbitrary types
- Type inference is implicit, but type constraints can be added with `v :: t` where `v` is a term and `t` is a type
- Sets are defined by their characteristic function: the type `'a set` is equivalent with the type `'a => bool`
- Records are similar to products but have named fields
  - For every field `f`, Isabelle defines a _selector function_, also called `f`
  - Other operations on records include record construction and (functional) record update

$$
(\!| f = valf, g = valg |\!) \hspace{2em} rec (\!| g := valg' |\!)
$$

- Isabelle allows to define _inductive datatypes_
- Example for defining Peano numbers with
  - Nullary constructor `Zero`, written `0`
  - Unary constructor `Suc`

```
datatype nat =
  Zero ("0")
  | Suc nat
```

- Inductive type constructors can be polymorphic as well
  - The type `'a option` is defined with a nullary constructor `None` and a unary constructor `Some 'a`
  - It can be understood by augmenting type `'a` by an additional value
  - Isabelle also defines the function

```
the :: 'a option => 'a
```

- Such that `the (Some x) = x`, for any $x$ of type `'a`
- The option type is used to represent partial functions in a logic of total functions: `'a => 'b option`
  - Such a function returns `None` for an argument outside its domain and `Some y` otherwise

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
- https://members.loria.fr/SMerz/papers/ijsi2009.pdf
