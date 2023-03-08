---
title: Name Mangling
date: 2023-03-08
---

- Name mangling = constructing a unique string from a source language name
  - Adds prefix, suffix or both to the original name
- Technique to solve problems that need to resolve unique names for programming
  entities
  - Provides a way to encode additional information in the name of a function,
    structure, class or other datatypes in order to pass more information to the
    compiler or linker
- Problem arises where the language allows _different_ entities to be named with
  the _same_ identifier
  - Is required to distinguish between the different entities because they might
    require specialized calling conventions in the assembly

# References

- https://en.wikipedia.org/wiki/Name_mangling
- Engineering a Compiler, 2nd ed, Ch. 6
