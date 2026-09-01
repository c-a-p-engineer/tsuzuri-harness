# Contributing to Tsuzuri Harness

Thank you for helping improve Tsuzuri Harness.

## Canonical language

English is canonical for normative behavior, schemas, compatibility, release semantics, and branding. Translations are welcome, but they must preserve the meaning of the canonical English source.

## Good contribution targets

- host adapters and portability fixes
- validation and regression tests
- identity, retention, capability, or migration semantics backed by concrete evidence
- documentation and accessibility improvements
- security and privacy hardening
- examples that demonstrate behavior without pre-writing an instance's identity

## Kernel changes need a stronger case

Changes to `AGENTS.md`, core lifecycle rules, retention semantics, identity formation, persisted-state schemas, or compatibility contracts can affect every instance.

For those changes, include:

1. the observed problem or new capability need
2. evidence or a reproducible scenario
3. why an existing mechanism cannot handle it
4. expected compatibility impact
5. validation or regression coverage

Do not add permanent gates, mandatory reads, or new state layers merely because they sound useful. `Conserve` and `no_change` are valid outcomes.

## Pull requests

- Keep each PR focused.
- Explain behavioral impact, not only file changes.
- Mark breaking changes clearly.
- Update release-facing documentation when public contracts change.
- Add or update evals when changing normative behavior.
- Never include real personal identity, relationship history, credentials, private memory, or private reference-instance data.

## AI-assisted contributions

AI-assisted work is allowed. The human submitter remains responsible for correctness, licensing, provenance, security, and reviewability. Do not submit third-party text, prompts, code, or agent rules without checking their license and attribution requirements.

## DCO / CLA

No DCO sign-off or CLA is required at this stage. Contributions submitted for inclusion are governed by the repository license unless explicitly stated otherwise.

## Personal instances

Do not submit your personal instance state as a contribution to the public harness. If a real-world scenario is useful, reduce it to a synthetic or anonymized regression case.
