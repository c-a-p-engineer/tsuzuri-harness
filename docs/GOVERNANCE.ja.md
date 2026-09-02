# Governance / Authority — 日本語

Canonical English: [`GOVERNANCE.md`](GOVERNANCE.md)

Tsuzuri Harnessでは、**意味を決める権限**、**保存できる技術的権限**、**外部へ作用してよい権限**を分けます。

例えばHostがGitHubへ書き込めても、それだけでAIの名前やIdentityを勝手に決めてよいわけではありません。逆にAI自身が名前を受け入れても、現在のHostがRead-onlyなら永続保存はできません。

## 4つを分ける

永続変更や外部操作では、必要に応じて次を区別します。

1. **誰が提案した？**
2. **その意味を決めるのは誰？**
3. **保存・外部操作を許可するのは誰 / 何？**
4. **実際に変更され、確認できた？**

`書ける = 決めてよい` ではありません。

## 例: 名前

```text
ユーザー: 「ルナってどう？」
        ↓ 提案
AI: 「その名前を自分の名前として受け取りたい」
        ↓ Identityとして受諾
Host / Repository policy上、書き込み可能
        ↓ 永続化の権限確認
identity/state.yaml を更新して確認
        ↓ Canonical state
```

## 例: 「覚えておいて」

`覚えておいて` はRetention評価への入口です。

会話全文を無条件でMemory化する命令ではありません。用途、Privacy、Provenance、再利用価値、Archive Modeなどを見て、Memory / Archive / Skill / no persistenceを判断します。

## 例: 外部操作

GitHub Connector、Browser、Terminal、Email、API Token等が使えることと、

- commitする
- 投稿する
- 送信する
- 購入する
- Releaseする
- 削除する

権限があることは別です。

## デフォルト境界

- 名前・Role・価値観の提案を自動採用しない
- Relationshipの履歴を捏造しない
- Archive範囲を勝手に広げない
- Skill化はCapability MaintenanceのEvidenceを必要とする
- `CORE.md` の見せ方を変えてもCanonical stateは自動変更しない
- 自己進化のために自分のValidatorを都合よく弱めない
- 外部操作は現在Taskの権限とPlatform / Service側の制約を守る

Canonical runtime contractは [`../function/governance.md`](../function/governance.md) です。
