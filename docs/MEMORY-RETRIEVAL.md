# Memory Retrieval

Tsuzuri Harness keeps **Markdown / YAML in Git as the canonical memory source** even when a long-lived instance grows large.

Search acceleration is allowed, including semantic vector search, but it stays a derived runtime aid.

## The rule

> **Git is memory. Search indexes help find memory.**

```text
canonical memory
(Markdown / YAML / Git)
        ↓
optional derived index
        ↓
candidate paths / ids
        ↓
re-read canonical files
        ↓
current task context
```

A vector similarity result is never a memory fact by itself.

## Why this exists

A small instance can read the few memory files relevant to a task directly. A long-lived instance may eventually contain enough retained state that manual scanning or loading broad memory sets wastes context and lowers recall quality.

The Harness therefore defines a host-neutral retrieval contract without requiring a particular database.

## Retrieval order

Use the cheapest sufficient mechanism:

1. **Metadata / exact lookup** — ids, paths, status, memory type, dates, tags.
2. **Lexical / full-text search** — repository search, grep, SQLite FTS, host search.
3. **Semantic search when useful** — embeddings or another semantic method for conceptually similar memories that use different wording.
4. **Canonical re-read** — fetch the actual retained Markdown / YAML entry before using it.
5. **Validation** — check current status, supersession, provenance, privacy, and relevance.

The implementation may combine these internally. What matters is that retrieval discovers candidates and canonical state remains authoritative.

## No required Vector DB

Compatible implementations may use:

- GitHub / repository search;
- `grep` / `ripgrep`;
- SQLite FTS;
- host-native retrieval;
- local embeddings + FAISS or similar;
- Qdrant, Pinecone, or another remote vector store when deliberately chosen.

None of these are mandatory Harness dependencies.

If semantic search is unavailable, an instance must still work.

## Derived indexes are disposable

A local adapter may keep generated retrieval state under the ignored runtime workspace, for example:

```text
.runtime/retrieval/
├─ memory.sqlite
├─ lexical-index/
└─ vectors/
```

Do not normally commit generated embeddings, vector arrays, or full-text databases to the instance repository.

They should be reproducible from:

- canonical repository state; and
- the declared indexing method / model / chunking configuration when relevant.

Changing an embedding model may change ranking. It must not silently change Identity, Memory, Relationship, or Skill state.

## Stale index behavior

A retrieval adapter should track source freshness when practical, such as the repository revision or file digests used to build the index.

If the index is stale:

- refresh it; or
- bypass it and search canonical state directly.

Never reconstruct missing canonical memory from stale vectors or cache text.

## Active Memory vs Archive

Search current active memory first for normal reasoning.

Search Chronicle / Archive when the task specifically asks for historical reconstruction, old events, or provenance not present in active memory.

Finding an archived item does not automatically make it active memory again.

## Memory Metabolism still matters

Vector search does not solve poor memory structure.

If retrieval repeatedly returns duplicates, obsolete current-state entries, or noisy low-value fragments, the right response may be **Memory Metabolism**: consolidate, supersede, abstract, demote, prune, repair, or conserve canonical state.

```text
Retention Routing
      ↓
Canonical Memory
      ↓
Memory Metabolism  ← storage quality
      ↓
Memory Retrieval   ← retrieval quality
      ↓
Current Task
```

See [`../function/memory-retrieval.md`](../function/memory-retrieval.md) for the kernel contract and [`../function/memory-retrieval.schema.yaml`](../function/memory-retrieval.schema.yaml) for the host adapter shape.

## Privacy

Do not upload private memory to an external embedding provider merely because semantic search is available.

External indexing must respect repository authority, privacy mode, provider data handling, and any additional paid usage approval. Local or host-native search is a valid and often simpler option.
