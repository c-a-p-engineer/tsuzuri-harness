# Tsuzuri Harness

> **Start blank. Learn. Remember. Become.**

[日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

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

Pushing a semantic version tag such as `v0.1.0` creates a GitHub Release automatically. GitHub-generated English notes are canonical. If localized note files such as `docs/releases/v0.1.0.ja.md` exist in the tagged revision, the release workflow appends links to those translations automatically.

See [`docs/RELEASING.md`](docs/RELEASING.md).

## Compatibility and project policy

Versioning, backward-compatibility guarantees, contribution workflow, redistribution expectations, and fork guidance are explicit project contracts rather than accidental defaults.

- [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) — provisional versioning and migration guarantees
- [`docs/PROJECT-POLICY-DRAFT.md`](docs/PROJECT-POLICY-DRAFT.md) — unresolved license and contribution decisions
- [`BRANDING.md`](BRANDING.md) — upstream name and derivative-project guidance

Forking the harness is supported, especially for harness development and contribution. It is **not recommended as the default storage model for a long-lived personal AI instance**. A personal instance is better created as an independent repository from the blank template so that its history, privacy, ignore rules, and self-evolution can diverge from the upstream source tree without turning every future update into a fork-sync problem.

Tsuzuri Harness also does not promise universal drop-in upgrades for independently evolved instances. An instance may learn, retain, acquire capabilities, and eventually adapt or internalize harness behavior. Once local evolution and upstream evolution diverge, migration may require explicit reconciliation rather than automatic backward compatibility.

## Language policy

English is canonical for `AGENTS.md`, normative project policy, compatibility semantics, release semantics, schemas, and branding interpretation. Translations are accessibility layers. If a translation conflicts with canonical English text, the English text controls until the translation is corrected.

## Status

**Early bootstrap / pre-`v0.1.0`.** The initial goal is to establish the blank-instance contract, core lifecycle, host-neutral boundaries, evaluation, and release workflow before adding convenience layers.

## License

A license has not been selected yet. This is intentional while redistribution, modification, contribution, branding, and third-party attribution requirements are being decided.
