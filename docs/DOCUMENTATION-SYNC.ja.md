# Documentation Synchronization — 日本語

状態: 日本語Accessibility Layer  
正規言語: English（[`DOCUMENTATION-SYNC.md`](DOCUMENTATION-SYNC.md)）

Tsuzuri Harnessには、Kernel内部の正規Contractだけでなく、READMEやGitHub Pagesなど複数の公開Surfaceがあります。

機能を追加したのにREADMEやPagesが古い説明のまま、という状態を防ぐための同期ルールです。

## Source of Truthの役割分担

| Surface | 責務 |
| --- | --- |
| `function/`, `AGENTS.md`, Schema | Normative Behavior / Machine-readable Contract |
| `docs/CAPABILITIES.md` | 公開機能一覧のEnglish Canonical |
| 個別 `docs/*.md` | 各機能の詳細仕様・利用方法 |
| `README.md` | 初見向けの短い説明とQuick Start |
| `site/index.html` | GitHub PagesのLanding Page説明 |
| `.ja` / `site/ja/` | 日本語Accessibility Layer |

READMEやPagesは新しい正規仕様ではありません。Canonical ContractとCapability一覧を分かりやすく要約する場所です。

## Capability一覧を見直す変更

次の場合は `docs/CAPABILITIES.md` を同じ作業内で確認します。

- Public Kernel Capabilityを追加した
- Public Capabilityを削除・Deprecatedにした
- ユーザー向け名称をRenameした
- 既存Capabilityの意味・公開挙動を大きく変えた
- Optional / Conditional / Mandatoryの位置づけが変わった
- Canonical State / Derived Stateの境界が変わった
- Privacy / Persistence / Authority / Portability / External Service依存が変わった
- Identity / Memory / Skill / Evolution / CORE / JOURNEY等の主要Lifecycleが変わった

Capability一覧を変更した場合、日本語版 `docs/CAPABILITIES.ja.md` も可能な限り同じ変更内で更新します。

## README / Pagesまで更新する変更

初見ユーザーが知るべき内容に影響する場合は、READMEとPagesも更新します。

例えば:

- 新しいTop-level Capability Categoryが増えた
- 以前のPromiseを削除・Deprecatedにした
- Quick Startや保存フローが変わった
- 新しい必須Dependency / Host制約が増えた
- Harnessを使う大きな理由が増えた
- 現在のLanding Pageが誤解を生む状態になった

既存Category内の詳細機能追加で、`docs/CAPABILITIES.md` を更新すれば十分な場合、Landing Pageまで毎回書き換える必要はありません。

## 通常は公開Docs更新が不要な変更

- Typo / Formatting修正
- Behaviorが変わらない内部Refactor
- Contractを変えない実装詳細
- Promiseを変えないTest-only変更
- Private Instance固有State

公開Docsを触ること自体を目的化しません。公開Contractが変わっていなければ `no_public_doc_change` は正当です。

## 推奨順序

Public Capabilityを変更するとき:

1. Normative Contractを更新
2. `docs/CAPABILITIES.md` を更新
3. 必要な詳細Guideを更新
4. `README.md` / `site/index.html` に古い説明がないか確認
5. `docs/CAPABILITIES.ja.md` / `README.ja.md` / `site/ja/index.html` を確認・更新
6. Compatibility / Migration / Release Notesが必要か確認
7. Regression Evalを追加・更新
8. Validationを実行し、Pages変更時はDeploy結果も確認

## 翻訳

英語がNormativeなCanonicalです。

翻訳は短くても構いませんが、Canonical Capability一覧と意味を矛盾させません。同じ変更で安全に翻訳できない場合は、無理に訳を作らずCanonicalへのリンクを残し、翻訳Gapを明示的に扱います。

## CI / Contribution Guardrail

Public Capability Docs用Workflowでは、少なくとも次を検証します。

- Capability一覧が存在する
- README / English・日本語PagesからCapability一覧へ辿れる
- 現在の主要Capabilityが一覧に含まれている
- Top-level `function/` Contractを追加・削除・Renameした場合、Capability一覧のEnglish / 日本語も確認されている

既存Contractの内容変更については機械判定だけではPublic Impactを判断できないため、PR Templateで確認します。

目的は**意味のあるDocs Driftを防ぐこと**であり、意味のないファイル更新を強制することではありません。
