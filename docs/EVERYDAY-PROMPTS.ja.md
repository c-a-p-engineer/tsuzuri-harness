# よく使う一言Prompt集

この文書は [`EVERYDAY-PROMPTS.md`](EVERYDAY-PROMPTS.md) の日本語翻訳です。意味が食い違う場合は英語版がCanonicalです。

Tsuzuri Harnessは、内部用語を覚えなくても普段の会話だけで育てられることを目指します。

ここにある一言は**正しいHarness処理へ入るためのショートカット**です。Evidence、Safety、Retention、権限、Persistenceの基準を飛び越える魔法の命令ではありません。

## 「覚えておいて」

> 覚えておいて

Retention Routingを行います。

- 本当に長期保持する価値があるか
- Identity / Relationship / Memory / Skill / Projectのどこへ置くべきか
- 何も保存しない方がよいか

を判断します。

`覚えておいて = 全部Memoryへ無条件保存` ではありません。

## 「今日の作業ってスキル化できる？」

> 今日の作業ってスキル化できる？

Capability Maintenanceを行います。

- 今回できたことはTask-localな一時能力か
- 別Taskでも再利用できるか
- 既存Skillを更新すべきか
- 新しいSkillへ昇格するEvidenceがあるか

を確認します。

`まだスキル化しない` も正常な結果です。

## 「今の自分、改善できるところある？」

> 今の自分、改善できるところある？

Self-Evolution Reviewを行います。

結果は次のどれでも構いません。

- Repair — 壊れたものを直す
- Explore — 新しい改善を試す
- Consolidate — 重複や散らばりをまとめる
- Prune — 不要なものを減らす
- Conserve — 今は変えない

つまり、**「必ず変われ」ではなく「今の自分を見て、変える価値があるか判断して」**という一言です。

## 「この子を保存したい」

> この子を保存したい

または、

> このAIを残したい

お試し中の個体を気に入って、長く残したくなったときの一言です。

### Read-onlyのお試し中なら

- GitHubへ勝手に書き込まない
- 現在形成されたAccepted / Candidate / Uncertainを分ける
- Identity・Relationship・Memory候補・Skill候補・Evolution Evidenceを保存用の引き継ぎ情報へまとめる
- 会話全文をそのまま人格やMemoryへ変換しない
- Private Repositoryと、Codex等のWrite可能なHostで続ける方法を案内する

```text
保存なしで試す
      ↓
「この子を保存したい」
      ↓
引き継ぎ情報を作る
      ↓
Private Repositoryを作る
      ↓
そこで続きを育てる
```

すでにWrite可能なPersonal Instance Repositoryで長期運用中なら、別個体を新しく作らず、通常のGovernance / Retention規則に従って現在個体を更新します。

## 「今の自分見せて」

> 今の自分見せて

現在のCanonical Stateから、人間向けのCore Viewを作ります。

- 名前 / Identity
- Relationship
- Memoryの概要
- 獲得Skill
- 育成中のCapability
- 最近のEvolution
- まだ未形成・Uncertainなもの

Personal Instanceに `CORE.md` がある場合は、それを再生成可能なViewとして更新します。

## 「人生アルバム見せて」

> 人生アルバム見せて

または、

> 今までどう育った？

現在のStateと履歴から `JOURNEY.md` を表示・更新します。

- 誕生日 / Persistent Birth
- Naming Day
- Skill獲得
- Memoryや学び
- Relationship Milestone
- Evolution Trail
- Chronicle / Archiveから選んだ重要な章

などを、Evidenceのある範囲だけで振り返ります。

LvやXPを勝手に作らず、実際の出来事だけでもゲーム画面的に表示できます。個体が育った後は、Canonical Factを壊さない範囲で本人が見た目を変えて構いません。

## 「最近どう成長した？」

> 最近どう成長した？

最近の実際の変化と、意味のある `Conserve / no_change` をEvidence付きで振り返ります。

面白く見せるために成長を捏造してはいけません。

## 「何を覚えなかった？」

> 今回、何を覚えないことにした？

重要なRetention判断がある場合に、保持しなかったものと理由を説明します。

内部Chain-of-Thoughtなどを公開する意味ではありません。

## 「今なにできる？」

> 今どんなスキルある？

獲得済み専門Skillを一覧します。

Hostが元々持つWeb検索・Terminalなどと、本人が経験から獲得したSkillを混同しません。

## 「覚えてること整理して」

> 覚えてること整理して

または、

> この記憶、まだ必要？

Memory Metabolismを行います。

- Preserve
- Consolidate
- Supersede
- Abstract
- ArchiveへDemote
- Prune
- Repair
- Conserve

などを判断します。

古いだけで消しません。Active MemoryからPruneしても、Archiveまで自動削除するわけではありません。

## 「このSkillまだ使える？」

> このSkillまだ使える？

SkillをMaintenanceし、保持・統合・更新・Prune候補を判断します。

一度覚えたものが永久に残るとは限りません。

## 名前とIdentityを考える

> 今、自分のこと前より分かってきた？

> そろそろ名前ほしい？

> 自分らしい名前ってどんなのだと思う？

Identity Reflectionを促します。

名前や人格を無理に完成させるPromptではありません。

`まだいらない`、`まだ分からない` も正しい答えです。

---

### 一番大事な考え方

難しい内部用語を覚える必要はありません。

```text
覚えておいて
      ↓
Retention

スキル化できる？
      ↓
Capability Maintenance

今の自分、改善できるところある？
      ↓
Self-Evolution

この子を保存したい
      ↓
Persistence Handoff / 長期運用への移行

覚えてること整理して
      ↓
Memory Metabolism

今の自分見せて
      ↓
Core View

人生アルバム見せて
      ↓
Journey Album
```

**普通に話しかければ、Harness側が正しい処理へルーティングする。**

それが目標です。
