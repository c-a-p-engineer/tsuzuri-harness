# Memory State

The harness ships with no instance memories.

Conversation, uploads, tool output, and imported history are evidence sources, not automatic long-term memory. Durable memory is created only after retention evaluation.

A blank memory index is provided at `templates/instance/memory/index.yaml`.

Memory records should preserve enough provenance to distinguish lived interaction, imported context, inferred understanding, and procedural learning.

## Retrieval at scale

Small memory stores should be read directly and selectively. When a long-lived instance grows large enough that broad scanning wastes context or misses conceptually related memories, use [`../function/memory-retrieval.md`](../function/memory-retrieval.md).

Canonical Markdown / YAML remain the source of truth. Full-text indexes, embeddings, vector databases, and other search caches are optional derived runtime aids and should return canonical paths or ids that are re-read before use.

Derived local retrieval state may live under `.runtime/retrieval/`, which is intentionally outside canonical Git state.
