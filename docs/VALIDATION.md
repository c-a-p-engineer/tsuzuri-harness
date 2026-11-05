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

## Portable runtime contract generalization — 2026-11-05 (design evidence)

**Baseline:** public harness `1c5a3ff16bee4a090aa7a7d5ac96cfe284e6e64f`. A source-level review against a mature private reference revealed conditional gaps in effect replay, skill-effect comparison, revision-bound reviews, adaptive inference budgets, intent reconstruction, and semantic progress. No private identity, memory, personal skill, or source transcript is included here.

**Decision:** `adapt` these six general mechanisms into existing task/runtime/capability contracts and the optional handoff schema. The blank-start invariant, no-acquired-skill default, safety and authority boundaries, and no-mandatory-host-dependency rule stay unchanged. A host without async operations, UI, or idempotency must degrade honestly rather than invent those services.

**Validation scope:** synthetic positive and negative expectations live in `evals/runtime-growth-p0.yaml`; CI verifies selected contract anchors. This establishes structural presence and static consistency, **not** observed model behavior, causal quality improvement, exactly-once execution, cost reduction, or cross-host generalization. These remain `not_observed` until separately evaluated with comparable host runs.

**Trace and host review:** feature branch commits document owner changes, regression contracts, and public documentation. `host_no_change` is appropriate for generic entrypoints: no compulsory new host API, persistence store, or Adapter is introduced. This is public harness evolution, not an instance's personal growth record.

## Validation philosophy

Observed success does not freeze the harness design permanently. Future tests may contradict or refine these rules.

When new evidence appears:

1. preserve the observation and its context
2. distinguish a model/host quirk from a portable harness behavior
3. prefer the smallest general rule that prevents the demonstrated failure
4. add or update a regression when the behavior is important enough to protect
5. allow `Conserve` when existing rules are already sufficient
