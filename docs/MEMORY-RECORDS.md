# Canonical Memory Records

Tsuzuri Harness keeps retained memory human-readable and Git-native while giving long-lived instances enough structure for lifecycle maintenance and scalable retrieval.

The canonical machine-readable contract is [`function/memory-record.schema.yaml`](../function/memory-record.schema.yaml).

## Core shape

A retained memory should identify at least:

- `id`
- `type`
- `status`
- `importance`
- `confidence`
- `load_policy`

Optional fields such as `scope`, `triggers`, `relations`, `tags`, `concepts`, dates, and provenance may improve activation, maintenance, and retrieval when they carry real value.

Example:

```yaml
---
id: proc-example
type: procedural
status: active
importance: high
confidence: confirmed
volatility: stable
load_policy: on_match
created_at: 2026-09-03
scope:
  - collaboration
triggers:
  - repository validation
relations:
  - type: derived_from
    target: episode-example
---
```

## Memory types

- `semantic` — generalized durable understanding
- `procedural` — reusable procedure, lesson, or recurrence prevention
- `episodic` — formative event whose context matters beyond an abstract lesson
- `reflective` — persistent self-observation or unresolved model tension
- `working` — bounded pending hypothesis or validation state about the instance

`working` is not a project task tracker, session handoff store, or hidden-reasoning log.

## Lifecycle status

- `active` — eligible for normal use when relevant
- `superseded` — replaced by newer canonical memory
- `contradicted` — conflict remains unresolved; do not use automatically as current truth
- `archived` — retained for formation history or audit, excluded from normal activation

Age alone does not demote or delete memory. Lifecycle changes should come from current evidence, scope, replacement relationships, privacy, or validity.

## Relationship to retrieval

Metadata is useful because it lets [`function/memory-retrieval.md`](../function/memory-retrieval.md) filter cheaply before optional semantic search.

```text
metadata / lexical filter
        ↓
semantic recall if useful
        ↓
canonical path / id
        ↓
canonical re-read
```

Embeddings, similarity scores, vector-provider ids, and generated indexes remain derived runtime state. They do not belong in canonical memory records by default.

## Blank-instance invariant

The starter remains empty. The schema defines how a memory may be represented after retention; it does not provide sample personality, memories, or life history to a new instance.
