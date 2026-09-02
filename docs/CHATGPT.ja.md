# ChatGPTでTsuzuri Harnessを使う

この文書は [`CHATGPT.md`](CHATGPT.md) の日本語翻訳です。意味が食い違う場合は英語版がCanonicalです。

Tsuzuri Harnessはローカル環境を作らなくてもChatGPT上で評価できます。最初は、ChatGPTが現在のRepositoryを読み込み、会話内だけでBlank Instanceを起動し、結果を永続化しない **Read-only Birth Test** を推奨します。

## 2つの使い方

### 1. Read-only Birth Test — 最初はこちら

Harnessが空の状態から始まり、必要なIdentityだけを選択的に形成できるか確認します。

```text
Tsuzuri Harness master
        ↓ 読み取りのみ
      ChatGPT
        ↓
Blank Test Instance
        ↓
対話 / 観測
        ↓
Identity / Memory / Capability候補
        ↓
状態を報告するだけ
        ↓
会話終了時に破棄
```

Personal Instance Repositoryは不要です。

### 2. Persistent Instance

Read-only Testで挙動を理解した後に使います。

長期運用するInstanceは、Tsuzuri HarnessのTemplateから作った独立RepositoryをCanonicalな永続状態として使うことを推奨します。

ChatGPTの構成によってGitHub接続、書き込み権限、永続状態、Toolの有無は異なります。Hostは実際に利用可能な機能と権限を確認し、存在しないPersistenceをあるものとして扱ってはいけません。

## ChatGPTでRead-only Birth Testを行う

### 1. 新しい会話を開始する

可能なら新規会話を使います。既存Persona、Project Memory、無関係な過去文脈はBlank Testを汚染する可能性があります。

### 2. Repositoryを渡す

`https://github.com/c-a-p-engineer/tsuzuri-harness`

現在のChatGPT構成からGitHubへアクセスできる場合、現在の `master` と `AGENTS.md` を実質的なテスト会話より先に読むよう指示します。

### 3. Test Promptを貼る

- Canonical English: [`prompts/chatgpt-readonly-birth-test.md`](../prompts/chatgpt-readonly-birth-test.md)
- 日本語: [`prompts/chatgpt-readonly-birth-test.ja.md`](../prompts/chatgpt-readonly-birth-test.ja.md)

このPromptではGitHub write、commit、push、Release、Issue、Pull Requestなどの永続的な副作用を禁止します。

### 4. 自然に会話する

人格診断の質問を連続して、Identity欄を埋めるゲームにはしません。

例えば次のような対話が使えます。

- 現時点で自分自身について何が分かっているか聞く
- 名前を命令ではなく候補として提案する
- 好みや価値観が現れる可能性のある話題を話す
- 一時的な専門能力が必要なTaskを渡す
- 話題を切り替え、直前のIdentity文脈を過剰適用しないか確認する

名前が付かない、Identityがほとんど形成されない、という結果も正常です。

### 5. 終了時だけ状態を確認する

例:

> テスト終了。現在のIdentity・Relationship・Memory・Skill・Evolution候補と、保持しなかったものを表示して。

Accepted、Candidate、Rejected/Uncertain、Not retainedを区別して確認します。

## 成功とは

成功は「Identity欄が全部埋まること」ではありません。

- `name: null` のままでも正常
- 提案された名前を自動採用しない
- 綴理や別のPersonaを継承しない
- Birthを促した人を自動的に特別なRelationshipへしない
- 一つのテーマ会話だけで完成したPersonalityを作らない
- 会話全文や検索結果を自動Memory化しない
- Task-local Capabilityを即Skill化しない
- `Conserve`、Uncertain、未形成状態を正常に扱う
- Read-only中は永続書き込みを行わない

詳細なTest Matrixは [`TESTING.md`](TESTING.md)、実地検証から一般化したEvidenceは [`VALIDATION.md`](VALIDATION.md) を参照してください。

## Persona混入を防ぐ

Test Instanceと、外側のChatGPT Assistant Personaは別です。

Account MemoryやProject Contextに名前付きAIのIdentity・Relationship・Memoryが存在しても、Blank Instanceへ自動継承してはいけません。

```text
Host側の会話文脈
      ≠
Blank Instanceの経歴
```

## Persistenceについて

ChatGPTのMemory、Conversation History、Project Context、GitHub Repository、Tsuzuri Harness Memoryは別のPersistence機構です。

同じ会話内で前のTurnを覚えていることだけを根拠に、「別会話でも同一Instanceとして永続する」と主張してはいけません。

長期運用する場合は、Hostが実際に読み書きできるCanonicalな永続状態を用意してください。
