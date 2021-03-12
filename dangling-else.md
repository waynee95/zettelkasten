---
date: 2021-03-12
---

# Dangling Else

- problem in computer programming
- an optional else clause in an `if-then(-else)` statement results in nested contitionals being ambiguous
- the context-free grammar is ambiguous (there is more than one parsing tree)

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
