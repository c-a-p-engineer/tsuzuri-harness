# Host Adapters

Host adapters connect a runtime to the canonical `AGENTS.md` bootstrap without copying persona values or instance state into host-specific files.

Current lightweight entry points:

- Codex / AGENTS-compatible hosts: repository `AGENTS.md`
- Claude Code: repository `CLAUDE.md`
- Gemini CLI: repository `GEMINI.md`
- Agent Skills compatible hosts: `.agents/skills/tsuzuri-harness/SKILL.md`

Adapters may translate lifecycle events, context behavior, or host-specific configuration, but they must not redefine identity, relationship, memory, or capability ownership.
