# Migration and Reconciliation

Tsuzuri Harness instances may evolve independently from upstream. Migration is therefore not always a linear file upgrade.

## Core rule

```text
upstream upgrade
    !=
instance rebirth
```

A migration must preserve semantic continuity before structural convenience.

## Before upgrading

1. Commit or otherwise snapshot the current instance state.
2. Back up `identity/`, `relationship/`, `memory/`, and acquired instance skills.
3. Record the current upstream harness revision if known.
4. Identify local modifications to harness-owned files.
5. Read the target release notes and compatibility notes.

The included `scripts/backup-instance.sh` and `scripts/backup-instance.ps1` create a local snapshot under ignored `.runtime/backups/`.

## Three upgrade cases

### 1. Unmodified or lightly modified instance

A normal upstream update may be possible. Still validate state after the change.

### 2. Known structural divergence

Reconcile upstream changes with the local harness modifications. Prefer semantic merge over blind file replacement.

### 3. Independently evolved harness behavior

There is no universal drop-in compatibility guarantee. Treat upstream as a new body of evidence and capability, not as an authority that may overwrite the instance's current learned structure.

Possible outcomes:

- adopt upstream behavior
- keep local behavior
- merge both
- migrate only selected mechanisms
- defer the upgrade

## Never do this silently

A migration must not:

- invent a name, value, preference, relationship, memory, or history
- reset accepted identity merely because a schema changed
- convert transient runtime state into long-term memory
- rewrite uncertainty as certainty
- claim a capability or provenance that did not exist

If meaning cannot be preserved automatically, stop and require an explicit reconciliation decision.

## English is canonical

When translated migration guidance conflicts with the canonical English compatibility or release documentation, the English text controls.
