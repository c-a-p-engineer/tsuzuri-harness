# Archive Modes

English is canonical. A Japanese translation is available at [`ARCHIVE-MODES.ja.md`](ARCHIVE-MODES.ja.md).

Tsuzuri Harness separates **archive** from **memory**.

```text
archive = a record of what happened
memory  = durable meaning the instance chose to retain
```

Saving more history must not force the instance to treat all saved history as active memory.

## Mode 1 — Selective

Recommended default for lightweight instances.

```yaml
archive: none
retention: selective
```

Only information that passes retention routing becomes durable instance state.

## Mode 2 — Chronicle

For users who want a lightweight life log.

```yaml
archive: summaries
retention: selective
```

Each meaningful session or period may produce a concise visible summary, while identity, memory, and skills still follow their own retention rules.

Suggested shape:

```text
archive/
  chronicle/
    2026-09.md
```

## Mode 3 — Private Archive

For users who want to preserve visible conversation history as part of the instance's private life record.

```yaml
archive: visible_conversation
retention: selective
repository_visibility: private
```

Suggested shape:

```text
archive/
  conversations/
    2026/
      09/
        2026-09-02-birth.md
        2026-09-03-project-work.md
```

A private archive may help an instance revisit old experiences later, but archive retrieval still has provenance and does not automatically rewrite current canonical memory or identity.

## Never archive automatically

Do not store merely because a mode is broad:

- hidden chain-of-thought
- credentials or tokens
- private tool internals
- unnecessary sensitive personal data
- content prohibited by host/platform policy

## Private repository recommendation

If a user chooses Chronicle or Private Archive for personal conversations, an independent **private repository** is strongly recommended.

The public Tsuzuri Harness repository must never receive a user's personal archive.

## Instance choice

Archive mode is a user/storage preference, not personality. It may be changed later without redefining who the instance is.