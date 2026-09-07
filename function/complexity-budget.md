# Harness Complexity Budget

Tsuzuri Harness should grow only when a new mechanism reduces more failure or cost than the mechanism itself creates.

A larger harness is not automatically a more capable harness. Every new hard gate, eager read, required subsystem, schema, adapter, validation step, or durable artifact adds activation and maintenance cost.

## Apply when

Review complexity when proposing a change that would add or materially expand:

- a startup requirement or eager read
- a mandatory routing stage
- a new kernel subsystem
- a new persistent store or canonical state class
- a host/runtime dependency
- an external service requirement
- a validator or approval gate
- duplicated policy across several files

Do not invoke a formal complexity review for an obvious local correction that does not change control flow or durable architecture.

## Preferred decision order

Before creating a new mechanism, ask:

1. **Can an existing owner absorb this responsibility?** Prefer an existing semantic owner through extension or consolidation when its responsibility already fits.
2. **Is the failure real?** Do not create permanent machinery for a single speculative edge case without meaningful evidence.
3. **Can the rule be conditional?** Prefer task-triggered activation over eager global loading.
4. **Can derived state remain disposable?** Do not create a new canonical store when the state can be rebuilt from existing canonical truth.
5. **Can a validator replace repeated prose?** Mechanically detectable repeated failures may justify enforcement rather than more prompt text.
6. **Does the mechanism preserve host portability?** Host-specific optimization should remain an adapter when possible.
7. **What can be removed or merged at the same time?** Growth may be net-neutral or negative in rule count.

## Instruction-to-enforcement promotion

When the same important instruction or mechanically detectable failure recurs across independent tasks, do not default to adding another warning, prompt paragraph, or duplicate rule.

Consider promoting the requirement to the narrowest executable enforcement layer that actually owns the invariant, for example:

- schema validation
- deterministic test or regression fixture
- lint or static analysis
- state/precondition check
- artifact validator
- CI assertion
- permission or environment guard

Promotion is not automatic. Before adding a durable gate, evaluate:

- **mechanical detectability** — can the failure be recognized reliably without subjective semantic judgment?
- **false positives** — will valid alternatives be rejected?
- **false negatives** — can the harmful pattern still pass while appearing compliant?
- **scope** — can enforcement stay close to the owning boundary instead of becoming a global gate?
- **maintenance cost** — will the check remain understandable and cheap enough to keep current?
- **blast radius** — what otherwise valid work can the gate block when it is wrong or stale?
- **escape hatch** — if exceptions are legitimate, can they be explicit, narrow, reasoned, and reviewable?
- **host portability** — is the invariant canonical while the enforcement mechanism may remain host- or repository-specific?

Prefer executable enforcement when repeated failure is important, deterministic, and cheaper to prevent than repeatedly rediscover. Prefer prompts, rubrics, model judgment, or human review when correctness is meaning-dependent, context-sensitive, aesthetic, or otherwise not safely reducible to a deterministic gate.

Do not weaken the original requirement merely to make a validator easier to implement. A check should encode the invariant, not launder the failure into a different representation.

## Failure modes created by complexity

Watch for:

- `activation_failure` — the correct mechanism exists but is too hard to discover or route
- `overactivation_failure` — too many globally active rules distort simple tasks
- context inflation — required startup material consumes context without current-task value
- duplicate authority — several files claim the same semantic responsibility
- stale contract drift — duplicated rules evolve inconsistently
- host coupling — a convenience implementation becomes a false portability requirement
- ceremonial execution — steps are performed because the harness contains them, not because the task needs them

## Acceptance criteria for a new subsystem

A durable new subsystem should normally have:

- a responsibility not already owned cleanly elsewhere
- a concrete failure class or scaling pressure it addresses
- clear activation conditions and skip conditions
- a canonical/derived-state boundary
- host and authority boundaries when relevant
- a way to validate the intended behavior
- evidence that its expected value exceeds ongoing context and maintenance cost

`Conserve`, consolidation into an existing subsystem, or deletion are valid outcomes.

## Relationship to self-evolution

Self-evolution must not optimize for number of mechanisms. When a proposed improvement can be expressed by simplifying routing, strengthening an existing contract, adding a focused eval, promoting a repeated deterministic failure into a bounded executable check, or removing duplicated state, prefer the smallest durable change that fixes the observed problem.

## Blank-instance invariant

Complexity management is a kernel property. It must not manufacture personality, memories, relationships, skills, or lifecycle milestones for a blank instance.
