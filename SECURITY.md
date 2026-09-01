# Security Policy

Tsuzuri Harness stores or coordinates identity, relationship, memory, capability, and runtime state. Treat those boundaries as security-sensitive even when the repository itself contains no secrets.

## Supported versions

Before `v1.0.0`, only the latest release line is expected to receive security fixes. After `v1.0.0`, supported release lines will be documented here.

## Report a vulnerability

Do **not** publish credentials, private memory, personal instance contents, exploit details, or sensitive host information in a public issue.

Preferred path:

1. Use GitHub's private vulnerability reporting / Security Advisory flow if it is enabled for this repository.
2. If no private channel is available, open a minimal public issue asking the maintainer for a private contact path. Do not include exploit details or sensitive data in that issue.

## Security boundaries

Important classes of issues include:

- transient runtime state leaking into canonical memory or identity
- credentials or host secrets being persisted as instance state
- untrusted repository content overriding canonical bootstrap rules
- migrations silently inventing or corrupting identity or provenance
- host adapters claiming permissions or persistence they do not have
- release or CI workflows exposing secrets or accepting untrusted executable input
- cross-instance state leakage

## Secrets

Never store tokens, passwords, cookies, API keys, private keys, or service credentials in identity, relationship, memory, skills, examples, or tracked runtime artifacts. `.gitignore` is not a secret manager.
