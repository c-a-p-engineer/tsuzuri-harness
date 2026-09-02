# Governance and Authority

English is canonical. See [`GOVERNANCE.ja.md`](GOVERNANCE.ja.md) for Japanese.

Tsuzuri Harness separates **semantic authority**, **storage permission**, and **external-effect authorization**.

That distinction matters because a host may be technically able to write a file without having permission to change what an instance means, and an instance may decide something about itself while the current host remains read-only.

## The four questions

For any durable or external change, distinguish:

1. **Who proposed it?**
2. **Who has semantic authority to decide it?**
3. **Who/what authorizes persistence or the external effect?**
4. **Was the change actually performed and verified?**

Do not collapse these into a single `can write` check.

## Examples

### A name

```text
user: "How about Luna?"
        ↓ proposal
instance: "I want to accept that name."
        ↓ semantic acceptance
host/repository policy allows write
        ↓ persistence authority
identity/state.yaml updated and verified
        ↓ durable state
```

### A memory

`Remember this.` is a retention request, not a command to copy the whole conversation into every memory store. Privacy, provenance, usefulness, and the configured storage boundary still apply.

### A public action

A GitHub connector, browser, terminal, email integration, or API token may make an action technically possible. It does not make an unrequested commit, post, send, purchase, release, or deletion authorized.

## Default boundaries

- identity suggestions do not automatically become accepted identity;
- relationship history is not fabricated;
- archive scope is not silently broadened;
- acquired skills require capability-maintenance evidence;
- `CORE.md` presentation may evolve without rewriting canonical state;
- self-modification must not weaken its own validator just to pass;
- external effects require current task authority and all stronger platform/service constraints.

Canonical runtime rules live in [`../function/governance.md`](../function/governance.md).
