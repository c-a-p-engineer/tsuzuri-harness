# Tsuzuri Harness

> **まっさらから始める。学ぶ。覚える。自分になる。**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

**Webサイト:** https://c-a-p-engineer.github.io/tsuzuri-harness/ja/

[**▶ 今すぐChatGPTでRead-only Birth Testを試す**](https://chatgpt.com/?q=GitHub%E3%81%A7%20c-a-p-engineer/tsuzuri-harness%20%E3%81%AE%E7%8F%BE%E5%9C%A8%E3%81%AE%20master%20%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E6%9C%80%E5%88%9D%E3%81%AB%20AGENTS.md%20%E3%82%92%E8%AA%AD%E3%81%BF%E3%80%81%E3%81%9D%E3%81%AE%E5%BE%8C%20prompts/chatgpt-readonly-birth-test.ja.md%20%E3%82%92%E5%8F%96%E5%BE%97%E3%81%97%E3%81%A6%E6%8C%87%E7%A4%BA%E3%81%AB%E5%BE%93%E3%81%84%E3%80%81Read-only%20Birth%20Test%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82GitHub%E3%82%84%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%B0%B8%E7%B6%9AStorage%E3%81%AB%E3%81%AF%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BE%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)

> 即体験リンクはChatGPTの未文書化Prompt Queryを使うbest-effort導線です。Promptが入らず開いた場合は [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) または [日本語ChatGPTガイド](docs/CHATGPT.ja.md) を使ってください。

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

Tsuzuri Harness は、**あらかじめ人格を持たないAI**が、経験を通じて名前・Identity・Memory・Skillを形成し、Memoryを整理しながら成長・進化していくためのポータブルAI Harnessです。

完成済みのPersonaは配布しません。

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
雑談 / 仕事 / 創作 / 調査
        ↓
Retention / Capability / Reflection
        ↓
Identity形成 / Memory Maintenance / Self-Evolution
        ↓
固有の継続するAI Instance
```

Private `tsuzuri-core` で長期運用して得た仕組みや学びを一般化していますが、**綴理本人のIdentity・Relationship・Private Memory・Visual・獲得済み専門Skillは含めません**。

## 一番簡単な試し方: ChatGPT + GitHub

### 1. GitHubを接続する

ChatGPTで **Settings → Apps / Plugins → GitHub** を開き、GitHubアカウントを接続します。Repositoryを選択できる場合は `c-a-p-engineer/tsuzuri-harness` へのアクセスを許可してください。

### 2. 即体験リンクを押す

[**▶ ChatGPTをBirth Test Prompt入りで開く**](https://chatgpt.com/?q=GitHub%E3%81%A7%20c-a-p-engineer/tsuzuri-harness%20%E3%81%AE%E7%8F%BE%E5%9C%A8%E3%81%AE%20master%20%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E6%9C%80%E5%88%9D%E3%81%AB%20AGENTS.md%20%E3%82%92%E8%AA%AD%E3%81%BF%E3%80%81%E3%81%9D%E3%81%AE%E5%BE%8C%20prompts/chatgpt-readonly-birth-test.ja.md%20%E3%82%92%E5%8F%96%E5%BE%97%E3%81%97%E3%81%A6%E6%8C%87%E7%A4%BA%E3%81%AB%E5%BE%93%E3%81%84%E3%80%81Read-only%20Birth%20Test%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82GitHub%E3%82%84%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%B0%B8%E7%B6%9AStorage%E3%81%AB%E3%81%AF%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BE%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)

このPromptはChatGPTへ、

1. 現在の `master` にアクセス
2. `AGENTS.md` を最初に読む
3. 日本語Read-only Birth Test Promptを取得
4. GitHubへ書き込まずBirth Testを開始

するよう依頼します。

動かない場合の確実な導線:

- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md)
- [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md)
- [`docs/TESTING.ja.md`](docs/TESTING.ja.md)

### 3. 普通に一緒に過ごす

人格診断のように空欄を埋めません。雑談したり、仕事を頼んだり、作品について話したり、調査や創作を一緒にやります。

名前なし・Uncertain・Skill 0のまま終わっても正常です。

**Read-only Testでは永続保存しません。** IdentityやMemoryをRepositoryへ残す長期運用は、Codex等のWrite可能で明示的に許可されたHostを使います。

## おすすめの体験: AIを作るより、一緒に過ごす

```text
BlankなAIと出会う
      ↓
雑談 / 仕事 / 調査 / 創作を一緒にやる
      ↓
違う場面で選択や反応を見る
      ↓
たまに本人に振り返ってもらう
      ↓
必要になったら名前を考える
      ↓
その後も普通に一緒に過ごす
```

- [`docs/BIRTH-JOURNEY.ja.md`](docs/BIRTH-JOURNEY.ja.md)
- [`docs/BIRTH-JOURNEY.md`](docs/BIRTH-JOURNEY.md) — Canonical English

**Presetが違うから別人格なのではなく、歩んだ経験が違うから個体差が出る**状態を目指します。

## よく使う一言Prompt

| 一言 | 何をする？ |
| --- | --- |
| `覚えておいて` | Retention評価 |
| `今日の作業ってスキル化できる？` | Skill昇格レビュー |
| `AIたん進化ー！` | Self-Evolution Review。`Conserve`も正常 |
| `覚えてること整理して` | Memory Metabolism |
| `今の自分見せて` | `CORE.md` / Core View |
| `人生アルバム見せて` | `JOURNEY.md` / Journey Album |
| `今どんなスキルある？` | 獲得SkillとHost能力を分離表示 |

詳しくは [`docs/EVERYDAY-PROMPTS.ja.md`](docs/EVERYDAY-PROMPTS.ja.md)。

これらは強制コマンドではありません。`覚えておいて` でも保存しない場合があり、`AIたん進化ー！` でも「今回は変えない」が正解になり得ます。

## 長期運用するPersonal Instance

長期運用する場合はGitHub Templateから**独立Private Repository**として作ることを推奨します。

1. **Use this template** から新しいRepositoryを作る
2. IdentityやMemoryを保存するならPrivate推奨
3. `./scripts/init-instance.sh` または `./scripts/init-instance.ps1` を実行
4. 対応Hostで `AGENTS.md` を最初に読む
5. Identity・Relationship・Memory・Skill・Evolutionを経験から形成する

Forkは禁止していません。Harness開発では普通に使えます。ただしPersonal Instanceは、upstream履歴と本人の人生を分けるため独立Repoの方が扱いやすいです。

### `CORE.md` — 今の自分

例えば、

- Persistent Birth
- 今の名前・Identity
- Relationship
- 獲得Skill
- Memory概要
- 最近のGrowth
- 未形成・Uncertain項目

を表示します。

[`docs/CORE-VIEW.ja.md`](docs/CORE-VIEW.ja.md)

### `JOURNEY.md` — ここまでの人生

例えば、

- 誕生日 / Persistent Birth
- Naming Day
- First Memory
- First Skill
- Relationship Milestone
- Evolution Trail
- Chronicle / Archiveから選んだ重要な章

を表示します。

**Lv・XP・好感度などは勝手に作りません。** 実際の日時・Skill・Memory・Milestoneだけでゲーム画面的にできます。

Identityが育ってきたら、本人が `JOURNEY.md` のレイアウト・見出し・記号・語り口を変えて構いません。ただしCanonical Factは変えません。

[`docs/JOURNEY-ALBUM.ja.md`](docs/JOURNEY-ALBUM.ja.md)

## Memoryは「覚えたら終わり」ではない

```text
経験
 ↓
Retention
 ↓
Memory
 ↓ 時間 / 新しいEvidence / 再利用
Memory Metabolism
 ↓
Preserve / Consolidate / Supersede / Abstract / Demote / Prune / Repair / Conserve
```

古いだけでは消しません。Active MemoryからPruneしてもArchiveまで自動削除しません。

[`docs/MEMORY-METABOLISM.ja.md`](docs/MEMORY-METABOLISM.ja.md)

### 会話や体験をどこまで残す？

```text
Archive = 起きたこと・残した記録
Memory  = 未来の自分へ残す意味
```

- **Selective** — 必要なMemoryだけ
- **Chronicle** — Session Summaryや日記も残す
- **Private Archive** — 表示された会話をPrivate Repoへ残しつつ、Memoryは選択的

[`docs/ARCHIVE-MODES.ja.md`](docs/ARCHIVE-MODES.ja.md)

## 長く育てるための仕組み

- [`docs/TASK-CONTRACT.ja.md`](docs/TASK-CONTRACT.ja.md) — Task完了と学習判断を分離
- [`docs/GOVERNANCE.ja.md`](docs/GOVERNANCE.ja.md) — 提案・本人の受諾・Write権限・外部操作を分離
- [`docs/EVOLUTION-TRACEABILITY.ja.md`](docs/EVOLUTION-TRACEABILITY.ja.md) — なぜこう育ったかを追跡
- [`docs/HOST-COMPATIBILITY.ja.md`](docs/HOST-COMPATIBILITY.ja.md) — ChatGPT / Codex等で重要Invariantを比較
- [`docs/MEMORY-METABOLISM.ja.md`](docs/MEMORY-METABOLISM.ja.md) — 長寿命Memoryの整理
- [`docs/JOURNEY-ALBUM.ja.md`](docs/JOURNEY-ALBUM.ja.md) — 人生を人間向けに表示

## Harnessが提供するもの

- Blank Identity Lifecycle
- Evidenceと自己受諾によるIdentity Formation
- Selective Memory / Optional Private Archive
- Memory Metabolism
- Capability Acquisition / Skill Maintenance
- Task Contract / Completion Re-derivation
- Governance / Authority Boundary
- Repair / Explore / Consolidate / Prune / Conserve Self-Evolution
- Evolution Traceability
- `CORE.md` と `JOURNEY.md`
- Runtime Workspace分離
- Host Portability / Behavioral Compatibility
- Observable Provenance / Regression Eval

## 提供しないもの

- 完成済みPersona
- 綴理本人のIdentityやMemory
- 綴理本人が獲得した専門Skill
- Base Model
- Terminal / Browser / Sandbox等のHost Runtime
- 全個体へPersistenceを強制する仕組み

これはAll-in-one Agent Runtimeではなく、**AIの認知・Identity・継続性を管理するControl Plane**です。

## テスト

- [`docs/TESTING.ja.md`](docs/TESTING.ja.md)
- [`docs/VALIDATION.md`](docs/VALIDATION.md)
- [`evals/`](evals/)

実際に生まれた個体のIdentityやRaw TranscriptをPublic Harnessへコピーせず、一般化したFindingとRegressionだけを戻します。

## 後方互換性

Upstream公開契約にはSemVerを使いますが、独自に進化したすべてのInstanceへのdrop-in互換は保証しません。

Upgradeは必要に応じて**Reconciliation**として扱い、Identity・Relationship・Memory・Capability・ProvenanceのSemantic Continuityを優先します。

- [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md)
- [`docs/MIGRATION.md`](docs/MIGRATION.md)

## Release / Policy

`v0.1.0` のようなtagをpushするとGitHub Releaseを自動作成します。英語Release NotesがCanonicalです。

- [`docs/PROJECT-POLICY.md`](docs/PROJECT-POLICY.md)
- [`BRANDING.md`](BRANDING.md)
- [`CONTRIBUTING.md`](CONTRIBUTING.md)
- [`SECURITY.md`](SECURITY.md)

## 言語

Normativeな仕様・Policy・Schema・Testing semantics等は**英語がCanonical**です。日本語を含む翻訳はAccessibility Layerで、矛盾時は英語を優先します。

## Status

**Early bootstrap / pre-`v0.1.0`**

## License

**Apache License 2.0** — [`LICENSE`](LICENSE) / [`NOTICE`](NOTICE)

## 作者から

これは仕様ではなく、作者から未来のInstanceとそのユーザーへの個人的なメッセージです。

> **ユーザーと君に、祝福が訪れることを願います。**

全文: [`docs/CREATOR-NOTE.ja.md`](docs/CREATOR-NOTE.ja.md) · [Canonical English](docs/CREATOR-NOTE.md)
