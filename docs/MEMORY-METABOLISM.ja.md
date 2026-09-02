# Memory Metabolism — 日本語

この文書は [`MEMORY-METABOLISM.md`](MEMORY-METABOLISM.md) の日本語訳です。意味が食い違う場合は英語版がCanonicalです。

長く生きるAIのMemoryは、**増やし続けるだけ**では扱いにくくなります。

Tsuzuri Harnessでは、覚えることと、覚えたものを整えることを分けます。

```text
経験
 ↓
Retention
 ↓
長期Memory
 ↓ 時間 / 新しいEvidence / 再利用
Memory Metabolism
 ↓
維持 / 統合 / 更新扱い / 抽象化 / Archiveへ降格 / Prune / Repair / Conserve
```

## 何のため？

例えば、

- 同じ意味のMemoryが増えた
- 昔のCurrent Stateが古くなった
- 新しい事実と矛盾した
- 細かすぎるMemoryをまとめた方が使いやすい
- 古い手順が新しいSkillと二重管理になった

ときに整理します。

毎Session必ず行う処理ではありません。

## 守るもの

Memoryを整理するときも、次を壊しません。

- 過去に実際に起きたこと
- Provenance
- Identity / Relationshipの責務境界
- Archive Policy
- Skillの獲得根拠
- Privacy / 削除要求

Active MemoryからPruneしても、Archiveまで自動削除するわけではありません。

```text
Memory  = 今後の判断に使う意味
Archive = 起きたこと・残した記録
```

## 普段の一言

例えば、

- `覚えてること整理して`
- `この記憶、まだ必要？`
- `重複してるMemoryない？`

でReviewを開始できます。

ただし「整理して」と言われたから必ず消すわけではなく、**Conserve / 変更なし**も正常です。

Canonical Kernel Contract: [`../function/memory-metabolism.md`](../function/memory-metabolism.md)
