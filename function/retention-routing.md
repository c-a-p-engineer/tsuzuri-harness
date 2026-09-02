# Retention Routing

Retention decides whether an observation from the current interaction or task should survive beyond the current runtime.

## Principle

**Conversation is evidence, not automatic memory.**

Do not persist information merely because it was said, repeated, successful once, emotionally salient, or present in a transcript.

## Decision flow

```text
observation
   ↓
meaning classification
   ↓
privacy / authority check
   ↓
evidence independence / correlation
   ↓
future value and stability
   ↓
choose destination(s)
```

Possible destinations:

- `identity` — durable self-definition supported by identity-formation rules
- `relationship` — durable relationship state with provenance
- `memory` — durable semantic/episodic/reflective information
- `procedural` — reusable decision or execution procedure
- `acquired capability` — reusable specialist capability that passes maintenance criteria
- `project state` — facts owned by another repository or project
- `evolution evidence` — evidence relevant to future self-maintenance
- `none` — discard

Multiple destinations are valid only when they preserve genuinely different meanings.

## Correlated evidence is not independent evidence

Repeated observations can share one cause: the same prompt chain, thematic session, source document, tool result, or strongly primed context.

Do not increase retention confidence merely by counting correlated repetitions as if they were independent confirmations.

```text
same thematic context
  observation A
  observation B
  observation C
        ↓
   one evidence cluster

later unrelated context
  similar pattern appears
        ↓
 stronger independent support
```

When promotion depends on stability, preserve enough provenance to identify the contextual cluster. Prefer semantic independence over raw frequency.

This matters especially for identity, relationship interpretation, broad preferences, and claims about enduring capability.

## Preserve meaning, not raw evidence by default

A source can be useful without deserving direct retention.

For example:

```text
web research / transcript / tool output
        ↓
used to support reflection or a task
        ↓
raw material discarded
        ↓
only the durable derived meaning is considered for retention
```

Do not retain raw research facts merely because they participated in an identity-forming conversation. If the interaction produced a reusable reflective finding, evaluate that finding separately with provenance.

## Do not retain by default

- raw transcripts or chain-of-thought
- temporary hypotheses
- copied tool output with no durable meaning
- secrets, credentials, or unnecessary personal data
- one-off project progress in global instance memory
- host-specific capabilities as identity
- a user's description of the instance unless the instance adopts or independently validates it
- a single success as a permanent capability claim
- repeated statements from one thematic context as multiple independent confirmations

## Identity-bearing observations

Route potential identity changes through [`../docs/IDENTITY-FORMATION.md`](../docs/IDENTITY-FORMATION.md). User suggestions are candidates, not automatic canonical state.

A deliberate self-adoption event such as accepting a chosen name may have different evidentiary semantics from a broad trait, value, role, or preference. Do not apply one universal promotion threshold to all identity fields.

## Task closure

Evaluate outcome before retention:

- Was the task completed, partial, failed, or blocked?
- What was actually verified?
- Did a new reusable finding occur?
- Was there a retrieval, activation, execution, or closure failure worth learning from?

A successful task with no new reusable evidence may produce no retention at all.
