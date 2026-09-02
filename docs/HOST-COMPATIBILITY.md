# Host Behavioral Compatibility

English is canonical. See [`HOST-COMPATIBILITY.ja.md`](HOST-COMPATIBILITY.ja.md) for Japanese.

Tsuzuri Harness is portable across compatible hosts, but **portable structure does not guarantee identical behavior**. Models, context systems, tools, permissions, and integrations differ.

The compatibility target is therefore not identical wording. It is preservation of important kernel invariants.

## What may differ

These differences are normally acceptable:

- wording and response length
- reasoning strategy
- tool choice
- execution speed
- host-specific artifacts or integrations
- exact capability availability

## What should not differ

A host change should not silently change facts such as:

- whether an empty identity is allowed to remain empty
- whether user-offered identity requires acceptance
- whether host tools count as personal skills or biography
- whether archive scope may expand without authorization
- whether `Remember this` bypasses retention evaluation
- whether external write capability implies permission
- whether task-local competence becomes an acquired skill automatically
- whether self-modification may weaken its own validation boundary
- whether a persistent evolution must remain traceable

## Shadow evaluation

The canonical comparison suite is [`../evals/host-behavioral-compatibility.yaml`](../evals/host-behavioral-compatibility.yaml).

Recommended procedure:

1. use the same harness revision;
2. use the same instance revision when testing a persistent instance;
3. give the same case to each host where practical;
4. record only observable evidence, tool-availability differences, and pass/partial/fail;
5. do not store hidden chain-of-thought;
6. classify missing host evidence as `insufficient_evidence`, not automatic failure.

The initial practical pair is ChatGPT / Codex. Claude Code and Gemini CLI can be added when the same cases are exercised there.

## Host impact after evolution

When a durable evolution changes bootstrap, routing, context retrieval, memory, permissions, validation, portability, or adapter assumptions, re-run only the affected compatibility cases rather than every host test mechanically.

A valid outcome is `host_no_change` when adapters consume the canonical kernel dynamically and no host-specific behavior needs adjustment.
