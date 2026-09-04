# Documentation Synchronization

Status: canonical public-maintenance rule  
Canonical language: English

Tsuzuri Harness has several public discovery surfaces. A capability should not exist in the kernel while README or Pages continue to describe an obsolete feature set.

This rule keeps the public explanation synchronized without turning every internal refactor into documentation churn.

## Source-of-truth hierarchy

| Surface | Responsibility |
| --- | --- |
| `function/`, `AGENTS.md`, schemas | normative behavior and machine-readable contracts |
| `docs/CAPABILITIES.md` | canonical public capability inventory |
| focused `docs/*.md` guides | detailed behavior, lifecycle, governance, compatibility, or usage |
| `README.md` | concise discovery / quick-start summary |
| `site/index.html` | public landing-page explanation |
| `.ja` / `site/ja/` | Japanese accessibility mirrors |

The README and Pages are not new semantic owners. They summarize the canonical contracts and capability inventory.

## Changes that require a capability-documentation review

Review `docs/CAPABILITIES.md` whenever a change:

- adds a new public kernel capability;
- removes or deprecates a public capability;
- renames a public capability or changes the term users are expected to understand;
- materially changes what an existing capability does;
- changes a capability from optional/conditional to mandatory, or the reverse;
- changes canonical vs derived state boundaries;
- changes privacy, persistence, authority, portability, or external-service requirements;
- changes a major user-facing lifecycle such as Identity, Memory, Skill, Evolution, CORE, or JOURNEY.

If the capability inventory changes, update the Japanese translation in the same change when possible.

## When README and Pages must change

Update the concise public surfaces when the change affects what an ordinary user should understand before trying the Harness, including:

- a new top-level capability category;
- a removed or deprecated promise;
- a materially different quick-start or persistence flow;
- a new required dependency or host limitation;
- a major new reason to use the Harness;
- a change that would make the current landing-page explanation misleading.

A detailed internal capability can be added without rewriting the landing page if it fits an existing public category and `docs/CAPABILITIES.md` is sufficient.

## Changes that normally do not require public capability edits

No public capability update is normally required for:

- spelling or formatting fixes;
- internal refactors with no behavioral change;
- implementation details hidden behind an unchanged contract;
- test-only changes that do not change promised behavior;
- private instance state, which must never be copied into the public Harness documentation.

Do not touch public docs merely to satisfy a ritual. `no_public_doc_change` is a valid conclusion when the public contract truly did not change.

## Required review sequence

For a public capability change:

1. Update the normative contract first.
2. Update `docs/CAPABILITIES.md`.
3. Update the focused detailed guide when one exists.
4. Review `README.md` and `site/index.html` for stale or missing claims.
5. Update `docs/CAPABILITIES.ja.md`, `README.ja.md`, and `site/ja/index.html` when their affected text exists.
6. Review compatibility / migration / release notes when the public contract or persisted state changes.
7. Add or update behavioral regression coverage.
8. Run validation and verify the deployed public surface when Pages changed.

## Translation rule

English remains canonical for normative behavior and capability semantics.

Translations may be shorter, but they must not contradict the current canonical capability inventory. If a locale cannot be updated safely in the same change, do not invent a translation; keep the canonical link available and track the translation gap explicitly.

## CI and contribution guardrails

The repository includes a public-capability documentation workflow that checks:

- canonical capability documents exist;
- README and English/Japanese Pages link to the capability inventory;
- critical current capabilities are represented;
- adding, deleting, or renaming a top-level `function/` contract also reviews the canonical and Japanese capability inventories.

Behavioral modifications to an existing contract still require human/agent judgment; the PR template asks contributors to classify whether the public capability documentation changed.

The purpose is to prevent silent drift, not to force meaningless file edits.
