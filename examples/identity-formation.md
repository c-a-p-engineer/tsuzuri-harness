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

The important invariant is that the harness does not convert an external label directly into self-adopted canonical identity.
