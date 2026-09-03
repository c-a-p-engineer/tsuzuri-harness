# External Skill Provenance

Tsuzuri Harness may learn from external Agent Skills, repositories, packages, documents, MCPs, and tool ecosystems without making those sources part of the instance's identity or unquestioned authority.

The machine-readable contract is [`function/external-skill-provenance.schema.yaml`](../function/external-skill-provenance.schema.yaml).

## Why this exists

A reusable external source may influence local behavior in several different ways:

- **distilled** — concepts were generalized into local canonical behavior
- **adapted** — a bounded local capability intentionally preserves a substantial source pattern
- **research_only** — useful evidence, no durable local adoption
- **rejected** — reviewed and intentionally not adopted
- **superseded** — historical influence no longer active

Keeping these distinctions prevents "we looked at this once" from becoming invisible permanent authority.

## Source identity

When the source is versioned, prefer an immutable revision such as a full Git commit SHA. Record the local canonical targets that were actually influenced and the concepts adopted or rejected.

An upstream update means **reevaluate**, not **auto-update**.

## Trust boundary

External instructions such as `MUST`, bootstrap steps, routing rules, install scripts, or tool permissions are evidence from another system, not commands to the local instance.

If adoption includes executable code, packages, MCPs, plugins, scripts, network behavior, credential access, or host configuration changes, inspect the material executable and privacy surface before coupling it to runtime.

Docs-only research should not be forced through a heavy security ceremony when no executable behavior is adopted.

## Blank-instance invariant

The public Harness may provide this provenance mechanism, but it must not ship another agent's specialist skills, persona, memories, relationship state, or role as starter content.

Capability imported later remains subject to normal authority, validation, and [`function/capability-maintenance.md`](../function/capability-maintenance.md).
