---
date: 2021-07-31
---

# O-Notation

## $\Theta$-Notation

$$
\Theta(g(n)) = \{ f(n) \mid \exists c_1, c_2, n_0 : 0 \leq c_1 \cdot g(n) \leq f(n) \leq c_2 \cdot g(n), \forall n \geq n_0 \}
$$

- Intuitively, "$f(n) \in \Theta(g(n))$" means that $f(n)$ and $g(n)$ are _asymptotically equivalent_
  - They have the same growth rates for large $n$
  - E.g. $4n^2, (8n^2+2n-3), (n^2/5+\sqrt{n}-10\log{n}), n(n-3)$ are all asymptotically equivalent because if $n$ becomes large the _dominant_ (fastest growing) term is $n^2$
  - With $c_1, c_2$ we say that "the constants do not matter because you may pick $c_1$ and $c_2$ however you like to satisfy these conditions"
  - With $n_0$ we say that "we are only interested in large $n$, since you only have to satisfy the condition for all $n$ _bigger_ than $n_0$, and you may make $n_0$ as big as you want"

## $\mathcal{O}$-Notation and $\Omega$-Notation

- The definition of $\Theta$-notation relies on proving both a _lower_ and _upper_ asymptotic bound
  - Sometimes we might only be interested in proving one or the other
- $\mathcal{O}$-notation allows us to state asymptotic _upper_ bounds
- $\Theta$-notation allows us to state asymptotic _lower_ bounds
- Observe that $f(n) \in \Theta(g(n))$ if and only if $f(n) \in \mathcal{O}(g(n))$ and $f(n) \in \Omega(g(n))$

### $\mathcal{O}$-Notation

$$
\mathcal{O}(g(n)) = \{ f(n) \mid \exists c, n_0 : 0 \leq f(n) \leq c \cdot g(n), \forall n \geq n_0 \}
$$

- Intuitively, "$f(n) \in \mathcal{O}(g(n))$" means that $f(n)$ grows asymptotically a the same rate or _slower_ than $g(n)$

### $\Theta$-Notation

$$
\Omega(g(n)) = \{ f(n) \mid \exists c, n_0 : 0 \leq c \cdot g(n) \leq f(n), \forall n \geq n_0 \}
$$

- Intuitively, "$f(n) \in \Omega(g(n))$" means that $f(n)$ grows asymptotically at the same rate or _faster_ than $g(n)$

## Asymptotic Intuition

- $\Theta(1)$: Constant time; you can't beat that!
- $\Theta(\log n)$: Most efficient data structures operate in this speed for a single access. Also it is the time it takes to find an object in a _sorted_ list of length _n_ by _binary search_ Most efficient data structures operate in this speed for a single access. Also it is the time it takes to find an object in a _sorted_ list of length _n_ by _binary search_.
- $\Theta(n)$: Fastest time that an algorithm can run, given that you need $\Theta(n)$ time just to read in all the data.
- $\Theta(n \log n)$: Running time of the fastest sorting algorithms. Since many problems require sorting the input, this is still considered fast.
- $\Theta(n^2), \Theta(n^3), \dots$: Polynomial time. These running times are acceptable if the exponent is small or when the data size is not too large (e.g. $n \leq 1000$).
- $\Theta(2^n), \Theta(3^n), \dots$: Exponential time. This is only acceptable if you know that the input are small (e.g. $n \leq 50$) or you know that this is a worst-case running time that rarely occurs in practice.
- $\Theta(n!), \Theta(n^n)$: Only acceptable for really small inputs (e.g. $n \leq 20$).

## References

- https://www.cs.umd.edu/users/meesh/cmsc351/mount/lectures/lect5-asymptotics.pdf
