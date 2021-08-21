---
date: 2021-08-21
---

# Divide-and-Conquer

- **Divide** the problem into a number of _subproblems_ that are _smaller instances_ of the same problem
- **Conquer** (recursive case) the subproblems by solving them recursively. If the problem size is small enough, just solve them normally (base case)
- **Combine** the solutions to the subproblems into the solution of the original problem

## Recurrences

- Go hand in hand with divide-and-conquer paradigm
- Are a natural way to characterize the _running times_ of divide-and-conquer algorithms
- Recurrence = equation or inequality that describes a function in terms of its value on _smaller inputs_

$$
T(n) = \begin{cases}
         \Theta(1), & n = 1 \\
         2T(\frac{n}{2}) + \Theta(n), & n > 1
       \end{cases}
$$

- Subproblems are not necessarily constrained to being a constant fraction of the input size

$$
T(n) = T(n - 1) + \Theta(1)
$$

- There are 3 ways for obtaining asymptotic "$\Theta"$ or "$\mathcal{O}"$ bounds for recurrences
  - **Substitution method:** guess a bound and then through mathematical induction prove it correct
  - **Recursion tree method:** convert recurrence into a tree, where the nodes are the costs of the different levels of the recursion. Use bounding techniques to solve the recurrence
  - **Master theorem:** "black box" for solving recurrences; provides bounds for recurrences of the form

$$
T(n) = aT(\frac{n}{b}) + f(n) \quad, a \geq 1, b > 1
$$

- $a$ = the number of subproblems we divide the problem into; or the branching factor in the recursion tree
- $b$ = division ratio; so the size of the subproblems
- $f(n) = D(n) + C(n)$, where $D(n)$ is the time it takes for the _divide step_ and $C(n)$ is the time it takes for the _combine step_

## Recursion trees

- **Nodes:** labeled with the contribution to the total for that _recursive call_ (not counting what happens inside the children)
- **Children:** one for each appearance of the recurrent term
- After drawing such a tree, we can solve the recurrence:
  1.  Compute (or bound) the _depth of the leaves_
  2.  Compute (or bound) the _sum for each level_
  3.  Compute (or bound) the \_sum across all levels_o

### Merge-sort recursion tree

![](/static/mergesort-recurrence.png)

- Depth of the leaves = $\log n$
- Sum for each level = $cn$
- Sum across all levels = $cn \log n = \Theta(n \log n)$

### Another example

- Let $T(n) = T(\frac{n}{3}) + T(\frac{2n}{3}) + \mathcal{O}(n)$

![](/static/recurrence-example.png)

- Depth of the (deepest) leaves: $\log_{3/2} n$
- Sum for each level = $\leq cn$
- Sum across all levels = $cn \log_{3/2} n = \mathcal{O}(n \log n)$

## Master Theorem

- "Simple version":

$$
T(n) = aT(\frac{n}{b}) + \Theta(n^d)
$$

- If $a > b^d$, then $T(n) = \Theta(n^{\log_b a})$
- If $a = b^d$, then $T(n) = \Theta(n^d \log n)$
- If $a < b^d$, then $T(n) = \Theta(n^d)$

## References

- CLRS, ch. 4
- https://cse.sc.edu/~jokane/teaching/750/notes-recurrences.pdf
