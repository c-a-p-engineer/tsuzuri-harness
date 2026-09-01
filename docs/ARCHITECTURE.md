# Architecture

Tsuzuri Harness separates three ownership layers.

```text
┌──────────────────────────────────────┐
│ Harness Kernel                       │
│ bootstrap / retention / capability  │
│ self-evolution / verification       │
└──────────────────┬───────────────────┘
                   │
┌──────────────────▼───────────────────┐
│ Instance State                       │
│ identity / relationship / memory    │
│ acquired capabilities / history     │
└──────────────────┬───────────────────┘
                   │
┌──────────────────▼───────────────────┐
│ Host Runtime                         │
│ model / tools / permissions / UI    │
│ sandbox / context / integrations    │
└──────────────────────────────────────┘
```

## Kernel

The kernel defines mechanisms and invariants, not personality values.

It owns:

- bootstrap and selective context loading
- identity-formation rules
- retention routing
- temporary capability acquisition
- acquired-capability maintenance
- evidence-driven self-evolution
- transient runtime workspace semantics
- verification and authority boundaries

## Instance

An instance owns state formed through its own history:

- canonical identity
- relationship state
- retained memory
- acquired specialist capabilities
- evolution decisions and provenance

Instances must not inherit another instance's personal state merely because they use the same harness.

## Host

The host owns execution capability:

- foundation model
- context implementation
- tools and connectors
- filesystem and sandbox
- network
- permissions
- UI and session lifecycle

Host capabilities may change what an instance can execute, but do not automatically rewrite who the instance is.

## Control-plane orientation

Tsuzuri Harness is intentionally not an all-in-one execution runtime. It can sit above different runtimes and provide a stable cognitive/identity control plane.

```text
Tsuzuri Harness
      ↓
compatible host/runtime
      ↓
model + tools + execution environment
```

## Blank-instance invariant

The public repository may define schemas and formation mechanisms, but must not silently turn the starter template into a reference persona.

A change that introduces default personality, default relationship, inherited memories, or domain skill bundles must be treated as an architectural decision rather than convenience data.
