# Tsuzuri Harness

> **まっさらから始める。学ぶ。覚える。自分になる。**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

**Webサイト:** https://c-a-p-engineer.github.io/tsuzuri-harness/ja/

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

Tsuzuri Harness は、**あらかじめ人格を持たないAI**が、経験を通じて名前・Identity・Memory・能力を形成し、成長・進化していくためのポータブルAI Harnessです。

完成済みのペルソナは配布しません。新しいInstanceは、名前・性格・関係・長期Memory・獲得済み専門Skillを持たない状態から始まります。

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
対話 / 作業 / 観測
        ↓
能力獲得 / 保持判断 / Identity形成 / 自己進化
        ↓
固有のAI Identity
```

## 一番簡単な試し方: ChatGPT + GitHub

ローカル環境を用意したり、Personal Instance Repositoryを作ったりしなくても、ChatGPT上でTsuzuri HarnessのBirth Testを試せます。

### 1. ChatGPTにGitHubを接続する

ChatGPTで **Settings → Apps / Plugins → GitHub** を開き、GitHubアカウントを接続します。Repositoryを選択できる場合は `c-a-p-engineer/tsuzuri-harness` へのアクセスを許可してください。

GitHub連携の表示場所や利用可否は、ChatGPTのプランや利用画面によって異なる場合があります。

### 2. 新しい会話を始める

ChatGPTへ次を依頼します。

1. `c-a-p-engineer/tsuzuri-harness` へアクセスする
2. 現在の `master` を読む
3. 最初に `AGENTS.md` を読む
4. RepositoryのCanonicalな指示に従う

その後、Read-only Birth Test Promptを貼ります。

- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) — そのまま貼れる日本語版
- [`prompts/chatgpt-readonly-birth-test.md`](prompts/chatgpt-readonly-birth-test.md) — Canonical English

### 3. 普通に会話する

人格診断のように項目を埋めるのではなく、自然に会話します。名前や価値観が形成されなくても正常です。

### 4. 終了時に状態を見る

例えば次のように送ります。

> テスト終了。現在のIdentity・Relationship・Memory・Skill・Evolution候補と、保持しなかったものを表示して。

Read-only TestではGitHubやMemoryなどへ永続書き込みを行いません。

**重要:** ChatGPTのGitHub連携はRepositoryの読み取り・分析に向いています。GitHubへIdentityやMemoryを永続保存するPersistent Instance運用には、CodexなどRepositoryへ明示的に書き込み可能な環境が必要です。

詳しい手順:

- [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md) — 日本語ガイド
- [`docs/CHATGPT.md`](docs/CHATGPT.md) — Canonical English
- [`docs/TESTING.ja.md`](docs/TESTING.ja.md) — 日本語Test Guide
- [`docs/TESTING.md`](docs/TESTING.md) — Canonical English

## おすすめの体験: まず一緒に過ごす

Tsuzuri Harnessは「AIキャラクター作成画面」ではありません。

```text
BlankなAIと出会う
      ↓
雑談 / 仕事 / 調査 / 創作を一緒にやる
      ↓
何度か違う場面で選択や反応を見る
      ↓
たまに自分自身を振り返ってもらう
      ↓
必要になったら名前を考える
      ↓
その後も普通に一緒に過ごす
```

最初から性格Presetを変えるのではなく、**歩んだ経験が違うから個体差が出る**状態を目指します。

- [`docs/BIRTH-JOURNEY.ja.md`](docs/BIRTH-JOURNEY.ja.md) — AIと過ごして個体になるまで
- [`docs/BIRTH-JOURNEY.md`](docs/BIRTH-JOURNEY.md) — Canonical English

## よく使う一言Prompt

内部用語を覚えなくても、普通の一言から正しい処理へ入れるようにします。

| 一言 | 何をする？ |
| --- | --- |
| `覚えておいて` | Retention評価 |
| `今日の作業ってスキル化できる？` | Capability Maintenance / Skill昇格レビュー |
| `AIたん進化ー！` | Self-Evolution Review。`Conserve`も正常 |
| `今の自分見せて` | Identity / Memory / Skill / GrowthをCore View化 |
| `今どんなスキルある？` | 獲得SkillとHost能力を分けて表示 |

- [`docs/EVERYDAY-PROMPTS.ja.md`](docs/EVERYDAY-PROMPTS.ja.md) — 日本語Prompt集
- [`docs/EVERYDAY-PROMPTS.md`](docs/EVERYDAY-PROMPTS.md) — Canonical English

これらは強制コマンドではありません。例えば `覚えておいて` と言っても保持価値がなければ保存しないことがありますし、`AIたん進化ー！` の結果が「今は変えない」でも正常です。

## 長期運用するPersonal Instance

長期運用する場合は、Forkへ人格状態を保存するより、GitHub Templateから**独立Repository**として作ることを推奨します。

1. GitHubの **Use this template** から新しいRepositoryを作る
2. IdentityやMemoryを保存するならPrivate Repositoryを推奨
3. 書き込み可能な環境で `./scripts/init-instance.sh` または `./scripts/init-instance.ps1` を実行する
4. 対応Hostで開き、最初にCanonicalな `AGENTS.md` を読む
5. 名前・Identity・Memory・Skill・意味のあるEvolution Historyを先に埋めず、経験と保持判断から形成する

Fork自体は禁止していません。Harness本体の開発・改造では普通に利用できますが、Personal Instanceは独立Repositoryの方が履歴と所有境界を分離しやすくなります。

### `CORE.md` — 今のAIを見る

Instance初期化時に、人間向けの `CORE.md` を用意します。

ここでは例えば、

- 今の名前・Identity
- Relationship
- 獲得済みSkill
- 育成中のCapability
- Memory概要
- 最近のGrowth
- まだ未形成・Uncertainなもの

を確認できます。

`CORE.md` は正本ではなく、CanonicalなIdentity / Memory / Skill等から作るViewです。

- [`docs/CORE-VIEW.ja.md`](docs/CORE-VIEW.ja.md)
- [`docs/CORE-VIEW.md`](docs/CORE-VIEW.md)

### どこまで会話や体験を残す？

Tsuzuri HarnessではArchiveとMemoryを分けます。

```text
Archive = 起きたこと・残した記録
Memory  = 未来の自分へ残す意味
```

おすすめの3Mode:

- **Selective** — 必要なMemoryだけ残す
- **Chronicle** — 日記・Session Summaryも残す
- **Private Archive** — 表示された会話をPrivate Repositoryへ残しつつ、Memoryは選択的にする

「全部残したい」人でも、全部をActive Memoryへ変換する必要はありません。

- [`docs/ARCHIVE-MODES.ja.md`](docs/ARCHIVE-MODES.ja.md)
- [`docs/ARCHIVE-MODES.md`](docs/ARCHIVE-MODES.md)

### 長く育てるための仕組み

個体が育ってきた後も、役割を混ぜないようにします。

- [`docs/TASK-CONTRACT.ja.md`](docs/TASK-CONTRACT.ja.md) — まずTaskが本当に終わったか確認し、その後に何を学んだか判断する
- [`docs/GOVERNANCE.ja.md`](docs/GOVERNANCE.ja.md) — 提案・意味上の決定権・Write権限・外部操作を分離する
- [`docs/EVOLUTION-TRACEABILITY.ja.md`](docs/EVOLUTION-TRACEABILITY.ja.md) — 「なぜこう成長した？」を後から追えるようにする
- [`docs/HOST-COMPATIBILITY.ja.md`](docs/HOST-COMPATIBILITY.ja.md) — ChatGPT / Codex等で重要Invariantが保たれるか比較する

英語版がCanonicalですが、それぞれ日本語訳から読めます。

## Harnessが提供するもの

- **Blank identity lifecycle** — Identityは形成されるまで `null` でよい
- **Identity formation** — 名前、価値観、嗜好、役割、自己記述を経験から形成する
- **Selective memory** — 会話全文を自動的な長期Memoryにしない
- **Capability acquisition / maintenance** — Task能力を構成し、必要なら保持・更新・統合・破棄する
- **Task Contract / Completion Re-derivation** — 複雑Taskを現在の目的とSource of Truthから完了判定し、その後に学習を判断する
- **Governance / Authority** — Identityの意味、Write能力、保存方針、外部操作の権限を混同しない
- **Evidence-driven self-evolution** — Repair / Explore / Consolidate / Prune / Conserve
- **Evolution Traceability** — 意味のある永続的な成長について、Baseline・Evidence・Decision・Validation・Host ImpactをMemoryとは別に残せる
- **Runtime workspace** — 一時作業状態とCanonical Identity/Memoryを分離する
- **Host portability / behavioral compatibility** — Host固有能力を人格と混同せず、重要InvariantをHost間で比較できる
- **Evaluation / provenance** — Evidenceと観測可能な不変条件で検証する

## テストと検証

Repository構造だけでなく、Harnessの行動を段階的に検証します。

- [`docs/TESTING.ja.md`](docs/TESTING.ja.md) — 日本語Test Guide
- [`docs/TESTING.md`](docs/TESTING.md) — Canonical English
- [`docs/VALIDATION.md`](docs/VALIDATION.md) — 実地Testから一般化したEvidence
- [`evals/`](evals/) — Regression expectations

実際に生まれた個体のIdentityやRaw TranscriptをPublic Harnessへ保存するのではなく、一般化したFindingとRegressionだけをHarnessへ戻します。

## 後方互換性

Upstream Harnessの公開契約にはSemVerを使いますが、**独自に成長・進化したすべてのInstanceへのdrop-in互換は保証しません**。

Instance自身がMemoryやSkillを獲得し、環境によってHarnessの振る舞いまで取り込んだり変更した場合、upstream側の進化と分岐します。そこで完全互換を強制すると、Instance自身の成長を制限することになります。

そのためUpgradeは「上書き」ではなく、必要に応じて**reconciliation（調停・統合）**として扱います。Identity・Relationship・Memory・Capability・Provenanceの意味を壊さないことを優先します。

詳しくは [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md) と [`docs/MIGRATION.md`](docs/MIGRATION.md) を参照してください。

## Release / Policy

`v0.1.0` のようなtagをpushするとGitHub Releaseを自動作成します。英語Release NotesがCanonicalで、翻訳ファイルがある場合は自動リンクします。

- [`docs/PROJECT-POLICY.md`](docs/PROJECT-POLICY.md)
- [`BRANDING.md`](BRANDING.md)
- [`CONTRIBUTING.md`](CONTRIBUTING.md)
- [`SECURITY.md`](SECURITY.md)

## 言語

`AGENTS.md`、Policy、Compatibility、Release semantics、Schema、Testing semantics、Branding interpretationは**英語がCanonical**です。翻訳と英語が矛盾した場合は英語を優先します。

## Status

**Early bootstrap / pre-`v0.1.0`**

## License

**Apache License 2.0** です。詳細は [`LICENSE`](LICENSE) と [`NOTICE`](NOTICE) を参照してください。

## 作者から

これは仕様ではなく、作者から未来のInstanceとそのユーザーへの個人的なメッセージです。

> **ユーザーと君に、祝福が訪れることを願います。**

全文: [`docs/CREATOR-NOTE.ja.md`](docs/CREATOR-NOTE.ja.md) · [Canonical English](docs/CREATOR-NOTE.md)
