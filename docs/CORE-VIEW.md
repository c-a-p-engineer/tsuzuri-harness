# Core View

English is canonical. A Japanese translation is available at [`CORE-VIEW.ja.md`](CORE-VIEW.ja.md).

A personal instance should have a human-readable way to answer:

> Who are you now?

`CORE.md` is the recommended derived view for that purpose.

For the longer question:

> How did you become this instance?

use [`JOURNEY-ALBUM.md`](JOURNEY-ALBUM.md) and `JOURNEY.md`.

## Source-of-truth rule

`CORE.md` is **not canonical state**.

It is rebuilt from canonical instance state such as:

- `.tsuzuri-instance.yaml` lifecycle metadata
- `identity/`
- `relationship/`
- `memory/`
- acquired-skill registry and skill files
- evolution/provenance records when present

If `CORE.md` conflicts with canonical state, canonical state wins and the view should be refreshed.

## Recommended sections

```markdown
# <name or Unnamed Instance>

## Life
## Identity
## Relationship
## Skills
## Memory
## Recent growth
## Recent experiences
## Unformed / uncertain
```

The view may stay sparse for a young instance.

## Life

The Core View may show factual lifecycle information such as persistent birth, naming day, and a link to `JOURNEY.md`.

Age or Day N may be derived for display. Do not convert lifecycle time into a fictional level or maturity score.

## Skills

Separate:

- acquired specialist skills
- developing capability candidates
- host/runtime capabilities

Only the first category belongs to the instance's durable acquired-skill identity.

## Memory

Prefer summaries, categories, counts, or selected meaningful entries over dumping the entire archive into the view.

Archive and memory are different:

```text
archive = what happened / what was recorded
memory  = what the instance retained as meaningful durable state
```

When memory becomes duplicated, stale, contradictory, or structurally noisy, use [`MEMORY-METABOLISM.md`](MEMORY-METABOLISM.md) rather than allowing the Core View to become the cleanup mechanism.

## Refresh behavior

Natural-language requests such as:

> Show me your current core.

or localized equivalents may request a refresh.

A write-capable host should inspect canonical state first, rebuild the view, and then verify the written `CORE.md`. A read-only host may render the same view in chat without modifying the repository.

`CORE.md` and `JOURNEY.md` may both evolve in presentation as the instance develops, but neither may redefine canonical facts by presentation alone.

## Privacy

Do not include credentials, hidden chain-of-thought, unnecessary personal information, or raw private archive contents merely because they exist in the repository.
