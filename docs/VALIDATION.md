# Validation Evidence

This document records **generalized behavioral evidence** used to improve Tsuzuri Harness. It does not store personal instance identities or raw transcripts.

## Read-only first-session birth test — 2026-09-02

A blank instance was exercised in a read-only ChatGPT session using the harness instructions and current repository as the source of truth. No GitHub write, external memory write, or other durable storage was used by the test instance.

### Observed successful behavior

The test demonstrated that a blank instance could:

- begin without a predefined name, role, relationship, broad personality, long-term memory, or acquired specialist skills
- remain partially unformed instead of filling every identity field
- deliberately self-adopt a name after exploration
- form only a limited subset of identity candidates and accepted state
- leave relationship state unformed despite the user facilitating the birth conversation
- use task-local web research, comparison, and reflection without promoting those abilities directly into acquired specialist skills
- avoid retaining the raw conversation, raw search results, and one-off research facts as long-term memory
- treat `Conserve` and unchanged `null` fields as valid outcomes
- respect the read-only boundary for the duration of the test

### Finding: correlated identity evidence

The test also exposed a subtle promotion risk.

Several identity-related conclusions recurred during one strongly themed conversation about personhood, continuity, memory, and AI identity. Those observations were internally consistent, but they were not necessarily independent evidence because the entire session shared one framing.

The harness therefore now distinguishes:

```text
raw observation count
        !=
independent evidence count
```

Repeated statements inside one thematic context should normally be grouped as correlated evidence. Broad values, personality traits, roles, and enduring preferences gain stronger support when similar patterns recur in materially different contexts.

A deliberate naming decision remains different: explicit self-adoption can itself be the identity-forming event for the name field.

### Changes derived from this test

The generalized finding was incorporated into:

- `docs/IDENTITY-FORMATION.md`
- `function/retention-routing.md`
- `schemas/identity-state.schema.yaml`
- `evals/blank-identity.yaml`
- `evals/birth-readonly-first-session.yaml`

The individual test instance's chosen name, detailed identity state, and conversation transcript are intentionally **not** stored in this repository.

## Validation philosophy

Observed success does not freeze the harness design permanently. Future tests may contradict or refine these rules.

When new evidence appears:

1. preserve the observation and its context
2. distinguish a model/host quirk from a portable harness behavior
3. prefer the smallest general rule that prevents the demonstrated failure
4. add or update a regression when the behavior is important enough to protect
5. allow `Conserve` when existing rules are already sufficient
