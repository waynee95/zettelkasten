---
date: 2021-06-25
---

# Refinement Types

## Overview

- Well-typed programs can still go wrong
  - **Divison by zero**: The fact that a divisor is an `int` does not remove the possibility of a run-time division by zero error
  - **Buffer overflows**: The fact that an `array` or `string` index is an `int` does not remove the possiblity of a segmentation fault from out-of-bounds access
  - **Logic bugs**: With classical types we can insure that a data structure contains suitable (could be `int`) fields for holding `day`, `month` and `year`. But no guarantee that `day` is actually a valid day for the given `month` and `year`
- _Refinement_ types allows us to enrich the type system with _predicates_ to narrow down the set of values described by a type
- While an `int` can be any integer value, we can define a refined type that describes only _non-negative_ integer values:

```
type nat = int[v| 0 <= v]
```

- The combination of types and predicates allows for _contracts_ that describe legal inputs and outputs of functions:

```
val size : x:array(a) => nat[v| v = length(x)]
val get  : x:array(a) => [v| v < length(x)] => a
```

- `size(arr)` ensures that the returned integer value is euql to the number of elements in `arr`
- `get(arr, i)` requires that the index `i` is within the bounds of `arr`
- Give these specifications, the _type checker_ can guarantee at _compile-time_ that all operations respect their contracts, that is, to ensure that all array accesses are safe at run-time

## References

- [Refinement Types](https://arxiv.org/pdf/2010.07763.pdf) by Jhala and Vazou
