---
date: 2023-02-17
---

# Assemblers, Linkers and Loaders

## Overview

- **Assembler:** translates the symbolic instructions generated from source code
  to a _relocatable object file_
- **Linker:** combines relocatable program object files and some library object files
  into an _executable program file_
- **Loader:** loads contents of an executable into memory and starts the execution
  of the program

## Running Program

- A _running program_ consists of
  - **code segment:** derive from the source and are _immutable_ but allows for
    _dynamic linking_
  - **stack segment:** mutable and starts empty
  - **data segment:** mutable and prefilled with literals and strings from the
    source program
  - **set of registers:** uninitialized and zero
- Code and data relate to each other via addresses of locations in each segment
- Addresses are stored in machine instructions and prefilled with data from the
  data segment

## Executable Code File

- Before a program is run, the contents of an executable code file are loaded
  into memory using a _loader_
  - The loader is an integrated part of the OS and its activation is _implicit_
  - It has special privileges from the OS and is usually "invisible"
  - The loader is responsible for:
    1. load the segments
    2. copy them into memory
    3. creates a stack segment
    4. jumps to a predetermined location in the code segment
    5. starts the program

## Object Files

- An executable code file is derived from _combining_ one or more program _object files_
  and optionally some library object file
  - These are combined by the _linker_
- The linker is a normal user program _without_ any privileges
  - Most OS provide a linker but some compiler ship with their own
- The linker combines the code and data segments of each object file by concatenating them
  - All the addresses inside the object files have to adjusted by the linker
    to their actual positions when the code and data segments from different
    object file are linked together
  - The information about which positions in the segments contain addresses
    and whether these refer to the code or data segment is called _relocation information_

# References

- Modern Compiler Design, 2nd edition by Grune et al.
