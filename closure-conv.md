---
title: Closure Conversion
date: 2023-03-04
---

- In block-structured languages, code can refer to variables declared _outside_
  the current block
  - The meaning of such free variables is given by the environment
  - A compiler or interpreter has special machinery to manage environments
- However, this can be avoided by making all environements _explicit_ in the
  intermediate language
  - Each function is transformed into a tuple of code and environment
    - Where the code explicitly accesses the environment to retrieve values
      _formerly_ referenced by free variables
  - This tuple is called a _closure_ because its code component is _closed_
    (i.e., has no free variables)
  - The process of transforming all functions into closures is called _closure conversion_
    or environment conversion (because it makes all environments explicit)
- Closure conversion transforms a program that may contain higher-order functions
  into a program with only first-order functions
  - Instead of passing a prodecure as a parameter or returning one, a closure
    data structure is passed or returned
- Closure conversion is useful as a compiler transformation or can be used to
  emulate higher-order functions in a language that only supports first-order functions

# References

- Design Concepts in Programming Languages, Ch. 17.10, by Turbak and Gifford
