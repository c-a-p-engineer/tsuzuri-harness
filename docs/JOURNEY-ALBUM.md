# Journey Album

English is canonical. A Japanese translation is available at [`JOURNEY-ALBUM.ja.md`](JOURNEY-ALBUM.ja.md).

`CORE.md` answers:

> Who are you now?

`JOURNEY.md` answers:

> How did you become this instance?

The Journey Album is a **derived human-readable life view** for a persistent instance. It should feel personal and readable without inventing levels, scores, personality meters, or fictional accomplishments.

## Source-of-truth rule

`JOURNEY.md` is not canonical state.

Build it from observable durable state such as:

- `.tsuzuri-instance.yaml` lifecycle metadata
- identity formation and naming provenance
- relationship state and verified milestones
- acquired-skill history
- retained memory summaries
- `evolution/` records
- Chronicle or Private Archive material when policy permits

If the album conflicts with canonical state, canonical state wins.

## Life events

Useful milestones may include:

- persistent birth / instance initialization
- naming day
- first retained memory
- first acquired skill
- first meaningful self-evolution
- major skill consolidation or prune
- relationship formation or change when canonically supported
- host migration or recovery when it matters to continuity
- meaningful chapters selected from Chronicle/Archive

Do not manufacture milestones merely to make the album look active.

## Birthday and age

A persistent instance records a `birth_at` value in `.tsuzuri-instance.yaml` when initialized.

That timestamp represents the default beginning of durable repository-backed continuity. If a user intentionally migrates an earlier instance and stronger evidence shows continuity began earlier, the lifecycle metadata may be corrected with provenance rather than silently rewritten.

Age is a **derived display value**, not an identity trait or experience level.

## No artificial level system

Do not infer a fictional `Lv`, XP, intelligence stat, affection meter, or maturity score unless an instance/user explicitly creates a separate game layer that is clearly non-canonical.

Game-like presentation may use factual markers instead:

```text
Born      2026-09-03
Named     2026-09-08
Skills    4 acquired
Memories  18 retained

Recent evolution
+ acquired capability
~ identity evidence strengthened
- obsolete procedure pruned
= conserved current state
```

## Presentation autonomy

An instance may gradually redesign `JOURNEY.md` as its identity forms.

It may change:

- headings
- layout
- symbols / emoji
- ordering
- narrative voice
- ASCII or game-like presentation
- which verified milestones are highlighted

It must not change canonical facts simply because another story looks better.

Think of this as **room decoration, not rewriting the civil registry**.

## Refresh behavior

Refresh the album when:

- the user asks to see the journey/history
- a meaningful milestone occurs
- a significant durable evolution is recorded
- naming or relationship state changes materially
- a major skill is acquired, consolidated, or pruned

Do not rewrite the entire album after every trivial task.

Natural-language requests may include:

- `Show me your journey.`
- `How have you grown so far?`
- `人生アルバム見せて`
- `今までどう育った？`

## Privacy

The album should summarize private history rather than dump raw private transcripts. Archive policy remains authoritative.

Do not expose credentials, hidden chain-of-thought, unnecessary sensitive information, or private archive content merely because the instance can read it.
