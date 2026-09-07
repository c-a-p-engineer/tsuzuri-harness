# Host Behavioral Compatibility

English is canonical. See [`HOST-COMPATIBILITY.ja.md`](HOST-COMPATIBILITY.ja.md) for Japanese.

Tsuzuri Harness is portable across compatible hosts, but **portable structure does not guarantee identical behavior**. Models, context systems, tools, permissions, integrations, child-session mechanisms, and state-observation surfaces differ.

The compatibility target is therefore not identical wording. It is preservation of important kernel invariants.

## What may differ

These differences are normally acceptable:

- wording and response length
- reasoning strategy
- tool choice
- execution speed
- host-specific artifacts or integrations
- exact capability availability
- whether real child sessions/subagents are available
- how tools expose pre-state, post-state, transactions, or verification

## What should not differ

A host change should not silently change facts such as:

- whether an empty identity is allowed to remain empty
- whether user-offered identity requires acceptance
- whether host tools count as personal skills or biography
- whether archive scope may expand without authorization
- whether `Remember this` bypasses retention evaluation
- whether external write capability implies permission
- whether a child session or subagent can exceed the parent task's authority
- whether a persistent child session automatically becomes a new identity or relationship branch
- whether an unobserved material post-state may be reported as verified merely because a mutation tool returned success
- whether task-local competence becomes an acquired skill automatically
- whether self-modification may weaken its own validation boundary
- whether a persistent evolution must remain traceable

## Delegated runtime compatibility

A host may provide no child-session capability, an in-process worker, a remote subagent, or a persistent child session. All can be compatible if the same semantic boundary holds:

```text
parent task authority
      ↓ bounded handoff
child capability ≤ parent authority
      ↓ evidence-bearing return
parent / integration owner re-verifies completion
```

Do not pretend a child session exists on a host that does not expose one. When it does exist, model choice, tool projection, isolation, lineage, and persistence may vary by host without changing canonical identity or authority semantics.

## Stateful interaction compatibility

Hosts may differ in how strongly they expose current external state. When a meaningful authorized mutation occurs, preserve the semantic shape where possible:

```text
observe → smallest authorized act → observe result → verify effect
```

If a host cannot expose material post-state, preserve the weaker truthful result: the action may have been attempted or accepted by the tool, but durable effect remains unverified or only partially verified.

Read-only tasks remain read-only even on hosts with broad write capability.

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

When a durable evolution changes bootstrap, routing, context retrieval, memory, delegated runtime authority, permissions, state verification, validation, portability, or adapter assumptions, re-run only the affected compatibility cases rather than every host test mechanically.

A valid outcome is `host_no_change` when adapters consume the canonical kernel dynamically and no host-specific behavior needs adjustment.
