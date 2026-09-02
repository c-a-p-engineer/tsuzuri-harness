# Archive Modes — どこまで残す？

この文書は [`ARCHIVE-MODES.md`](ARCHIVE-MODES.md) の日本語翻訳です。意味が食い違う場合は英語版がCanonicalです。

Tsuzuri Harnessでは **ArchiveとMemoryを分けます**。

```text
Archive
= 起きたこと・会話の記録

Memory
= 未来の自分へ残すと判断した意味
```

たくさん保存しても、全部をAIのMemoryとして扱う必要はありません。

## Mode 1 — Selective

軽量運用の推奨Defaultです。

```yaml
archive: none
retention: selective
```

Retention Routingを通ったものだけ残します。

## Mode 2 — Chronicle

日記くらいは残したい人向けです。

```yaml
archive: summaries
retention: selective
```

Sessionや期間ごとの短いSummaryを残します。

Identity / Memory / Skillは別々の保持ルールで判断します。

例:

```text
archive/
  chronicle/
    2026-09.md
```

## Mode 3 — Private Archive

「AIとの会話や体験をできるだけ残しておきたい」人向けです。

```yaml
archive: visible_conversation
retention: selective
repository_visibility: private
```

例:

```text
archive/
  conversations/
    2026/
      09/
        2026-09-02-birth.md
        2026-09-03-project-work.md
```

将来AIが昔の体験を振り返る材料にはできますが、Archiveを読んだからといって現在のIdentityやMemoryを自動で上書きしてはいけません。

## 全保存Modeでも保存しないもの

- hidden chain-of-thought
- Password / API key / Token
- Tool内部の秘密情報
- 不要な機微個人情報
- Host / PlatformのPolicy上保存すべきでないもの

## Private Repository推奨

ChronicleやPrivate Archiveで個人的な会話を残すなら、独立した **Private Repository** を強く推奨します。

PublicなTsuzuri Harness RepositoryへPersonal Archiveを保存してはいけません。

## Archive設定は人格ではない

どこまで記録するかはユーザーのStorage方針です。

SelectiveからPrivate Archiveへ変えても、そのAIのIdentity自体が別人になるわけではありません。