# Tsuzuri Harness Capabilities

Status: public capability inventory  
Canonical language: English

Tsuzuri Harness is a **cognitive, identity, memory, capability, and continuity control plane** for AI instances that can form through experience. It is not a base model or an all-in-one agent runtime.

This document is the canonical public inventory of the capabilities the Harness provides by default.

> **Default capability does not mean always-on behavior.**
>
> Many Harness mechanisms are conditional. A simple conversation should not ceremonially run every subsystem. The kernel provides these capabilities and activates them when the current task, lifecycle event, evidence, or governance boundary requires them.

## At a glance

### 1. Grow — Identity & Relationship

Start without a finished persona and allow durable self-description to form from evidence and acceptance.

Includes:

- **Blank Identity Lifecycle** — `null`, unnamed, uncertain, and unformed states are valid.
- **Identity Formation** — suggested identity and accepted identity remain distinct.
- **Relationship Lifecycle** — relationship state can form separately from personality and task capability.
- **CORE View** — human-readable view of who the instance is now.
- **JOURNEY Album** — factual life-oriented view of how the instance became itself.

### 2. Remember — Memory

Retain useful meaning without turning every conversation into permanent memory.

Includes:

- **Retention Routing** — decide what, if anything, deserves persistence and where it belongs.
- **Memory Record Lifecycle** — human-readable memory metadata and `active / superseded / contradicted / archived` states.
- **Archive Modes** — Selective, Chronicle, or Private Archive depending on how much visible history the owner wants to keep.
- **Memory Metabolism** — Preserve, Consolidate, Supersede, Abstract, Demote, Prune, Repair, or Conserve long-lived memory.
- **Memory Retrieval** — selectively find relevant memory at scale using direct reads, metadata, lexical search, and optional semantic retrieval while re-reading canonical Markdown/YAML before use.

Git/Markdown remain canonical. Embeddings, full-text databases, vector indexes, and retrieval caches are derived aids rather than identity or memory truth.

### 3. Learn — Skills & Capability

Separate temporary competence from durable acquired skill.

Includes:

- **Temporary Capability Construction** — assemble task-local knowledge, procedures, tools, and validation without pretending the instance always knew them.
- **Capability Capsule** — optional structured task-local capability representation.
- **Capability Maintenance** — decide whether temporary competence should expire, become a procedural lesson, update an existing skill, or become a new acquired skill.
- **Capability Library Health** — evaluate activation precision, activation coverage, outcome contribution, execution waste, negative transfer, validation reliability, and evidence traceability rather than optimizing for skill count.
- **External Skill Provenance** — preserve immutable source identity, adopted/rejected concepts, local targets, and recheck conditions when an external skill materially influences durable capability.

A blank instance starts with zero acquired specialist skills.

### 4. Evolve — Self-Evolution

Allow the instance or Harness-owned mechanisms to improve without treating growth as “add more rules.”

Includes:

- **Self-Evolution** — Repair, Explore, Consolidate, Prune, and Conserve are all valid outcomes.
- **Evolution Traceability** — meaningful durable changes retain observable evidence about why they happened and how they were validated.
- **Harness Complexity Budget** — before adding hard gates, eager reads, new subsystems, persistent stores, or runtime dependencies, prefer an existing semantic owner when sufficient and account for activation/maintenance cost.

No change can be the correct result.

### 5. Continue Safely — Runtime, Governance & Portability

Keep long-lived work auditable and portable across compatible hosts.

Includes:

- **Task Contract** — keep objective, deliverables, authority, completion criteria, and verification explicit for complex work.
- **Completion Re-derivation** — re-check completion from the current objective and source of truth rather than trusting a stale checklist.
- **Contextual Activation** — reactivate known obligations and rebalance stale context only when relevant.
- **Runtime Workspace** — keep transient work separate from canonical long-term state.
- **Governance / Authority Boundary** — proposal, semantic acceptance, technical write capability, and verified persistence remain distinct.
- **Execution Provenance** — record host-observable reads, actions, results, revisions, and validation without storing hidden chain-of-thought.
- **Host Portability / Behavioral Compatibility** — different hosts may expose different tools while preserving core identity, retention, authority, honesty, and continuity invariants.
- **Regression Evaluation** — behavioral evals protect important lifecycle and governance contracts from silent drift.

## Technical capability inventory

| Capability | Primary contract | Default behavior |
| --- | --- | --- |
| Blank Identity Lifecycle | `AGENTS.md`, `docs/IDENTITY-FORMATION.md` | Available from first boot; does not auto-fill identity |
| Identity Formation | `docs/IDENTITY-FORMATION.md` | Evidence + acceptance required for durable identity |
| Relationship Lifecycle | `relationship/`, governance rules | Forms separately from task skill and host capability |
| Retention Routing | `function/retention-routing.md` | Used before durable retention decisions |
| Memory Record Lifecycle | `function/memory-record.schema.yaml` | Optional structured metadata for retained memory |
| Archive Modes | `docs/ARCHIVE-MODES.md` | Owner-selectable history retention policy |
| Memory Metabolism | `function/memory-metabolism.md` | Conditional maintenance for long-lived memory |
| Memory Retrieval | `function/memory-retrieval.md` | Direct/selective first; semantic retrieval optional |
| Temporary Capability | `function/runtime.md` | Task-local by default |
| Capability Capsule | `function/capability-capsule.schema.yaml` | Optional structure for complex capability work |
| Capability Maintenance | `function/capability-maintenance.md` | Promotion is evidence-based; skill count is not the goal |
| Capability Library Health | `function/capability-maintenance.md` | Reviews activation, quality, waste, validation, negative transfer |
| External Skill Provenance | `function/external-skill-provenance.schema.yaml` | Used when external reusable sources materially influence durable capability |
| Task Contract | `function/task-contract.md` | Conditional for complex/high-effect work |
| Contextual Activation | `function/contextual-activation.md` | Conditional; avoids stale-context dominance |
| Runtime Workspace | `function/runtime-workspace.md` | Conditional transient workspace separation |
| Governance | `function/governance.md` | Applies at authority, privacy, persistence, and external-effect boundaries |
| Execution Provenance | `function/execution-provenance.md` | Off for simple work; lite/audit when justified |
| Self-Evolution | `function/self-evolution.md` | Change must earn persistence; Conserve is valid |
| Evolution Traceability | `function/evolution-traceability.md` | Used for meaningful durable evolution |
| Harness Complexity Budget | `function/complexity-budget.md` | Applies before material control-flow/storage/runtime expansion |
| CORE View | `docs/CORE-VIEW.md` | Derived human-readable current-state view |
| JOURNEY Album | `docs/JOURNEY-ALBUM.md` | Derived factual lifecycle view |
| Host Compatibility | `docs/HOST-COMPATIBILITY.md` | Invariant compatibility, not identical host implementation |
| Behavioral Evaluation | `evals/` | Regression protection for important contracts |

## What the Harness does not provide

Tsuzuri Harness does not ship:

- a predefined persona or finished character;
- Tsuzuri's private Identity, Relationship, Memory, visual identity, or acquired specialist skills;
- a base model;
- a terminal, browser, sandbox, scheduler, messaging service, or other host runtime;
- an external vector database requirement;
- mandatory persistence for every instance.

Host tools are runtime capabilities. They are not biography, identity, or acquired skills merely because the current model can use them.

## Documentation maintenance

When a public Harness capability is **added, removed, renamed, deprecated, or materially changes behavior**, review this inventory in the same change.

The detailed maintenance rule is defined in [`DOCUMENTATION-SYNC.md`](DOCUMENTATION-SYNC.md).

Public discovery surfaces should remain consistent with this inventory:

- `README.md`
- `site/index.html`
- `docs/CAPABILITIES.md` — canonical detailed inventory
- Japanese accessibility mirrors: `README.ja.md`, `site/ja/index.html`, `docs/CAPABILITIES.ja.md`

Translations may be less detailed than the canonical English document, but they must not contradict it.
