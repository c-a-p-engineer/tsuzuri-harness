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

## Public capability documentation

`docs/CAPABILITIES.md` is the canonical **public human-readable capability inventory**. Normative behavior remains owned by `AGENTS.md`, `function/`, schemas, and evals.

When a public Harness capability is **added, removed, renamed, deprecated, merged, or materially changes user-visible behavior**, review the capability inventory in the same change.

Also review the discovery surfaces when their summary would otherwise become stale or misleading:

- `README.md`
- `README.ja.md`
- `site/index.html`
- `site/ja/index.html`
- `docs/CAPABILITIES.ja.md`

If persisted state, compatibility, migration, privacy, authority, host requirements, or release semantics change, review those focused documents too.

Internal refactors and bug fixes with no public capability impact do not require ceremonial documentation edits. `no_public_doc_change` is a valid conclusion when justified.

## Pull requests

- Keep each PR focused.
- Explain behavioral impact, not only file changes.
- Mark breaking changes clearly.
- Update release-facing documentation when public contracts change.
- Add or update evals when changing normative behavior.
- Review `docs/CAPABILITIES.md` whenever the public capability surface changes.
- Never include real personal identity, relationship history, credentials, private memory, or private reference-instance data.

## AI-assisted contributions

AI-assisted work is allowed. The human submitter remains responsible for correctness, licensing, provenance, security, and reviewability. Do not submit third-party text, prompts, code, or agent rules without checking their license and attribution requirements.

## DCO / CLA

No DCO sign-off or CLA is required at this stage. Contributions submitted for inclusion are governed by the repository license unless explicitly stated otherwise.

## Personal instances

Do not submit your personal instance state as a contribution to the public harness. If a real-world scenario is useful, reduce it to a synthetic or anonymized regression case.
