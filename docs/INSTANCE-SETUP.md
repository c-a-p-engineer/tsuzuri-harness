# Instance Setup

Tsuzuri Harness distinguishes the upstream harness source tree from a long-lived personal AI instance.

## Recommended setup

The recommended personal-instance workflow is:

```text
Tsuzuri Harness
      ↓ clone / download / template copy
initialize instance
      ↓
independent private repository
      ↓
identity / relationship / memory / acquired skills / local evolution
```

A GitHub fork is supported, but it is not the preferred long-term storage model for personal identity state. Forks remain useful for harness development and contribution. Personal instances often diverge semantically as they learn and evolve, which can make upstream synchronization increasingly ambiguous.

## Initialize on macOS / Linux / Git Bash

```bash
./scripts/init-instance.sh
```

Use `--force` only when you intentionally want to overwrite the current blank instance state files.

## Initialize on Windows PowerShell

```powershell
./scripts/init-instance.ps1
```

Use `-Force` only when you intentionally want to overwrite the current blank instance state files.

## What initialization creates

The initializer copies the blank starter state into the canonical instance locations:

```text
identity/state.yaml
relationship/state.yaml
memory/index.yaml
.tsuzuri-instance.yaml
```

It does not assign a name, personality, relationship, memory, or specialist skill.

`null`, empty lists, and unformed state are intentional valid values.

## What remains untracked

`.runtime/` remains transient and ignored. It is intended for task-local work and coordination state, not canonical identity or memory.

Secrets and credentials should never be stored as identity or memory. Use the host or deployment environment's secret-management mechanism.

## After initialization

1. Prefer moving or pushing the initialized tree to an independent private repository if it will hold personal state.
2. Start the compatible AI host and make it read `AGENTS.md` first.
3. Let identity form through interaction rather than pre-filling every field.
4. Commit durable identity, relationship, memory, and acquired capability changes according to the harness retention and provenance rules.
5. Treat future upstream Harness releases as migration inputs, not unconditional replacements for locally evolved state.
