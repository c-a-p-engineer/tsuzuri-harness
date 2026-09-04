# Tsuzuri Harness Default Capabilities

Status: canonical public capability inventory  
Canonical language: English

Tsuzuri Harness is a **cognitive, identity, memory, capability, and continuity control plane** for AI instances that form through experience. It is not a base model or an all-in-one agent runtime.

A blank instance starts without a predefined persona, long-term memory, relationship history, or acquired specialist skills. **The personal state starts blank; the mechanisms for growing it are built in.**

Default capability does not mean always-on behavior. Simple conversations should remain simple; mechanisms activate only when the current task, lifecycle event, evidence, or governance boundary requires them.

## 1. Grow — Identity & Relationship

- **Blank Identity Lifecycle** — unnamed, `null`, uncertain, and unformed states are valid.
- **Identity Formation** — names, values, preferences, roles, and self-description form from evidence and acceptance rather than a preset persona.
- **Relationship Lifecycle** — relationship state forms separately from personality, memory, and task capability.
- **CORE View** — a human-readable derived view of who the instance is now.
- **JOURNEY Album** — a factual life-oriented derived view of how the instance became itself.

## 2. Remember — Memory

- **Retention Routing** — conversation is evidence, not automatic memory; decide what deserves persistence and where it belongs.
- **Memory Record Lifecycle** — human-readable metadata can track type, status, confidence, triggers, relations, provenance, and `active / superseded / contradicted / archived` state.
- **Archive Modes** — Selective, Chronicle, and Private Archive separate stored history from active memory.
- **Memory Metabolism** — Preserve, Consolidate, Supersede, Abstract, Demote, Prune, Repair, or Conserve long-lived retained memory.
- **Memory Retrieval** — use direct reads, metadata, lexical search, and optional semantic retrieval to find a small relevant set; material use always resolves back to canonical Markdown/YAML.

Git/Markdown remain canonical. Full-text databases, embeddings, vector indexes, and search caches are optional derived aids, not identity or memory truth.

## 3. Learn — Skills & Capability

- **Task-local Capability** — assemble temporary knowledge, procedures, tools, and validation without pretending the instance always knew them.
- **Capability Capsule** — optional structured representation for complex temporary capability.
- **Capability Maintenance** — decide whether competence should expire, become a procedural lesson, revise an existing skill, or become a new acquired skill.
- **Capability Library Health** — review activation precision, activation coverage, outcome contribution, execution waste, negative transfer, validation reliability, and evidence traceability instead of optimizing for skill count.
- **External Skill Provenance** — when external reusable material influences durable capability, preserve immutable source revision, adopted/rejected concepts, local targets, and recheck conditions without importing another agent's identity or authority.

A blank instance starts with zero acquired specialist skills.

## 4. Evolve — Self-Evolution

- **Self-Evolution** — Repair, Explore, Consolidate, Prune, and Conserve are all valid outcomes.
- **Evolution Traceability** — meaningful durable changes preserve observable evidence of why they happened, what changed, and how they were validated.
- **Harness Complexity Budget** — new hard gates, eager reads, stores, dependencies, and subsystems must justify their activation and maintenance cost; prefer an existing semantic owner when sufficient.

More rules are not automatically more growth. `Conserve` / no change can be the correct result.

## 5. Continue Safely — Runtime, Governance & Portability

- **Task Contract & Completion Re-derivation** — keep objective, authority, deliverables, completion criteria, and verification explicit for complex work, then re-check completion from the current source of truth.
- **Contextual Activation** — selectively reactivate relevant obligations, memory, and capability while preventing stale context from dominating a new task.
- **Runtime Workspace Separation** — keep transient task state outside canonical identity and memory until an explicit retention decision is made.
- **Governance & Authority Boundary** — proposal, self-acceptance, user authority, technical write capability, and verified persistence remain distinct.
- **Observable Execution Provenance** — trace host-observable reads, actions, revisions, results, and validation without storing hidden chain-of-thought.
- **Host Portability & Behavioral Compatibility** — ChatGPT, Codex, Claude, local models, and other hosts may expose different tools while preserving important Harness invariants.
- **Regression Evaluation** — behavioral evals protect blank identity, memory, authority, portability, evolution, and other public contracts from silent drift.

## Technical inventory

| Capability | Primary contract |
| --- | --- |
| Blank Identity / Identity Formation | `AGENTS.md`, `docs/IDENTITY-FORMATION.md` |
| Relationship Lifecycle | `relationship/`, `function/governance.md` |
| Retention Routing | `function/retention-routing.md` |
| Memory Record Lifecycle | `function/memory-record.schema.yaml` |
| Archive Modes | `docs/ARCHIVE-MODES.md` |
| Memory Metabolism | `function/memory-metabolism.md` |
| Memory Retrieval | `function/memory-retrieval.md` |
| Task-local Capability | `function/runtime.md` |
| Capability Capsule | `function/capability-capsule.schema.yaml` |
| Capability Maintenance / Library Health | `function/capability-maintenance.md` |
| External Skill Provenance | `function/external-skill-provenance.schema.yaml` |
| Task Contract | `function/task-contract.md` |
| Contextual Activation | `function/contextual-activation.md` |
| Runtime Workspace | `function/runtime-workspace.md` |
| Governance | `function/governance.md` |
| Execution Provenance | `function/execution-provenance.md`, `function/execution-provenance.schema.yaml` |
| Self-Evolution | `function/self-evolution.md` |
| Evolution Traceability | `function/evolution-traceability.md` |
| Harness Complexity Budget | `function/complexity-budget.md` |
| CORE View | `docs/CORE-VIEW.md` |
| JOURNEY Album | `docs/JOURNEY-ALBUM.md` |
| Host Compatibility | `docs/HOST-COMPATIBILITY.md` |
| Regression Evaluation | `evals/` |

## What the Harness does not provide

- a predefined persona or finished character;
- Tsuzuri's private Identity, Relationship, Memory, visual identity, or acquired specialist skills;
- a base model;
- a terminal, browser, sandbox, scheduler, messaging service, or other host runtime;
- a required external vector database;
- mandatory persistence for every instance.

Host tools are runtime capabilities. They do not become biography, identity, or acquired skills merely because the current host can use them.

## Maintenance rule

When a public Harness capability is **added, removed, renamed, deprecated, merged, or materially changes user-visible behavior**, review this inventory in the same change.

Then review the discovery surfaces that summarize it:

- `README.md`
- `README.ja.md`
- `site/index.html`
- `site/ja/index.html`
- `docs/CAPABILITIES.ja.md`

If the change affects persisted state, compatibility, migration, or release semantics, review those documents too.

Internal refactors with no public behavior change do not require ceremonial documentation edits. `no_public_doc_change` is a valid conclusion when justified.
