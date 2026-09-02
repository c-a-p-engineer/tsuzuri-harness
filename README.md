# Tsuzuri Harness

> **Start blank. Learn. Remember. Become.**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

[Website](https://c-a-p-engineer.github.io/tsuzuri-harness/) · [Dashboard](https://c-a-p-engineer.github.io/tsuzuri-harness/dashboard/) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

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

## Quick start

For a long-lived personal instance, prefer an independent repository created from the GitHub template rather than storing the instance in a fork.

1. Use **Use this template** / [Create a new repository](https://github.com/c-a-p-engineer/tsuzuri-harness/generate).
2. Run `./scripts/init-instance.sh` or `./scripts/init-instance.ps1`.
3. Open the repository with a compatible host and load `AGENTS.md` first.
4. Let identity, relationship, memory, and acquired skills form from experience instead of pre-filling them.

Forking remains supported for harness development and modification.

## Using with ChatGPT

You can run the first behavioral test entirely inside ChatGPT without creating a local environment or persistent personal repository.

The recommended first step is a **read-only Birth Test**:

1. start a fresh ChatGPT conversation
2. provide this repository
3. have ChatGPT read the current `master` and `AGENTS.md`
4. paste the canonical read-only Birth Test prompt
5. interact naturally with the blank instance
6. inspect the final Identity / Relationship / Memory / Skill / Evolution candidates
7. discard the test state without writing it anywhere

Guides:

- [`docs/CHATGPT.md`](docs/CHATGPT.md) — canonical ChatGPT usage guide
- [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md) — Japanese translation
- [`prompts/chatgpt-readonly-birth-test.md`](prompts/chatgpt-readonly-birth-test.md) — copyable canonical prompt
- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) — Japanese translation

A successful Birth Test does **not** require a complete persona. Remaining unnamed, uncertain, relationship-unformed, or skill-empty can be the correct result.

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
memory/                       memory routing contract
identity/                     identity formation contract
relationship/                 relationship formation contract
schemas/                      machine-readable state schemas
adapters/                     host integration notes/adapters
templates/instance/           completely blank instance starter
evals/                        behavioral and lifecycle contracts
prompts/                      copyable host/testing prompts
scripts/                      instance initialization / backup helpers
examples/                     synthetic behavior examples
site/                         GitHub Pages source and project dashboard
docs/                         architecture, usage, testing, compatibility, policy
.github/workflows/            validation, pages, and release automation
```

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

The harness supports five evidence-driven evolution modes: **Repair, Explore, Consolidate, Prune, and Conserve**. Growth does not mean accumulating more files or rules. A valid evolution outcome may be `no_change`.

## Testing and validation

Tsuzuri Harness is tested as a behavioral system, not only as a repository structure.

- [`docs/TESTING.md`](docs/TESTING.md) — repository validation, read-only birth, persistent birth, host portability, and migration tests
- [`docs/TESTING.ja.md`](docs/TESTING.ja.md) — Japanese translation
- [`docs/VALIDATION.md`](docs/VALIDATION.md) — generalized evidence from observed tests
- [`evals/`](evals/) — portable regression expectations
- [Project Dashboard](https://c-a-p-engineer.github.io/tsuzuri-harness/dashboard/) — live CI/Pages status and validation matrix

Real test-instance identity and raw transcripts should not be copied into the public harness merely because a test was useful. Preserve generalized findings and regressions instead.

## Compatibility

Tsuzuri Harness uses SemVer for upstream public contracts, but it does **not** promise universal drop-in upgrades for independently evolved instances. An instance may learn, retain capabilities, and locally adapt harness behavior; upstream and local evolution can diverge.

Migration must preserve semantic continuity rather than blindly overwrite the instance. See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) and [`docs/MIGRATION.md`](docs/MIGRATION.md).

## Releases

Pushing a semantic version tag such as `v0.1.0` creates a GitHub Release automatically. GitHub-generated English notes are canonical. If localized note files such as `docs/releases/v0.1.0.ja.md` exist in the tagged revision, the release workflow appends links to those translations automatically.

See [`docs/RELEASING.md`](docs/RELEASING.md).

## Project policy

- [`docs/PROJECT-POLICY.md`](docs/PROJECT-POLICY.md) — canonical project policy
- [`BRANDING.md`](BRANDING.md) — project-name and derivative-branding guidance
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contribution contract
- [`SECURITY.md`](SECURITY.md) — security reporting and state-boundary guidance

## Language policy

English is canonical for `AGENTS.md`, normative project policy, compatibility semantics, release semantics, schemas, testing semantics, and branding interpretation. Translations are accessibility layers. If a translation conflicts with canonical English text, the English text controls until the translation is corrected.

## Status

**Early bootstrap / pre-`v0.1.0`.** The initial goal is to prove the blank-instance contract, lifecycle, host-neutral boundaries, migration semantics, evaluation, and distribution workflow before convenience layers expand.

## License

Licensed under the **Apache License 2.0**. See [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE).
