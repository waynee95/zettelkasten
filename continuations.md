---
date: 2021-06-02
---

# Continuations

## Overview

- Continuation = represents the _rest of a computation_ at any given point in the computation
- `goto` can be used to manipulate the continuation of a computation step
- Only a few languages provide full unrestrained access to continuations
  - Scheme has `call/cc` (call-with-current-continuation)
  - Any language that supports closures can be used to manually implement `call/cc`

## Example

```py
def foo(x):
   return x + 1
```

- Function returns a value but it is _implicit_ where this value is actually returned to
- Core idea of continuations: make this behaviour _explicit_ by adding a _continuation argument_
  - Instead of returning the value, we continue with the value by providing it as an argument to the continuation

```py
def foo(x, c):
   c(x + 1)
```

- This means a function never returns but instead continues
  - See them as "gotos but with arguments"

## Continuation-Passing-Style (CPS)

- Basic idea:
  1.  A function signature gets extra _continuation_ parameter
  2.  A function does not return a value; instead the value is passed to the continuation function

## References

- [Computational Continuations - Slides](https://www.jquigley.com/files/talks/continuations.pdf) by John Quigley
