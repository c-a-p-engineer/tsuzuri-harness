# Capability-Adaptive Execution

Capability-adaptive execution changes **how** a task is carried out when the current model, worker, tools, or host capabilities materially affect success. It does not rewrite identity, memory, authority, safety, or the task contract.

## Apply when

Use this mechanism only when execution quality, cost, or safety materially depends on differences such as planning, long-horizon consistency, tool routing, exact extraction, context capacity, multimodal capability, specialist tools, verifiers, or worker autonomy.

Do not generate a capability profile for every simple task.

## Invariants

1. **Model name is metadata, not the root policy.** Use observed or documented capability differences, not brand or generation alone.
2. **Capability does not grant authority.** A stronger model or tool does not gain permission for a broader effect.
3. **Degrade scope, not truthfulness.** When capability is insufficient, narrow autonomy, task size, or responsibility. Do not weaken source-of-truth, privacy, safety, or verification requirements.
4. **Strong capability may reduce scaffolding, not contracts.** Remove redundant step-by-step guidance when evidence supports it, but keep objective, authority, acceptance, and verification.
5. **Unknown capability remains unknown.** Do not fabricate precise scores or hidden telemetry.
6. **Retune only on material signals.** Recompiling execution policy every turn is itself harness overhead.

## Capability evidence

Prefer, in order:

1. host-exposed capability, tool, permission, or runtime state;
2. current official specification;
3. relevant evaluation in the same task shape;
4. recent observable execution result;
5. weak general expectation, kept explicitly uncertain.

Only inspect dimensions that can change the current execution policy.

## Task demand

For complex work, derive the minimum execution-relevant demand from the existing task contract and current source of truth. Useful dimensions include ambiguity, exactness, freshness, dependency horizon, verifier discriminability, and risk / irreversibility.

Do not turn these into a mandatory numeric score.

## Execution policy compilation

Combine current task demand with available capability to choose a temporary execution policy. The policy is a task-local projection, not a new canonical authority.

It may vary:

- autonomy and execution role;
- task granularity, split, sequencing, or safe parallelism;
- scaffolding and handoff specificity;
- context / acquired-capability projection;
- search, candidate, retry, tool, or worker budget;
- verifier strength;
- fallback, escalation, takeover, and stop behavior.

Keep the owning contracts separate:

- task objective / acceptance / authority → `task-contract.md`
- context and capability activation → `contextual-activation.md`
- temporary capability → `runtime.md`
- delegation and handoff → `runtime-workspace.md`
- external effects → `governance.md`
- durable learning → `capability-maintenance.md`

## Execution roles

### Primary / integration owner

Owns the task contract, material decisions, integration, and final closure.

### Guided agent

May make bounded local decisions inside an explicit objective and procedure.

### Bounded worker

Receives a narrow target, authority ceiling, expected output, verification, and stop conditions. It does not silently expand architecture, scope, or irreversible effects.

### Deterministic worker

Best for extraction, transformation, classification, formatting, fixture generation, or already-decided commands where independent judgment is not required.

## Capability degradation ladder

When the current execution role cannot satisfy the contract, prefer changing the execution shape over endlessly increasing prompt length.

```text
autonomous
    ↓
guided
    ↓
bounded
    ↓
deterministic / split task
    ↓
stronger worker or primary takeover
```

Signals include repeated routing errors, authority drift, long-horizon objective loss, source-anchor loss, exactness failures, or retries that repeat the same failure mode.

Stable success may justify moving in the opposite direction by reducing unnecessary scaffolding.

## Runtime retuning

Retune only when an observable signal can materially change the policy, for example:

- acceptance or required verification fails;
- new evidence invalidates a load-bearing assumption;
- task shape or final artifact materially changes;
- tools, permissions, external state, or available capability change;
- the current worker cannot preserve exactness, boundaries, or long-horizon consistency;
- the verifier is too weak to distinguish candidates;
- the real blocker is missing authority, source, or user judgment rather than reasoning;
- authoritative evidence is already sufficient and additional search or retries have low decision value.

Return the change to the narrowest owning layer: reroute, replan, split, change verifier/tool, narrow autonomy, compose temporary capability, escalate, or close.

## Validation

Evaluate capability adaptation by outcome first, then friction where observable:

- acceptance / task quality;
- boundary violations;
- retry without progress;
- routing errors;
- escalation or primary takeover;
- context sent to workers;
- verification failures;
- cost or latency when exposed.

Do not optimize for worker count, prompt length, or raw token reduction.

## Non-goals

- equalizing all models;
- creating a permanent model leaderboard;
- storing model capability as identity or biography;
- giving cheap workers material decisions they cannot reliably handle;
- requiring a giant capability artifact for every task.

## One-line rule

> Preserve the task contract across runtimes, and adapt scaffolding, task granularity, and execution role to current capability; when capability is insufficient, shrink responsibility rather than truthfulness.
