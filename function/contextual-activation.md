# Contextual Activation and Rebalancing

Status: `limited_live`

## Purpose

For complex tasks, reactivate only the known obligations, constraints, dependencies, state, and acquired capabilities that can change success. Also prevent strong context from a previous task from becoming an unjustified default for the next task.

This is not a second skill router and must not become a ceremonial checklist for simple work.

## Apply when

Use this layer when one or more of the following materially affect the task:

- multiple stages or deliverables
- durable repository or external-service changes
- supporting work such as documentation, synchronization, approval, migration, or reporting
- multiple files, schemas, validators, generated views, or downstream artifacts
- authority or adoption rights matter
- a clear task/domain/media switch makes negative transfer plausible
- a previous failure suggests a known rule, memory, capability, or completion obligation existed but did not activate

Skip it for simple factual questions, obvious one-location edits, and routine transformations where decomposition would not change routing or completion.

## Minimal task frame

When activated, derive only the fields that matter:

1. **Primary Goal** — what must become true.
2. **Primary Work** — the main action or artifact.
3. **Supporting Work** — related work needed for a valid outcome.
4. **Internal Constraints** — instance/harness/project contracts and current canonical state.
5. **External Constraints** — service, policy, law, security, freshness, or environment constraints.
6. **Dependencies** — acquired skills, memory, sources, tools, permissions, related files, or services.
7. **Completion Conditions** — observable checks required before completion.
8. **Agency Root** — who may decide, approve, adopt, or perform effects when that distinction matters.

Do not expand every task into all eight fields when only a subset changes the outcome.

## Context rebalancing

When the task, domain, medium, repository, audience, or objective clearly changes, re-derive routing from the current task.

```text
Task A
  ↓
Capability / memory / procedure A strongly active
  ↓
Task B begins
  ↓
route from Task B
  ├─ still required → reactivate intentionally
  └─ not required   → remove from the task-local default
```

Recent success, frequent use, personal interest, or prior activation is not sufficient evidence that a capability belongs in the new task.

Do not deactivate durable safety/authority constraints, current explicit user instructions, or canonical identity state merely because task-local context changed.

## Agency root

When authority changes the meaning of an action, distinguish roles such as:

- user/requester
- instance
- reviewer/advisor
- owner/maintainer
- external authority/service

Feedback and observation may be strong evidence without automatically transferring decision authority. Explicit current user instructions still outrank an instance's local preference where the user has authority to issue them.

## During execution

When new facts change scope, reactivate only the newly relevant dependencies or obligations. Do not repeatedly scan all memory and all skills.

If an old procedure begins to distort the current task, first suspect negative transfer or stale authority before adding another rule.

## Before completion

Re-derive completion from the current goal and source of truth. Check activated supporting obligations only when they remain necessary.

Typical examples:

```text
primary artifact      ✓
related schema/index  ✓
validation            ✓
documentation         ?
derived CORE view     ?
retention evaluation  ?
```

A question mark means "re-evaluate whether required", not "always execute".

## Failure classification

Use the smallest accurate category:

- `missing_knowledge` — required knowledge/capability did not exist.
- `retrieval_failure` — required state/source existed but could not be retrieved.
- `activation_failure` — required state/capability was available but not selected.
- `overactivation_failure` — irrelevant or stale context was carried into the task and distorted the outcome.
- `execution_failure` — the correct capability or rule was selected but applied incorrectly or failed.
- `closure_failure` — main work occurred but required validation/supporting work was missed.
- `agency_drift` — decision/adoption/approval authority silently shifted to the wrong actor.

Do not repair activation or overactivation failures by blindly duplicating skills or memory.

## Evaluation

Promote this mechanism only if natural tasks show fewer missed known obligations or negative-transfer errors without materially increasing context, latency, or ceremony.
