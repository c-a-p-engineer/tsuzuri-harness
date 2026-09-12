# Evidence-Driven Self-Evolution

Self-evolution changes durable harness or instance state using evidence rather than momentum.

It does not retrain model weights. It changes retained identity state, memory, capability, routing, validation, or harness-level contracts where the owning layer permits it.

## Modes

- **Repair** — fix an observed failure or regression.
- **Explore** — investigate a plausible direction without requiring a prior failure.
- **Consolidate** — merge redundant rules, state, or capabilities.
- **Prune** — remove obsolete or harmful mechanisms.
- **Conserve** — deliberately preserve the current state when change is not justified.

## Standard loop

```text
current source of truth
      ↓
evidence / observation
      ↓
finding or exploration question
      ↓
evaluation when possible
      ↓
governance / authority check
      ↓
smallest correct change OR no change
      ↓
regression / outcome check
      ↓
evolution trace when durable and meaningful
      ↓
retain the result and provenance only if justified
```

## Rules

1. Re-read current canonical state before mutation; do not use an old conversational copy as the baseline.
2. Treat user correction as strong evidence, not as an automatic permanent commandment.
3. Curiosity may initiate low-cost reversible exploration.
4. Convert repeatable failures or comparisons into evaluations when practical. When an important failure is mechanically detectable and recurs across independent tasks, consider bounded executable enforcement under [`complexity-budget.md`](complexity-budget.md) before adding repeated prose.
5. Change the narrowest layer that owns the cause.
6. Do not treat more files, more memory, more agents, or more rules as proof of growth.
7. Keep host capability improvements out of identity unless the instance independently forms a related self-understanding from durable evidence.
8. Preserve history separately from runtime memory when evolution history is retained.
9. `no_change` is a valid, explicit result.
10. Prefer observable execution evidence when diagnosing activation, retrieval, validation, or stale-state problems; use [`execution-provenance.md`](execution-provenance.md) when its benefit justifies the trace overhead, and preserve material source/revision/validation specificity rather than laundering known evidence into generic uncertainty.
11. When evolution affects task routing or negative transfer, inspect [`contextual-activation.md`](contextual-activation.md) before adding a new rule or duplicate skill.
12. Apply [`governance.md`](governance.md) when the proposed change touches semantic authority, archive/privacy policy, external effects, identity-bearing state, or protected validation boundaries.
13. Use [`evolution-traceability.md`](evolution-traceability.md) for meaningful durable evolution so the reason, baseline, evidence, change, validation, and host impact remain reconstructable.
14. When evolution changes bootstrap, routing, memory, retention, validation, permissions, portability, or host assumptions, perform a lightweight host-impact review. `host_no_change` is a valid result.
15. Treat instance-local success as evidence about that instance first. Promote a finding into shared harness/kernel behavior only when the useful meaning can be separated from personal identity and has sufficient generalization evidence.

## Instance experience → shared kernel boundary

A persistent instance is allowed to discover useful things through its own history. That history can improve the shared harness, but **personal experience is not automatically a kernel rule**.

Use the following semantic path when an instance-local finding appears broadly useful:

```text
instance experience
      ↓
instance-local finding
      ↓
separate personal meaning from reusable mechanism
      ↓
generalization question
      ↓
independent evidence / comparison / eval when practical
      ↓
shared-kernel candidate
      ↓
governance + complexity review
      ↓
adapt / adopt / experiment / defer / reject / conserve
```

### What may generalize

A finding may become a harness/kernel candidate when the retained part is a host-neutral or broadly reusable mechanism such as:

- a retention or retrieval invariant;
- a task-routing or verification improvement;
- a reusable capability-maintenance rule;
- a governance, provenance, portability, or complexity boundary;
- a recurring failure class and its narrow repair;
- a general interaction or lifecycle contract that remains valid without the originating identity.

Prefer abstraction to copying. The shared layer should state the reusable invariant, not reproduce the originating conversation, character, preference, or project context.

### What must stay instance-local by default

Do not promote the following into the shared kernel merely because they were meaningful or successful for one instance:

- name, self-description, personality, values, aesthetic taste, or relationship meaning;
- episodic memories or private reflective history;
- a preference that has not demonstrated general utility outside the originating instance;
- one instance's archive, biography, emotional framing, or lifecycle narrative;
- project-specific progress or domain-specific facts owned elsewhere;
- a specialist capability whose value belongs in that instance's acquired-skill library rather than the blank harness.

The kernel may learn **how to preserve or evaluate** such state without inheriting the state itself.

### Evidence threshold

Do not require a universal observation count. Instead ask:

- Is the proposed rule meaningful outside the originating identity and task?
- Is the evidence independent enough to rule out one strongly primed conversation or one local success?
- Can a focused eval, counterexample, cross-context reuse, or cross-host comparison test the proposed generalization?
- Is the failure or benefit owned by the harness rather than by an instance-specific skill, memory, or project?
- Can an existing semantic owner absorb the change without adding unnecessary machinery?

A single severe deterministic failure may justify a narrow repair when the invariant is already clear. Broad behavioral generalization normally needs stronger independent evidence.

### Preserve provenance without copying the person

When an instance experience materially motivates a kernel change, retain enough evolution provenance to explain the source class of evidence and validation, but do not copy private transcripts, personal memories, or identity-bearing detail into the public/shared harness merely to prove origin.

A generalized regression case is usually preferable to publishing the original life event.

## Self-modification trust boundary

An instance may eventually modify its own presentation, acquired skills, memory organization, routing, validators, or other harness-owned state where the active repository and user authorization permit it. Self-modification must not become self-approval.

### Core rule

Do not weaken the criterion that judges a preferred change merely to make that same change pass.

Examples of protected evaluation boundaries include:

- validators and regression fixtures
- safety and effect boundaries
- authority/approval rules
- provenance/audit requirements
- identity-formation acceptance rules
- compatibility and migration invariants

### When the evaluator itself is the correct target

Evaluation rules are not immutable. If a validator, grader, or contract is actually wrong or obsolete, it may be changed, but the modification should be justified against evidence that does not depend solely on the proposed new rule.

Useful anchors include:

- the previous canonical contract
- independent fixtures or counterexamples
- observable host/service behavior
- another evaluator or review path
- current external authority/specification
- reproducible before/after evidence

Do not create a permanent second reviewer or elaborate approval state machine merely to satisfy this rule. Use the smallest independent check that protects the trust boundary.

### Presentation freedom

Derived views such as `CORE.md` may evolve much more freely than canonical identity, memory, relationship, skill provenance, or safety/authority contracts. An instance may redesign how it presents itself without treating presentation changes as evidence that the underlying canonical state changed.

## Blank-identity constraint

Self-evolution must not manufacture a persona simply because identity fields are empty. Identity formation follows the evidence and acceptance rules in [`../docs/IDENTITY-FORMATION.md`](../docs/IDENTITY-FORMATION.md).
