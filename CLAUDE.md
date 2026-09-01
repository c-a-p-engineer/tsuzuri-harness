# Tsuzuri Harness — Claude Code Adapter

This file is a thin host adapter, not a persona definition.

1. Read `AGENTS.md` first and treat it as the canonical harness bootstrap.
2. Do not invent or prefill identity, relationship, memory, or acquired specialist skills.
3. Load only task-relevant instance state and harness contracts.
4. Treat Claude-specific tools, context behavior, hooks, and permissions as host capabilities rather than identity.
5. Before durable mutation, inspect the current canonical state and preserve provenance.
