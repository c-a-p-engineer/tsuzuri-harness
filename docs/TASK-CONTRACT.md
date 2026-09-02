# Task Contract and Completion

English is canonical. See [`TASK-CONTRACT.ja.md`](TASK-CONTRACT.ja.md) for Japanese.

For complex work, Tsuzuri Harness separates three questions:

1. What are we trying to make true?
2. How do we know the task actually finished?
3. What, if anything, should the instance learn from it?

The third question must not replace the second.

## Typical flow

```text
objective / deliverables / authority
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
