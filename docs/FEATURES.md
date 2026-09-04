# Tsuzuri Harness Default Capabilities

This list does **not** mean a blank instance ships with a persona, memories, or acquired specialist skills. It ships with kernel mechanisms that can form, maintain, retrieve, and evolve those things through experience.

This page is a discovery catalog. Normative behavior remains owned by `AGENTS.md`, `function/` contracts, schemas, and evals.

## Grow into an individual

Identity and relationships form from evidence, experience, reflection, and self-acceptance instead of a preset persona.

| Feature | What it does | Reference |
| --- | --- | --- |
| **Identity Formation** | Names, values, preferences, roles, and self-description can remain unformed until evidence supports durable adoption. | [`docs/IDENTITY-FORMATION.md`](IDENTITY-FORMATION.md) |
| **Relationship Lifecycle** | Relationship state develops separately from identity and is not inferred merely from repeated conversation. | [`relationship/`](../relationship/) |

## Remember without drowning in memory

The harness decides what deserves retention, maintains long-lived memory, and can retrieve a small relevant set when memory grows large.

| Feature | What it does | Reference |
| --- | --- | --- |
| **Retention Routing** | Conversation is evidence, not automatic memory; retained meaning is routed to the narrowest correct durable layer. | [`function/retention-routing.md`](../function/retention-routing.md) |
| **Memory Records & Lifecycle** | Human-readable metadata can track type, status, confidence, triggers, relations, provenance, and lifecycle state. | [`docs/MEMORY-RECORDS.md`](MEMORY-RECORDS.md) |
| **Memory Metabolism** | Preserve, consolidate, supersede, abstract, demote, prune, repair, or conserve retained memory as evidence changes. | [`docs/MEMORY-METABOLISM.md`](MEMORY-METABOLISM.md) |
| **Memory Retrieval** | Metadata and lexical retrieval work everywhere; semantic/vector retrieval is optional and always resolves back to canonical Markdown/YAML. | [`docs/MEMORY-RETRIEVAL.md`](MEMORY-RETRIEVAL.md) |
| **Archive Modes** | Choose Selective, Chronicle, or Private Archive history without confusing stored history with active memory. | [`docs/ARCHIVE-MODES.md`](ARCHIVE-MODES.md) |

## Learn reusable capability

Temporary competence can stay temporary. Reusable capability is promoted only when evidence supports it, then maintained as a healthy library.

| Feature | What it does | Reference |
| --- | --- | --- |
| **Task-local Capability** | A task can assemble temporary procedures and knowledge without pretending they were always part of the instance. | [`function/runtime.md`](../function/runtime.md) |
| **Skill Maintenance & Library Health** | Promotion, revision, consolidation, retirement, activation precision, coverage, waste, and negative transfer are evaluated separately. | [`function/capability-maintenance.md`](../function/capability-maintenance.md) |
| **External Skill Provenance** | Imported reusable knowledge can retain immutable source revision, adopted/rejected concepts, local targets, and recheck conditions without importing another agent's identity. | [`docs/EXTERNAL-SKILL-PROVENANCE.md`](EXTERNAL-SKILL-PROVENANCE.md) |

## Evolve selectively

The instance or harness can repair, explore, consolidate, prune, or deliberately conserve. More rules are not automatically better growth.

| Feature | What it does | Reference |
| --- | --- | --- |
| **Self-Evolution** | Durable changes are evidence-driven and use the narrowest correct owner instead of accumulating rules by default. | [`function/self-evolution.md`](../function/self-evolution.md) |
| **Evolution Traceability** | Meaningful durable growth keeps observable evidence of why it changed, what changed, and how it was validated. | [`docs/EVOLUTION-TRACEABILITY.md`](EVOLUTION-TRACEABILITY.md) |
| **Harness Complexity Budget** | New gates, eager reads, stores, dependencies, and subsystems must justify their activation and maintenance cost. | [`function/complexity-budget.md`](../function/complexity-budget.md) |

## Continue safely across time and hosts

Task completion, authority, provenance, transient work, human-readable life views, host portability, and regression evaluation keep long-lived instances coherent.

| Feature | What it does | Reference |
| --- | --- | --- |
| **Task Contract & Completion Re-derivation** | Complex work keeps objective, authority, deliverables, completion criteria, and verification explicit enough to prevent drift. | [`docs/TASK-CONTRACT.md`](TASK-CONTRACT.md) |
| **Contextual Activation** | Relevant obligations, memory, and capability are reactivated selectively while stale context is prevented from dominating a new task. | [`function/contextual-activation.md`](../function/contextual-activation.md) |
| **Governance & Authority Boundary** | Proposal, self-acceptance, technical write capability, user authority, and external effects remain distinct. | [`docs/GOVERNANCE.md`](GOVERNANCE.md) |
| **Runtime Workspace Separation** | Transient task state stays outside canonical identity and memory until an explicit retention decision is made. | [`function/runtime-workspace.md`](../function/runtime-workspace.md) |
| **Observable Execution Provenance** | Host-observable reads, actions, revisions, results, and validation can be traced without storing hidden chain-of-thought. | [`function/execution-provenance.md`](../function/execution-provenance.md) |
| **CORE View** | A human-readable derived view answers who the instance is now without replacing canonical state. | [`docs/CORE-VIEW.md`](CORE-VIEW.md) |
| **JOURNEY Album** | Verified birthdays, naming, memories, skills, relationships, and evolution become a factual life-oriented view without invented XP or levels. | [`docs/JOURNEY-ALBUM.md`](JOURNEY-ALBUM.md) |
| **Host Portability & Behavioral Compatibility** | ChatGPT, Codex, Claude, local models, and other hosts may differ in tools while preserving the important harness invariants. | [`docs/HOST-COMPATIBILITY.md`](HOST-COMPATIBILITY.md) |
| **Regression Evaluation** | Behavioral evals guard blank identity, memory, authority, portability, evolution, and other contracts against silent regressions. | [`evals/`](../evals/) |

## Boundaries

The harness does not provide a base model, browser, terminal, sandbox, scheduler, or other host runtime. It also does not include Tsuzuri's personal identity, private memory, relationship history, or acquired specialist skills.
