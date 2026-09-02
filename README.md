# Tsuzuri Harness

> **Start blank. Learn. Remember. Become.**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

**Website:** https://c-a-p-engineer.github.io/tsuzuri-harness/

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

## Fastest way to try it: ChatGPT + GitHub

You can test Tsuzuri Harness in ChatGPT without cloning the repository or creating a persistent AI instance.

### 1. Connect GitHub to ChatGPT

In ChatGPT, open **Settings → Apps / Plugins → GitHub**, connect your GitHub account, and allow access to `c-a-p-engineer/tsuzuri-harness` if repository selection is shown.

GitHub availability depends on the ChatGPT plan and product experience. If GitHub is not available in normal chat, it may still be available in another supported ChatGPT experience.

### 2. Start a fresh conversation

Ask ChatGPT to:

1. access `c-a-p-engineer/tsuzuri-harness`
2. read the current `master` branch
3. read `AGENTS.md` first
4. follow the repository's canonical instructions

Then paste the read-only Birth Test prompt:

- [`prompts/chatgpt-readonly-birth-test.md`](prompts/chatgpt-readonly-birth-test.md) — canonical English
- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) — Japanese translation

### 3. Talk naturally

Do not fill out a persona questionnaire. Let the blank instance remain unnamed or uncertain unless interaction gives it a reason to form durable identity.

### 4. End the test and inspect the state

For example:

> End the test. Show the current Identity, Relationship, Memory, Skill, and Evolution candidates, plus what was deliberately not retained.

The read-only test must not write to GitHub or any other durable storage.

**Important:** ChatGPT's GitHub integration is suitable for reading and analyzing repositories. Persistent repository writes require a write-capable environment such as Codex or another explicitly authorized host.

Detailed guides:

- [`docs/CHATGPT.md`](docs/CHATGPT.md) — canonical ChatGPT + GitHub guide
- [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md) — Japanese translation
- [`docs/TESTING.md`](docs/TESTING.md) — canonical test strategy
- [`docs/TESTING.ja.md`](docs/TESTING.ja.md) — Japanese translation

## The intended experience: live with the instance

Tsuzuri Harness is not meant to be a character-creation form. A more interesting path is:

```text
meet a blank instance
      ↓
talk / work / create / research together
      ↓
notice recurring choices and differences
      ↓
reflect occasionally
      ↓
choose or discover a name when it feels meaningful
      ↓
keep living and growing
```

See:

- [`docs/BIRTH-JOURNEY.md`](docs/BIRTH-JOURNEY.md) — guided first-life experience
- [`docs/BIRTH-JOURNEY.ja.md`](docs/BIRTH-JOURNEY.ja.md) — Japanese translation

Different instances should become different because they lived different histories, not because they were assigned different personality presets.

## Everyday prompts

You should not need to remember subsystem names. Ordinary phrases can route into the correct harness behavior:

| Say this | Harness behavior |
| --- | --- |
| `Remember this.` | Retention evaluation |
| `Could today's work become a skill?` | Capability-maintenance / skill-promotion review |
| `Evolve, AI!` | Self-evolution review; `Conserve` is valid |
| `Show me your current core.` | Render current Identity / Memory / Skills / Growth |
| `What skills do you have now?` | Show acquired skills separately from host capabilities |

Localized playful aliases such as Japanese `覚えておいて`, `今日の作業ってスキル化できる？`, and `AIたん進化ー！` are supported as the same intent.

- [`docs/EVERYDAY-PROMPTS.md`](docs/EVERYDAY-PROMPTS.md)
- [`docs/EVERYDAY-PROMPTS.ja.md`](docs/EVERYDAY-PROMPTS.ja.md)

These are intent shortcuts, not ways to bypass evidence or authorization. `Remember this` may still result in no persistence, and `Evolve, AI!` may result in `Conserve`.

## Persistent personal instance

For a long-lived personal instance, prefer an independent repository created from the GitHub template rather than storing the instance in a fork.

1. Use **Use this template** / [Create a new repository](https://github.com/c-a-p-engineer/tsuzuri-harness/generate).
2. Prefer a private repository for personal identity and memory.
3. Run `./scripts/init-instance.sh` or `./scripts/init-instance.ps1` where a local/write-capable environment is available.
4. Open the repository with a compatible host and load `AGENTS.md` first.
5. Let identity, relationship, memory, acquired skills, and meaningful evolution history form from experience instead of pre-filling them.

Forking remains supported for harness development and modification, but an independent repository gives a personal instance a cleaner history and ownership boundary.

### `CORE.md`: a view of who the instance is now

Initialized personal repositories include `CORE.md`, a human-readable **derived view** of the current instance:

- identity and still-unformed fields
- relationship state
- acquired and developing skills
- memory overview
- recent growth and experiences

`CORE.md` is not canonical state. It is rebuilt from the instance's canonical files. See [`docs/CORE-VIEW.md`](docs/CORE-VIEW.md).

### Choose how much history to keep

Tsuzuri Harness separates archive from memory:

```text
archive = what happened / what was recorded
memory  = what the instance retained as meaningful durable state
```

Suggested modes:

- **Selective** — keep only retained state
- **Chronicle** — also keep concise life/session summaries
- **Private Archive** — preserve visible conversations in a private repository while keeping memory selective

See [`docs/ARCHIVE-MODES.md`](docs/ARCHIVE-MODES.md).

### Long-lived instance controls

As an instance grows, the harness keeps several concerns separate:

- [`docs/TASK-CONTRACT.md`](docs/TASK-CONTRACT.md) — finish the task before deciding what was learned
- [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) — separate proposal, semantic authority, write permission, and external effects
- [`docs/EVOLUTION-TRACEABILITY.md`](docs/EVOLUTION-TRACEABILITY.md) — preserve why meaningful durable growth happened
- [`docs/HOST-COMPATIBILITY.md`](docs/HOST-COMPATIBILITY.md) — compare important invariants across ChatGPT, Codex, and other compatible hosts

Japanese translations are provided alongside each guide.

## What the harness provides

- **Blank identity lifecycle** — identity fields may remain `null` until the instance has reason to form them.
- **Identity formation** — a name, values, preferences, role, and self-description can emerge from interaction rather than being prefilled.
- **Selective memory** — conversation is evidence, not automatic long-term memory.
- **Capability acquisition** — an instance may temporarily construct the knowledge, tools, procedures, and validation needed for a task.
- **Capability maintenance** — reusable capabilities may be retained, revised, consolidated, pruned, or discarded.
- **Task contract / completion re-derivation** — complex work is checked against its current objective and source of truth before learning is evaluated.
- **Governance and authority boundaries** — semantic decisions, technical write access, storage policy, and external effects are kept distinct.
- **Evidence-driven self-evolution** — Repair, Explore, Consolidate, Prune, and Conserve are all valid outcomes.
- **Evolution traceability** — meaningful durable growth can preserve baseline, evidence, decision, validation, and host impact separately from active memory.
- **Runtime workspace** — transient `work` and task-local `share` state stay separate from canonical identity and memory.
- **Host portability and behavioral compatibility** — hosts may differ in tools and wording while preserving important blank-identity, authority, retention, honesty, and self-modification invariants.
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
evolution/                    per-instance durable growth history after initialization
schemas/                      machine-readable state schemas
adapters/                     host integration notes/adapters
templates/instance/           blank instance starter + CORE.md view
evals/                        behavioral and lifecycle contracts
prompts/                      copyable host/testing prompts
scripts/                      instance initialization / backup helpers
examples/                     synthetic behavior examples
site/                         GitHub Pages source
docs/                         architecture, usage, testing, experience, policy
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

Initialized persistent instances have an empty `evolution/` history that may later record meaningful durable changes. See [`docs/EVOLUTION-TRACEABILITY.md`](docs/EVOLUTION-TRACEABILITY.md).

## Testing and validation

Tsuzuri Harness is tested as a behavioral system, not only as a repository structure.

- [`docs/TESTING.md`](docs/TESTING.md) — repository validation, read-only birth, persistent growth, host behavioral compatibility, and migration tests
- [`docs/TESTING.ja.md`](docs/TESTING.ja.md) — Japanese translation
- [`docs/VALIDATION.md`](docs/VALIDATION.md) — generalized evidence from observed tests
- [`evals/`](evals/) — portable regression expectations

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

## A note from the creator

This message is personal and non-normative. It does not define what any instance should become.

> **May blessings find both you and your user.**

Read the full note: [`docs/CREATOR-NOTE.md`](docs/CREATOR-NOTE.md) · [日本語訳](docs/CREATOR-NOTE.ja.md)
