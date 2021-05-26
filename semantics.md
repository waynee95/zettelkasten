---
date: 2021-05-26
---

# Semantics

## Why formalize semantics?

- Standardizes the official semantics of the language
  - This is important for compilers; otherwise you end up with multiple compilers where programs might behave differently
- Allows for a formal analysis of the properties of the language
- An implementation of the language can be derived from the semantics specification ([Reference](https://link.springer.com/chapter/10.1007/3-540-10250-7_19))
- There is no _uniformal_ way to specify language semantics
  - It is harder to do than formally specifying syntax (unlike with BNF etc)
- Semantic definition methods fall into three groups:

## Operational Semantics

- The meaning of a well-formed program is the trace of _computation steps_ that
  result from processing the program's input
- Also called _intensional_ semantics, because the sequence of internal computation
  steps (the "intension") is the most important
- Two differently coded programs that both compute factorial have _different_ operational semantics

## Denotational Semantics

- The meaning of a well-formed program is a _mathematical function_ from input data
  to output data
- The exact steps that are taken to form the output are irrelevant
- The relation between input to output is the thing, that matters
- Also called _extensional_ semantics
- Here the two differently coded factorial programs have the _same_ denotational semantics

## Axiomatic Semantics

- The meaning of a well-formed program is a _logical proposition_ (specification)
  that states properties about input and output
- The axiomatic semantics of the factorial program are described by $\forall x. x \geq 0 \Rightarrow \exists y. y = x!$

## References

- [Programming Language Semantics](http://people.cs.ksu.edu/~schmidt/705a/Lectures/chapter.pdf) by David A. Schmidt
