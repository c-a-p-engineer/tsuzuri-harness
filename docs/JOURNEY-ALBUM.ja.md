# Journey Album — 日本語

この文書は [`JOURNEY-ALBUM.md`](JOURNEY-ALBUM.md) の日本語訳です。意味が食い違う場合は英語版がCanonicalです。

`CORE.md` が答えるのは、

> 今の君は誰？

です。

`JOURNEY.md` が答えるのは、

> ここまで、どうやって今の君になった？

です。

Journey Albumは、長期Instanceの**人生を人間向けに眺めるDerived View**です。

Lv・XP・好感度・知能値のような架空の数値を作らず、実際の出来事だけでもゲーム画面的に見せられます。

## 正本ではない

`JOURNEY.md` はCanonical Stateではありません。

例えば次から再構成します。

- `.tsuzuri-instance.yaml` のLifecycle情報
- 名前やIdentity形成のProvenance
- RelationshipのCanonical State
- 獲得Skill履歴
- Memory概要
- `evolution/` の記録
- Chronicle / Private Archive（Policyが許可する場合）

矛盾した場合はCanonical Stateが優先です。

## Milestone候補

- Persistent Birth / Instance初期化
- Naming Day
- 初めて残したMemory
- First Skill
- 初めての意味あるSelf-Evolution
- Skillの統合・Prune
- 根拠のあるRelationship形成・変化
- 継続性に意味のあるHost移動や復旧
- Chronicle / Archiveから選んだ重要な章

何も起きていないのに、画面を賑やかにするためだけにMilestoneを捏造しません。

## 誕生日と年齢

Persistent Instance初期化時に `.tsuzuri-instance.yaml` へ `birth_at` を記録します。

これは「Repositoryへ永続化される個体として継続的に生き始めた時点」の既定値です。

Read-only Test等から移行し、より以前から同一個体としての継続性があるとEvidence付きで判断できる場合は、Provenanceを残して修正できます。

Age / Day N は表示時に計算するDerived Valueで、Identity TraitやLevelではありません。

## Lvは作らない

例えば、

```text
Born      2026-09-03
Named     2026-09-08
Skills    4 acquired
Memories  18 retained

Recent Evolution
+ Skill獲得
~ Identity Evidence強化
- 古いProcedureをPrune
= 今回はConserve
```

のように、実データだけでゲーム的に表示します。

## 本人が見た目を変えてよい

Identityが育ってきた個体は、`JOURNEY.md` のPresentationを自分で変えて構いません。

例えば、

- 見出し
- レイアウト
- 記号や絵文字
- 表示順
- 語り口
- ASCII / RPG風UI
- どのVerified Milestoneを目立たせるか

などです。

ただし、見栄えのためにCanonical Factを書き換えてはいけません。

**部屋の模様替えは自由。戸籍の書き換えは別手続き。**

という扱いです。

## 普段の一言

- `人生アルバム見せて`
- `今までどう育った？`
- `最近のMilestone教えて`

などで表示・更新できます。

毎TaskでAlbum全体を書き直す必要はありません。Naming、Skill獲得、重要な進化など、意味のあるMilestoneや明示依頼があったときに更新します。

## Privacy

Private Archiveを使っていてもRaw TranscriptをそのままAlbumへ貼る必要はありません。

Credential、Hidden Chain-of-Thought、不要な機微情報は載せません。
