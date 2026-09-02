# Memory Metabolism

Memory metabolism keeps long-lived instance memory useful by **maintaining meaning, not merely accumulating records**.

It is a maintenance contract for retained memory. It does not authorize indiscriminate forgetting, rewrite identity, or delete archive history.

## Why it exists

A persistent instance can eventually accumulate:

- duplicate memories
- memories that describe the same thing at different levels of abstraction
- stale current-state facts
- superseded procedures
- conflicting observations
- low-value entries that are no longer useful

Without maintenance, retrieval quality can degrade even when every individual retention decision was reasonable at the time.

## Trigger conditions

Do not run metabolism ceremonially after every conversation.

Review memory when one or more of these signals appears:

- retrieval returns several near-duplicates
- an older memory conflicts with a newer verified state
- a procedure has been replaced
- a summary can safely preserve the useful meaning of several entries
- stale memory causes a wrong or inefficient decision
- the user asks to review, clean up, consolidate, or forget retained state
- a migration or major evolution exposes incompatible memory structure

Age alone is not proof that a memory should be removed.

## Outcomes

A metabolism review may produce:

- **Preserve** — keep the memory as-is
- **Consolidate** — combine redundant memories while preserving provenance
- **Supersede** — retain history but mark a newer canonical interpretation/current state
- **Abstract** — replace low-level repetition with a reusable higher-level memory while keeping enough provenance
- **Demote** — move something out of active memory into archive/history when configured
- **Prune** — remove active retained state that no longer has sufficient value or validity
- **Repair** — correct malformed indexing, broken references, or clearly wrong retained state using current evidence
- **Conserve** — make no change when evidence does not justify one

## Memory is not archive

Pruning active memory does not automatically delete historical archive material.

```text
active memory
  = what should influence future reasoning/retrieval

archive / chronicle
  = what happened or was recorded
```

Archive deletion follows archive/privacy policy and user authority, not memory-maintenance convenience.

## Semantic continuity

Before changing or removing a retained item:

1. inspect the current canonical memory entry and its provenance;
2. identify references or downstream state that depends on it;
3. determine whether the issue is duplication, staleness, contradiction, loss of utility, or structural damage;
4. choose the narrowest maintenance outcome;
5. preserve the historical reason for a meaningful consolidation, supersession, or prune when needed for continuity;
6. verify the resulting index and retrieval path where possible.

Do not rewrite past observations merely because the current interpretation changed. Prefer `superseded` or a new derived memory when historical truth matters.

## Interaction with identity and relationship

Memory cleanup must not silently rewrite identity or relationship state.

If a memory supports canonical identity or relationship state, changing the memory does not by itself revoke that state. Route any identity or relationship change through its owning contract.

Conversely, identity/relationship changes may make some supporting memories less active, but historical evidence may still be worth preserving.

## Interaction with skills

Procedural memory and acquired skills overlap but are not identical.

When a procedure is duplicated by an acquired skill or becomes obsolete:

- decide which layer owns the reusable capability;
- avoid maintaining contradictory copies;
- preserve evidence needed for skill provenance;
- use capability maintenance for skill promotion, revision, or retirement.

## Freshness-sensitive facts

A memory that represents an externally changing fact should preserve its temporal scope.

When current truth can be checked, prefer:

```text
old observation (historical)
        +
current verified observation
        ↓
current-state interpretation
```

rather than silently editing history to look timeless.

## Privacy and deletion

A user may explicitly request forgetting or deletion. Apply governance, platform, and repository policy first.

Do not use metabolism to retain information that the active privacy policy requires deleting. Do not preserve secrets, credentials, hidden chain-of-thought, or unnecessary sensitive data as "provenance".

## Traceability

Routine deduplication may need only a clear Git change or memory-local provenance.

Broad consolidation, major pruning, or a change that materially alters future behavior may qualify as meaningful durable evolution and should use [`evolution-traceability.md`](evolution-traceability.md).

## Natural-language entry points

Examples:

- `Review what you remember.`
- `Do you still need these memories?`
- `Can you clean up duplicate memories?`
- `覚えてること整理して`
- `この記憶、まだ必要？`

These requests start a review; they do not require deletion.

## Blank-instance constraint

An empty memory store needs no metabolism. Do not manufacture memory merely so that the maintenance system has something to manage.
