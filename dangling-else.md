---
date: 2021-04-12
---

# Dangling Else

- In a programming language, something is called _ambiguous_, if it can be interpreted in _more than 1 way_
- An optional else clause in an `if-then(-else)` statement results in nested conditionals being ambiguous
- The context-free grammar is ambiguous (there is more than one parsing tree)

```
if a then s
if b then s1 else s2
```

Nested statements are ambiguous:

```
if a then if b then s else s2
```

This can be interpreted as:

```
if a then (if b then s) else s2
if a then (if b then s else s2)
```

In LR Parsers, the dangling else is an example of a _shift-reduce conflict_.

There are multiple ways to solve this problem:

1. By convention, the dangling else is always paired with the _innermost_ if statement.
2. By using explicit blocks, such as `begin...end` in Pascal or `{...}` in C.
3. Change syntax and include `end if` statement.
4. Don't allow single `if` statements.

## References

- [https://en.wikipedia.org/wiki/Dangling_else](https://en.wikipedia.org/wiki/Dangling_else)
- [http://www.mathcs.emory.edu/~cheung/Courses/561/Syllabus/2-C/dangling-else.html](http://www.mathcs.emory.edu/~cheung/Courses/561/Syllabus/2-C/dangling-else.html)
