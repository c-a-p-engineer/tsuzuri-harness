# Capability Maintenance

Capability maintenance governs whether task-local competence should become durable reusable capability and whether the acquired capability library remains healthy over time.

## Default

A blank instance starts with **no acquired specialist skills**. The harness kernel is not counted as acquired domain capability.

A temporary capability normally expires at task closure.

When a task used a structured temporary capability, [`capability-capsule.schema.yaml`](capability-capsule.schema.yaml) is the preferred promotion input. The capsule is evidence about what was assembled and verified; it is not itself a durable skill.

## Promotion options

When reusable evidence exists, compare the smallest sufficient outcome:

1. retain nothing
2. retain a lightweight procedural lesson
3. update an existing acquired capability
4. create a new acquired capability

Do not create a new skill merely because a task succeeded.

## Promotion criteria

A durable capability should have meaningful evidence across dimensions such as:

- reuse value
- correct activation conditions
- observable contribution to outcome quality
- non-redundancy with existing capability
- risk of negative transfer or overreach
- validation coverage
- provenance and freshness where external sources matter
- evidence across sufficiently independent tasks or contexts when broad reuse is claimed

Repeated use inside one tightly correlated task is weaker evidence than successful reuse across distinct contexts.

## Failure classification

Before adding knowledge or duplicating capability, distinguish:

- **missing knowledge** — the capability did not exist
- **retrieval failure** — it existed but was unreachable
- **activation failure** — it was reachable but not selected
- **overactivation failure** — stale or irrelevant capability/context was selected and distorted the task
- **execution failure** — it was selected but not applied correctly
- **closure failure** — execution happened but verification or supporting obligations were missed
- **agency drift** — the wrong actor silently became the decision/adoption authority

Do not fix activation, overactivation, execution, or closure failures by blindly creating duplicate skills.

Use [`contextual-activation.md`](contextual-activation.md) when the problem is task routing or negative transfer, and [`execution-provenance.md`](execution-provenance.md) when observable execution evidence can localize the failure.

## Promotion from a capability capsule

Before promoting task-local competence, ask:

1. Was the capability actually executable and verified?
2. Did it contribute materially to a successful or informative outcome?
3. Is the useful part a reusable procedure, an update to an existing skill, or genuinely a new skill?
4. Can activation conditions, limits, and verification be described without copying the whole task context?
5. Would retention reduce future work without creating harmful negative transfer?
6. Is the claimed reuse supported by independent evidence rather than one thematic cluster?

If the answer is weak or uncertain, prefer expiration or a small procedural lesson.

## Capability Library Health

Durable capability quality is evaluated from **natural usage evidence**, not skill count or a single overall score.

Useful dimensions include:

- **activation precision** — when the capability activates, how often is it actually relevant?
- **activation coverage** — when the capability is materially needed, how often is it reachable and selected?
- **quality contribution** — does observable task quality improve when the capability is correctly used?
- **execution waste** — does the capability cause repeated unnecessary reads, tools, steps, or context expansion?
- **negative transfer** — does it distort tasks outside its intended activation conditions?
- **validation reliability** — are claimed results actually checked at the level the capability promises?
- **evidence traceability** — can maintainers connect a proposed capability edit to observed task evidence without storing private reasoning?

Do not turn these dimensions into fictional XP, maturity, or a universal numeric grade. They are maintenance questions, not identity metrics.

### Interpreting low usage

A capability being unused for a long period is not sufficient evidence for removal. Distinguish:

- no relevant target tasks occurred;
- relevant tasks occurred but routing/retrieval failed;
- the capability is redundant with another capability;
- host observability is insufficient;
- the capability is genuinely obsolete or too costly to retain.

### Interpreting failed tasks

When a task fails, inspect the current canonical capability before editing it.

If the correct instruction already exists and was reachable, adding the same instruction again is usually the wrong fix. Check retrieval, activation, execution, validation, tool/environment behavior, and negative transfer first.

Repeated mechanically detectable failures may justify a validator or automated check instead of more prose.

### External capability provenance

When an external Agent Skill, repository, package, or reusable source materially influences durable capability, use [`external-skill-provenance.schema.yaml`](external-skill-provenance.schema.yaml) to keep source identity, local targets, adoption/rejection, and recheck conditions auditable.

An upstream source changing does not auto-update the instance. It triggers reevaluation against the current canonical local capability.

## Lifecycle

Durable capability may later be:

- revised
- consolidated
- deprecated
- pruned
- revalidated against changed external authority

Choose the smallest justified maintenance action. Removal, consolidation, or `Conserve` may be better growth than adding another skill.

Growth is library health, not capability count.
