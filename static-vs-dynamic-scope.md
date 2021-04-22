---
title: "Static vs Dynamic Scope"
date: 2021-04-22
---

## Overview

- _Scope rules_ define the visibility of names in a programming language
- Most languages are _statically scoped_, every _block_ defines a new scope
- Variables are declared inside a scope are not visible outside of it
  - However, variables outside that scope, in _enclosing_ scopes, are visible unless they are overriden
  - In languages like Haskell or Scheme this also applies to name of functions

## Static Scope

```js
let m, n;

function f() {
  print("in f -- n is", n);
}

function g(n) {
  print("in g -- m is", m);
  print("in g -- n is", n);
}

m = 23;
n = 42;
print("in main -- n is", n);
g(1);
f();

// Result:
// in main -- n is 42
// in g -- m is 23
// in g -- n is 1
// in f -- n is 42 (called from g)
// in f -- n is 42 (called from main)
```

## Dynamic Scope

- First look for local definition of a variable
  - If it is not found, then look up the call stack for a definition

The above example but with dynamic scope:

```js
let m, n;

function f() {
  print("in f -- n is", n);
}

function g(n) {
  print("in g -- m is", m);
  print("in g -- n is", n);
  f();
}

m = 23;
n = 42;
print("in main -- n is", n);
g(1);
f();

// Result:
// in main -- n is 42
// in g -- m is 23
// in g -- n is 1
// in f -- n is 1 --> Difference: Since n=1 is on the call stack
// in f -- n is 42
```

## References

- [Static and Dynamic Scoping](https://courses.cs.washington.edu/courses/cse341/03wi/imperative/scoping.html)
