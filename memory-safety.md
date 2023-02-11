---
date: 2023-02-11
---

# Memory Safety

## Overview

- Memory access violations can be characterized into _spatial_ or _temporal_ errors
- A program is called _memory safe_ if it does not commit any spatial or temporal
  errors

## Spatial Memory Violation

- Is an error in which a pointer is used to access data at a location in memory
  that is _outside_ the bounds of an allocated object
- Spatial = dereferenced pointer refers to an incorrect location in memory
- Examples:
  - Indexing beyond the bounds of an array
  - Dereferencing pointers obtained from invalid pointer arithmetic
  - Dereferencing uninitialized or `NULL` pointers
- _Spatial memory safety_ is typically enforced by inserting _runtime checks_
  before pointer dereferences or by checking for _bound violations_ after pointer
  arithmetic (needs care in C because out-of-bounds pointers are allowed as long
  as no dereferencing occurs)

## Temporal Memory Violation

- Is an error in which a pointer is used in an attempt to access or deallocate
  an object that has already been deallocated
- Temporal = the pointer use occurs at an invalid instance during the execution
  of the program
- Examples:
  - Dereferencing a dangling pointer to dynamically allocated memory
  - Attempting to deallocate a pointer more than once
  - Dereferencing pointers to automatically allocated memory (e.g. stack variables)
    becomes also a concern if the address of the referent "escapes" and becomes
    available outside the function in which it was defined
- _Temporal memory safety_ is typically enforced by using _garbage collection_ or
  _checks_ (i.e. testing temporal validity of referenced objects)

# References

- https://user.eng.umd.edu/~barua/spe2011-simpson.pdf
- https://arxiv.org/pdf/1705.07354.pdf
