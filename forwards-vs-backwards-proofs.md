---
date: 2021-08-17
---

# Forwards vs Backwards Proofs

- Backwards proof is using the rules backwards

- Given the rule:

$$
\begin{prooftree}
  \AxiomC{\(\vdash S_1 \quad \dots \quad \vdash S_n\)}
  \UnaryInfC{\(\vdash S\)}
\end{prooftree}
$$

- **Forwards proof:**
  - If we have proved $\vdash S_1 \dots \vdash S_n$, we can deduce $\vdash S$
- **Backwards proof:**
  - To prove $\vdash S$, it is sufficient to prove $\vdash S_1 \dots S_n$

## References

- https://www.cl.cam.ac.uk/archive/mjcg/HoareLogic/Lectures/Oct15.pdf
- https://leanprover.github.io/logic_and_proof/natural_deduction_for_propositional_logic.html
