---
title: Defunctionalization
date: 2023-03-04
---

- Defunctionalization is a #[[closure-conv]] technique
- Defunctionalization is a programming technique that _emulates_ higher-order
  functions using only first-order language features
- A higher-order function (HOF) can be defunctionalized in two steps:
  1. for every location where the HOF is used and applied to a function, replace
     that function with a value of a dedicated data type to _represent_ that function
  - This is called the _defunctionalization symbol_
  2. in the HOF's definition, wherever a function parameter is applied, replace that
     application with a call to a dedicated _first-order_ function which will _interpret_
     the defunctionalization symbol that this parameter now stands for
  - This function is often called `apply` or `eval`
- Defunctionalization may also be called _environment-tagging_

# References

- https://www.cis.upenn.edu/~plclub/blog/2020-05-15-Defunctionalize-the-Continuation/
- Design Concepts in Programming Languages, Ch. 17.10.2, by Turbak and Gifford
