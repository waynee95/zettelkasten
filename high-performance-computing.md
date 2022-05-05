---
date: 2022-05-05
---

# High Performance Computing

- There is an ever increasing demand for computation power to improve the speed
  or accuracy of solutions to real-world problems through _faster_ computations
  and/or _bigger_ simulations
- Important factors to consider in parallel programming:
  - _Physical limitations:_ the speed of light, CPU heat dissipation
  - _Economic factors:_ cheaper components can be used to achieve comparable levels of performance in total
  - _Scalability:_ allows data to be divided over CPUs to increase performance
  - _Memory:_ allow aggregate memory bandwidth to be increased together with processing power
- Why not parallelize all programs?
  - Bad written parallel programs can be worse than their sequential counterparts
    - Slower because of communication overhead
    - Some parallel algorithms are only faster when problem size is really large
  - Not all problems are a good fit for parallelism
  - Some algorithms are inherently sequential
  - There is no _linear speedup_ for parallel algorithms compared to sequential versions
    - Due to overhead of communication, resource contention and synchronization

## Speedup

- The _speedup_ of an algorithm using $P$ processors is defined as

$$
S_P = \frac{t_S}{t_P}
$$

- with $t_S$ = execution time of the _best sequential algorithm_
- and $t_P$ = execution time of the parallel algorithm
- The speedup is
  - _ideal_ if $S_P = P$
  - _linear_ if $S_P \approx P$
  - _superlinear_ if, for some $P$, $S_P > P$
- Superlinear speedup might be caused by _cache effects_
  - When data is partitioned and distributed over multiple processors, then the
    individual data items are (much) smaller and may fit entirely in the data cache
    of each processor

## Efficiency

- The _efficiency_ of an algorithm using $P$ processors is defined as

$$
E_P = \frac{S_P}{P}
$$

- With efficiency we estimate how well-utilized the processors are in solving the
  problem, compared to how much effort is lost by the overhead
- Ideal efficiency means $E_P = 1$

## Scalability

- With speedup we describe how the parallel algorithm's performance changes with
  _increasing_ $P$
- _Scalability_ is about the efficiency of an algorithm with _changing problem size_
  $N$ by choosing $P$ dependent on $N$

## Amdahl's Law

- Several factors limit speedup
  - Processors may idle
  - Extra computation steps might be performed in the parallel version
  - Communication and synchronization overhead
- Informally: Amdahl's law states that speedup for parallel algorithms is always
  inherently limited
- There's also _Gustanfson's law_

## Locality

- _Memory hierarchy_ forms a barrier to performance when locality is poor
- Temporal locality
  - The same memory location is accessed frequently and repeatedly
  - Poor temporal locality results from frequent access to fresh new memory locations
- Spatial locality
  - Consecutive (or "near enough") memory locations are accessed
  - Poor spatial locality means that memory locations are accessed in a more random pattern

## Future of Computing

- Increased transistor density causes huge CPU energy consumption and heat dissipation issues
  - This fundamentally limits CPU clock frequencies
  - CPU performance will be relatively flat
- Computers will get a lot cheaper but not faster

## References

- https://www.cs.fsu.edu/~engelen/courses/HPC/
