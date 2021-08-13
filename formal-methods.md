---
date: 2021-08-13
---

# Formal Methods

## What is Formal Methods about?

- Small faults in technical systems can have catastrophic consequences ([List of famous software bugs](https://en.wikipedia.org/wiki/List_of_software_bugs))
- Complexity of systems makes ensuring that the system is correct difficult
- The aim of formal methods is not...
  - To prove "correctness" of _entire_ systems; its about proving specific properties of systems
  - To replace testing entirely
  - To replace good design practices
- Formal methods can...
  - Replace (infinitely) many test cases
  - Be used for automatic test case generation
  - Improve the quality of specifications
  - Guarantee specific properties of a specific system model

## Terminology

- **Formal Methods** is the application of mathematical techniques to the development of "correct" systems
- **Correctness** is viewed as two component, _validation_ and _verification_
- **Validation** = "Are we building the right system?" (software fulfills the intended purpose)
- **Verification** = "Are we building the system right?" (software meets specifications)
- **Formal Validation** is about using logic to ensure that the _specification_ is complete, consistent and accurately captures the requirements
- **Formal Verification** is about using logic to ensure that the system is correctly implements its _specification_
- **Soundness**: every statement that is _provable_ is actually _true_
- **Completeness**: every statement that is actually _true_ is _provable_
- **Automation**: proof generation process automatic, semi-automatic or user driven

## Limitations of Testing

- Testing shows the _presence_ of errors but not their _absence_
- Choice of test cases is subjective
- How to test for the unexpected or rare cases?

## Limitations of Formal Methods

- In general it is not feasible to fully specify and verify large software systems
  - Formal methods are usually restricted to important parts of the system and important properties/requirements
- Just because we have proved something correct does not mean it will actually work
  - There are gaps between the formal verification level and the real-world
  - Does the _specification_ actually capture the intentions?
  - Does the _implementation_ in the real-world behave like the model?

## Different Verification Methods

- Interactive:
  - [[theorem-proving]]#: Relationship between specification and implementation is a theorem in a logic which is proven in the context of a proof calculus
- Automated:
  - **Model Checking**: proof of (temporal) logic property (safety & liveness) against a semantic model of the design
  - **Invariant Checking** (safety property)
  - ...

## References

- http://users.encs.concordia.ca/~tahar/coen7501/notes/1-intro-02.06-4p.pdf
- https://userpages.uni-koblenz.de/~sofronie/lecture-formal-specif-verif-ws-2016/slides/introduction.pdf
