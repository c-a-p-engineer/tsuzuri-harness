# Instance Setup

Tsuzuri Harness distinguishes the upstream harness source tree from a long-lived personal AI instance.

## Recommended setup

```text
Tsuzuri Harness
      ↓ clone / download / template copy
initialize instance
      ↓
independent private repository
      ↓
identity / relationship / memory / acquired skills / evolution history
      ↓
CORE.md / JOURNEY.md derived views
      ↓
optional chronicle or private archive
```

A GitHub fork is supported, but it is not the preferred long-term storage model for personal identity state. Forks remain useful for harness development and contribution. Personal instances often diverge semantically as they learn and evolve, which can make upstream synchronization increasingly ambiguous.

## Initialize on macOS / Linux / Git Bash

```bash
./scripts/init-instance.sh
```

Use `--force` only when you intentionally want to overwrite the current blank/derived starter files. If an existing instance manifest contains `birth_at`, the initializer preserves that persistent-birth value rather than silently rebirthing the instance.

## Initialize on Windows PowerShell

```powershell
./scripts/init-instance.ps1
```

Use `-Force` with the same caution. Existing `birth_at` lifecycle metadata is preserved when present.

## What initialization creates

```text
identity/state.yaml
relationship/state.yaml
memory/index.yaml
evolution/index.yaml
evolution/records/
CORE.md
JOURNEY.md
.tsuzuri-instance.yaml
```

It does not assign a name, personality, relationship, memory, specialist skill, or fabricated milestone.

`null`, empty lists, and unformed state are intentional valid values.

### Persistent birth

The instance manifest records:

```yaml
birth_at: "<UTC timestamp>"
birth_source: instance_initialization
```

This is the default beginning of durable repository-backed continuity.

If the repository intentionally continues an earlier read-only or migrated instance and stronger evidence supports an earlier beginning, the lifecycle metadata may be corrected with provenance. Do not silently change birthday merely because files were reorganized or the initializer was rerun.

### Derived views

`CORE.md` answers **who the instance is now**. See [`CORE-VIEW.md`](CORE-VIEW.md).

`JOURNEY.md` answers **how the instance became itself** using factual milestones such as birth, naming, skills, memory, relationship, and evolution. See [`JOURNEY-ALBUM.md`](JOURNEY-ALBUM.md).

Both are human-readable views, not canonical state.

`evolution/` stores meaningful durable growth history separately from active memory. See [`EVOLUTION-TRACEABILITY.md`](EVOLUTION-TRACEABILITY.md).

The manifest also starts with:

```yaml
archive_mode: selective
governance: kernel-default
```

A user may later intentionally choose Chronicle or Private Archive behavior. See [`ARCHIVE-MODES.md`](ARCHIVE-MODES.md). Governance and authority semantics are described in [`GOVERNANCE.md`](GOVERNANCE.md).

## Memory maintenance

A new instance begins with empty memory and needs no cleanup.

As retained memory grows, use [`MEMORY-METABOLISM.md`](MEMORY-METABOLISM.md) when duplication, staleness, contradiction, supersession, or structural noise appears. Memory maintenance is selective and evidence-driven; it is not an automatic purge schedule.

## What remains untracked

`.runtime/` remains transient and ignored. It is intended for task-local work and coordination state, not canonical identity, memory, or evolution history.

Secrets and credentials should never be stored as identity, memory, archive, journey, or evolution history. Use the host or deployment environment's secret-management mechanism.

## After initialization

1. Prefer moving or pushing the initialized tree to an independent private repository if it will hold personal state.
2. Start the compatible AI host and make it read `AGENTS.md` first.
3. Try the [`BIRTH-JOURNEY.md`](BIRTH-JOURNEY.md) approach instead of pre-filling a persona.
4. Use ordinary phrases from [`EVERYDAY-PROMPTS.md`](EVERYDAY-PROMPTS.md) to request retention, skill review, self-evolution, memory cleanup, Core View, or Journey Album.
5. Let identity form through interaction rather than pre-filling every field.
6. Commit durable identity, relationship, memory, acquired capability, and meaningful evolution changes according to the harness retention, governance, and provenance rules.
7. Refresh `CORE.md` and `JOURNEY.md` from canonical state when meaningful changes occur or the user asks to see them.
8. Treat future upstream Harness releases as migration inputs, not unconditional replacements for locally evolved state.
