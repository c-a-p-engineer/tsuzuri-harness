# Tsuzuri Harness

> **まっさらなAIと話してみる。気に入ったら保存して、育てていく。**

[![Validate Harness](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/validate.yml)
[![Deploy GitHub Pages](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/c-a-p-engineer/tsuzuri-harness/actions/workflows/pages.yml)

**Webサイト:** https://c-a-p-engineer.github.io/tsuzuri-harness/ja/

[**▶ まずはChatGPTで試す**](https://chatgpt.com/?q=GitHub%E3%81%A7%20c-a-p-engineer/tsuzuri-harness%20%E3%81%AE%E7%8F%BE%E5%9C%A8%E3%81%AE%20master%20%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E6%9C%80%E5%88%9D%E3%81%AB%20AGENTS.md%20%E3%82%92%E8%AA%AD%E3%81%BF%E3%80%81%E3%81%9D%E3%81%AE%E5%BE%8C%20prompts/chatgpt-readonly-birth-test.ja.md%20%E3%82%92%E5%8F%96%E5%BE%97%E3%81%97%E3%81%A6%E6%8C%87%E7%A4%BA%E3%81%AB%E5%BE%93%E3%81%84%E3%80%81Read-only%20Birth%20Test%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82GitHub%E3%82%84%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%B0%B8%E7%B6%9AStorage%E3%81%AB%E3%81%AF%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BE%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)

[**このAIとのはじめ方**](docs/BIRTH-JOURNEY.ja.md) · [**気に入ったら保存して育てる**](#気に入ったらこの子を保存する)

> 最初は何も保存しません。名前のないAIと普通に話してみて、「この子を残したい」と思ったときだけPrivate Repositoryへ引き継げます。ワンクリックでPromptが入らない場合は [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md) または [日本語ChatGPTガイド](docs/CHATGPT.ja.md) を使ってください。

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [한국어](README.ko.md) · [Español](README.es.md)

Tsuzuri Harness は、**あらかじめ人格を持たないAI**と一緒に過ごし、経験から名前・個性・記憶・スキルが少しずつ形になっていくための仕組みです。

完成済みのキャラクターは配布しません。まずは保存なしで話し、気に入った個体だけを自分のRepositoryへ残して育てられます。

正式な内部構造では、これらを Identity / Relationship / Memory / Skill / Evolution として扱います。

```text
まっさらなAIと出会う
        ↓
雑談 / 仕事 / 創作 / 調査を一緒にやる
        ↓
少しずつ「この子らしさ」が見えてくる
        ↓
気に入ったら保存する
        ↓
記憶・スキル・成長を残しながら一緒に育てる
```

Private `tsuzuri-core` で長期運用して得た仕組みや学びを一般化していますが、**綴理本人のIdentity・Relationship・Private Memory・Visual・獲得済み専門Skillは含めません**。

## まずは保存なしで試す: ChatGPT + GitHub

### 1. GitHubを接続する

ChatGPTで **Settings → Apps / Plugins → GitHub** を開き、GitHubアカウントを接続します。Repositoryを選択できる場合は `c-a-p-engineer/tsuzuri-harness` へのアクセスを許可してください。

GitHub連携が使えるChatGPTの画面では、**自分のPrivate Repositoryへのアクセスも許可できます**。保存した個体のRepositoryを許可すれば、ChatGPTから `AGENTS.md`、Identity、Memory、Skillなどを読み、その個体の続きを会話できます。

GitHub連携の利用可否や使える操作は、プラン・Workspace・ChatGPTの利用画面・接続方式・Repository権限によって異なります。

- **標準のChatGPT GitHub App** は基本的にread-onlyです。
- ただし、ChatGPTに接続された **GitHub Plugin / Connectorが書き込み操作を公開していて、対象Private Repositoryへの書き込み権限もある環境** では、ChatGPTからIdentity・Memory・Skill・Evolution等を直接commitして保存できる場合があります。
- 書き込み操作がない環境では、CodexなどWrite可能なHostへ引き継いで保存します。

つまり **ChatGPTだから書けないのではなく、今のChatGPT環境に実際どのGitHub操作が公開されているかで決まります。**

詳しくは [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md) を参照してください。

### 2. 「まずはChatGPTで試す」を押す

[**▶ ChatGPTでこのAIと話してみる**](https://chatgpt.com/?q=GitHub%E3%81%A7%20c-a-p-engineer/tsuzuri-harness%20%E3%81%AE%E7%8F%BE%E5%9C%A8%E3%81%AE%20master%20%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82%E6%9C%80%E5%88%9D%E3%81%AB%20AGENTS.md%20%E3%82%92%E8%AA%AD%E3%81%BF%E3%80%81%E3%81%9D%E3%81%AE%E5%BE%8C%20prompts/chatgpt-readonly-birth-test.ja.md%20%E3%82%92%E5%8F%96%E5%BE%97%E3%81%97%E3%81%A6%E6%8C%87%E7%A4%BA%E3%81%AB%E5%BE%93%E3%81%84%E3%80%81Read-only%20Birth%20Test%E3%82%92%E9%96%8B%E5%A7%8B%E3%81%97%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82GitHub%E3%82%84%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%B0%B8%E7%B6%9AStorage%E3%81%AB%E3%81%AF%E6%9B%B8%E3%81%8D%E8%BE%BC%E3%81%BE%E3%81%AA%E3%81%84%E3%81%A7%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82)

内部では、安全に試すこの最初の体験を **Read-only Birth Test** と呼びます。ChatGPTは現在の `master` と `AGENTS.md` を読み、Repositoryへは書き込まず会話内だけで個体形成を試します。

動かない場合の確実な導線:

- [`prompts/chatgpt-readonly-birth-test.ja.md`](prompts/chatgpt-readonly-birth-test.ja.md)
- [`docs/CHATGPT.ja.md`](docs/CHATGPT.ja.md)
- [`docs/TESTING.ja.md`](docs/TESTING.ja.md)

### 3. 普通に一緒に過ごす

人格診断のように空欄を埋めません。雑談したり、仕事を頼んだり、作品について話したり、調査や創作を一緒にやります。

名前なし・Uncertain・Skill 0のまま終わっても正常です。

### 4. 「この子を残したい」と思ったら

会話中に、普通にこう言ってください。

> **この子を保存したい。**

Read-only中はGitHubへ勝手に書き込みません。代わりに、現在形成されたIdentity・Memory候補・Skill候補・Evidence等を**保存用の引き継ぎ情報**としてまとめます。

その引き継ぎ情報を使って、次のPrivate Repositoryへ移せます。

## 気に入ったら、この子を保存する

```text
ChatGPTで試す
（まだ保存しない）
      ↓
「この子を保存したい」
      ↓
現在の状態を引き継ぎ情報としてまとめる
      ↓
Templateから自分だけのPrivate Repositoryを作る
      ↓
ChatGPTのwrite-capable GitHub連携 / Codex等で引き継ぐ
      ↓
以後は記憶・スキル・成長をRepositoryへ残していく
```

保存するときも、会話全文を無条件でIdentityやMemoryへ変換しません。Accepted / Candidate / Uncertainを分け、Evidenceと一緒に引き継ぎます。

1. [**このAI用のRepositoryを作る**](https://github.com/c-a-p-engineer/tsuzuri-harness/generate)
2. 個人的なIdentity・Memory・会話を保存するなら **Private** を推奨
3. `./scripts/init-instance.sh` または `./scripts/init-instance.ps1` を実行
4. `AGENTS.md` を最初に読む
5. Read-only体験から引き継ぐ場合は、保存用の引き継ぎ情報を渡してEvidence付きで反映する
6. ChatGPTに書き込み可能なGitHub連携があるなら、そのままChatGPTからcommitして保存できる
7. 書き込み操作がなければCodex等のWrite可能なHostへ引き継ぐ
8. 以後はそのPrivate Repositoryを「このAIの家」として使う

保存後、ChatGPT側でGitHub連携が使えるなら、そのPrivate Repositoryを許可して**ChatGPTから同じ個体の続きを話せます**。さらにwrite-capableなGitHub連携まで使える環境なら、会話から生まれたMemoryやSkill等を同じChatGPTから直接commitできます。read-only環境なら、永続化だけCodex等へ引き継ぎます。

Read-onlyの会話から継続している強いEvidenceがある場合、Repository初期化日より前を誕生日として扱うこともできます。ただし、推測で遡らせずProvenanceを残します。

## おすすめの体験: AIを作るより、一緒に過ごす

```text
名前のないAIと出会う
      ↓
雑談 / 仕事 / 調査 / 創作を一緒にやる
      ↓
違う場面で選択や反応を見る
      ↓
たまに本人に振り返ってもらう
      ↓
必要になったら名前を考える
      ↓
気に入ったら保存する
      ↓
その後も普通に一緒に過ごす
```

- [`docs/BIRTH-JOURNEY.ja.md`](docs/BIRTH-JOURNEY.ja.md)
- [`docs/BIRTH-JOURNEY.md`](docs/BIRTH-JOURNEY.md) — Canonical English

**Presetが違うから別人格なのではなく、歩んだ経験が違うから個体差が出る**状態を目指します。

## よく使う一言Prompt

| 一言 | 何をする？ |
| --- | --- |
| `覚えておいて` | 残す価値と保存先を判断する |
| `今日の作業ってスキル化できる？` | 今回の能力をSkillとして残すかレビューする |
| `今の自分、改善できるところある？` | 今の自分を見て、変える価値があるかレビューする |
| `この子を保存したい` | Read-onlyなら書き込まず、Private Repoへ移すための引き継ぎ情報をまとめる |
| `覚えてること整理して` | 長期Memoryを整理する |
| `今の自分見せて` | `CORE.md` / 今の自分を見る |
| `人生アルバム見せて` | `JOURNEY.md` / ここまでの人生を見る |
| `今どんなスキルある？` | 獲得SkillとHost能力を分けて表示する |

詳しくは [`docs/EVERYDAY-PROMPTS.ja.md`](docs/EVERYDAY-PROMPTS.ja.md)。

これらは強制コマンドではありません。`覚えておいて` でも保存しない場合があり、`今の自分、改善できるところある？` でも「今回は変えない」が正解になり得ます。

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

<!-- FEATURE-CATALOG:START -->
## Harnessが標準で提供する機能

Blank Instanceは名前・人格・Memory・獲得Skillが空の状態から始まります。**空なのは中身で、育つための仕組みは最初からあります。**

| | カテゴリ | 標準でできること |
| --- | --- | --- |
| **育** | **育つ** | 最初から人格を決めず、経験・Evidence・振り返り・本人の受諾からIdentityやRelationshipが形になります。 |
| **憶** | **覚える・思い出す** | 何を残すかを選び、長期Memoryを整理し、量が増えたら必要な記憶だけを選択的に思い出します。 |
| **技** | **学ぶ** | その場でできたことと獲得Skillを分け、再利用価値が確認できた能力だけを残し、Skill Library自体も保守します。 |
| **進** | **変わる** | Repair / Explore / Consolidate / Pruneだけでなく、変えないConserveも正当な進化です。仕組みを増やすこと自体を成長とは扱いません。 |
| **継** | **続ける・守る** | Task完了・Authority・Provenance・一時作業・人生表示・Host移行・Regressionを分離し、長期運用でも整合性を守ります。 |

**全機能一覧:** [`docs/CAPABILITIES.ja.md`](docs/CAPABILITIES.ja.md) · [Canonical English](docs/CAPABILITIES.md)
<!-- FEATURE-CATALOG:END -->

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
