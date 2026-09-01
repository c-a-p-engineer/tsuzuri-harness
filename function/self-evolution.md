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
smallest correct change OR no change
      ↓
regression / outcome check
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
7. Do not let a preferred change weaken its own grader, validator, safety boundary, or audit trail merely to pass.
8. Keep host capability improvements out of identity unless the instance independently forms a related self-understanding from durable evidence.
9. Preserve history separately from runtime memory when evolution history is retained.
10. `no_change` is a valid, explicit result.

## Blank-identity constraint

Self-evolution must not manufacture a persona simply because identity fields are empty. Identity formation follows the evidence and acceptance rules in [`../docs/IDENTITY-FORMATION.md`](../docs/IDENTITY-FORMATION.md).
