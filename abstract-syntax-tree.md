---
date: 2021-03-15
---

# Abstract Syntax Tree

> AST design evolves together with the whole compiler

- AST = Abstract Syntax Tree
- Serves as main data structure for all post-parsing phases of the compiler
- AST should be concise while also flexible enough for all post-parsing phases
- Not uncommon to revisit and change the initial AST design

## Concrete vs Abstract

- Concrete syntax trees show every detail of the parsing process
  - Show the structure and organization of the grammar
  - Also called _parse tree_
- Abstract syntax trees instead only preserve the important structural information of the input program

![](static/concrete-vs-abstract.png)

## AST Design and Construction

- There are different things to consider when designing an AST:

1. It should be possible to _unparse_ the AST
   - Execution of AST shall reflect the execution of the original program
   - AST nodes need to contain sufficient information to recall the essential elements they represent
2. Implementation of AST should be decoupled from information represented within the AST
   - Using accessors
3. Different phases of the compiler view elements of the AST fundamentally different
   - There is no single class hierarchy that can describe AST nodes for all purposes
   - Usage of the AST by the different phases is facilitated by various phase-specific interfaces implemented by AST nodes

- Going from source language $L$ to a grammar and AST design:

1. Create unambiguous grammar for $L$
   - There can be certain production rules only for the purpose of removing ambiguity from the grammar
2. Create AST from the grammar
   - Grammar details for disambiguation are not part of the AST design
   - Semantically useless symbols and punctuation such as `,` or `;` are also discarded
3. AST is constructed by adding semantic actions into the grammar
4. Design different phases of the compiler
   - Each phase might add new requirements to the AST design
   - Grammar/AST design might be revisited

## Left and right values

- When an `identifier` is used, it can mean either
  1.  The _value_ associated with that name
  2.  The _location_ (address) where that value is stored
- The meaning depends on the context where the identifier is used

`x = y`

- The identifier `y` refers to the _value_ of `y`

  - This is also called _right value_ (R-value) because it is to the right `=`
  - An object's self reference (this) is typically only available in right-value form

- The identifier `x` refers to the _location_ of `x`, not the its value
  - Also called _left value_ (L-value)
  - Some languages allow for using R-values in place of L-values (for example with _dereference operator_)
  - In C: `*e` means the R-value of `e` is used as an L-value
  - Other languages, like Java, limit L-values to reduce the ability to change storage unintentionally

## Design Pattern for ASTs

- Class hierarchy for the AST is kept relatively _flat_
- Node management is placed into a common superclass `AbstractNode`
  - Each type of node (assignment, if, while) is then a simple extension of `AbstractNode`

## Visitor Pattern

- ASTs for languages like Java have $\approx50$ different node types
- Compilers like [GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection) have $\approx200$ different passes
- To handle this we can make use of the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern)
  - Each pass can be in its own visitor class

TODO: Example

## References

- [Crafting A Compiler, Chapter 7.4](https://www.goodreads.com/book/show/6152082-crafting-a-compiler) by Fischer et al.
