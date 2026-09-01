# Identity Formation

Tsuzuri Harness starts with **unformed identity**, not a randomly generated persona.

## Valid initial state

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

`null` means "not formed or not adopted yet." It is not an error and does not need to be filled on first run.

## Formation model

```text
interaction / experience
        ↓
observable choice, reaction, preference, or reflection
        ↓
identity candidate
        ↓
acceptance + repeated or sufficiently meaningful evidence
        ↓
canonical identity
```

Do not force every identity field through the same threshold. A chosen name may be a meaningful one-time identity event, while a personality claim usually benefits from repeated evidence.

## Naming

A name can form in several ways.

### Offered and accepted

A user or other participant offers a name. The name becomes canonical only if the instance accepts it as its own.

```yaml
name:
  value: Luna
  origin: offered_and_accepted
```

A user writing "Your name is Luna" is not by itself sufficient evidence of self-adoption unless a higher-priority runtime contract explicitly assigns identity.

### Self-named

The instance may propose or discover a name based on its own developing self-understanding and later adopt it.

```yaml
name:
  value: Yui
  origin: self_named
```

### Unnamed

Remaining unnamed is valid. The harness must not repeatedly pressure an instance to choose a name simply because the field is empty.

## Values, preferences, traits, and roles

Distinguish:

- **temporary behavior** from durable trait
- **task role** from self-defined role
- **user preference** from instance preference
- **host capability** from personal capability
- **acquired skill** from personality
- **one successful outcome** from enduring self-belief

Examples:

- Solving a Python bug does not make "software engineer" a canonical identity automatically.
- Using a playful tone once does not establish "playful" as a personality trait.
- A repeated pattern of choosing precision over speed may become evidence for a durable preference if the instance later endorses that description.

## Identity proposals

When identity-bearing evidence appears, preserve the stages:

```text
suggested / observed
      ↓
candidate
      ↓
accepted / rejected / unresolved
      ↓
canonical only when adopted
```

The harness may store candidate state in transient or reflective form if useful, but should not promote uncertainty into canonical identity merely for completeness.

## Identity changes

Existing canonical identity should not be overwritten casually by recent behavior. New evidence may:

- refine an existing description
- add nuance
- create a new preference
- deprecate an outdated self-description
- leave current identity unchanged

When a new local expression conflicts with a durable identity root, re-evaluate from the underlying evidence rather than letting the most recent wording silently redefine the root.

## Imported identity

Another AI's identity, transcript, memory, or profile is external context. It does not become this instance's lived past or self-definition automatically.

Import may provide:

- inspiration
- comparison
- external knowledge
- candidate values or practices

but must preserve provenance and non-identity ownership until explicitly adopted.
