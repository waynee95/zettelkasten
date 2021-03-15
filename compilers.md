---
date: 2021-03-15
---

# Compilers

## Overview

> The compiler must preserve the meaning of the program being compiled.

> The compiler must improve the input program in some discernible way.

- Compiler: translates a program written in one programming language into a program written in another programming language
- Has _front_ and _back end_
- A compiler consists of different _phases_ where each phase might consist of multiple _passes_
  - Phase = coarse building block (lexing phase, parsing phase, semantic analysis phase, $\dots$)
  - Pass = fine grained iteration inside a phase: syntax lowering pass, scope resolution pass, type checking pass, $\dots$

![](https://www.cdn.geeksforgeeks.org/wp-content/uploads/1-34.png)

- Frontend deals with with source language, while the backend deals with the target language
- Both are connected using (often more than one) _intermediate representation_ (IR), which is independent from either language
- Between those two, there is often one or many optimization phases
- An optimizer can have different goals:
  - Make the program faster
  - Make the program smaller
  - Make the program use less energy
- Since front and back end are decoupled, it's easy to write different back ends for different target machines
- A compiler that translates between two programming languages, instead of machine code, is called _source-to-source translator_
- An _interpreter_ produces as output the result of executing the program, instead of machine code
- Some languages use both a compiler and an interpreter: Java
  - Java is compiled into _bytecode_, which is a compact description of the program
  - The bytecode is then interpreted by the JVM (Java Virtual Machine)
  - But the JVM also includes a _just-in-time_ (JIT) compiler, which is a runtime compiler

### Why study compiler construction?

- A compiler applies many concepts of computer science and software engineering
  - Greedy algorithms (register allocation)
  - Heuristic search techniques (list scheduling)
  - Graph algorithms (dead-code elimination)
  - Dynamic programming (instruction selection)
  - Finite automata and push-down automata (scanning and parsing)
  - Fixed-point algorithms (data-flow analysis)
- It deals with problems such as dynamic allocation, synchronization, naming, locality, memory hierarchy management and pipeline scheduling

## Scanner

- Scanner: Scan a source program and break it up into small, meaningful units, called _tokens_
- Might also be called: Lexer or Tokenizer
- Can be built using a _lexer generator_ like [[jflex]]#

```
position := initial + rate * 60;

// Tokens
id position
assign :=
id initial
op +
id rate
op *
int 60
semicolon
```

- Tokens: identifiers, constants, operators, $\dots$
- Also: Removal of comments/whitespace, preparation of output listing (line numbers, correspondence of error messages and line numbers), communication with symbol table

### Tokens, Lexemes, Patterns

- **Token**: classification of entities of a program
- **Lexeme**: specific instance of a token
  - Example: `position` and `instance` are both identifiers, but different lexeme
- Scanner has to keep track of "attributes" for each token:
  - Identifiers: string
  - Numbers: value
- These attributes are used during semantic analysis and code generation
- **Patterns**: Rules describing how tokens look like
  - Are needed because the source language may contain infinite possible strings
- These patterns are specified using a meta-language called _regular expressions_

## Parsing

TODO: Parsing introduction

[[dangling-else]]#

[[pratt-parsing]]#

### Syntax-directed Translation

TODO: What is this?

- The goal of syntax-directed translation is to construct an [[abstract-syntax-tree]]#

## References

- [Engineering a Compiler (2nd edition)](https://www.goodreads.com/book/show/1997607.Engineering_a_Compiler) by K. Cooper and L. Torczon
- [Crafting A Compiler](https://www.goodreads.com/book/show/6152082-crafting-a-compiler) by Fischer et al.
- [Compilers timeline](https://jeffreykegler.github.io/personal/timeline_v3)
