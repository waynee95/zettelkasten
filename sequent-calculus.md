---
date: 2021-07-09
---

# Sequent Calculus

- $\Gamma \Longrightarrow \Delta$ is called a _sequent_
  - The left side $\Gamma$ are the assumptions called _antecedent_
  - The right side $\Delta$ is the conclusion called _succedent_
- A _proof_ of the sequent $\Gamma \Longrightarrow \Delta$ is a finite tree constructed using inference rules such that the root is labeled with $\Gamma \Longrightarrow \Delta$ and axioms as leafs

## Dealing with quantifiers

$$
\begin{prooftree}
  \AxiomC{\(\Gamma \Longrightarrow \Delta, \varphi[t/x]\)}
  \RightLabel{ \((\exists_R)\)}
  \UnaryInfC{\(\Gamma \Longrightarrow \Delta, \exists x \, \varphi\)}
\end{prooftree}
$$

- You prove "$\exists x \, \varphi$" by specifying a concrete witness that would fullfil $\varphi$
- $t$ is a ground term

$$
\begin{prooftree}
  \AxiomC{\(\Gamma, \varphi[t/x] \Longrightarrow \Delta\)}
  \RightLabel{ \((\forall_L)\)}
  \UnaryInfC{\(\Gamma, \forall x \, \varphi \Longrightarrow \Delta\)}
\end{prooftree}
$$

- If you want to use the hypothesis "$\forall x \, \varphi$", then we can use any witness and continue with $\varphi[t/x]$
- $t$ is a ground term

$$
\begin{prooftree}
  \AxiomC{\(\Gamma \Longrightarrow \Delta, \varphi[c/t]\)}
  \RightLabel{ \((\forall_R)\)}
  \UnaryInfC{\(\Gamma \Longrightarrow \Delta, \forall x \, \varphi\)}
\end{prooftree}
$$

- You prove "$\forall x \, \varphi$" by instantiating $x$ arbitrarily and then prove $\varphi$ without any additional assumptions on $x$
- $c$ is a new constant symbol that is not already used anywhere
  - It has to be new because we do not want to make any assumptions on it

$$
\begin{prooftree}
  \AxiomC{\( \Gamma, \varphi[x/c] \Longrightarrow \Delta \)}
  \RightLabel{ \((\exists_L)\)}
  \UnaryInfC{\(\Gamma, \exists x \, \varphi \Longrightarrow \Delta\)}
\end{prooftree}
$$

- If you want to use "$\exists x \, \varphi$", you can use $\varphi[c/x]$ for a fixed but arbitrary $c$
  - $c$ represents the existing but unkown witness for the existensial statement
  - Except that the witness has the listed property, no other assumptions may be made

## References

- [(german) Logik und Diskrete Strukturen](https://www.tcs.ifi.lmu.de/lehre/ss-2016/lds/material/neus-skript-zum-logik-teil-der-vorlesung) by Martin Hofmann @ LMU
