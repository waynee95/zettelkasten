---
title: Value (or Data) Representation
date: 2023-03-05
---

- **Problem:** How to represent the values of the source language in the target language?
  - This is trivial in languages that have no parametric polymorphism and types
    directly corresponding to those of the target language (e.g. `int`, `long`, `double`)
  - More difficult with
    - Parametric polymorphism (because there are no exact types at compilation time)
    - Dynamic types (same as above)
    - Types not corresponding directly to the target language
- Solutions:
  - **Boxing:** all values are represented uniformly by a _pointer_ to a heap-allocated
    block called _box_ containing:
    - the value
    - some information about its type
    - This is _simple_ but _very costly_ for small values (e.g. integers)
    - (Un)boxing can be done _on-demand_ for statically-typed languages
      - box when _entering_ a polymorphic context
      - unbox when returning to _monomorphic_ context
      - with this there is no cost for monomorphic code, but this can be expensive at run-time
  - **Tagging:** all values are represented uniformly by a _pointer-sized word_
    containing:
    - a pointer to a _boxed value_
    - a small value (e.g. integer) with a _tag_ identifying its type
    - This is _simple_ and more cost efficient for small values but reduces
      the range of small values

# References

- https://cs420.epfl.ch/archive/20/s/acc20_04_value-rep.pdf
- https://dev.realworldocaml.org/runtime-memory-layout.html
