---
date: 2021-09-20
---

# Morphisms

## Homomorphism

- A homomorphism is the mathematical tool for succinctly expressing precise structural correspondences
  - It is a function between groups satisfying a few "natural" properties
- A homomorphism is a function $h: G \rightarrow H$ between two groups satisfying

$$
h(ab) = h(a)h(b), \quad \forall a,b \in G
$$

- Note that $a \cdot b$ is occurring in the _domain_ while $h(a) \cdot h(b)$ occurs in the _codomain_
- Not all functions from one group to another are homomorphisms
  - The condition $h(ab) = h(a)h(b)$ means that the map $h$ _preserves the structure_ of $G$

<div class="indent" style="padding-left:40px">
<h3>Example</h3>

- Consider the function $h$ that reduces an integer to integer modulo 5:

$$
h: \mathbb{Z} \rightarrow \mathbb{Z}_5, \,
h(n) = n \quad (\text{mod } 5)
$$

- Since the group operation is _additive_, the "homomorphism property" becomes

$$
h(a + b) = h(a) + h(b)
$$

- This means "first add, then reduce modulo 5" OR "first reduce modulo 5, then add"
</div>

- A homomorphism that is injective is called _embedding_: the group $G$ "embeds" into $H$ as a _subgroup_
  - If $h$ is not injective, is called _quotient_
  - If $h(G) = H$, then $h$ is surjective
- A homomorphism that is both **injective and surjective** is an _isomorphism_

## Isomorphism

- Two isomorphic groups may name their elements differently and may look different
  - But the isomorphism between them guarantees that they have the same structure
- When two groups $G$ and $H$ have an isomorphism between them, we say that "G and H are isomorphic", written $G \cong H$

## References

- http://www.math.clemson.edu/~macaule/classes/m20_math4120/slides/math4120_lecture-4-01_h.pdf
