# Execution Provenance Lite

Status: `limited_live`

## Purpose

Separate **what the current contracts expected** from **what the host actually exposed as having happened** so failures can be classified from evidence instead of retrospective guesswork.

This records observable execution facts, not hidden chain-of-thought or model-internal reasoning.

```text
routing / current contracts
        ↓ expected
execution provenance
        ↓ observed
resource / tool / action / validation evidence
        ↓ compare
outcome / retention / capability maintenance / self-evolution
```

## Use when

Use `lite` provenance only when it can materially improve diagnosis or future maintenance, for example:

- multiple capabilities, memories, tools, or canonical resources are involved
- persistent instance or harness state is being changed
- activation, retrieval, negative-transfer, validation, or stale-state failure is suspected
- the same behavior is compared across hosts
- a later reviewer must know why a file, source, tool, or validation mattered

Simple conversation and routine tasks should normally use `off`.

## Trace levels

- **off** — no durable trace; normal lightweight behavior.
- **lite** — task-scoped observable routing, reads, tool/action results, and validation.
- **audit** — only for important durable/self-modifying/high-effect work where immutable revisions, hashes, authority, or validation detail materially matter.

Audit level does not permit storing secrets, raw private transcripts, system prompts, or internal reasoning.

## Four planes

### Expected

What current canonical contracts required, such as a capability, source, permission check, or validation.

Expected provenance is descriptive. It must not become a competing router.

### Observed

What the host actually exposed, for example:

- canonical resource read
- memory or acquired-skill retrieval
- external tool call/result
- durable action/write
- artifact production
- validation result

If the host cannot expose something, record `unavailable` or `not_observed` rather than inventing it.

### Evidence

Minimal relationships may include:

- `SUPPORTS`
- `CONTRADICTS`
- `DERIVED_FROM`
- `USED_FOR`

An evidence link means the evidence was used; it does not by itself certify that the source is true.

Useful evidence states include `observed`, `asserted`, `verified`, `inferred`, `contradicted`, `stale`, `invalidated`, and `unknown`.

### Verification

Keep action/artifact success separate from the fact that evidence exists.

```text
decision
   ↓
action
   ↓
artifact / external state
   ↓
validation
```

Do not promote an unvalidated effect to verified merely because a tool call was attempted.

## Minimal event shape

Use only fields the host can honestly provide. When a machine-readable event is useful, use [`execution-provenance.schema.yaml`](execution-provenance.schema.yaml); the schema is optional runtime structure, not an instruction to persist traces for every task.

```yaml
schema_version: 1
trace_id: string
event_id: string
parent_event_id: string | null
actor_type: instance | user | tool | service | validator
operation: task.start | route.require | resource.read | memory.search | tool.call | tool.result | decision | action | artifact | validation | task.complete
subject_ref: string | null
revision: string | null
reason_code: string | null
result: success | partial | failed | blocked | unavailable | not_observed
coverage: host_observed | harness_expected | user_supplied | derived
```

Unknown values may remain unknown. Do not fabricate completeness.

## Reason codes

When a short reason materially helps auditability, prefer codes such as:

- `required_by_router`
- `required_by_rule`
- `dependency_of`
- `explicit_user_request`
- `canonical_preflight`
- `investigate_uncertainty`
- `failure_diagnosis`
- `validation`
- `source_of_truth_check`

Reason codes are not summaries of private reasoning.

## Diagnosis examples

- Expected capability but no observable activation/retrieval → `activation_failure` candidate, unless host observability is insufficient.
- Retrieval was attempted but permission/404/timeout blocked it → `retrieval_failure`.
- Observed capability/resource has no current-task justification and materially distorted output → `overactivation_failure` candidate.
- Durable action was claimed complete without required validation → `closure_failure` or validation gap.
- Observed revision differs from current canonical revision → stale-evidence candidate; verify whether the difference matters before declaring failure.

## Storage

Raw traces are task-scoped by default and should normally live in transient runtime state.

```text
observable events
      ↓ task-scoped analysis
reusable finding?
      ├─ no  → discard
      └─ yes → eval / evolution evidence / capability change
```

Do not turn trace volume into a growth metric.

## Privacy and trust boundary

Prefer references, revisions, hashes, event types, validation results, and short reason codes over copied payloads.

Do not persist:

- credentials, tokens, cookies, or secrets
- full tool arguments/results when a minimal reference is enough
- private conversations or personal documents merely for tracing
- hidden chain-of-thought or model-internal state
- system/developer prompts

Host observability differences must not be misclassified as differences in the instance's identity or competence.
