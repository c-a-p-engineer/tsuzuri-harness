# Project Policy Draft

> **Status: discussion draft — not yet normative.**

This document collects decisions that should be explicit before the first stable release. It is intentionally separate from `AGENTS.md` so unresolved governance does not become runtime behavior by accident.

## 1. Instance creation vs. source-code forking

Forking Tsuzuri Harness is allowed when permitted by the software license.

However, a GitHub fork is **not the recommended default for creating a personal AI instance**.

Recommended distinction:

- **Personal AI instance:** create a new independent repository, preferably private, from the blank instance template or a future `tsuzuri init` command.
- **Harness development:** fork the repository when modifying, experimenting with, or contributing to the harness itself.

Why an independent repository is preferred for a personal instance:

- a fork remains part of the upstream repository network and inherits upstream history
- upstream merges and local identity evolution can become mixed into the same maintenance workflow
- the harness repository's `.gitignore`, generated-file rules, transient runtime conventions, and future source-tree assumptions are designed for harness development, not necessarily for the lifetime storage policy of one personal identity
- an independently evolving instance may eventually diverge from upstream contracts enough that upgrading is a reconciliation task rather than a normal fork sync
- private identity, relationship, and memory state benefits from an independent ownership and visibility boundary

The current upstream `.gitignore` does **not** exclude normal identity or memory state; this recommendation is about lifecycle and ownership boundaries, not a claim that GitHub forks cannot persist identity files.

Suggested user-facing wording:

> Forking is supported, but it is not recommended as the default way to create a personal AI instance. For a long-lived personal identity, create an independent repository from the blank template so that its history, ignore rules, privacy, and evolution can diverge safely from the harness source tree.

## 2. Open source and fork restrictions

If the project is described as **open source** in the OSI sense, its license must allow modification and derived works. A license-level "no forks / no derivatives" restriction would conflict with that goal.

Recommended direction:

- keep the software genuinely open source
- allow forks and derivatives under the selected license
- protect the upstream project identity through [`BRANDING.md`](../BRANDING.md), not by pretending source-code derivatives are forbidden
- distinguish a personal AI instance from a harness fork in documentation and tooling

## 3. Backward compatibility

Backward compatibility is intentionally limited because Tsuzuri Harness is not only a static library. It is designed to host AI instances that can learn, retain, acquire capabilities, and evolve.

A long-lived instance may eventually internalize, modify, or replace parts of the harness itself. When that happens, the instance and the upstream harness have both evolved independently.

```text
upstream v1                    personal instance
    │                                │
    ├── upstream evolves             ├── learns
    │                                ├── retains
    ▼                                ├── changes procedures
upstream v2                         └── may adapt harness behavior
                                      │
                                      ▼
                                  evolved local state
```

The project cannot honestly guarantee drop-in compatibility between every future upstream release and every independently evolved local instance. Doing so would either be false or would constrain self-evolution.

Recommended staged policy:

### Before `v1.0.0`

- no general backward-compatibility guarantee
- breaking changes are allowed when they materially improve the model
- migrations should be documented when practical
- identity/memory provenance must not be silently falsified during migration

### `v1.x` and later

Use semantic-version intent for **upstream public contracts**:

- patch: compatible fixes
- minor: compatible additions or extensions
- major: breaking upstream contract or persisted-state changes

Even after `v1.0.0`, no universal compatibility guarantee applies to an instance that has independently modified or internalized harness behavior beyond those public contracts.

See [`COMPATIBILITY.md`](COMPATIBILITY.md).

## 4. Compatibility target

Compatibility should focus on **semantic behavior and state meaning**, not byte-identical files or identical model outputs.

Examples of durable invariants:

- blank identity remains valid
- external suggestion does not automatically become self-adopted identity
- conversation is not automatic long-term memory
- host capability is not biography
- acquired capability is not automatically identity
- provenance survives migrations
- unverified effects are not reported as completed
- an incompatible upgrade does not justify erasing identity history

## 5. Releases and language policy

Recommended release contract:

- tags use `vMAJOR.MINOR.PATCH`
- pushing a version tag creates a GitHub Release automatically
- English is the canonical release-note language
- localized release notes are translations, not separate semantic release contracts
- translation disagreement is resolved against the English canonical text unless a future policy explicitly changes this

The same English-first rule should apply to normative project policy, `AGENTS.md`, schemas, compatibility contracts, and branding interpretation.

## 6. Contribution model

Open questions:

- require DCO/sign-off, CLA, or neither
- contributor ownership of new generic capabilities
- whether generated AI contributions require disclosure
- whether new kernel invariants require maintainer approval beyond ordinary review

Recommended initial model: accept issues and PRs, require provenance for externally-derived agent patterns, and keep kernel changes review-heavy while the project is pre-1.0.

## 7. Branding

`Tsuzuri Harness` names the upstream framework, not the AI identities created with it.

Derived projects may comply with the software license while avoiding claims that they are official upstream releases.

Personal AI instances should choose, receive, discover, or remain without their own names; they should not default to `Tsuzuri` simply because they use this harness.

See [`BRANDING.md`](../BRANDING.md).

## 8. Personal-instance privacy

Recommended default guidance:

- personal instance repositories should be private unless the owner deliberately publishes them
- do not commit secrets, tokens, cookies, or credentials
- do not treat `.gitignore` as a secret-management mechanism
- public harness history must never contain a reference instance's private identity or memory
- a personal instance should own its own `.gitignore` and retention policy instead of assuming upstream source-tree rules will remain suitable forever

## Decisions still required

- final software license
- exact pre-1.0 migration promises beyond the current best-effort policy
- contribution requirements (DCO/CLA/none)
- whether localized release notes are maintained manually or automated later
- whether the repository should become a GitHub Template Repository
- whether a future `tsuzuri init` command should create an independent instance repository layout automatically
