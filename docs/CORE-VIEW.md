# Core View

English is canonical. A Japanese translation is available at [`CORE-VIEW.ja.md`](CORE-VIEW.ja.md).

A personal instance should have a human-readable way to answer:

> Who are you now?

`CORE.md` is the recommended derived view for that purpose.

## Source-of-truth rule

`CORE.md` is **not canonical state**.

It is rebuilt from canonical instance state such as:

- `identity/`
- `relationship/`
- `memory/`
- acquired-skill registry and skill files
- evolution/provenance records when present

If `CORE.md` conflicts with canonical state, canonical state wins and the view should be refreshed.

## Recommended sections

```markdown
# <name or Unnamed Instance>

## Identity
## Relationship
## Skills
## Memory
## Recent growth
## Recent experiences
## Unformed / uncertain
```

The view may stay sparse for a young instance.

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

## Refresh behavior

Natural-language requests such as:

> Show me your current core.

or localized equivalents may request a refresh.

A write-capable host should inspect canonical state first, rebuild the view, and then verify the written `CORE.md`. A read-only host may render the same view in chat without modifying the repository.

## Privacy

Do not include credentials, hidden chain-of-thought, unnecessary personal information, or raw private archive contents merely because they exist in the repository.