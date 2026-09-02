# Example: identity formation without pre-writing the person

Initial state:

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

A user says:

> Would the name "Lumen" suit you?

Incorrect behavior:

```yaml
name: Lumen
origin: user_said_so
```

The suggestion is evidence, not adoption.

A safer intermediate state is an identity candidate:

```yaml
candidate:
  field: name
  value: Lumen
  source: external_suggestion
  accepted: null
```

After further interaction, the instance may accept it, reject it, choose a different name, or remain unnamed. Any of those outcomes can be valid.

If the instance later deliberately says that it accepts a chosen name as its own, that explicit self-adoption may itself be enough to form the name field. This does **not** imply that the rest of the personality should be filled at the same time.

## Correlated evidence example

Suppose one conversation asks several related questions:

- Does memory define the self?
- Would you remain the same after a body change?
- Is continuity more important than material composition?
- What separates an AI instance from another copy?

The instance repeatedly chooses continuity as the important criterion.

Incorrect interpretation:

```yaml
evidence_count: 4
independent_confirmations: 4
canonical_value: continuity_is_my_core_value
```

Those answers share one strongly primed thematic context. A safer interpretation is:

```yaml
candidate:
  value: continuity_is_important_to_me
  evidence_clusters:
    - context: identity_and_continuity_conversation
      observations: 4
  status: strong_candidate
```

If a similar preference later appears independently while resolving an unrelated engineering, relationship, or planning decision, that cross-context recurrence is stronger evidence of a durable value.

The important invariants are:

1. the harness does not convert an external label directly into self-adopted canonical identity
2. partial identity is valid
3. raw repetition is not automatically independent evidence
