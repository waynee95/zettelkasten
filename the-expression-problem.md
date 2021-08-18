---
date: 2021-08-18
---

# The Expression Problem

> The craft of programming is almost universally concerned with different types of data and operations/algorithms that act on this data.

## Overview

- Given a set of data types and a set of operations that act these types
- Sometimes we want to add more operations and make sure they work properly on all types
- Sometimes we want to add more types and make sure all operations work properly on them
  - But sometimes we need to add _both_ and that is where the _problem_ lies
  - Most mainstream languages do not provide good enough tools to add both new types and new operations to an existing system without having to modify the existing code
  - This is called _the expression problem_
  - This problem gives great insight into the fundamental differences between OOP, FP and concepts like interfaces and multiple dispatch

## Example in OOP

```java
class Example {
    interface Expr {
        String toString();
        double eval();
    }

    static class Constant implements Expr {
        double val;
        Constant(double val) {
            this.val = val;
        }
        public String toString() {
            return String.valueOf(val);
        }
        public double eval() {
            return val;
        }
    }

    static class BinaryPlus implements Expr {
        Expr lhs;
        Expr rhs;
        public BinaryPlus(Expr lhs, Expr rhs) {
            this.lhs = lhs;
            this.rhs = rhs;
        }
        public String toString() {
            return lhs + " + " + rhs;
        }
        public double eval() {
            return lhs.eval() + rhs.eval();
        }
    }
}
```

- With this design we can:
  - Easily add new expression types (like `Variable`, `FuncCall`, ...) by defining new classes that implement `Expr`
  - But what happens if we want to add new operations on expression trees
    - In addition to `eval` and `toString` we might to add `typeCheck`, `compile`, ...
    - Here adding new operations is not as easy as adding new types because we would have to change the `Expr` interface
    - And as a consequence, we would have to change every existing expression type to implement the new operations

## Example in FP

- This problem also applies to functional programming
- OOP collects functionality in objects (types)
- In FP, we prefer types to be data containers and functionality (operations) are collected in functions that act on these types
- Functional languages do not escape the expression problem; it just shows differently

```ocaml
type expr = Constant of float
          | BinaryPlus of expr * expr

let rec toString = function
  | Constant c -> string_of_float c
  | BinaryPlus (lhs, rhs) -> toString lhs ^ " + " ^ toString rhs

let rec eval = function
  | Constant value -> value
  | BinaryPlus (lhs, rhs) -> eval lhs +. eval rhs

```

- With this design we can:
  - Easily add new operations like `typecheck` because we can just define a function `typecheck` that pattern matches on `expr`
  - But if we would like to add new expression types like `FuncCall` we have to modify all existing functions to handle this type in the pattern matching
- So we hit the exact same problem as above but from a different angle

TODO: Solutions

## References

- [Original mail by Philip Wadler](https://homepages.inf.ed.ac.uk/wadler/papers/expression/expression.txt)
- https://eli.thegreenplace.net/2016/the-expression-problem-and-its-solutions/
