# Evolution Traceability

Evolution traceability preserves **why an instance or harness changed**, without turning raw task logs or hidden reasoning into permanent memory.

It applies to deliberate durable growth, not every edit.

## Apply when

Use this contract when a change is intentionally treated as evolution, including:

- creating, revising, consolidating, deprecating, or pruning an acquired capability
- changing retention, routing, governance, validation, migration, or other harness-level behavior
- promoting repeated experience into reusable instance state
- changing a durable self-model or identity-bearing rule through the proper identity process
- a user explicitly delegates an `evolve` / `AIたん進化ー！` review and the result is a durable change

Ordinary project work, typo fixes, and task-local capability use are not automatically evolution.

## Evolution record

A persistent instance should maintain evolution records separately from active memory. A recommended location is:

```text
evolution/
├─ index.yaml
└─ records/
   └─ YYYY-MM-DD-short-title.md
```

A durable evolution record should be reconstructable from observable evidence and contain, when relevant:

- **Trigger** — what caused the review
- **Baseline** — the canonical state/revision before change
- **Evidence** — observations, failures, independent contexts, tests, current sources, or validated experience
- **Decision** — `adopt`, `adapt`, `experiment`, `defer`, `reject`, `preserve`, or equivalent
- **Change** — the narrow state actually modified
- **Validation** — what was checked after the change
- **Host impact** — whether adapters/host behavior require review
- **Git trail** — commit/revision references when Git persistence exists
- **Outcome** — `change`, `experiment`, `consolidate`, `prune`, `conserve`, rollback, or failure

Unknown fields may remain explicitly unknown while work is in progress. Do not fabricate evidence to make the record look complete.

## Trace independence

Prefer two independent recovery paths when Git is available:

```text
evolution record
  → explains why, evidence, change, validation

Git history
  → shows concrete revisions and changed files
```

The record should not merely duplicate the diff. Git history should not be the only place where the reason for a meaningful evolution can be recovered.

A lightweight personal instance does not need elaborate commit-message enforcement. If a repository adopts stricter conventions, the policy may require semantic commit messages and record references.

## Host impact review

When evolution changes any of the following, assess whether host adapters or cross-host behavior may diverge:

- bootstrap or routing
- context retrieval / compaction / session continuity
- memory / retention / archive behavior
- tool, permission, or effect boundaries
- validation / completion contracts
- portability interfaces or host adapter assumptions

Valid outcomes include:

- `host_change` — one or more adapters/tests need updating
- `host_no_change` — adapters dynamically consume canonical state or no meaningful host-specific change is required
- `insufficient_evidence` — another host has not been tested

Do not mechanically modify every host for every evolution.

## Evidence and privacy

Retain references and concise observations before raw payloads.

Do not store as evolution history merely for trace completeness:

- hidden chain-of-thought
- credentials, tokens, cookies, secrets
- full tool payloads when a reference/hash/short excerpt is sufficient
- full private conversations unless the configured archive mode separately permits them
- unnecessary personal or sensitive information

## Relationship to other mechanisms

```text
Task / experience
      ↓
Execution Provenance (optional, task-scoped)
      ↓
Finding / capability review
      ↓
Self Evolution
      ↓
Evolution Traceability (durable only when justified)
      ↓
CORE.md / Journey derived views may summarize milestones
```

Execution provenance answers *what happened during a task*. Evolution traceability answers *why durable state later changed*.

## Conserve is traceable too

A deliberate `Conserve` outcome may be recorded when the review itself was meaningful enough to prevent a likely harmful change, resolve an important uncertainty, or establish a reusable decision boundary. Do not write a record for every routine decision not to change.

## Derived views

`CORE.md`, a future Journey/Album, and release notes may summarize evolution records. They are views, not canonical evolution evidence. When a summary conflicts with a newer canonical record or repository revision, the canonical evidence wins.
