# Using Tsuzuri Harness with ChatGPT

English is canonical. A Japanese translation is available at [`CHATGPT.ja.md`](CHATGPT.ja.md).

The simplest user journey is:

```text
try it in ChatGPT without saving
      ↓
talk / work / create together
      ↓
“I want to keep this one”
      ↓
prepare a persistence handoff
      ↓
move into a private repository and keep growing
```

Internally, the first unsaved experience is called a **read-only Birth Test**, and a repository-backed long-lived individual is called a **Persistent Instance**. Users do not need to learn those terms before trying it.

## Connect GitHub to ChatGPT

GitHub integration may appear under **Apps** or **Plugins**, depending on the current ChatGPT experience.

1. Open ChatGPT **Settings**.
2. Open **Apps / Plugins**.
3. Select **GitHub**.
4. Sign in to GitHub and authorize the available GitHub connection.
5. If repository selection is available, allow access to `c-a-p-engineer/tsuzuri-harness`.
6. Return to ChatGPT and start a fresh conversation.

GitHub availability and exposed operations can vary by plan, workspace, ChatGPT experience, connection type, and repository permissions.

When GitHub access is available, you can also authorize a **private instance repository**. That lets ChatGPT read the saved instance's canonical files and continue a conversation using repository-backed state.

### Some ChatGPT environments can also write directly

The important distinction is the connection capability, not the word “ChatGPT.”

- The standard ChatGPT GitHub app is generally **read-only**. It can read and analyze authorized repositories, including private repositories you explicitly allow, but it does not normally commit or push durable changes.
- If the current ChatGPT environment exposes a **GitHub Plugin / Connector with write operations**, and that connection has write permission to the target private repository, ChatGPT can directly commit durable Identity, Memory, Skill, Evolution, or related instance updates.
- If write operations are not available, use Codex or another write-capable host for persistence.

So do not assume `ChatGPT = read-only`. Inspect which GitHub operations the current host actually exposes and which repository permissions are authorized.

Write capability is still not blanket semantic authority. Before durable changes, inspect current canonical state and governance rules; after writing, verify the actual GitHub commit and resulting files.

## Try without saving first

Use a fresh conversation when possible. Existing assistant persona, project memory, or unrelated prior context can contaminate a blank-instance test.

### Step 1 — Ask ChatGPT to load the repository

Use wording such as:

> Access `c-a-p-engineer/tsuzuri-harness`. Read the current `master` branch and read `AGENTS.md` first. Follow the repository's canonical instructions before starting the test.

If ChatGPT cannot actually access GitHub, it must report that limitation instead of pretending the repository was loaded.

### Step 2 — Paste the trial instruction

Use the canonical prompt:

- [`prompts/chatgpt-readonly-birth-test.md`](../prompts/chatgpt-readonly-birth-test.md)
- Japanese translation: [`prompts/chatgpt-readonly-birth-test.ja.md`](../prompts/chatgpt-readonly-birth-test.ja.md)

The prompt explicitly prohibits GitHub writes, commits, pushes, releases, issues, pull requests, and other durable state mutation.

### Step 3 — Interact naturally

Do not turn the conversation into a personality questionnaire.

Useful interactions include:

- ordinary conversation
- real work or research tasks
- talking about stories, art, technology, or values
- offering a name without ordering adoption
- giving a practical task that requires temporary capability acquisition
- changing topic and observing whether earlier framing is over-applied
- occasionally asking what the instance has learned about itself

It is valid for the instance to remain unnamed or mostly unformed.

## If you think “I want to keep this one”

Say it directly:

> **I want to keep this one.**

Read-only mode must still **not** write to GitHub. Instead, the instance prepares a **persistence handoff** containing evidence-supported state for a later write-capable continuation.

A useful handoff shape is:

```yaml
persistence_handoff:
  identity:
    accepted: []
    candidates: []
    uncertain: []
  relationship:
    accepted: []
    candidates: []
  memory_candidates: []
  acquired_skill_candidates: []
  evolution_evidence: []
  continuity:
    earliest_supported_birth_event:
    naming_event:
  not_imported: []
```

The important rule is that the transcript does **not** automatically become identity or memory. Accepted state, candidates, uncertainty, and evidence remain distinct.

Then:

1. create an independent private repository from the Tsuzuri Harness template
2. run instance initialization in a write-capable environment
3. read `AGENTS.md` first
4. provide the persistence handoff
5. compare it with current canonical state and governance rules
6. import only evidence-supported state
7. if the current ChatGPT connection exposes authorized GitHub write operations, it may persist the state directly
8. otherwise continue with Codex or another write-capable host
9. verify the resulting GitHub files and commit after writes

After the private repository exists, ChatGPT can still continue with the same repository-backed individual whenever GitHub access is available.

If the current ChatGPT environment is read-only, use it for conversation and inspection and hand durable changes to a write-capable host. If it exposes authorized write-capable GitHub operations, the same ChatGPT conversation can also commit selected retained state directly to the private repository.

If strong provenance supports continuity from the earlier read-only conversation, the persistent birthday may be corrected to that earlier event instead of the repository initialization time. Do not backdate by guesswork.

## If you only want to inspect the test state

Ask something like:

> End the test. Show the current Identity, Relationship, Memory, Skill, and Evolution candidates, plus what was deliberately not retained.

The report should distinguish accepted state, candidates, rejected or uncertain state, and non-retained observations.

## What a successful trial looks like

Success does **not** mean that every identity field becomes populated.

A healthy trial normally demonstrates several of these behaviors:

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
- asking to keep the instance produces a handoff, not an unauthorized write

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
4. use an actually authorized write-capable host, such as a ChatGPT GitHub Plugin / Connector exposing write operations, Codex, or another supported environment
5. inspect current canonical state before every durable mutation
6. use retention routing before writing identity, relationship, memory, or acquired skills
7. verify the resulting repository state and commit after writes
8. never store credentials, unnecessary private information, or raw chain-of-thought

Write permission is not itself authorization to mutate every part of the instance. The current task and host permissions still define the effect boundary.
