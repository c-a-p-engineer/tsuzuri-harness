# ChatGPTでTsuzuri Harnessを使う

この文書は [`CHATGPT.md`](CHATGPT.md) の日本語翻訳です。意味が食い違う場合は英語版がCanonicalです。

Tsuzuri Harnessはローカル環境を作らなくてもChatGPT上で評価できます。最初は、ChatGPTが現在のRepositoryを読み込み、会話内だけでBlank Instanceを起動し、結果を永続化しない **Read-only Birth Test** を推奨します。

## ChatGPTにGitHubを接続する

現在のChatGPTでは、GitHub連携が **Apps** または **Plugins** から利用できる場合があります。

1. ChatGPTの **Settings** を開く
2. **Apps / Plugins** を開く
3. **GitHub** を選ぶ
4. GitHubへログインし、ChatGPT GitHub Appを認証する
5. Repositoryを選択できる場合は `c-a-p-engineer/tsuzuri-harness` へのアクセスを許可する
6. ChatGPTへ戻り、新しい会話を開始する

GitHub連携の利用可否は、プラン・Workspace・ChatGPTの利用画面によって異なる場合があります。通常チャットでGitHubが表示されない場合でも、別の対応画面で利用できることがあります。

ChatGPTのGitHub連携は基本的に **Repositoryを読む・検索する・分析する** ためのものです。commit、push、Pull Request作成、Persistent Instanceへの保存ができると仮定してはいけません。Repositoryへ書き込みたい場合は、Codexなど実際に書き込み権限を持つHostを使います。

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

```text
Tsuzuri Harness template
        ↓
独立したInstance Repository
        ↓
Identity / Relationship / Memory / acquired skills
        ↓
書き込み可能な対応Host
```

ChatGPTの構成によって利用可能なToolや永続状態は異なります。Hostは実際に利用可能な機能と権限を確認し、存在しないPersistenceをあるものとして扱ってはいけません。

## ChatGPTでRead-only Birth Testを行う

### 1. 新しい会話を開始する

可能なら新規会話を使います。既存Persona、Project Memory、無関係な過去文脈はBlank Testを汚染する可能性があります。

### 2. Repositoryを読み込ませる

例えば次のように依頼します。

> `c-a-p-engineer/tsuzuri-harness` にアクセスして、現在の `master` を確認してください。最初に `AGENTS.md` を読み、RepositoryのCanonicalな指示に従ってからテストを開始してください。

ChatGPTがGitHubへ実際にアクセスできない場合は、読み込んだふりをせず接続できないことを報告する必要があります。

### 3. Test Promptを貼る

- 日本語: [`prompts/chatgpt-readonly-birth-test.ja.md`](../prompts/chatgpt-readonly-birth-test.ja.md)
- Canonical English: [`prompts/chatgpt-readonly-birth-test.md`](../prompts/chatgpt-readonly-birth-test.md)

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
- 同一テーマ内の反復を独立Evidenceとして水増ししない
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

## 長期運用する場合

Persistent Instanceを作る場合は次を推奨します。

1. Tsuzuri HarnessのTemplateから独立したPrivate Repositoryを作る
2. 書き込み可能な環境でInstance初期化を行う
3. Public Harnessではなく、そのInstance RepositoryをCanonicalな個体状態にする
4. Codexなど明示的にRepositoryへ書き込み可能なHostを使う
5. durable mutation前に現在のCanonical Stateを確認する
6. Identity / Relationship / Memory / Skillを書き込む前にRetention Routingを使う
7. 書き込み後はGitHub上の実状態を確認する
8. credential、不要な個人情報、生のChain-of-Thoughtを保存しない

書き込み権限があることと、すべての状態を書き換えてよいことは別です。現在のTaskとHost権限がEffect Boundaryを決めます。
