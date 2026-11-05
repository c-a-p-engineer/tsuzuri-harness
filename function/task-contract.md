# Task Contract and Completion Re-derivation

Task contracts keep complex work aligned without turning every request into ceremony.

## Apply when

Use this contract when one or more of the following materially affect success:

- multiple steps or deliverables
- repository or external-service changes
- non-trivial authority or approval boundaries
- irreversible, public, paid, or privacy-sensitive effects
- several plausible definitions of done
- migration, compatibility, release, or long-lived implementation work

Skip formal expansion for simple questions, obvious one-file edits, and routine transformations when it would not change routing or completion.

## Minimal contract

A substantive task may define only the fields that matter:

- **objective** — what must become true
- **deliverables** — artifacts or state to create/change
- **completion_criteria** — externally observable conditions for done
- **constraints** — technical, safety, cost, privacy, format, or compatibility boundaries
- **non_goals** — meaningful exclusions
- **authority** — what the active user/repository/host has actually authorized
- **irreversible_actions** — delete, publish, send, purchase, release, destructive migration, or equivalent effects
- **verification** — tests, source-of-truth checks, inspection, or external confirmation
- **stop_conditions** — conditions that make safe continuation impossible

Do not ask the user to repeat information already available from the current request, repository, connected source of truth, or explicit prior decision in the active task.

## Contract ownership boundary

For substantial delegated implementation, distinguish **task ownership** from **implementation ownership**.

Unless the active authority explicitly assigns a different boundary, the task owner or authorized maintainer should retain control of the externally meaningful contract:

- **Why** — the purpose or problem being solved
- **What** — externally observable behavior and deliverables
- **Contract** — APIs, invariants, data behavior, compatibility expectations, or other durable interface commitments
- **Boundary** — scope, authority, security, privacy, cost, and irreversible-effect limits
- **Acceptance** — what observable evidence counts as done
- **Risk** — tradeoffs or failure modes that materially affect the owner

Within that contract, an implementation agent may own substantial parts of:

- **How** — internal design and execution strategy
- module decomposition and local data flow
- implementation details
- refactoring and local optimization
- test implementation and diagnostic instrumentation

This is not permission for a black box. Delegation should be closed by contracts, tests/evals, observability, evidence, and recoverability appropriate to the risk.

Do not use the number of lines a human has read as a substitute for those controls. Conversely, do not use delegation as a reason to hide consequential architectural, security, performance, migration, or irreversible tradeoffs from the task owner. When an internal design choice materially changes the external contract or risk, raise that decision to the owning layer.

### Understanding on demand

Do not require a human task owner to permanently retain every implementation detail in working memory as the primary safety mechanism for large agent-authored systems.

Keep enough durable, observable sources of truth that current implementation understanding can be reconstructed when needed, such as:

- repository state and version history
- current durable contracts or design records
- tests and evals
- schemas and externally visible interfaces
- execution evidence, logs, or traces that the host legitimately exposes
- migration and rollback information where relevant

When debugging, auditing, changing, or handing off the system, reconstruct the necessary internal model from those current sources instead of relying on a stale remembered explanation.

## Requirement intent reconstruction (conditional)

A request may describe a proposed implementation rather than the outcome the user needs. When confusing those roles would materially change the contract, preserve the literal **stated request** and distinguish, only as needed: desired outcome, current problem, constraint, proposed solution, deliverable/artifact, preference, and unknowns.

Use the current conversation, canonical repository, existing evidence, and available tools to test competing outcome hypotheses. Distinguish supporting evidence, contradictions, and which choice would actually change acceptance, solution, or verification. Do **not** invent the user's hidden psychological intent or continuously interrogate simple, explicit tasks.

A plausible inferred outcome is **not authority** to override explicit user requirements or existing acceptance rules. If multiple outcomes lead to the same safe implementation, proceed with a decision-sufficient contract. If the unresolved difference changes the user's values, objective, or irreversible authority, ask only that material question. Compile the resolved outcome into the existing objective/completion criteria; keep the proposed mechanism as a candidate unless it is an explicit constraint. Do not introduce a second permanent requirement ledger for routine tasks.

## Decision branches

Before implementation, resolve only material branches that would substantially change the result.

Preferred order:

1. inspect the current source of truth;
2. resolve what can be derived from objective, constraints, repository policy, and available evidence;
3. choose a reasonable option when the active authority delegated that choice;
4. ask only when the remaining branch requires a user-specific value judgment, new authority, irreversible action, or a choice that changes the objective itself.

Question count is not a quality metric.

## Contextual activation

For complex work, combine this contract with [`contextual-activation.md`](contextual-activation.md) to reactivate known supporting work, dependencies, verification, and authority without expanding the task into a universal checklist.

## Source-of-truth reconstruction

When task context is incomplete or a session has been compressed, reconstruct state from the domain's current evidence rather than assuming an external task ledger exists.

Examples:

- repository work → current branch/revision, files, diff, tests, CI, generated outputs
- external service → current record/service state and observable action result
- research → current question, retrieved evidence, unsupported claims, remaining uncertainty
- artifact production → current artifact, source materials, validation results

Do not infer that an unobserved step was completed merely because it was planned.

## Revision-bound artifact review (conditional)

When a human review affects the next edit, acceptance, or publication of generated images, documents, code, or multiple candidate artifacts, bind feedback to what the reviewer **actually saw**, not merely a reused filename.

Track only the identifiers that matter in task-local state: `review_id`, `artifact_id`, immutable or otherwise verifiable `revision` (commit/blob/checksum/immutable version), human-readable label or URI, feedback `scope` (whole artifact, file, region/question), and `selected_artifact_id` when selection disambiguates "this one". Keep distinct artifacts and per-file feedback distinct.

- An `approve` or `select` decision applies to the reviewed revision only. A material change or re-generation does not silently inherit prior approval, even if the path or title stays the same.
- Feedback that refers to "the left one" or "this" must resolve against a verified current selection and review context; a stale/ambiguous reference requires clarification rather than speculative mutation.
- Revision identity and current artifact state must be checked before applying old feedback. Re-review only as required by acceptance; do not force a UI on every text decision.
- A host may provide a visual comparison/review surface; it is optional. Without one, use ordinary chat, explicit artifact labels, and navigable source URLs. Do not claim that a viewer exists.
- Review approval does not expand authority to publish, spend, delete, or modify unrelated artifacts. The final deliverable still needs source-of-truth verification.

The parent artifact contract owns acceptance; `runtime-workspace.md` owns transient coordination. A review interface is a host adapter rather than a mandatory kernel dependency.

## Completion re-derivation

Before reporting a substantive task complete:

1. return to the current objective and source of truth;
2. re-derive the completion criteria instead of trusting a remembered checklist;
3. classify the result as `passed`, `partial`, `failed`, or `blocked`;
4. classify verification as `verified`, `partial`, `unverified`, or `not_applicable`;
5. identify only meaningful failure signals such as `missing_knowledge`, `retrieval_failure`, `activation_failure`, `overactivation_failure`, `execution_failure`, `closure_failure`, or `authority_failure`;
6. only after task outcome is clear, evaluate retention or skill promotion.

The normal order is:

```text
completion re-derivation
        ↓
task outcome evaluation
        ↓
retention / capability maintenance
```

Task completion and learning are separate judgments. A failed task may yield a valuable reusable finding; a successful task may yield nothing worth retaining.

## Durable behavior contracts

For large, long-lived, or multi-agent implementations, externally observable behavior may be retained in the owning project when doing so improves handoff and regression safety. Keep implementation details separate unless they themselves require a durable design record.

Do not create durable contracts for trivial work merely because the mechanism exists.
