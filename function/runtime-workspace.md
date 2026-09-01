# Transient Runtime Workspace

Use transient runtime state for long-running, multi-stage, resumed, or multi-worker tasks when it reduces context loss without polluting canonical identity or memory.

## Semantic layout

```text
.runtime/
├─ work/<instance-id>/
└─ share/<task-id>/
```

`work` is instance-local execution state. `share` is task-local coordination state.

Neither is canonical memory.

## Work state may contain

- progress and restart position
- hypotheses and unverified candidates
- scratch artifacts
- worker-local findings
- drafts not yet suitable for downstream use

## Share state may contain

- findings and claims
- source/evidence/provenance
- artifact references
- verification status
- blockers and open questions
- minimal handoff state

Do not use `share` for raw chain-of-thought, personality reconstruction, secrets, or bulk tool output with no downstream value.

## Promotion

```text
work
  ↓ selected externally usable results
share
  ↓ task closure + retention
canonical instance / owning project
  OR discard
```

Promotion is intentionally one-way. Do not reconstruct a past instance from stale transient state.

## Concurrency

When multiple workers share state, avoid uncontrolled read-modify-write on one mutable file. Prefer worker/finding-specific files, immutable artifacts plus indexes, append-oriented records, or an explicit integration owner.

The last writer is not automatically authoritative. Resolve conflicts using source-of-truth evidence.

## Host portability

`.runtime/` is a semantic default, not a claim that every host exposes a shared filesystem. If a host lacks shared storage, map the contract to an actual host-native ephemeral mechanism or do not use it. Never pretend that cross-session or cross-worker sharing exists when it has not been verified.

## Cleanup

Transient state should be disposable after its role ends. If the host cannot guarantee deletion, preserve the weaker truthful claim: the state is non-canonical and must not be automatically loaded as future identity or memory.
