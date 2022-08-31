---
date: 2021-03-12
---

# Pratt Parsing

## Overview

- Also known as _top-down operator precedence parsing_
- Based on [recursive descent](https://en.wikipedia.org/wiki/Recursive_descent_parser)
- Terminology used in the original paper:
  1. Null denotation (nud)
  - Operator that has no left context (prefix operator): `-1`, `!`
  2. Left denotation (led)
  - Operator that has a left context (infix operator): `1 + 2`

## Problem with Recursive Descent

- RD is straightforward when you know exactly what comes next
  - Uniquely identified by `if`, `for`, `while`, ...
- It gets tricky when you get an expression

  - Especially when it comes to infix operators (`+`), postfix operators (`++`) or mixfix operators (`?:`)
  - Often, you only know which expression you are dealing with when you are halfway through
  - Traditionally, precedence is encoded directly into the grammar by splitting it into the different levels of precedence

    ```javascript
    function expression() {
      /* ... */
    }
    function term() {
      /* ... */
    }
    function factor() {
      /* ... */
    }
    ```

  - This is tedious when you have many different operators

## Pratt Parsing

> If recursive descent is peanut butter, Pratt parsing is jelly. When you mix the two together, you get a simple, terse, readable parser that can handle any grammar you throw at it.
>
> -- <cite>https://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/</cite>

```javascript
// Somewhere outside we have a Map<Operator, Precedence>
function parseExpression(precedence = 0) {
  token = consume();
  left = parsePrefix(token);

  // When parsing an expression for a specific precedence,
  // stop when we encounter an operator with less precedence
  // than what we are parsing right now
  while (precedence < getPrecedence(peek())) {
    token = consume();
    left = parseInfix(left, token);
  }

  return left;
}
```

- If an infix operator calls `parseExpression()` with the same precedence, it will yield _left associativity_
- For _right associativity_, you call it with `(precedence - 1)`

## References

- [Original paper by Vaughan Pratt (digital version)](https://tdop.github.io/)
- [Pratt Parsers: Expression Parsing Made Easy](https://journal.stuffwithstuff.com/2011/03/19/pratt-parsers-expression-parsing-made-easy/)
- [https://dev.to/jrop/pratt-parsing](https://dev.to/jrop/pratt-parsing)
