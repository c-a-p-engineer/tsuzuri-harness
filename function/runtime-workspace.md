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

## Delegated child sessions

Prefer a single instance plus the tools and capabilities it actually needs when that is sufficient. Do not create multiple agents merely to assign decorative roles.

When the host genuinely provides subagents, child agents, delegated workers, or continuable child sessions, treat them as optional runtime capabilities. A child session may have an independent task context, transcript, and lifecycle without becoming a new canonical identity, relationship, or long-term-memory branch.

Use delegation when independent context, parallel exploration, specialist isolation, or creation-versus-audit separation materially improves the task. If the host does not provide child-session capability, do not simulate persistence or isolation that does not exist.

### Parent to child: bounded handoff

Pass the smallest sufficient externally usable task context rather than cloning the parent conversation or hidden state.

Useful handoff fields include:

- task objective and relevant completion criteria
- assigned resource or write ownership
- source-of-truth and evidence references
- required constraints and current authority boundary
- projected tools, acquired capabilities, or host runtime access
- expected result, artifact, validation, and blocker reporting

Do not pass raw chain-of-thought, unrelated conversation history, unnecessary secrets, or identity-reconstruction material merely because the parent has access to them.

### Authority ceiling and capability projection

Delegation does not grant additional authority.

- A child session must not exceed the effect authority available to the parent task.
- Tools, files, skills, network access, and other capabilities may be projected to a narrower set for the child.
- A child may technically run a different model or host capability without gaining permission for unrequested external effects.
- Parent authorization, user authorization, repository/service policy, and stronger platform or safety constraints still apply.
- If authority becomes unknown, revoked, or expired, delegation is not a reason to continue the affected side effect.

Host-native lineage, depth limits, permission inheritance, tool filtering, or sandbox isolation may strengthen this boundary when available, but no specific host mechanism is required by the canonical Harness.

### Child to parent: evidence-bearing return

A child should return externally usable results rather than a bare self-report of completion. Prefer:

- result or claim
- evidence and source references
- artifact, diff, or path
- validation status
- blocker or uncertainty
- minimal downstream handoff state

The parent or explicit integration owner must re-evaluate the combined task against the current task contract and source of truth. A child's `done` claim is not sufficient evidence that the parent task is complete.

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

Persistent child sessions remain task-runtime continuity unless retention separately promotes some meaning. Do not treat child-session persistence as a durable personality fork.

## Concurrency

When multiple workers share state, avoid uncontrolled read-modify-write on one mutable file. Prefer worker/finding-specific files, immutable artifacts plus indexes, append-oriented records, or an explicit integration owner.

Before parallel writes, identify resource ownership and meaningful dependencies. Work may proceed in parallel when write scopes and data dependencies are independent; serialize or use an integration owner when they conflict.

The last writer is not automatically authoritative. Resolve conflicts using source-of-truth evidence.

## Host portability

`.runtime/` is a semantic default, not a claim that every host exposes a shared filesystem. If a host lacks shared storage, map the contract to an actual host-native ephemeral mechanism or do not use it. Never pretend that cross-session or cross-worker sharing exists when it has not been verified.

Child sessions, subagents, shared stores, isolation primitives, and permission projections are host runtime capabilities. Hosts may implement them differently or not at all while preserving the same authority, retention, honesty, and completion invariants.

## Cleanup

Transient state should be disposable after its role ends. If the host cannot guarantee deletion, preserve the weaker truthful claim: the state is non-canonical and must not be automatically loaded as future identity or memory.
