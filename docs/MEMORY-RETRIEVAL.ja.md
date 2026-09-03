# Memory Retrieval（記憶検索）

Tsuzuri Harness は、長期運用でMemoryが増えても **Git上のMarkdown / YAMLを正規の記憶（Canonical Memory）** として扱います。

Semantic SearchやVector Searchを使って検索を高速化しても、それらはあくまでHost側の派生Indexです。

## 基本原則

> **Gitが記憶。検索Indexは、その記憶を見つけるための補助。**

```text
Canonical Memory
(Markdown / YAML / Git)
        ↓
任意の派生Index
        ↓
候補Path / ID
        ↓
Canonical Fileを再取得
        ↓
現在TaskのContext
```

Vectorの類似度そのものをMemoryの事実として扱いません。

## なぜ必要？

Memoryが少ない間は、必要なファイルを直接読めば十分です。

しかし長期間育った個体では、保持されたMemoryが増えることで、広い範囲を毎回読むとContextを浪費したり、必要な記憶を探しにくくなったりします。

そのためHarnessは、特定のDBを必須にせず、**Host-neutralなMemory Retrieval Contract** を持ちます。

## 検索の考え方

必要十分な中で最も軽い方法から使います。

1. **Metadata / Exact Lookup** — ID、Path、Status、Memory Type、日付、Tagなど。
2. **Lexical / Full-text Search** — Repository Search、grep、SQLite FTS、Host標準検索など。
3. **Semantic Search（任意）** — 表現は違うが意味が近いMemoryを探す必要があるときだけEmbedding等を使う。
4. **Canonical再読込** — 検索で見つかった実際のMarkdown / YAMLを取得する。
5. **Validation** — Current / Superseded、Provenance、Privacy、現在Taskとの関連性を確認する。

内部実装でこれらをまとめて処理しても構いません。重要なのは、**検索は候補を見つける責務、正規MemoryはGit側**という境界です。

## Vector DBは必須ではない

Hostは必要に応じて、例えば次を使えます。

- GitHub / Repository Search
- `grep` / `ripgrep`
- SQLite FTS
- Host標準の検索機能
- Local Embedding + FAISS等
- 明示的に選択・許可されたQdrant / Pinecone等のRemote Vector Store

どれもTsuzuri Harnessの必須Dependencyではありません。

Semantic Searchが使えないHostでも、Harnessとして正常に利用できる必要があります。

## 派生Indexは捨ててもよい

Local Hostでは、生成した検索用データを既にGit管理外になっているRuntime Workspaceへ置けます。

```text
.runtime/retrieval/
├─ memory.sqlite
├─ lexical-index/
└─ vectors/
```

通常、次のようなものをCanonical Repositoryへcommitしません。

- Embedding Vector
- Vector Index
- 生成済みFull-text DB
- 検索Cache

これらは、

- Canonical Repository State
- 使用したIndex方式 / Embedding Model / Chunking設定等

から再生成可能であるべきです。

Embedding Modelを変更して検索順位が変わっても、それだけでIdentity・Memory・Relationship・Skillを変更してはいけません。

## 古いIndexの扱い

可能なら、Index生成元のRepository revisionやFile digest等を記録します。

Canonical側が更新されてIndexが古くなった場合は、

- 再構築・差分更新する
- またはIndexを使わずCanonicalを直接検索する

のどちらかにします。

古いVectorやCacheだけから、消えたCanonical Memoryを復元して正規情報扱いしてはいけません。

## Active MemoryとArchive

通常の判断では、まずActive Memoryを検索します。

Chronicle / Archiveまで検索するのは、過去の出来事、昔の会話、Provenanceなど、歴史的な情報が現在Taskに必要な場合です。

Archiveで見つかった情報は、それだけで再びActive Memoryにはなりません。再利用価値がある場合は通常のRetention / Memory Metabolismへ戻します。

## Memory Metabolismとの関係

Vector Searchを強くしても、Canonical Memoryそのものが重複・陳腐化していれば検索品質には限界があります。

同じような結果ばかり出る、古いCurrent Stateが大量に引っかかる、細かすぎるMemoryがノイズになる、といった場合は **Memory Metabolism** でCanonical側を整理する方が適切なことがあります。

```text
Retention Routing
      ↓
Canonical Memory
      ↓
Memory Metabolism  ← 保存されている意味の品質
      ↓
Memory Retrieval   ← 必要な意味を見つける品質
      ↓
Current Task
```

Kernelの詳細は [`../function/memory-retrieval.md`](../function/memory-retrieval.md)、Host Adapterの構造は [`../function/memory-retrieval.schema.yaml`](../function/memory-retrieval.schema.yaml) を参照してください。

## Privacy

Semantic Searchが便利だからという理由だけで、Private Memoryを外部Embedding Providerへ送信してはいけません。

外部Indexingを使う場合は、Repository Ownerの許可、Privacy Mode、Providerの保存・アクセス条件、追加料金の有無を確認します。

Local SearchやHost-native Searchで十分なら、それも正式な選択肢です。
