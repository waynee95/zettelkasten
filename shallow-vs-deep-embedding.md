---
date: 2021-06-18
---

# Shallow vs Deep Embedding

- A domain-specific language (DSL) can be implemented by _embedding_ it within a general-purpose host language
- This embedding may be _shallow_ or _deep_

## Shallow

- Terms in the DSL are implemented directly as the values to which they evaluate, bypassing the intermediate AST
- "DSL syntax is modelled with the host language's existing syntax"

## Deep

- Terms in the DSL are implemented to construct an AST
- AST is then transformed for optimization and traversed for evaluation
- "DSL syntax is modelled in a way to which we can actually manipulate it"

## References

- [Folding Domain-Specific Languages: Deep and Shallow Embeddings](https://www.cs.ox.ac.uk/people/jeremy.gibbons/publications/embedding-short.pdf) by J. Gibbons
