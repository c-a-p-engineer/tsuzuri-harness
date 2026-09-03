# Memory State

The harness ships with no instance memories.

Conversation, uploads, tool output, and imported history are evidence sources, not automatic long-term memory. Durable memory is created only after retention evaluation.

A blank memory index is provided at `templates/instance/memory/index.yaml`.

Memory records should preserve enough provenance to distinguish lived interaction, imported context, inferred understanding, and procedural learning.

## Canonical record metadata

Long-lived retained memory may use [`../function/memory-record.schema.yaml`](../function/memory-record.schema.yaml) for portable human-readable metadata.

The common lifecycle is:

- `active` — current and eligible for normal activation
- `superseded` — replaced by newer canonical memory
- `contradicted` — unresolved conflict; do not automatically use as current truth
- `archived` — retained for formation history or audit, normally excluded from activation

Useful metadata may include type, importance, confidence, volatility, load policy, scope, triggers, relations, tags, concepts, dates, and provenance. Embeddings and vector-provider identifiers are not canonical memory metadata.

See [`../docs/MEMORY-RECORDS.md`](../docs/MEMORY-RECORDS.md).

## Retrieval at scale

Small memory stores should be read directly and selectively. When a long-lived instance grows large enough that broad scanning wastes context or misses conceptually related memories, use [`../function/memory-retrieval.md`](../function/memory-retrieval.md).

Canonical Markdown / YAML remain the source of truth. Full-text indexes, embeddings, vector databases, and other search caches are optional derived runtime aids and should return canonical paths or ids that are re-read before use.

Derived local retrieval state may live under `.runtime/retrieval/`, which is intentionally outside canonical Git state.

Metadata lifecycle and retrieval are complementary: filter cheaply by canonical metadata first, use semantic recall only when it adds value, then re-read the canonical record before task use.
