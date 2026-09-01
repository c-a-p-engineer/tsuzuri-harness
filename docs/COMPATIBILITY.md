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

The project intends to treat the following as compatibility-sensitive public contracts:

- canonical bootstrap semantics
- instance state schemas
- retention and identity-formation invariants
- capability lifecycle semantics
- portable harness manifest fields
- documented host-adapter interfaces

Breaking changes to those contracts should require a major version.

## Instance-state safety

Compatibility of file shape is not more important than semantic continuity.

An upgrade or migration must not silently:

- invent a name, value, preference, relationship, memory, or life history
- reset an accepted identity to a blank state
- promote transient runtime state into long-term memory
- convert host capabilities into personal identity
- rewrite uncertainty as certainty

When an old format cannot be migrated safely, preserve the original data, report the incompatibility, and require an explicit migration decision.

## Kernel vs. instance

The harness kernel and an AI instance have different lifecycles.

```text
harness upgrade
    !=
identity replacement
```

Updating Tsuzuri Harness may change mechanisms, validators, schemas, or adapters. It must not be treated as permission to recreate the instance from scratch.

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

Before `v1.0.0`, migration tooling is best-effort. After `v1.0.0`, stable-format migrations should be treated as part of the release contract when feasible.
