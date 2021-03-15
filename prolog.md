---
date: 2021-03-12
---

# Prolog

## Overview

- Created in the 1970s
- Prolog = "PROgramming in LOGic"
- There are many different implementations, e.g. [SWI-Prolog](https://www.swi-prolog.org/) and [GNU Prolog](http://gprolog.org/)
- Prolog is a _logic programming language_ and _declarative_ in nature
- Prolog is _turing-complete_ ([turing.pl](https://www.metalevel.at/prolog/showcases/turing.pl))

## Example Program ([Reference](http://www.cs.toronto.edu/~sheila/384/w11/simple-prolog-examples.html))

- A Prolog program consists of _predicates_ which define _relations_ between arguments

```prolog
% move(N,X,Y,Z) - move N disks from peg X to peg Y, with peg Z being the
%                 auxilliary peg
%
% Strategy:
% Base Case: One disc - To transfer a stack consisting of 1 disc from
%    peg X to peg Y, simply move that disc from X to Y
% Recursive Case: To transfer n discs from X to Y, do the following:
         Transfer the first n-1 discs to some other peg X
         Move the last disc on X to Y
         Transfer the n-1 discs from X to peg Y

     move(1,X,Y,_) :-
         write('Move top disk from '),
         write(X),
         write(' to '),
         write(Y),
         nl.
     move(N,X,Y,Z) :-
         N>1,
         M is N-1,
         move(M,X,Z,Y),
         move(1,X,Y,_),
         move(M,Z,Y,X).
```

- A clause consists of a _head_ and a _body_

```prolog
% a simple clause
Head :- Body.
```

- This means: if `Body` is true, then `Head` is true
- Since Prolog is declarative, we specify the result we are interested in and not the concrete steps to compute a result
- We are not concerned _how_ Prolog finds these results

## Logical Foundations of Prolog

- Prolog is based on [first-order predicate logic](https://en.wikipedia.org/wiki/First-order_logic)
- A Prolog program is a sequence of [Horn clauses](https://en.wikipedia.org/wiki/Horn_clause)
- Prolog uses [resolution](<https://en.wikipedia.org/wiki/Resolution_(logic)>) internally

> Resolution is based on the idea of proof by contradiction: To prove a logical consequence of a set of axioms, we assume the opposite of what we want to prove, and show that this contradicts the axioms which we take for granted

- There are different evaluation strategies for resolution

## Syntax

### Terms

- Prolog is _dynamically typed_ and has a single data type called the _term_
- All data and programs are represented by terms
- Terms are either _atoms_, numbers, variables or _compound_ terms
- Atoms and numbers are sometimes grouped together and called _atomic terms_

### Atoms

- An atom is just a name that can serve multiple purposes
- It consists of a sequence of letters, if it contains spaces, you need to use quotes
- Uppercase atoms must also be put into quotes, otherwise they would be treated as variables

### Compound Terms

- Consist of a _functor_ (a Prolog atom) and a number of _arguments_ (Prolog terms)
  enclosed in parentheses and separated by commas

### Predicates

- Each predicate has
  - Name: which is an _atom_
  - Zero or more Arguments: is an arbitrary term
- A predicate with name `Pred` and `N` arguments is denoted by `Pred/N`
- That notation is called a _predicate indicator_
- `N` is called the _arity_ of the predicate
- A predicate is defined by a collection of _clauses_
- A clause is either a _rule_ or a _fact_
- Clauses denote logical alternatives: If _any_ clause is true, then the whole predicate is true

### Rules

- A rule is of the form `Head :- Body.`
- The notation of the head of a rule depends on the number of arguments:
  - If the predicate has zero arguments, then the head is only the name of the predicate
  - If a predicate has `N` arguments, then the head is written as `PredName(Arg1, Arg1, ...)`
- The body of each rule is a Prolog _goal_
- A goal is a _term_ that denotes the predicate and its arguments
- Rules can be _recursive_

### Facts

- A fact is written as `Head.`
- This is equivalent to the rule `Head :- true.`
- A fact is always true

### Queries

- After a Prolog program is compiled, you submit queries to the interpreter
- A query has the same structure as the body of a rule
  - It is a sequence of predicates separated by commas and terminated by a dot

```
?- small(X), green(X), smily(X).
```

## References

- [The Power of Prolog](https://www.metalevel.at/prolog) by Markus Triska
- [SWI-Prolog manual](https://www.swi-prolog.org/pldoc/doc_for?object=manual)
- [Intro to Prolog](https://staff.fnwi.uva.nl/u.endriss/teaching/prolog/prolog.pdf) by Ulle Endriss
