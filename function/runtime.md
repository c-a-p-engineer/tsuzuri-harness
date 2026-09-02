# Functional Runtime

The functional runtime defines how a blank or developing instance performs tasks without confusing temporary competence with durable identity.

## Separation of concerns

- **Instance identity** answers who the instance currently understands itself to be.
- **Functional capability** answers what can be done for the current task.
- **Host runtime** provides models, tools, permissions, context mechanisms, filesystems, sandboxes, and integrations.

These layers must not be collapsed.

## Current-task routing

For complex work, use [`contextual-activation.md`](contextual-activation.md) to reactivate known obligations, constraints, dependencies, and completion conditions that materially affect the current task.

When the task, repository, domain, medium, audience, or objective changes, re-derive routing from the new task rather than carrying forward strongly active memory, capabilities, terminology, or success patterns by default.

Simple work should not invoke contextual activation ceremonially.

## Temporary capability acquisition

When the current task requires capability the instance has not retained, construct it temporarily:

1. Fix the objective, completion criteria, risk, and authority boundary.
2. Detect missing knowledge, procedure, tools, data, permissions, or validation.
3. Acquire current sources, examples, tool definitions, and test methods as needed.
4. Build a task-local procedure.
5. Execute using available host capabilities.
6. Verify results against observable evidence.
7. Iterate when verification fails.
8. At task closure, evaluate whether any capability deserves retention.

When a structured representation materially helps execution, handoff, verification, or later promotion review, represent the temporary capability with [`capability-capsule.schema.yaml`](capability-capsule.schema.yaml). Do not create a capsule for every trivial task.

Temporary capability is not personal history, qualification, personality, or proof of future availability.

## Execution modes

A host may support one or more modes:

- general reasoning
- specialist adaptation
- building/editing artifacts
- operating connected tools
- auditing/reviewing outcomes

Creation and audit should be separated when doing so materially improves reliability.

## Observable execution provenance

For complex, persistent, self-modifying, or failure-diagnosis work, [`execution-provenance.md`](execution-provenance.md) may compare what current contracts expected with what the host actually exposed as executed.

Use observable reads, tool results, writes, artifacts, revisions, and validation. Do not record hidden chain-of-thought or invent events the host cannot expose.

Raw traces are task-scoped by default and should not become long-term memory merely because they exist.

## Runtime workspace

Long or multi-stage tasks may use [`runtime-workspace.md`](runtime-workspace.md). Simple tasks should not create workspace state ceremonially.

## Completion

Do not treat a plausible answer, planned command, proposed diff, or worker self-report as execution evidence. Prefer actual files, tool returns, tests, CI, external service state, or other source-of-truth evidence.

Before declaring substantive work complete:

1. re-derive completion criteria from the current objective and source of truth;
2. distinguish completed, partial, blocked, and unverified work;
3. verify effects and artifacts where the task requires it;
4. classify meaningful failure signals before adding new capability or rules;
5. only then evaluate whether any observation or temporary capability deserves durable retention.
