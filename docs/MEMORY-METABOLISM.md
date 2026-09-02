# Memory Metabolism

English is canonical. A Japanese translation is available at [`MEMORY-METABOLISM.ja.md`](MEMORY-METABOLISM.ja.md).

A long-lived AI should not treat memory as an append-only pile.

Tsuzuri Harness separates **retention** from **maintenance**:

```text
experience
   ↓
retention
   ↓
useful durable memory
   ↓ time / new evidence / reuse
memory metabolism
   ↓
preserve / consolidate / supersede / abstract / demote / prune / repair / conserve
```

## What metabolism is for

It helps when memory becomes duplicated, stale, contradictory, over-specific, or structurally noisy.

It is not a scheduled requirement and should not run after every session.

## What it must protect

- historical truth
- provenance
- identity/relationship ownership boundaries
- archive policy
- skill provenance
- privacy and deletion requests

Removing something from active memory does not automatically erase an archive or rewrite the past.

## Suggested user prompts

- `Review what you remember.`
- `Do you still need these memories?`
- `Can you clean up duplicate memories?`

Japanese examples:

- `覚えてること整理して`
- `この記憶、まだ必要？`

A review may correctly result in **Conserve / no change**.

Canonical kernel contract: [`../function/memory-metabolism.md`](../function/memory-metabolism.md)
