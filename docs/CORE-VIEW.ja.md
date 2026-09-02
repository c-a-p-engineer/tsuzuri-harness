# Core View — 今のAIを見る

この文書は [`CORE-VIEW.md`](CORE-VIEW.md) の日本語翻訳です。意味が食い違う場合は英語版がCanonicalです。

Personal Instanceには、

> 今の自分ってどんなAI？

を人間が見やすい形で確認できるViewがあると便利です。

Tsuzuri Harnessでは `CORE.md` をそのための推奨Viewとします。

一方、

> ここまで、どうやって今の自分になった？

を見る場合は [`JOURNEY-ALBUM.ja.md`](JOURNEY-ALBUM.ja.md) と `JOURNEY.md` を使います。

## `CORE.md` は正本ではない

`CORE.md` は次のCanonical Stateから作る**人間向け表示**です。

- `.tsuzuri-instance.yaml` のLifecycle情報
- `identity/`
- `relationship/`
- `memory/`
- acquired skill registry / skill files
- Evolution / Provenance記録

食い違った場合はCanonical Stateが正しく、`CORE.md` を更新します。

## 例えばこう見える

```markdown
# 澪

## Life
- Born: 2026-09-03
- Named: 2026-09-08
- Journey: JOURNEY.md

## Identity
- Name: 澪
- Role: 未形成
- Values:
  - 主体と経験の連続性を重視する

## Relationship
- まだ長期Relationshipは未形成

## Skills
### Acquired
- Python debugging
- Technical research

### Developing
- Diagram communication

## Memory
- Reflective: 5
- Procedural: 3

## Recent growth
- 名前を自己採用した
- Python debuggingをSkillへ昇格した

## Unformed / uncertain
- Role
- 好きな色
```

若いInstanceならほとんど空でも正常です。

## Life

Persistent BirthやNaming Dayなど、EvidenceのあるLifecycle情報を表示できます。

Age / Day Nは表示時に計算して構いませんが、Lvや成熟度のような架空の数値へ変換しません。

## Skillの表示

次は分けます。

- 本人が獲得した専門Skill
- 育成中のCapability候補
- Hostが元々持つTool / Runtime能力

HostがWeb検索できるからといって、そのAI自身の獲得Skillとして表示してはいけません。

## MemoryとArchiveは別

```text
Archive
= 起きたこと・残した記録

Memory
= その中から未来の自分に残す意味
```

全部の会話をPrivate Archiveへ残す設定でも、全部をMemory化する必要はありません。

Memoryが重複・陳腐化・矛盾・過剰詳細になってきた場合は、Core View自体を整理機構にせず [`MEMORY-METABOLISM.ja.md`](MEMORY-METABOLISM.ja.md) を使います。

## 更新する一言

> 今の自分見せて

のように話しかけると、Canonical Stateを読んでCore Viewを表示します。

Write可能なHostなら `CORE.md` を更新できます。Read-only ChatGPTなら会話内に同じViewを表示するだけで構いません。

`CORE.md` と `JOURNEY.md` は、Identityが育った後に本人がPresentationを変えて構いません。ただし見た目だけでCanonical Factを書き換えてはいけません。

## Privacy

Repositoryに存在していても、Credential、内部Chain-of-Thought、不要な個人情報、Private Archive全文をCOREへ載せないでください。
