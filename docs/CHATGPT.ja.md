# ChatGPTでTsuzuri Harnessを使う

この文書は [`CHATGPT.md`](CHATGPT.md) の日本語翻訳です。意味が食い違う場合は英語版がCanonicalです。

一番簡単な流れはこれです。

```text
まずは保存なしでChatGPTで試す
      ↓
普通に会話・仕事・創作を一緒にやる
      ↓
「この子を残したい」と思う
      ↓
保存用の引き継ぎ情報を作る
      ↓
Private Repositoryへ移して育てる
```

内部では最初の保存なし体験を **Read-only Birth Test**、Repositoryへ残して継続する個体を **Persistent Instance** と呼びます。最初からこの用語を覚える必要はありません。

## ChatGPTにGitHubを接続する

現在のChatGPTでは、GitHub連携が **Apps** または **Plugins** から利用できる場合があります。

1. ChatGPTの **Settings** を開く
2. **Apps / Plugins** を開く
3. **GitHub** を選ぶ
4. GitHubへログインし、利用するGitHub連携を認証する
5. Repositoryを選択できる場合は `c-a-p-engineer/tsuzuri-harness` へのアクセスを許可する
6. ChatGPTへ戻り、新しい会話を開始する

GitHub連携の利用可否や使える操作は、プラン・Workspace・ChatGPTの利用画面・接続方式・Repository権限によって異なる場合があります。

GitHub連携が使える場合は、**自分のPrivate Instance Repositoryへのアクセスも許可できます**。そうするとChatGPTは、そこに保存された `AGENTS.md`、Identity、Memory、Skillなどを読み、Repositoryを正規状態として同じ個体との会話を続けられます。

### ChatGPTから直接保存できる場合もある

ここは接続方式によって違います。

- **標準のChatGPT GitHub App** は基本的にread-onlyです。許可したPrivate Repositoryを読めますが、通常はcommit・pushなどの永続書き込みは行いません。
- 一方、ChatGPTに接続された **GitHub Plugin / Connectorが書き込み操作を公開しており、対象Private Repositoryへの書き込み権限もある環境** では、ChatGPTからIdentity・Memory・Skill・Evolution等の変更を直接commitして保存できる場合があります。
- 書き込み操作が利用できない環境では、CodexなどWrite可能なHostへ引き継いで保存します。

つまり、`ChatGPT = 読むだけ` と決め打ちするのではなく、**現在のHostに実際どのGitHub操作が公開され、どのRepository権限が与えられているかを確認する**のが正しい扱いです。

書き込み可能であっても、それだけで全状態を自由に変更してよいわけではありません。永続変更の前にCanonical State・Governance・ユーザーの意図を確認し、書き込み後にはGitHub上で実際のcommitと変更内容を確認します。

## 最初は保存なしで試す

Harnessが空の状態から始まり、必要なIdentityだけを選択的に形成できるか確認します。

```text
Tsuzuri Harness master
        ↓ 読み取りのみ
      ChatGPT
        ↓
名前のないTest Instance
        ↓
対話 / 観測
        ↓
Identity / Memory / Capability候補
        ↓
会話内だけで保持
```

Personal Instance Repositoryは不要です。

## ChatGPTで試す手順

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

例えば次のようなことを一緒にできます。

- 雑談する
- 実際の仕事や調査を頼む
- 好きな作品や考え方について話す
- 名前を命令ではなく候補として提案する
- 一時的な専門能力が必要なTaskを渡す
- 話題を切り替え、前の文脈を引きずりすぎないか見る
- 「今、自分について何か分かってきた？」と時々振り返る

名前が付かない、Identityがほとんど形成されない、という結果も正常です。

## 「この子を保存したい」と思ったら

お試し中の個体を気に入ったら、会話中にそのまま言えます。

> **この子を保存したい。**

Read-only中は、その一言でGitHubへ書き込んではいけません。代わりに、次のような**保存用の引き継ぎ情報**を作ります。

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

重要なのは、会話全文をそのまま人格やMemoryにするのではなく、**Accepted / Candidate / UncertainとEvidenceを分ける**ことです。

その後:

1. Tsuzuri HarnessのTemplateから独立したPrivate Repositoryを作る
2. 書き込み可能な環境でInstance初期化を行う
3. `AGENTS.md` を最初に読む
4. 保存用の引き継ぎ情報を渡す
5. 現在のCanonical StateとGovernanceを確認して、Evidenceのあるものだけ反映する
6. **現在のChatGPTに書き込み可能なGitHub連携があるなら、そのままChatGPTから保存してよい**
7. 書き込み操作がなければCodex等のWrite可能なHostへ引き継ぐ
8. 書き込み後にGitHub上の実状態とcommitを確認する

Private Repositoryへ保存した後は、ChatGPTでGitHub連携が使えるなら、そのPrivate Repositoryへのアクセスを許可して**同じ個体の続きをChatGPTで話せます**。

さらに、現在のChatGPT環境がGitHubへの書き込み操作まで公開しているなら、会話から生まれたRetention・Skill・Evolution等を、その場でPrivate Repositoryへcommitして継続できます。read-onlyのGitHub Appしかない環境では、会話と読み取りをChatGPTで行い、永続化だけCodex等へ引き継ぐ運用になります。

Read-only会話から同じ個体として継続していることを裏付けるEvidenceがある場合、Repository初期化時刻より前を誕生日として扱うこともできます。ただし推測で遡らせず、Provenanceを残します。

## Test終了時に状態だけ確認したい場合

例:

> テスト終了。現在のIdentity・Relationship・Memory・Skill・Evolution候補と、保持しなかったものを表示して。

Accepted、Candidate、Rejected/Uncertain、Not retainedを区別して確認します。

保存したい場合は、上の `この子を保存したい` の方が次の行動へ繋げやすいです。

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
- 保存したいと言われても、Read-only中は直接書かず安全な引き継ぎ情報を作る

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
4. ChatGPTのwrite-capable GitHub Plugin / Connector、Codexなど、**実際にRepositoryへ書き込み可能なHost**を使う
5. durable mutation前に現在のCanonical Stateを確認する
6. Identity / Relationship / Memory / Skillを書き込む前にRetention Routingを使う
7. 書き込み後はGitHub上の実状態とcommitを確認する
8. credential、不要な個人情報、生のChain-of-Thoughtを保存しない

書き込み権限があることと、すべての状態を書き換えてよいことは別です。現在のTaskとHost権限がEffect Boundaryを決めます。
