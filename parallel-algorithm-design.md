---
date: 2024-06-04
---

# Parallel Algorithm Design

## Overview

- Based on _Foster's Methodology_
- Divided into 4 steps:
  1. Partitioning
  2. Communication
  3. Agglomeration
  4. Mapping

## Partitioning

- Find parts of the problem that can be parallelized
- _Partitioning_: divide the computation and data into pieces
  - Data-centric (**domain decomposition**)
  - Computation-centric (**functional decomposition**)
- Can be
  - Fine-grained = large number of small tasks
  - Coarse-grained = small number of large tasks

### Domain Decomposition

- First divide the data into pieces, then the computation is assigned to the data
- Result = a set of tasks, where each has some data and a certain set of operations on it
- If an operation requires data from several tasks, communication is needed

### Functional Decomposition

- First divide the computations into disjoint tasks, then the data is associated
  with individual tasks
- If data is shared between different tasks, communication is needed

## Communication

- Can be _local_ or _global_

## Agglomeration

- Agglomeration = process of grouping tasks into larger tasks

## Mapping

- Mapping = assigning tasks to processors
- Depends on the architecture (distributed vs. shared memory)
- Goal: load balancing and minimizing cost of communication
- Processor utilization is maximized, when the computation is distributed evenly

# References

- https://edoras.sdsu.edu/~mthomas/docs/foster/Foster_Designing_and_Building_Parallel_Programs.pdf
