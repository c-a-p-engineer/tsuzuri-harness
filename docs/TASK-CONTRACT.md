# Task Contract and Completion

English is canonical. See [`TASK-CONTRACT.ja.md`](TASK-CONTRACT.ja.md) for Japanese.

For complex work, Tsuzuri Harness separates four questions:

1. What are we trying to make true?
2. Which decisions and risks belong to the task owner, and which implementation details may be delegated?
3. How do we know the task actually finished?
4. What, if anything, should the instance learn from it?

The fourth question must not replace the third.

## Delegated implementation ownership

For substantial agent-authored work, the task owner normally retains the externally meaningful **Why / What / Contract / Boundary / Acceptance / Risk**. Within that contract, the implementation agent may own much of the **How**: internal design, implementation details, refactoring, and local optimization.

This does not mean “trust the black box,” and it does not require line-by-line human reading to be the primary safety mechanism. Close delegation with the level of contracts, tests/evals, observability, evidence, and recoverability appropriate to the task.

When an internal architectural, security, performance, migration, or irreversible tradeoff materially changes the external contract or risk, return that decision to the owning layer.

For large systems, current implementation understanding should be reconstructable on demand from durable sources such as the repository, contracts, tests, schemas, version history, and observable execution evidence rather than relying only on a human's long-term memory of every implementation detail.

## Typical flow

```text
objective / deliverables / authority
        ↓
ownership boundary
Why / What / Contract / Boundary / Acceptance / Risk
        ↓
delegated implementation within that contract
        ↓
work and verification
        ↓
re-derive completion from current source of truth
        ↓
task outcome: passed / partial / failed / blocked
        ↓
retention or skill-promotion review
```

A successful task does not have to create memory or a skill. A failed task may still produce a reusable finding.

Use the canonical runtime contract at [`../function/task-contract.md`](../function/task-contract.md).
