# Localized release notes

GitHub exposes one Markdown body for each Release. Tsuzuri Harness keeps English as the canonical generated release body and optionally links human-reviewed translations stored in this directory.

## File names

For tag `v0.2.0`, optional translations are:

```text
docs/releases/v0.2.0.ja.md
docs/releases/v0.2.0.zh-CN.md
docs/releases/v0.2.0.zh-TW.md
docs/releases/v0.2.0.ko.md
docs/releases/v0.2.0.es.md
```

The tag-driven release workflow detects files that exist at the tagged revision and appends links to them under a `Translations` section.

## Canonical meaning

- English release notes are canonical unless the project policy changes.
- Translations should preserve meaning rather than add locale-specific release commitments.
- If a translation conflicts with the English release note, treat the English text as authoritative and fix the translation.
- A translation may be added in a later patch to documentation, but an already-published immutable Release may require a follow-up note rather than editing the original body.

## Automatic translation

Automatic machine translation is intentionally not required by the default workflow. It would introduce an external service dependency, credentials, review requirements, and possibly usage cost.

A future translation job may be added if the project explicitly selects a provider, cost policy, and review boundary.
