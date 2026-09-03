# Memory Retrieval

Memory retrieval selects the smallest useful set of canonical retained state for the current task without loading the entire memory store.

It is a **retrieval contract**, not a database requirement. Markdown / YAML in the instance repository remain canonical. Search indexes, embeddings, full-text databases, and vector stores are derived runtime aids only.

## Core invariant

```text
canonical memory in Git
        ↓ derive when useful
runtime retrieval index
        ↓ candidate paths / ids
canonical memory re-read
        ↓ verify relevance / status / provenance
current task context
```

A retrieval score never overrides canonical memory content, status, provenance, governance, or Memory Metabolism.

## Apply when

Use memory retrieval when direct selective reads are no longer sufficient, for example when:

- retained memory has grown large enough that loading or manually scanning it would waste context;
- the task refers to an older concept without a reliable exact keyword;
- several memory types, dates, tags, or related concepts may contain the needed state;
- retrieval failures or near-duplicate results suggest that a structured search step would improve recall.

Do not invoke a retrieval subsystem ceremonially for an empty or small memory store when direct reads are cheaper and clearer.

## Retrieval pipeline

Prefer the cheapest sufficient method and preserve the distinction between **finding candidates** and **trusting memory**.

1. **Scope the query** — derive the current task, relevant memory classes, temporal scope, status, and known identifiers.
2. **Metadata / lexical retrieval** — use paths, ids, tags, headings, exact terms, full-text search, or repository search when sufficient.
3. **Semantic retrieval (optional)** — use embeddings or another semantic mechanism only when it materially improves recall for conceptually similar but lexically different memories.
4. **Return canonical references** — retrieval output should primarily identify canonical memory paths / ids and enough retrieval evidence to inspect them.
5. **Re-read canonical state** — fetch the actual Markdown / YAML entry before allowing it to influence the task.
6. **Validate** — confirm that the item is current enough for the claim, not superseded or invalid for the current use, and that provenance / privacy / authority remain compatible.
7. **Activate minimally** — place only the necessary verified meaning into the current task context.

A host may combine lexical, metadata, and semantic methods in one engine. The semantic order above defines responsibilities, not mandatory internal implementation passes.

## Host-neutral query contract

When structure helps, use [`memory-retrieval.schema.yaml`](memory-retrieval.schema.yaml).

Typical query inputs include:

- natural-language query;
- memory types or scopes;
- canonical status filters;
- optional time range;
- known ids / paths / tags;
- result budget based on the current context and task, not a universal fixed number.

Typical result fields include:

- canonical path or id;
- retrieval methods used;
- relevance evidence or rank when available;
- source revision / index revision when the adapter can provide it;
- whether the canonical entry has been re-read and validated.

The contract does not require a numeric similarity score.

## Derived index boundary

Derived retrieval state is **non-canonical and disposable**.

The default local semantic location is under the already ignored transient workspace, for example:

```text
.runtime/retrieval/
├─ memory.sqlite
├─ lexical-index/
└─ vectors/
```

This path is illustrative; hosts may map the contract to a native search service, temporary database, in-memory index, or no persistent cache at all.

Rules:

- do not commit embeddings, vector arrays, generated FTS databases, or search caches as canonical instance memory by default;
- a derived index must be rebuildable from canonical repository state plus its declared indexing method;
- changing embedding model, tokenizer, chunking, or search engine must not rewrite identity or memory merely because rankings changed;
- stale or missing derived indexes degrade retrieval convenience, not canonical truth.

## Freshness and stale indexes

When an adapter can track source revision, associate the index with a repository revision, file digest set, or equivalent observable source identity.

If the canonical source changed after indexing:

- rebuild or incrementally refresh the affected derived index when practical; or
- bypass the stale index and use direct canonical search / reads.

Do not present stale derived output as current canonical memory. Final candidate use still requires a canonical re-read.

## Retrieval adapters

Compatible hosts may implement retrieval with any combination of:

- repository / file search;
- `grep` / `ripgrep`;
- SQLite FTS or another local full-text index;
- host-native semantic search;
- local embedding models plus FAISS / SQLite extensions / similar indexes;
- remote vector databases such as Qdrant or Pinecone when explicitly chosen and authorized.

No specific vector database, embedding provider, model, or API is a Harness dependency.

If semantic retrieval is unavailable, the Harness must remain usable through metadata, lexical search, indexes, direct reads, and Memory Metabolism.

## Privacy and external indexing

Private memory must not be sent to an external embedding or search provider merely because semantic search is available.

Before a host transmits private repository content to an external indexing service, verify:

- the user / repository owner authorized that data boundary;
- secrets and excluded private material are not indexed unnecessarily;
- provider retention and access behavior are acceptable for the configured privacy mode;
- additional paid usage, if any, has the required spending approval.

Local or host-native retrieval may be preferred when it satisfies the task with a smaller privacy or operational surface.

## Active memory and archive tiers

Retrieval should respect the semantic difference between active memory and Archive / Chronicle history.

- Search active memory first for current reasoning and reusable durable meaning.
- Search Archive / Chronicle only when the task explicitly needs historical reconstruction, provenance, or an older event that active memory does not cover.
- An archived match does not automatically become active memory again. Route renewed durable value through normal retention / metabolism rules.

## Interaction with Memory Metabolism

Retrieval quality and storage quality are separate responsibilities.

```text
Retention Routing
      ↓
canonical retained memory
      ↓
Memory Metabolism ── improves stored meaning / structure
      ↓
Memory Retrieval ─── finds task-relevant canonical state
      ↓
current task
```

Signals such as repeated near-duplicates, stale current-state matches, or noisy low-value retrieval may justify a Memory Metabolism review. Do not solve poor canonical memory quality only by making the vector search more complex.

## Failure behavior

Classify failures narrowly:

- no semantic adapter → fall back to lexical / metadata / direct reads;
- derived index missing → rebuild when worthwhile or continue without it;
- derived index stale → refresh or bypass;
- candidate path missing → treat the result as stale and do not reconstruct content from the index;
- candidate conflicts with canonical state → canonical state wins;
- too many weak matches → narrow the task scope / metadata filters before blindly increasing the retrieval budget;
- repeated retrieval failure caused by poor retained structure → consider Memory Metabolism.

## Blank-instance constraint

A blank instance does not need an index. Do not create embeddings, databases, tags, or synthetic memory merely so the retrieval subsystem has content to search.
