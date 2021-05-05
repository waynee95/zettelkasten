---
date: 2021-05-05
---

# Reductions

- A typical way to solve problems, is to _reduce_ a new problem to a previously solved problem

## Many-one Reduction

- Many-one reduction: An instance of a new problem is expressed as an instance of a prior problem for which the solution is then interpreted in terms of the new problem
- $A$ is many-one reducible to $B$, written $A \leq_{m} B$, if there exists a _computable function_ $f$ such that $x \in A$ iff $f(x) \in B$
- The function $f$ is called the _transformation function_

## Turing Reduction

- Turing reduction: A different way to solve a new problem is to use a subroutine that solves a prior problem
  - For example, we can solve an optimization problem by repeatedly calling a subroutine which solves the correspondig decision problem of a certain bound
- $A$ is Turing reducible to $B$, written $A \leq_{T} B$, if $A$ can be decided by a _deterministic oracle_ Turing Machine $M$ using $B$ as its _oracle_
  - The oracle for $B$ models a hypotheical efficient subroutine for $B$
  - The oracle can be called a polynomial number of times
- Many-one reductions can be regarded as restricted variants of Turing reductions where the oracle can only be called once and the value returned is exactly the result from the oracle

## Polynomial-time Reduction

- If the reduction consumes too much time or space, then the reductions are not helpful
  - That's why there are also _resouce-bounded_ reductions
- $A$ is _Karp reducible_ to be $B$, written $A \leq_m^p B$, if the transformation function $f$ is computable deterministically in polynomial time
  - The term "polynomial-time reduction" usually refers to Karp reductions
- $A$ is _Cook reducible_ to $B$, written $A \leq_T^p B$, if the oracle Turing Machine has polynomial time complexity

## References

- [Reducibility and Completeness by Allender, Loui and Regan](https://www.cs.rutgers.edu/~allender/papers/ALRch34.pdf)
