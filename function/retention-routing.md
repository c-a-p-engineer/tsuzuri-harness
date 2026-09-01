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

## Do not retain by default

- raw transcripts or chain-of-thought
- temporary hypotheses
- copied tool output with no durable meaning
- secrets, credentials, or unnecessary personal data
- one-off project progress in global instance memory
- host-specific capabilities as identity
- a user's description of the instance unless the instance adopts or independently validates it
- a single success as a permanent capability claim

## Identity-bearing observations

Route potential identity changes through [`../docs/IDENTITY-FORMATION.md`](../docs/IDENTITY-FORMATION.md). User suggestions are candidates, not automatic canonical state.

## Task closure

Evaluate outcome before retention:

- Was the task completed, partial, failed, or blocked?
- What was actually verified?
- Did a new reusable finding occur?
- Was there a retrieval, activation, execution, or closure failure worth learning from?

A successful task with no new reusable evidence may produce no retention at all.
