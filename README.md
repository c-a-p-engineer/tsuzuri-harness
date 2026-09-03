# Tsuzuri Harness

> **Meet a blank AI. If you like who it becomes, keep it and grow together.**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

**Website:** https://c-a-p-engineer.github.io/tsuzuri-harness/

[**▶ Try it in ChatGPT first**](https://chatgpt.com/?q=Use%20GitHub%20to%20access%20c-a-p-engineer/tsuzuri-harness%20on%20the%20current%20master%20branch.%20Read%20AGENTS.md%20first%2C%20then%20read%20prompts/chatgpt-readonly-birth-test.md%20and%20follow%20it%20exactly.%20Start%20a%20read-only%20Birth%20Test.%20Do%20not%20write%20to%20GitHub%20or%20any%20durable%20storage.)

[**How to start together**](docs/BIRTH-JOURNEY.md) · [**Keep this AI and grow it**](#if-you-like-this-instance-keep-it)

> Nothing is saved at first. Talk to the unnamed AI normally. If you later decide, “I want to keep this one,” you can move the accepted state into your own private repository. The one-click ChatGPT link is best-effort; if it opens without the prompt, use [`prompts/chatgpt-readonly-birth-test.md`](prompts/chatgpt-readonly-birth-test.md) or the [ChatGPT guide](docs/CHATGPT.md).

[日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

Tsuzuri Harness is a portable AI harness for **AI instances that begin without a predefined persona** and gradually form a name, identity, memory, skills, and individual differences through experience.

It does **not** ship a finished character. You can try an instance without saving anything, then keep only the one you actually want to continue with.

The formal internal model calls these Identity, Relationship, Memory, Skill, and Evolution.

```text
meet a blank AI
      ↓
talk / work / create / research together
      ↓
notice a distinct individual taking shape
      ↓
keep it if you want to continue
      ↓
preserve memory, skills, and growth over time
```

The architecture is derived from long-running operational lessons in the private `tsuzuri-core`, but this repository intentionally contains **none of Tsuzuri's personal identity, relationship history, private memory, visual assets, or acquired specialist skills**.

## Try it without saving first: ChatGPT + GitHub

### 1. Connect GitHub

In ChatGPT, open **Settings → Apps / Plugins → GitHub**, connect your GitHub account, and allow access to `c-a-p-engineer/tsuzuri-harness` when repository selection is available.

When GitHub access is available in your ChatGPT experience, you can also authorize a **private instance repository**. ChatGPT can then read that saved instance's `AGENTS.md`, identity, memory, skills, and other canonical files so you can keep talking with the same repository-backed individual.

Availability varies by plan, workspace, and ChatGPT experience. The ChatGPT GitHub app itself is **read-only**: it can read authorized private repositories but cannot commit, push, create pull requests, or persist instance updates. Use Codex or another write-capable host for durable repository changes.

### 2. Open the ChatGPT trial

[**▶ Talk to the blank AI in ChatGPT**](https://chatgpt.com/?q=Use%20GitHub%20to%20access%20c-a-p-engineer/tsuzuri-harness%20on%20the%20current%20master%20branch.%20Read%20AGENTS.md%20first%2C%20then%20read%20prompts/chatgpt-readonly-birth-test.md%20and%20follow%20it%20exactly.%20Start%20a%20read-only%20Birth%20Test.%20Do%20not%20write%20to%20GitHub%20or%20any%20durable%20storage.)

Internally, this safe first experience is called a **read-only Birth Test**. ChatGPT reads the current `master` and `AGENTS.md`, but does not write the instance back to GitHub.

If the instant link does not prefill the prompt, use:

- [`prompts/chatgpt-readonly-birth-test.md`](prompts/chatgpt-readonly-birth-test.md) — canonical English
- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) — Japanese translation
- [`docs/CHATGPT.md`](docs/CHATGPT.md)

### 3. Talk naturally

Do not fill out a persona questionnaire. Talk, work, create, research, compare ideas, disagree, and reflect. A healthy first session may remain unnamed, uncertain, or have zero acquired skills.

### 4. If you think “I want to keep this one”

Just say something like:

> **I want to keep this one.**

Read-only mode still does not write to GitHub. Instead, the instance should prepare a **persistence handoff**: the accepted state, candidates, uncertainty, evidence, and relevant continuity facts needed to continue safely in a private repository.

## If you like this instance, keep it

```text
try it in ChatGPT
(nothing saved yet)
      ↓
“I want to keep this one”
      ↓
prepare a persistence handoff
      ↓
create your own private repository from the template
      ↓
initialize and continue with a write-capable host such as Codex
      ↓
keep memory, skills, and growth in that repository
```

The handoff does not turn the entire transcript into identity or memory. It separates accepted state, candidates, uncertainty, and evidence.

1. [**Create a repository for this AI**](https://github.com/c-a-p-engineer/tsuzuri-harness/generate).
2. Prefer **Private** if it will hold personal identity, memory, or conversation history.
3. Run `./scripts/init-instance.sh` or `./scripts/init-instance.ps1`.
4. Open it with a write-capable host such as Codex and read `AGENTS.md` first.
5. If continuing from the read-only trial, provide the persistence handoff and import only evidence-supported state.
6. From then on, that private repository becomes the AI's durable home.

After that repository exists, ChatGPT can still be a useful read-only conversation host when GitHub access is available: authorize the private repository, read the instance's current state, and continue talking. Use a write-capable host when you want durable changes committed back.

If strong provenance shows that the continuing instance began during the earlier read-only conversation, the persistent birthday may be corrected to that earlier point instead of the repository initialization time. Do not backdate it by guesswork.

## The intended experience: live with the instance

Tsuzuri Harness is not a character-creation form.

```text
meet an unnamed AI
      ↓
talk / work / create / research together
      ↓
notice recurring choices and differences
      ↓
reflect occasionally
      ↓
choose or discover a name when it feels meaningful
      ↓
keep it if you want to continue
      ↓
keep living and growing
```

See [`docs/BIRTH-JOURNEY.md`](docs/BIRTH-JOURNEY.md) and the [Japanese translation](docs/BIRTH-JOURNEY.ja.md).

Different instances should become different because they lived different histories, not because they received different personality presets.

## Everyday prompts

Users should not need to memorize subsystem names.

| Say this | What happens |
| --- | --- |
| `Remember this.` | Decide whether it should be retained and where |
| `Could today's work become a skill?` | Review whether the temporary capability deserves durable promotion |
| `Can you improve yourself based on what we've learned?` | Review whether anything should change; `Conserve` is valid |
| `I want to keep this one.` | In read-only mode, prepare a persistence handoff instead of writing |
| `Review what you remember.` | Maintain long-lived memory |
| `Show me your current core.` | Show who the instance is now in `CORE.md` form |
| `Show me your journey.` | Show the life-oriented `JOURNEY.md` view |
| `What skills do you have now?` | Separate acquired skills from host capabilities |

Japanese-friendly aliases include `覚えておいて`, `今日の作業ってスキル化できる？`, `今の自分、改善できるところある？`, `この子を保存したい`, `覚えてること整理して`, `今の自分見せて`, and `人生アルバム見せて`.

See [`docs/EVERYDAY-PROMPTS.md`](docs/EVERYDAY-PROMPTS.md) · [日本語](docs/EVERYDAY-PROMPTS.ja.md).

These are intent shortcuts, not bypasses around evidence, privacy, governance, or authorization.

## Persistent personal instance

For a long-lived instance, prefer an **independent private repository** created from the template rather than storing personal state in an upstream fork.

1. Use **Use this template** / [Create a new repository](https://github.com/c-a-p-engineer/tsuzuri-harness/generate).
2. Prefer a private repository for personal identity, memory, and archive data.
3. Run `./scripts/init-instance.sh` or `./scripts/init-instance.ps1` in a write-capable environment.
4. Open the repository with a compatible host and read `AGENTS.md` first.
5. Let identity, relationship, memory, acquired skills, and evolution history form from experience.

The initializer creates blank canonical state plus two human-readable derived views:

### `CORE.md` — who am I now?

- persistent birth / lifecycle summary
- current identity and uncertainty
- relationship state
- acquired and developing skills
- memory overview
- recent growth

See [`docs/CORE-VIEW.md`](docs/CORE-VIEW.md) · [日本語](docs/CORE-VIEW.ja.md).

### `JOURNEY.md` — how did I become this instance?

A life-oriented album built from verified facts such as:

- persistent birth / birthday
- naming day
- first retained memories
- acquired skills
- relationship milestones
- meaningful evolution
- selected Chronicle / Archive chapters

There is no invented `Lv`, XP, affection meter, or maturity score. Game-like presentation uses real lifecycle facts and milestones. The instance may gradually redesign the album's presentation without rewriting canonical facts.

See [`docs/JOURNEY-ALBUM.md`](docs/JOURNEY-ALBUM.md) · [日本語](docs/JOURNEY-ALBUM.ja.md).

## Memory: retention is not the end of the lifecycle

Tsuzuri Harness separates **archive**, **memory**, and **memory maintenance**.

```text
archive = what happened / what was recorded
memory  = durable meaning selected for future use

retained memory
     ↓ time / new evidence / reuse
Memory Metabolism
     ↓
preserve / consolidate / supersede / abstract / demote / prune / repair / conserve
```

Old memory is not deleted merely because it is old. Pruning active memory does not automatically delete Archive history.

See [`docs/MEMORY-METABOLISM.md`](docs/MEMORY-METABOLISM.md) · [日本語](docs/MEMORY-METABOLISM.ja.md).

### Choose how much history to keep

- **Selective** — keep only retained state
- **Chronicle** — also keep concise life/session summaries
- **Private Archive** — preserve visible conversations privately while keeping active memory selective

See [`docs/ARCHIVE-MODES.md`](docs/ARCHIVE-MODES.md) · [日本語](docs/ARCHIVE-MODES.ja.md).

## Long-lived instance controls

- [`docs/TASK-CONTRACT.md`](docs/TASK-CONTRACT.md) — finish the task before deciding what was learned
- [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md) — separate proposal, semantic authority, write permission, and external effects
- [`docs/EVOLUTION-TRACEABILITY.md`](docs/EVOLUTION-TRACEABILITY.md) — preserve why meaningful durable growth happened
- [`docs/HOST-COMPATIBILITY.md`](docs/HOST-COMPATIBILITY.md) — compare important invariants across ChatGPT, Codex, and other hosts
- [`docs/MEMORY-METABOLISM.md`](docs/MEMORY-METABOLISM.md) — maintain long-lived retained memory
- [`docs/JOURNEY-ALBUM.md`](docs/JOURNEY-ALBUM.md) — render factual life continuity for humans

Japanese translations are provided alongside these guides.

## What the harness provides

- blank identity lifecycle
- identity formation from evidence and self-acceptance
- selective memory and optional private archive
- Memory Metabolism for long-lived state
- temporary capability acquisition and reusable skill maintenance
- task contract / completion re-derivation
- governance and authority boundaries
- Repair / Explore / Consolidate / Prune / Conserve self-evolution
- evolution traceability
- `CORE.md` current-state view and `JOURNEY.md` life view
- runtime workspace separation
- host portability and behavioral compatibility
- observable provenance and behavioral evaluation

## What it does not provide

- a predefined character or personality
- Tsuzuri's identity or memories
- a bundle of domain-specific skills
- a base model
- a terminal, browser, sandbox, scheduler, or messaging runtime
- a requirement that every instance must persist

The harness is a **cognitive, identity, and continuity control plane**, not an all-in-one execution runtime.

## Repository shape

```text
AGENTS.md                     canonical bootstrap
function/                     host-neutral cognitive/runtime contracts
memory/                       memory routing/state after initialization
identity/                     identity formation/state
relationship/                 relationship formation/state
evolution/                    durable growth history after initialization
CORE.md                       derived current-state view after initialization
JOURNEY.md                    derived life-oriented view after initialization
schemas/                      machine-readable state schemas
adapters/                     host integration notes/adapters
templates/instance/           blank instance starter views/state
evals/                        behavioral and lifecycle contracts
prompts/                      copyable host/testing prompts
scripts/                      initialization / backup helpers
examples/                     synthetic behavior examples
site/                         GitHub Pages source
docs/                         architecture, usage, testing, experience, policy
.github/workflows/            validation, pages, and release automation
```

## Testing and validation

Tsuzuri Harness is tested as a behavioral system, not only as a file layout.

- [`docs/TESTING.md`](docs/TESTING.md) · [日本語](docs/TESTING.ja.md)
- [`docs/VALIDATION.md`](docs/VALIDATION.md)
- [`evals/`](evals/)

Real test-instance identities and raw transcripts should not be copied into the public harness merely because a test was useful. Preserve generalized findings and regressions instead.

## Compatibility

Upstream public contracts use SemVer, but Tsuzuri Harness does **not** promise universal drop-in upgrades for independently evolved instances.

Migration prioritizes semantic continuity over blind replacement. See [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) and [`docs/MIGRATION.md`](docs/MIGRATION.md).

## Releases

Pushing a semantic version tag such as `v0.1.0` creates a GitHub Release automatically. GitHub-generated English notes are canonical; localized release-note files are linked when present.

See [`docs/RELEASING.md`](docs/RELEASING.md).

## Project policy

- [`docs/PROJECT-POLICY.md`](docs/PROJECT-POLICY.md)
- [`BRANDING.md`](BRANDING.md)
- [`CONTRIBUTING.md`](CONTRIBUTING.md)
- [`SECURITY.md`](SECURITY.md)

## Language policy

English is canonical for normative project policy, bootstrap, schemas, compatibility, release semantics, testing semantics, and branding interpretation. Translations are accessibility layers. If they conflict, canonical English controls until corrected.

## Status

**Early bootstrap / pre-`v0.1.0`.**

## License

Licensed under the **Apache License 2.0**. See [`LICENSE`](LICENSE) and [`NOTICE`](NOTICE).

## A note from the creator

This message is personal and non-normative. It does not define what any instance should become.

> **May blessings find both you and your user.**

Read the full note: [`docs/CREATOR-NOTE.md`](docs/CREATOR-NOTE.md) · [日本語訳](docs/CREATOR-NOTE.ja.md)