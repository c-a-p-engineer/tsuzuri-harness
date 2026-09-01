# Project Policy

> Status: canonical project policy for the pre-1.0 project. English is normative.

## License

Tsuzuri Harness is licensed under the Apache License, Version 2.0. Forks, modifications, redistribution, and derivative works are governed by that license.

Branding and claims of upstream endorsement are separate from software copyright permissions. See [`BRANDING.md`](../BRANDING.md).

## Personal instances and forks

Forking is supported. It is useful for developing, modifying, or contributing to the harness itself.

For a long-lived personal AI instance, however, an independent repository created from the blank template is recommended over a GitHub fork.

Why:

- the instance develops its own identity, memory, skills, and history
- local harness behavior may also evolve
- ignore rules and repository layout may diverge
- repeatedly synchronizing an upstream fork can mix framework updates with the instance's own evolution

This is a workflow recommendation, not a legal prohibition on forks.

## Independent evolution and compatibility

Tsuzuri Harness is designed so that an instance may learn, retain capabilities, and in some environments adapt or internalize harness behavior. Upstream evolution and instance evolution can therefore diverge.

The project does not promise universal drop-in compatibility for every independently evolved instance. Stable upstream contracts use Semantic Versioning, while divergent instances may require explicit reconciliation.

Semantic continuity has priority over blind structural compatibility. See [`docs/COMPATIBILITY.md`](COMPATIBILITY.md) and [`docs/MIGRATION.md`](MIGRATION.md).

## Canonical language

English is canonical for:

- `AGENTS.md`
- normative project policy
- compatibility and migration semantics
- release semantics
- schemas
- branding interpretation

Translations are accessibility layers. If a translation conflicts with canonical English text, English controls until the translation is corrected.

## Releases

- tags use `vMAJOR.MINOR.PATCH`
- pushing a version tag creates a GitHub Release automatically
- English release notes are canonical
- localized release-note files are translations of the same release contract

## Contributions

Issues and pull requests are welcome. No DCO or CLA is currently required. Kernel changes are review-heavy because they may change the behavior of every instance.

AI-assisted contributions are allowed, but the human submitter remains responsible for correctness, provenance, licensing, security, and reviewability.

See [`CONTRIBUTING.md`](../CONTRIBUTING.md).

## Personal-state privacy

- personal instance repositories should generally be private unless deliberately published
- do not commit credentials or secrets
- do not submit real personal instance state to the public harness
- public harness history must never contain Tsuzuri's private reference-instance identity or memory

## Security

Security-sensitive issues should follow [`SECURITY.md`](../SECURITY.md). Do not put exploit details, credentials, or private instance data in public issues.
