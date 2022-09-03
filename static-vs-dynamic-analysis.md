---
date: 2022-09-03
---

# Static and Dynamic Analysis

- There are two ways to understand programs:
  - **Static Analysis**: discover information about a program without running it
  - **Dynamic Analysis**: run the program and collect information about the events that
    took place at runtime

## Dynamic Analyses

- **Profiling**: execute the program and log events that happened at runtime
- **Test Generation**: try to generate tests that cover most of the program code
- **Emulation**: execute the program in a virtual machine, that takes care of
  collecting and analyzing data
- **Instrumentation**: augment the program with meta-program that monitors its
  behavior

## Static Analyses

- **Dataflow analysis**: propagate information based on the dependencies between
  program elements, which are given by the syntax of the program
- **Constraint-based analysis**: derive constraints from the program (relations
  between constraints not necessarily derived from the program syntax)
- **Type analysis**: propagate information as type annotations. Allows to prove
  properties about the program, such as _progress_ and _preservation_
