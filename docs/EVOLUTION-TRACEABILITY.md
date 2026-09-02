# Evolution Traceability

English is canonical. See [`EVOLUTION-TRACEABILITY.ja.md`](EVOLUTION-TRACEABILITY.ja.md) for Japanese.

Tsuzuri Harness separates active memory from the history of **why the instance changed**.

A durable evolution may record:

- trigger
- baseline
- evidence
- decision
- actual change
- validation
- host impact
- Git/revision trail
- outcome

This is not a requirement to store private reasoning or every task log.

## Why it matters

A future user or the instance itself should be able to ask:

> Why do you have this skill?

or:

> When did this part of your behavior change?

and recover the answer from observable history rather than invention.

## Instance layout

Initialized persistent instances include:

```text
evolution/
├─ index.yaml
└─ records/
```

`evolution/` is history/evidence. It should not be loaded as active memory by default.

The canonical contract is [`../function/evolution-traceability.md`](../function/evolution-traceability.md).
