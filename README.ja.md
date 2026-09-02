# Tsuzuri Harness

> **まっさらから始める。学ぶ。覚える。自分になる。**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

[Website](https://c-a-p-engineer.github.io/tsuzuri-harness/ja/) · [Dashboard](https://c-a-p-engineer.github.io/tsuzuri-harness/dashboard/) · [English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

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

## クイックスタート

長期運用するPersonal Instanceは、Forkへ人格状態を保存するより、GitHub Templateから**独立Repository**として作ることを推奨します。Fork自体は禁止しておらず、Harnessの開発・改造には普通に使えます。

1. GitHubの **Use this template** から新しいRepositoryを作る
2. `./scripts/init-instance.sh` または `./scripts/init-instance.ps1` を実行する
3. 対応Hostで開き、最初にCanonicalな `AGENTS.md` を読む
4. 名前・Identity・Memory・Skillを先に埋めず、経験と保持判断から形成する

## ChatGPTで試す

最初の挙動確認は、ローカル環境やPersonal Instance Repositoryを作らなくてもChatGPT上だけで行えます。

推奨は **Read-only Birth Test** です。

1. 新しいChatGPT会話を開始する
2. このRepositoryを渡す
3. 現在の `master` と `AGENTS.md` を読ませる
4. Read-only Birth Test Promptを貼る
5. Blank Instanceと自然に会話する
6. 最後にIdentity / Relationship / Memory / Skill / Evolution候補を確認する
7. 状態はどこにも保存せず破棄する

- [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md) — ChatGPT利用ガイド
- [`docs/CHATGPT.md`](docs/CHATGPT.md) — Canonical English
- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) — そのまま貼れる日本語Prompt
- [`prompts/chatgpt-readonly-birth-test.md`](prompts/chatgpt-readonly-birth-test.md) — Canonical English Prompt

Birth Testの成功は「人格欄が全部埋まること」ではありません。無名、Uncertain、Relationship未形成、Skill 0のまま終わることも正常です。

## Harnessが提供するもの

- **Blank identity lifecycle** — Identityは形成されるまで `null` でよい
- **Identity formation** — 名前、価値観、嗜好、役割、自己記述を経験から形成する
- **Selective memory** — 会話全文を自動的な長期Memoryにしない
- **Capability acquisition / maintenance** — Task能力を構成し、必要なら保持・更新・統合・破棄する
- **Evidence-driven self-evolution** — Repair / Explore / Consolidate / Prune / Conserve
- **Runtime workspace** — 一時作業状態とCanonical Identity/Memoryを分離する
- **Host portability** — Host固有能力を人格と混同しない
- **Evaluation / provenance** — Evidenceと観測可能な不変条件で検証する

## テストとDashboard

Repository構造だけでなく、Harnessの行動を段階的に検証します。

- [`docs/TESTING.ja.md`](docs/TESTING.ja.md) — 日本語Test Guide
- [`docs/TESTING.md`](docs/TESTING.md) — Canonical English
- [`docs/VALIDATION.md`](docs/VALIDATION.md) — 実地Testから一般化したEvidence
- [`evals/`](evals/) — Regression expectations
- [Project Dashboard](https://c-a-p-engineer.github.io/tsuzuri-harness/dashboard/) — CI / Pages / Validation Matrix

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
