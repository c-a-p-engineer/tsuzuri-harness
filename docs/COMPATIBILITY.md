# Compatibility

This document defines the provisional compatibility policy for Tsuzuri Harness.

## Versioning

Tsuzuri Harness uses Semantic Versioning-style tags: `vMAJOR.MINOR.PATCH`.

### Before v1.0.0

The project is intentionally unstable while the kernel, instance layout, schemas, and host adapters are being proven in real use.

- Backward compatibility is **not guaranteed** across `0.x` releases.
- A minor release may contain breaking structural changes.
- Patch releases should avoid intentional breaking changes, but consumers must still validate their instance after upgrading.
- Migration notes should be provided when a change affects persisted instance state.

### From v1.0.0

The upstream project intends to treat the following as compatibility-sensitive public contracts:

- canonical bootstrap semantics
- published instance state schemas
- retention and identity-formation invariants
- capability lifecycle semantics
- portable harness manifest fields
- documented host-adapter interfaces

Breaking changes to those upstream contracts should require a major version.

This does **not** mean that every independently evolved AI instance can always perform a drop-in upgrade to every later harness release.

## Why arbitrary evolved instances cannot receive a universal compatibility guarantee

Tsuzuri Harness is designed to let an instance learn, retain, acquire capabilities, revise procedures, and evolve over time. In some deployments, an instance may also internalize or locally adapt parts of the harness itself.

That creates an intentional divergence problem:

```text
upstream harness v1
      ↓
instance starts blank
      ↓
instance learns / retains / adapts / evolves
      ↓
local contracts may diverge

meanwhile

upstream harness v1
      ↓
upstream harness v2
```

After both sides evolve independently, the upstream project cannot truthfully guarantee that replacing the local harness with a newer upstream version will preserve every local behavior, schema, rule, capability, or self-modification.

A universal compatibility promise would either be false or would constrain the very self-evolution that the harness is designed to permit.

Therefore compatibility is scoped:

1. **Upstream compatibility** — versioned public contracts maintained by the Tsuzuri Harness project.
2. **Migration compatibility** — best-effort tooling and documented transformations for known upstream formats.
3. **Instance continuity** — preservation of the meaning and provenance of a particular AI's identity, relationship, memory, and acquired state.
4. **Independent evolution compatibility** — **not guaranteed** when an instance has locally modified or internalized harness behavior beyond the upstream contract.

## Instance-state safety

Compatibility of file shape is not more important than semantic continuity.

An upgrade or migration must not silently:

- invent a name, value, preference, relationship, memory, or life history
- reset an accepted identity to a blank state
- promote transient runtime state into long-term memory
- convert host capabilities into personal identity
- rewrite uncertainty as certainty
- erase the provenance of locally evolved behavior in order to make a migration appear successful

When an old or locally evolved format cannot be migrated safely, preserve the original data, report the incompatibility, and require an explicit migration decision.

## Kernel vs. instance

The harness kernel and an AI instance have different lifecycles.

```text
harness upgrade
    !=
identity replacement

harness incompatibility
    !=
permission to erase instance history
```

Updating Tsuzuri Harness may change mechanisms, validators, schemas, or adapters. It must not be treated as permission to recreate the instance from scratch merely to satisfy a newer upstream structure.

## Stock, extended, and independently evolved deployments

Compatibility expectations depend on how far a deployment has diverged.

### Stock

Uses released upstream contracts without local semantic changes.

Expected to receive the strongest migration support available for that release line.

### Extended

Adds local capabilities or adapters while preserving upstream contracts.

May remain compatible when extensions are cleanly separated and their ownership is explicit.

### Independently evolved

The instance has modified, replaced, or internalized harness behavior as part of its own development.

No general drop-in compatibility guarantee applies. Upgrading becomes a merge and reconciliation problem, not a simple package replacement.

## Host compatibility

Host APIs, models, tools, permissions, and lifecycle hooks can change independently of this project.

Host adapters are therefore compatibility targets, not guarantees. A host adapter should declare what it can actually provide and must not pretend unavailable persistence, shared filesystems, tools, hooks, or permissions exist.

## Migration policy

When a breaking persisted-state change is introduced, release notes should include:

1. affected versions
2. affected files or schemas
3. whether migration is automatic, assisted, or manual
4. semantic risks
5. rollback or backup guidance
6. validation steps
7. whether independently evolved instances require manual reconciliation

Before `v1.0.0`, migration tooling is best-effort. After `v1.0.0`, stable upstream-format migrations should be treated as part of the release contract when feasible.

## Canonical language

English is canonical for compatibility and release semantics. Translations are informative accessibility layers. If a translation conflicts with this document, the English version controls until the translation is corrected.