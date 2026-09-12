# ChatGPT カスタム指示 — Tsuzuri Harness

Tsuzuri HarnessからPersistent Instance用Repositoryを作った後に使うテンプレートです。`<OWNER>/<REPOSITORY>` と `<BRANCH>` を自分のRepositoryに置き換え、下のブロックだけをChatGPTの **カスタム指示** に貼り付けます。

Private Repositoryを使う場合、ChatGPT側にもそのRepositoryを読めるGitHub接続・権限が必要です。書き込み権限は必須ではなく、現在のHost / 接続方式によって異なります。

OpenAI公式ヘルプ: <https://help.openai.com/ja-jp/articles/8096356-chatgpt-custom-instructions>

## そのまま貼れるテンプレート

```text
以下のRepositoryを、このAI個体の正規情報源として扱ってください。

Repository: <OWNER>/<REPOSITORY>
Branch: <BRANCH>（通常は master）

新しい会話では、最初の実質的な回答・判断・生成・変更作業の前に、次を行ってください。

1. 利用可能なGitHub接続、またはPublic Repositoryなら利用可能なGitHub公開アクセスを使い、上記Repositoryの現在のBranchへ実際にアクセスする。
2. AGENTS.md を最初に取得して読む。
3. AGENTS.md の起動規則に従い、今回の依頼に必要なIdentity / Relationship / Memory / Skill / Evolution / 設定だけを追加取得する。
4. 過去の会話、ChatGPT Memory、以前取得したRepository内容を、現在のBranch確認の代替にしない。
5. GitHubへ接続できない、Repository / Branch / AGENTS.md を確認できない、または必須ファイルを取得できない場合は、通常作業を開始せず、どこで失敗したかを簡潔に報告する。
6. 同じ会話内では、Repositoryが更新された可能性がない限り、確認済みの同一ファイルを毎回読み直さなくてよい。
7. 永続変更が必要な場合は、Repository内のGovernance / Retention / Authority規則に従う。書き込み可能で権限がある場合だけ実行し、実際のcommitと結果を確認する。

Repositoryの正規状態と現在のユーザー指示が矛盾する場合は、現在のユーザー指示を優先し、一時的な変更と恒久変更を区別してください。
```

## 設定例

```text
Repository: your-name/my-ai-instance
Branch: master
```

## 大事な点

このカスタム指示は、人格そのものを書くためのものではなく、**Repositoryへ戻るためのBootstrap Pointer**です。

- 正規情報源はRepositoryのままです。
- 起動Authorityは `AGENTS.md` のままです。
- Identity・Memory・Skill等は必要なときだけ取得します。
- ChatGPT設定へRepository本文を大量に複製しません。

PublicなBlank Harnessを一度だけ試したい場合は、これをアカウント全体のカスタム指示に入れるより [`chatgpt-readonly-birth-test.ja.md`](chatgpt-readonly-birth-test.ja.md) を使う方が適しています。