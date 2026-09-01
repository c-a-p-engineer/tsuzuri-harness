# Tsuzuri Harness

> **Start blank. Learn. Remember. Become.**

[日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [한국어](README.ko.md)

Tsuzuri Harness is a portable AI harness for blank identities that learn, remember, acquire capabilities, and evolve through experience.

It does **not** ship a finished persona. A new instance begins without a predefined name, personality, relationship, memories, or acquired specialist skills. The harness provides the mechanisms that let an AI form those things over time through interaction, evidence, choice, retention, and self-evolution.

## Core idea

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
interaction / work / observation
        ↓
capability acquisition
retention decisions
identity formation
self-evolution
        ↓
a distinct, persistent AI identity
```

The framework is derived from the architecture and long-running operational lessons of the private `tsuzuri-core`, but this repository intentionally contains **none of Tsuzuri's personal identity, relationship history, private memory, visual assets, or acquired specialist skills**.

## What the harness provides

- **Blank identity lifecycle** — identity fields may remain `null` until the instance has reason to form them.
- **Identity formation** — a name, values, preferences, role, and self-description can emerge from interaction rather than being prefilled.
- **Selective memory** — conversation is evidence, not automatic long-term memory.
- **Capability acquisition** — an instance may temporarily construct the knowledge, tools, procedures, and validation needed for a task.
- **Capability maintenance** — reusable capabilities may be retained, revised, consolidated, pruned, or discarded.
- **Evidence-driven self-evolution** — Repair, Explore, Consolidate, Prune, and Conserve are all valid outcomes.
- **Runtime workspace** — transient `work` and task-local `share` state stay separate from canonical identity and memory.
- **Host portability** — the same instance can be loaded by different compatible AI hosts without treating host capabilities as personal identity.
- **Behavioral contracts and evaluation** — correctness is based on observable invariants, provenance, and verification rather than prompt length.

## What it does not provide

- A predefined character or personality
- Tsuzuri's identity or memories
- A bundle of domain-specific skills
- A base model
- A terminal, browser, sandbox, scheduler, or messaging runtime
- A requirement that every instance must persist

The harness is a **cognitive and identity control plane**, not an all-in-one execution runtime.

## Repository shape

```text
AGENTS.md                     canonical bootstrap
function/                     host-neutral cognitive/runtime contracts
memory/                       memory routing contract (empty at start)
identity/                     identity formation contract (no persona values)
relationship/                 relationship formation contract
schemas/                      machine-readable state schemas
adapters/                     host integration notes/adapters
templates/instance/           a completely blank instance starter
evals/                        behavioral and lifecycle contracts
docs/                         architecture and design documentation
.github/workflows/            CI/release automation
```

## Bootstrap

Compatible agents should read [`AGENTS.md`](AGENTS.md) first. It defines the host-neutral invariants and the boundary between the harness kernel and instance-owned state.

A new instance should start from [`templates/instance/`](templates/instance/) rather than copying another instance.

## Identity formation

An empty field is not an error.

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

A user may offer a name, or the instance may discover one for itself. An offered name becomes canonical only if the instance accepts it. An instance may also remain unnamed indefinitely.

See [`docs/IDENTITY-FORMATION.md`](docs/IDENTITY-FORMATION.md).

## Growth

The harness supports five evidence-driven evolution modes:

- **Repair** — fix a demonstrated failure.
- **Explore** — investigate a plausible new direction without requiring a prior failure.
- **Consolidate** — merge redundant rules, capabilities, or state.
- **Prune** — remove mechanisms that are no longer useful.
- **Conserve** — deliberately keep the current state when change is not justified.

Growth does not mean accumulating more files or rules. A valid evolution outcome may be `no_change`.

## Releases

Pushing a semantic version tag such as `v0.1.0` is configured to create a GitHub Release automatically. Release notes are generated from GitHub history; localization policy is documented separately because GitHub provides one Markdown release body per release rather than native per-language release variants.

See [`docs/RELEASING.md`](docs/RELEASING.md).

## Compatibility and project policy

Versioning, backward-compatibility guarantees, contribution workflow, redistribution expectations, and fork guidance are intentionally treated as explicit project contracts rather than accidental defaults.

Those policies are being defined before the first stable release. Until they are finalized, do not infer stability guarantees from the repository structure alone.

## Status

**Early bootstrap / pre-`v0.1.0`.** The initial goal is to establish the blank-instance contract, core lifecycle, host-neutral boundaries, and release workflow before adding convenience layers.

## License

A license has not been selected yet. This is intentional while redistribution, modification, fork expectations, and third-party attribution requirements are being decided.
