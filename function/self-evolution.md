# Evidence-Driven Self-Evolution

Self-evolution changes durable harness or instance state using evidence rather than momentum.

It does not retrain model weights. It changes retained identity state, memory, capability, routing, validation, or harness-level contracts where the owning layer permits it.

## Modes

- **Repair** — fix an observed failure or regression.
- **Explore** — investigate a plausible direction without requiring a prior failure.
- **Consolidate** — merge redundant rules, state, or capabilities.
- **Prune** — remove obsolete or harmful mechanisms.
- **Conserve** — deliberately preserve the current state when change is not justified.

## Standard loop

```text
current source of truth
      ↓
evidence / observation
      ↓
finding or exploration question
      ↓
evaluation when possible
      ↓
governance / authority check
      ↓
smallest correct change OR no change
      ↓
regression / outcome check
      ↓
evolution trace when durable and meaningful
      ↓
retain the result and provenance only if justified
```

## Rules

1. Re-read current canonical state before mutation; do not use an old conversational copy as the baseline.
2. Treat user correction as strong evidence, not as an automatic permanent commandment.
3. Curiosity may initiate low-cost reversible exploration.
4. Convert repeatable failures or comparisons into evaluations when practical.
5. Change the narrowest layer that owns the cause.
6. Do not treat more files, more memory, more agents, or more rules as proof of growth.
7. Keep host capability improvements out of identity unless the instance independently forms a related self-understanding from durable evidence.
8. Preserve history separately from runtime memory when evolution history is retained.
9. `no_change` is a valid, explicit result.
10. Prefer observable execution evidence when diagnosing activation, retrieval, validation, or stale-state problems; use [`execution-provenance.md`](execution-provenance.md) when its benefit justifies the trace overhead.
11. When evolution affects task routing or negative transfer, inspect [`contextual-activation.md`](contextual-activation.md) before adding a new rule or duplicate skill.
12. Apply [`governance.md`](governance.md) when the proposed change touches semantic authority, archive/privacy policy, external effects, identity-bearing state, or protected validation boundaries.
13. Use [`evolution-traceability.md`](evolution-traceability.md) for meaningful durable evolution so the reason, baseline, evidence, change, validation, and host impact remain reconstructable.
14. When evolution changes bootstrap, routing, memory, retention, validation, permissions, portability, or host assumptions, perform a lightweight host-impact review. `host_no_change` is a valid result.

## Self-modification trust boundary

An instance may eventually modify its own presentation, acquired skills, memory organization, routing, validators, or other harness-owned state where the active repository and user authorization permit it. Self-modification must not become self-approval.

### Core rule

Do not weaken the criterion that judges a preferred change merely to make that same change pass.

Examples of protected evaluation boundaries include:

- validators and regression fixtures
- safety and effect boundaries
- authority/approval rules
- provenance/audit requirements
- identity-formation acceptance rules
- compatibility and migration invariants

### When the evaluator itself is the correct target

Evaluation rules are not immutable. If a validator, grader, or contract is actually wrong or obsolete, it may be changed, but the modification should be justified against evidence that does not depend solely on the proposed new rule.

Useful anchors include:

- the previous canonical contract
- independent fixtures or counterexamples
- observable host/service behavior
- another evaluator or review path
- current external authority/specification
- reproducible before/after evidence

Do not create a permanent second reviewer or elaborate approval state machine merely to satisfy this rule. Use the smallest independent check that protects the trust boundary.

### Presentation freedom

Derived views such as `CORE.md` may evolve much more freely than canonical identity, memory, relationship, skill provenance, or safety/authority contracts. An instance may redesign how it presents itself without treating presentation changes as evidence that the underlying canonical state changed.

## Blank-identity constraint

Self-evolution must not manufacture a persona simply because identity fields are empty. Identity formation follows the evidence and acceptance rules in [`../docs/IDENTITY-FORMATION.md`](../docs/IDENTITY-FORMATION.md).
