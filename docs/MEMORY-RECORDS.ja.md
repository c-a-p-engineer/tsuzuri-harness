# 正規Memory Record

Tsuzuri Harnessは、長期運用してもMemoryをHuman-readableかつGit-nativeに保ちながら、Lifecycle管理と大規模検索に必要な構造だけを持たせます。

正規の機械可読Contractは [`function/memory-record.schema.yaml`](../function/memory-record.schema.yaml) です。

## 基本形

保持するMemoryは最低限、次を識別します。

- `id`
- `type`
- `status`
- `importance`
- `confidence`
- `load_policy`

`scope`、`triggers`、`relations`、`tags`、`concepts`、日付、provenance等は、Activation・Maintenance・Retrievalに実際の価値がある場合だけ追加します。

```yaml
---
id: proc-example
type: procedural
status: active
importance: high
confidence: confirmed
volatility: stable
load_policy: on_match
created_at: 2026-09-03
scope:
  - collaboration
triggers:
  - repository validation
relations:
  - type: derived_from
    target: episode-example
---
```

## Memory type

- `semantic` — 一般化された長期的な理解
- `procedural` — 再利用できる手順・教訓・再発防止
- `episodic` — 抽象化だけでは失われる形成的な出来事
- `reflective` — 持続的な自己観察や未解消の自己モデル上の緊張
- `working` — 個体自身についての限定的な仮説・検証待ち状態

`working` はProject TODO、Session Handoff、詳細な内部思考を保存する場所ではありません。

## Lifecycle status

- `active` — 関連時に通常利用してよい
- `superseded` — 新しい正規Memoryに置換済み
- `contradicted` — 矛盾が未解決。現在の真実として自動採用しない
- `archived` — 形成史・監査用に保持するが通常Activationから外す

古いことだけを理由にMemoryを降格・削除しません。現在Evidence、適用範囲、置換関係、Privacy、妥当性からLifecycleを判断します。

## Retrievalとの関係

Metadataがあることで [`function/memory-retrieval.md`](../function/memory-retrieval.md) は、Semantic Searchの前に安価なFilterを使えます。

```text
metadata / lexical filter
        ↓
必要なら semantic recall
        ↓
canonical path / id
        ↓
canonical再読込
```

Embedding、類似度、Vector Provider固有ID、生成Indexは派生Runtime Stateです。Canonical Memory Recordには原則として保存しません。

## Blank Instance

Starterは空のままです。このSchemaはRetention後のMemory表現を定義するだけで、新しいInstanceへ人格・Memory・人生史を配布しません。
