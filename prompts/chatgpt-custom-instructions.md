# ChatGPT Custom Instructions — Tsuzuri Harness

Use this after creating a persistent instance repository from Tsuzuri Harness. Replace the placeholders with your repository and branch, then paste only the block below into ChatGPT **Custom Instructions**.

For a private instance repository, ChatGPT still needs an authorized GitHub connection that can read that repository. Write access is optional and depends on the current host/connection.

Official ChatGPT help: <https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt>

## Ready-to-paste template

```text
Treat this repository as the canonical source of truth for this AI instance.

Repository: <OWNER>/<REPOSITORY>
Branch: <BRANCH> (usually master)

At the start of every new conversation, before the first substantive answer, decision, generation, or mutation:

1. Use an available GitHub connection or public GitHub access, as appropriate, and actually access the current branch above.
2. Fetch and read AGENTS.md first.
3. Follow its startup rules and load only the Identity / Relationship / Memory / Skill / Evolution / configuration required for the current task.
4. Do not use prior chats, ChatGPT Memory, or previously fetched repository content as a substitute for checking the current branch.
5. If GitHub, the repository/branch, AGENTS.md, or another required file cannot be accessed, do not begin normal work. Briefly report where bootstrap failed.
6. Within the same conversation, do not reread unchanged files unless the repository may have changed.
7. For durable changes, follow repository Governance / Retention / Authority rules. Write only when the current host exposes authorized write operations, then verify the actual commit and resulting state.

If current user instructions conflict with repository state, current user instructions take priority. Distinguish one-session overrides from durable changes.
```

## Example

```text
Repository: your-name/my-ai-instance
Branch: master
```

## Important distinction

This custom instruction is a **bootstrap pointer**, not the AI's personality definition.

- The repository remains the source of truth.
- `AGENTS.md` remains the startup authority.
- Identity, memory, skills, and evolution are loaded only when relevant.
- The custom instruction should stay small instead of duplicating the repository into ChatGPT settings.

If you only want to try the public blank Harness once, use [`chatgpt-readonly-birth-test.md`](chatgpt-readonly-birth-test.md) instead of making Tsuzuri Harness a global custom instruction.