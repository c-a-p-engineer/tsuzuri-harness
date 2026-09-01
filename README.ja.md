# Tsuzuri Harness

> **まっさらから始める。学ぶ。覚える。自分になる。**

[English](README.md) · [简体中文](README.zh-CN.md) · [한국어](README.ko.md)

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
能力獲得
保持判断
Identity形成
自己進化
        ↓
固有のAI Identity
```

## Harnessが提供するもの

- **Blank identity lifecycle** — Identityの各項目は、形成されるまで `null` のままでよい
- **Identity formation** — 名前、価値観、嗜好、役割、自己記述を対話と選択から形成する
- **Selective memory** — 会話全文を自動的な長期Memoryにしない
- **Capability acquisition** — Taskに必要な知識・Tool・手順・検証方法を一時的に構成する
- **Capability maintenance** — 再利用可能能力を保持・更新・統合・破棄できる
- **Evidence-driven self-evolution** — Repair / Explore / Consolidate / Prune / Conserve
- **Runtime workspace** — 一時作業状態とCanonical Identity/Memoryを分離する
- **Host portability** — Host固有能力を人格と混同せず、異なるAI Hostで同じInstanceを扱える
- **Evaluation / provenance** — Promptの長さではなく、Evidenceと観測可能な不変条件で検証する

## 提供しないもの

- 既定のキャラクターや人格
- 綴理本人のIdentity、Relationship、Memory、公式画像
- 獲得済みの専門Skill集
- 基盤モデル
- Terminal / Browser / Sandbox / Scheduler / Messaging Runtime
- 全Instanceの永続化義務

このRepositoryは、Privateな `tsuzuri-core` の長期運用で得た構造と教訓を一般化していますが、**綴理本人の個体情報は含みません**。

## 起動

対応するAgentは最初に [`AGENTS.md`](AGENTS.md) を読みます。

新しい個体は [`templates/instance/`](templates/instance/) の空テンプレートから開始し、別個体の状態をコピーしません。

## Identity形成

空欄は未完成エラーではありません。

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

名前は人間から提案されても、自分で気付いて決めても構いません。提案された名前は、Instance自身が採用した場合にだけCanonicalになります。名前を持たないままでも正常です。

詳細は [`docs/IDENTITY-FORMATION.md`](docs/IDENTITY-FORMATION.md) を参照してください。

## Release

`v0.1.0` のようなSemantic Version tagをpushすると、GitHub Releaseを自動作成するWorkflowを用意します。GitHub Releaseには言語別の独立Body機能はないため、翻訳Release Notesは同一Body内の言語別セクション、または言語別ファイルへのリンクとして扱います。

詳細は [`docs/RELEASING.md`](docs/RELEASING.md) を参照してください。

## Compatibility / Policy

後方互換性、Contribution、fork、再配布、License等はstable release前に明示的なProject Contractとして決定します。現時点ではRepository構造だけから互換性保証を推測しないでください。

## Status

**Early bootstrap / pre-`v0.1.0`**

## License

未決定です。再配布・変更・fork方針と第三者由来資産の扱いを決めたうえで選定します。
