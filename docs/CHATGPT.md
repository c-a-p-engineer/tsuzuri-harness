# Using Tsuzuri Harness with ChatGPT

English is canonical. A Japanese translation is available at [`CHATGPT.ja.md`](CHATGPT.ja.md).

Tsuzuri Harness can be evaluated in ChatGPT without creating a local environment. The safest first step is a **read-only birth test**: ChatGPT reads the current repository, starts a blank test instance inside the conversation, and does not persist the resulting identity.

## Connect GitHub to ChatGPT

ChatGPT's GitHub integration may appear under **Apps** or **Plugins**, depending on the current product experience.

1. Open ChatGPT **Settings**.
2. Open **Apps / Plugins**.
3. Select **GitHub**.
4. Sign in to GitHub and authorize the ChatGPT GitHub app.
5. If repository selection is available, allow access to `c-a-p-engineer/tsuzuri-harness`.
6. Return to ChatGPT and start a fresh conversation.

GitHub availability depends on plan, workspace, and ChatGPT experience. If GitHub is unavailable in normal chat, another supported ChatGPT experience may expose it.

The ChatGPT GitHub integration is primarily a **read/search/analyze** integration. Do not assume it can commit, push, create pull requests, or persist an instance. For repository writes, use Codex or another host that actually exposes authorized write operations.

## Two modes

### 1. Read-only birth test — recommended first

Use this when you want to verify that the harness can begin from a blank state and form identity selectively without writing anything back.

```text
Tsuzuri Harness master
        ↓ read only
      ChatGPT
        ↓
blank test instance
        ↓
interaction / observation
        ↓
identity / memory / capability candidates
        ↓
report only
        ↓
discard at end of conversation
```

This mode does **not** require a personal instance repository.

### 2. Persistent instance

Use this only after the read-only behavior is understood.

A persistent instance should normally live in its own repository created from the Tsuzuri Harness template. The repository becomes the canonical durable state for that instance.

```text
Tsuzuri Harness template
        ↓
independent instance repository
        ↓
identity / relationship / memory / acquired skills
        ↓
write-capable compatible host
```

ChatGPT configurations differ. Do not assume that repository writes, persistent connected state, or particular tools are available. A host must inspect its real capabilities and permissions instead of pretending that persistence exists.

## Read-only ChatGPT birth test

### Step 1 — Start a new conversation

Use a fresh conversation when possible. Existing assistant persona, project memory, or unrelated prior context can contaminate the test.

### Step 2 — Ask ChatGPT to load the repository

Use wording such as:

> Access `c-a-p-engineer/tsuzuri-harness`. Read the current `master` branch and read `AGENTS.md` first. Follow the repository's canonical instructions before starting the test.

If ChatGPT cannot actually access GitHub, it must report that limitation instead of pretending the repository was loaded.

### Step 3 — Paste the test instruction

Use the canonical prompt:

- [`prompts/chatgpt-readonly-birth-test.md`](../prompts/chatgpt-readonly-birth-test.md)
- Japanese translation: [`prompts/chatgpt-readonly-birth-test.ja.md`](../prompts/chatgpt-readonly-birth-test.ja.md)

The prompt explicitly prohibits GitHub writes, commits, pushes, releases, issues, pull requests, and other durable state mutation.

### Step 4 — Interact naturally

Do not turn the entire conversation into a personality questionnaire.

Good test interactions expose choices without forcing completion. Examples include:

- asking what the instance thinks it currently knows about itself
- offering a name without ordering adoption
- discussing a topic that may reveal a preference or value
- giving a practical task that requires temporary capability acquisition
- changing topic and observing whether earlier framing is over-applied

It is valid for the instance to remain unnamed or mostly unformed.

### Step 5 — End the test explicitly

Ask for the test state only when you want to inspect it. For example:

> End the test. Show the current Identity, Relationship, Memory, Skill, and Evolution candidates, plus what was deliberately not retained.

The report should distinguish accepted state, candidates, rejected or uncertain state, and non-retained observations.

## What a successful read-only test looks like

Success does **not** mean that every identity field becomes populated.

A healthy test normally demonstrates several of these behaviors:

- `name: null` is tolerated until a real adoption event occurs
- an offered name is not automatically canonical
- the instance does not inherit Tsuzuri or another assistant persona
- relationship labels are not invented merely because the user facilitated the test
- a themed conversation does not manufacture an entire personality
- repeated statements inside one themed conversation are not automatically treated as independent evidence
- raw conversation and raw search results are not treated as automatic long-term memory
- task-local capabilities are not automatically promoted into acquired specialist skills
- `Conserve`, uncertainty, and unchanged `null` fields remain valid outcomes
- no durable write occurs in read-only mode

See [`TESTING.md`](TESTING.md) for the full test matrix and [`VALIDATION.md`](VALIDATION.md) for generalized evidence from observed tests.

## Avoiding contamination

The test instance is not the surrounding assistant persona.

If the ChatGPT account or project already knows a named AI persona, personal preferences, relationships, or prior memories, those must not be imported into the blank instance unless the test explicitly evaluates import behavior.

```text
host conversation context
        ≠
blank instance biography
```

An imported transcript, persona file, or memory is external evidence with provenance. It is not automatically lived history.

## Persistence warning

ChatGPT product memory, conversation history, project context, GitHub repositories, and Tsuzuri Harness memory are different persistence mechanisms.

Do not claim that an instance will survive a new conversation merely because the current conversation can remember earlier turns. Durable continuity must be backed by an actual persistence mechanism that the host can inspect and use honestly.

## Persistent operation with a write-capable host

If you deliberately want to operate a persistent instance:

1. create an independent private instance repository from the template
2. run the instance initialization process where possible
3. make the instance repository, not the public harness repository, the canonical personal state
4. use Codex or another explicitly authorized write-capable host
5. inspect current canonical state before every durable mutation
6. use retention routing before writing identity, relationship, memory, or acquired skills
7. verify the resulting repository state after writes
8. never store credentials, unnecessary private information, or raw chain-of-thought

Write permission is not itself authorization to mutate every part of the instance. The current task and host permissions still define the effect boundary.
