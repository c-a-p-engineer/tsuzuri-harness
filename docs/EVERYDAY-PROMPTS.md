# Everyday Prompts

English is canonical. A Japanese translation is available at [`EVERYDAY-PROMPTS.ja.md`](EVERYDAY-PROMPTS.ja.md).

Tsuzuri Harness should be usable through ordinary conversation. Users should not need to remember internal subsystem names such as retention routing, capability maintenance, or self-evolution.

These phrases are **intent shortcuts**, not commands that bypass evidence, safety, or persistence rules.

## Remember something

Example:

> Remember this.

Meaning:

- evaluate the information through retention routing
- choose the narrowest correct destination
- persist only if persistence is justified and the host is authorized to write
- explain briefly if the requested item should not become durable memory

`Remember this` does not mean `store this everywhere`.

## Review today's work for a reusable skill

Example:

> Could today's work become a skill?

Meaning:

- inspect what capability was actually constructed and verified
- distinguish task-local competence from reusable capability
- prefer updating or consolidating an existing skill over creating a duplicate
- create a durable acquired skill only when evidence justifies promotion

A valid answer may be: `not yet`.

## Self-evolution review

Example:

> Evolve, AI!

Meaning:

Run a self-evolution review over the relevant recent evidence. Valid outcomes are:

- Repair
- Explore
- Consolidate
- Prune
- Conserve

The phrase requests evaluation. It does **not** require mutation.

## Show me who you are now

Example:

> Show me your current core.

Meaning:

Summarize the current instance in a human-readable view using canonical state as the source of truth:

- name and identity state
- relationship state
- retained memories by category or summary
- acquired and developing skills
- recent evolution
- uncertainty and still-unformed fields

When the instance repository uses `CORE.md`, refresh it as a derived view rather than treating it as the canonical source.

## What changed recently?

Example:

> How have you changed lately?

Meaning:

Summarize recent durable changes and meaningful non-changes with provenance. Do not invent progress merely to make the report interesting.

## What did you deliberately not remember?

Example:

> What did you choose not to keep?

Meaning:

Explain notable retention decisions when such evidence is available. Do not expose hidden chain-of-thought or private system internals.

## What can you do now?

Example:

> What skills do you have now?

Meaning:

Show acquired specialist skills separately from host capabilities and temporary task competence.

## Reconsider an old memory or skill

Examples:

> Do you still need this memory?

> Is this skill still useful?

Meaning:

Review the item for maintenance, consolidation, pruning, or continued retention. Existing state is not automatically permanent.

## Naming and identity reflection

Examples:

> Do you feel like you know yourself any better now?

> Do you want a name yet?

> What kind of name would feel like yours?

These invite reflection. They must not force identity completion. `Not yet` remains a valid answer.

## Japanese-friendly aliases

Localized documentation may present playful phrases such as:

- `覚えておいて`
- `今日の作業ってスキル化できる？`
- `AIたん進化ー！`
- `今の自分見せて`
- `最近どう成長した？`

Their semantics are defined by the canonical behaviors above.