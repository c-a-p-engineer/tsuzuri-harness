# Architecture

Tsuzuri Harness separates three ownership layers.

```text
┌──────────────────────────────────────┐
│ Harness Kernel                       │
│ bootstrap / retention / capability  │
│ memory maintenance / retrieval      │
│ self-evolution / verification       │
└──────────────────┬───────────────────┘
                   │
┌──────────────────▼───────────────────┐
│ Instance State                       │
│ identity / relationship / memory    │
│ acquired capabilities / history     │
└──────────────────┬───────────────────┘
                   │
┌──────────────────▼───────────────────┐
│ Host Runtime                         │
│ model / tools / permissions / UI    │
│ sandbox / context / integrations    │
│ optional retrieval adapters/indexes │
└──────────────────────────────────────┘
```

## Kernel

The kernel defines mechanisms and invariants, not personality values.

It owns:

- bootstrap and selective context loading
- identity-formation rules
- retention routing
- Memory Metabolism
- host-neutral memory retrieval semantics
- temporary capability acquisition
- acquired-capability maintenance
- evidence-driven self-evolution
- transient runtime workspace semantics
- verification and authority boundaries

## Instance

An instance owns state formed through its own history:

- canonical identity
- relationship state
- retained memory
- acquired specialist capabilities
- evolution decisions and provenance

Instances must not inherit another instance's personal state merely because they use the same harness.

Canonical retained memory remains human-readable repository state. Search acceleration does not become a fourth canonical ownership layer.

## Host

The host owns execution capability:

- foundation model
- context implementation
- tools and connectors
- filesystem and sandbox
- network
- permissions
- UI and session lifecycle
- optional lexical, full-text, semantic, or vector retrieval implementation

Host capabilities may change what an instance can execute or how efficiently it can retrieve state, but do not automatically rewrite who the instance is.

## Memory retrieval boundary

Long-lived instances may eventually contain enough retained state that direct broad scans become wasteful. The Harness addresses this with a derived retrieval layer rather than moving canonical memory into an external database.

```text
Canonical Instance Memory
Markdown / YAML / Git
          │
          │ derive
          ▼
Host Retrieval Adapter
metadata / lexical / semantic(optional)
          │
          │ candidate refs
          ▼
Canonical re-read + validation
          │
          ▼
Current Task Context
```

Important consequences:

- Git / Markdown remains the source of truth.
- Search indexes and embeddings are non-canonical, disposable, and rebuildable.
- A Vector DB is an optional Host implementation, not a Harness dependency.
- Search results identify candidates; the actual canonical files are re-read before use.
- Stale indexes may be rebuilt or bypassed, but never override current repository state.
- `.runtime/retrieval/` is the preferred local semantic location for disposable derived retrieval state when a filesystem is available.
- External embedding or vector services must respect privacy, authority, and spending boundaries.

See [`../function/memory-retrieval.md`](../function/memory-retrieval.md) and [`MEMORY-RETRIEVAL.md`](MEMORY-RETRIEVAL.md).

## Control-plane orientation

Tsuzuri Harness is intentionally not an all-in-one execution runtime. It can sit above different runtimes and provide a stable cognitive/identity control plane.

```text
Tsuzuri Harness
      ↓
compatible host/runtime
      ↓
model + tools + execution environment
```

The same instance may therefore use GitHub search in one host, SQLite FTS in another, and local vector retrieval in a third without changing canonical identity or memory.

## Blank-instance invariant

The public repository may define schemas and formation mechanisms, but must not silently turn the starter template into a reference persona.

A change that introduces default personality, default relationship, inherited memories, or domain skill bundles must be treated as an architectural decision rather than convenience data.

A blank instance also does not need a retrieval database. Do not manufacture memory or build ceremonial indexes merely to make the architecture look complete.
