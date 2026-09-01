# Project Policy Draft

> **Status: discussion draft — not yet normative.**

This document collects decisions that should be explicit before the first stable release. It is intentionally separate from `AGENTS.md` so unresolved governance does not become runtime behavior by accident.

## 1. Instance creation vs. source-code forking

Recommended distinction:

- **Do not use a GitHub fork as the normal way to create your personal AI instance.**
- Create a new independent repository, preferably private, from the blank instance template or a future `tsuzuri init` command.
- Forks remain appropriate for source-code contribution and experimentation with the harness itself if the selected open-source license permits them.

Reason: a GitHub fork belongs to the upstream repository network and is a poor ownership boundary for private identity, relationship, and memory state. A personal instance should have independent history and visibility decisions.

Suggested user-facing rule:

> To create your AI, do not fork this repository. Create a new private instance repository from the blank template. Fork the harness only when you intend to modify or contribute to the harness itself.

## 2. Open source and fork restrictions

If the project is described as **open source** in the OSI sense, its license must allow modification and derived works. A license-level "no forks / no derivatives" restriction would conflict with that goal.

Possible policy choices:

- **Open source:** use an OSI-approved license; allow derivatives, but protect the `Tsuzuri` project name/trademark separately if needed.
- **Source available:** publish source while restricting redistribution or derivatives. Do not market this as OSI open source.

Recommended direction: stay genuinely open source and solve personal-instance isolation through workflow/documentation rather than a no-derivatives license.

## 3. Backward compatibility

Recommended staged policy:

### Before `v1.0.0`

- no general backward-compatibility guarantee
- breaking changes are allowed when they materially improve the model
- migrations should be documented when practical
- identity/memory provenance must not be silently falsified during migration

### `v1.x` and later

Use semantic-version intent:

- patch: compatible fixes
- minor: compatible additions or extensions
- major: breaking contract or persisted-state changes

Even after `v1.0.0`, the project may explicitly exempt experimental files or unstable schemas from compatibility guarantees.

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

## 5. Releases

Recommended release contract:

- tags use `vMAJOR.MINOR.PATCH`
- pushing a version tag creates a GitHub Release automatically
- English is the canonical release-note language
- localized release notes are translations, not separate semantic release contracts
- translation disagreement is resolved against the English canonical release note unless a future policy changes this

## 6. Contribution model

Open questions:

- accept pull requests from forks or require branches/collaborators only
- require DCO/sign-off or CLA
- contributor ownership of new generic capabilities
- whether generated AI contributions require disclosure
- whether new kernel invariants require maintainer approval beyond ordinary review

Recommended initial model: accept issues and PRs, require provenance for externally-derived agent patterns, and keep kernel changes review-heavy while the project is pre-1.0.

## 7. Branding

Possible rule:

- `Tsuzuri Harness` names the upstream project.
- Derived projects may comply with the software license while avoiding claims that they are the official upstream Tsuzuri Harness.
- Personal AI instances should choose their own names; they should not default to `Tsuzuri`.

A trademark/name-use policy can be separate from the software license if this becomes important.

## 8. Personal-instance privacy

Recommended default guidance:

- personal instance repositories should be private unless the owner deliberately publishes them
- do not commit secrets, tokens, cookies, or credentials
- do not treat `.gitignore` as a secret-management mechanism
- public harness history must never contain a reference instance's private identity or memory

## Decisions still required

- final software license
- whether `Tsuzuri Harness` needs a separate name/trademark policy
- exact pre-1.0 migration promises
- contribution requirements (DCO/CLA/none)
- whether localized release notes are maintained manually or automated later
- whether the repository should become a GitHub Template Repository
