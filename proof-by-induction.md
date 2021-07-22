---
date: 2021-07-22
---

# Proof by Induction

## Overview

- Induction can refer to weak induction, strong induction or structural induction
  - In all cases, induction is a method to prove a statement $P(x)$ about a "complex" element $x$ of a set by reducing it to a "simpler case"
- The predicate $P(x)$ is often referred to as "inductive hypothesis"

## Weak Induction

- If $P(n)$ is a statement, and we wish to prove "$\forall n \in \mathbb{N}: P(n)$", one way is to use _weak induction_

> To prove "$\forall n \in \mathbb{N}: P(n)$" using _weak induction_, we prove
> $P(0)$, and then we must prove $P(n + 1)$ for an _arbitrary_ $n$ under the
> assumption $P(n)$

- $P(0)$ is called the _base case_
- $P(n + 1)$ is called _inductive step_
- $P(n)$ is called _induction hypothesis_

## Strong Induction

- To prove "$\forall n \in \mathbb{N}: P(n)$" by _strong induction_, we must
  - Prove $P(0)$
  - For arbitrary $n$, prove $P(n)$ under the assumption $P(n - 1), P(n - 2), \dots, P(0)$
  - The induction step requires to prove $P(n)$ assuming $P(k), \forall k < n$
- The difference between strong induction and weak induction is only the _set of
  assumptions_ made in the inductive step
- We can always use strong induction instead of weak induction
  - By using weak induction we avoid unneeded assumptions and reduce the
    complexity of the proof
  - In fact, we can convert a proof by strong induction into a proof by weak induction
    by _strengthening the inductive hypothesis_

## Strengthening the Inductive Hypothesis

- Sometimes the induction hypothesis does not say enough to be applicable in the
  inductive step
  - In this case it might be "easier" (lul) to prove a stronger result
  - Here we actually prove more but that means we have more facts available in
    the inductive step
- "$\forall k \leq n: P(k)$"

## References

- [CS2800 Wiki @ Cornell](https://courses.cs.cornell.edu/cs2800/wiki/index.php/Induction)
- [Structural Induction](http://www.cs.cornell.edu/courses/cs2800/2017fa/lectures/lec20-ind-defns.html)
