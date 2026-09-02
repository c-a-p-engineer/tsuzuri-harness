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
