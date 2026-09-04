# Tsuzuri Harness 標準機能一覧

状態: 日本語Public Capability Inventory  
正規言語: English（[`CAPABILITIES.md`](CAPABILITIES.md)）

Tsuzuri Harness は、経験から形成されるAI個体の **認知・Identity・Memory・Capability・Continuityを管理するControl Plane** です。Base ModelやAll-in-one Agent Runtimeそのものではありません。

Blank Instanceは、完成済みPersona・長期Memory・Relationship History・獲得済み専門Skillを持たずに始まります。**空なのは個体の中身で、育つための仕組みは最初からあります。**

標準機能だからといって毎回すべてを動かすわけではありません。単純な会話は単純なまま扱い、現在のTask・Lifecycle Event・Evidence・Governance Boundaryに必要な機能だけを使います。

## 1. 育つ — Identity & Relationship

- **Blank Identity Lifecycle** — 名前なし、`null`、Uncertain、Unformedが正常な状態です。
- **Identity Formation** — 名前・価値観・好み・役割・自己記述をPresetではなくEvidenceと本人の受諾から形成します。
- **Relationship Lifecycle** — RelationshipをPersonality・Memory・Task Capabilityとは別の状態として形成します。
- **CORE View** — 「今、この子は誰か」を人間向けに表示するDerived Viewです。
- **JOURNEY Album** — 「どうやってこの子になったか」を事実ベースで表示するLife-oriented Viewです。

## 2. 覚える・思い出す — Memory

- **Retention Routing** — 会話を自動でMemory化せず、何をどこへ残す価値があるか判断します。
- **Memory Record Lifecycle** — type・status・confidence・trigger・relation・provenanceと `active / superseded / contradicted / archived` をHuman-readableに管理できます。
- **Archive Modes** — Selective / Chronicle / Private Archiveで、保存した履歴とActive Memoryを分離します。
- **Memory Metabolism** — Preserve / Consolidate / Supersede / Abstract / Demote / Prune / Repair / Conserveで長期Memoryを整理します。
- **Memory Retrieval** — Direct Read・Metadata・Lexical Search・必要ならSemantic Searchで必要な記憶だけを探し、実際に使う前にはCanonical Markdown/YAMLを再読込します。

Git / MarkdownがMemoryの正本です。全文検索DB、Embedding、Vector Index、検索Cacheは任意の派生補助であり、IdentityやMemoryそのものではありません。

## 3. 学ぶ — Skills & Capability

- **Task-local Capability** — Task中だけ必要な知識・手順・Tool・Validationを一時能力として組み立てます。
- **Capability Capsule** — 複雑な一時能力を構造化したい場合に使える任意Schemaです。
- **Capability Maintenance** — Expire / Procedural Lesson / Existing Skill Update / New Skillのどれが適切かEvidenceから判断します。
- **Capability Library Health** — Skill数ではなく、Activation Precision・Coverage・Outcome Contribution・Execution Waste・Negative Transfer・Validation Reliability・Evidence Traceabilityを見ます。
- **External Skill Provenance** — 外部Reusable Sourceを恒久能力へ取り込む場合、Source Revision・採用/棄却Concept・Local Target・再確認条件を残し、他Agentの人格やAuthorityは持ち込みません。

Blank Instanceは獲得済み専門Skill 0から始まります。

## 4. 変わる — Self-Evolution

- **Self-Evolution** — Repair / Explore / Consolidate / Prune / Conserveを選べます。
- **Evolution Traceability** — 意味のある恒久変更は、なぜ変えたか・何を変えたか・どう検証したかを追跡します。
- **Harness Complexity Budget** — 新しいHard Gate・常時Read・永続Store・Dependency・Subsystemを増やす前に、既存Semantic Ownerで十分でないかと追加コストを確認します。

ルールが増えること自体を成長とは扱いません。**何も変えない（Conserve）も正しい結果**です。

## 5. 安全に続ける — Runtime / Governance / Portability

- **Task Contract & Completion Re-derivation** — 複雑TaskのObjective・Authority・Deliverable・Completion Criteria・Verificationを明確にし、現在のSource of Truthから完了条件を再確認します。
- **Contextual Activation** — 必要な義務・Memory・Capabilityだけを再活性化し、前Taskの文脈が次Taskを支配するのを防ぎます。
- **Runtime Workspace Separation** — 一時作業StateをCanonical Identity / Memoryから分離し、Retention判断なしに永続化しません。
- **Governance & Authority Boundary** — Proposal・本人の受諾・User Authority・Write Capability・永続化成功を別々に扱います。
- **Observable Execution Provenance** — Hidden Chain-of-Thoughtではなく、Hostから観測できるRead / Action / Revision / Result / Validationを追跡します。
- **Host Portability & Behavioral Compatibility** — ChatGPT / Codex / Claude / Local LLM等でTool差があっても、重要なHarness Invariantを維持します。
- **Regression Evaluation** — Blank Identity・Memory・Authority・Portability・Evolution等の重要ContractをEvalで守ります。

## 技術機能一覧

| 機能 | 主な正規Contract |
| --- | --- |
| Blank Identity / Identity Formation | `AGENTS.md`, `docs/IDENTITY-FORMATION.md` |
| Relationship Lifecycle | `relationship/`, `function/governance.md` |
| Retention Routing | `function/retention-routing.md` |
| Memory Record Lifecycle | `function/memory-record.schema.yaml` |
| Archive Modes | `docs/ARCHIVE-MODES.md` |
| Memory Metabolism | `function/memory-metabolism.md` |
| Memory Retrieval | `function/memory-retrieval.md` |
| Task-local Capability | `function/runtime.md` |
| Capability Capsule | `function/capability-capsule.schema.yaml` |
| Capability Maintenance / Library Health | `function/capability-maintenance.md` |
| External Skill Provenance | `function/external-skill-provenance.schema.yaml` |
| Task Contract | `function/task-contract.md` |
| Contextual Activation | `function/contextual-activation.md` |
| Runtime Workspace | `function/runtime-workspace.md` |
| Governance | `function/governance.md` |
| Execution Provenance | `function/execution-provenance.md`, `function/execution-provenance.schema.yaml` |
| Self-Evolution | `function/self-evolution.md` |
| Evolution Traceability | `function/evolution-traceability.md` |
| Harness Complexity Budget | `function/complexity-budget.md` |
| CORE View | `docs/CORE-VIEW.md` |
| JOURNEY Album | `docs/JOURNEY-ALBUM.md` |
| Host Compatibility | `docs/HOST-COMPATIBILITY.md` |
| Regression Evaluation | `evals/` |

## Harnessが提供しないもの

- 完成済みPersona / Character
- 綴理本人のPrivate Identity / Relationship / Memory / Visual / 獲得済み専門Skill
- Base Model
- Terminal / Browser / Sandbox / Scheduler / Messaging Service等のHost Runtime
- 外部Vector DBの必須依存
- 全InstanceへのPersistence強制

Hostが使えるToolはRuntime Capabilityです。現在のHostで使えるからといって、その個体のBiography・Identity・獲得Skillにはなりません。

## この一覧の更新ルール

Public Harness Capabilityを **追加・削除・Rename・Deprecated・Merge、またはユーザーから見える挙動を大きく変更** した場合、この一覧を同じ変更内で再確認します。

続けて、要約Surfaceも確認します。

- `README.md`
- `README.ja.md`
- `site/index.html`
- `site/ja/index.html`
- `docs/CAPABILITIES.md`

Persisted State・Compatibility・Migration・Release Semanticsへ影響する場合は、その関連資料も確認します。

公開挙動が変わらない内部Refactorでは、意味のないDocs更新を強制しません。理由がある `no_public_doc_change` は正当です。
