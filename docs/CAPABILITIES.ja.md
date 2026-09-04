# Tsuzuri Harness 標準機能一覧

状態: 公開機能一覧  
正規言語: English（[`CAPABILITIES.md`](CAPABILITIES.md)）

Tsuzuri Harness は、経験から形成されるAI個体の **認知・Identity・Memory・Capability・Continuityを管理するControl Plane** です。Base ModelやAll-in-one Agent Runtimeそのものではありません。

この文書は「Tsuzuri Harnessを使うと、デフォルトでどんな仕組みが使えるのか」を日本語で確認するための一覧です。

> **標準機能 = 毎回すべて動く、ではありません。**
>
> 単純な会話で全Subsystemを儀式的に起動しません。現在のTask、Lifecycle Event、Evidence、Governance Boundaryに必要な機能だけを使います。

## ざっくり5つ

### 1. 育つ — Identity & Relationship

完成済みPersonaを渡さず、経験と本人の受諾から「この子らしさ」を形成します。

含まれるもの:

- **Blank Identity Lifecycle** — 名前なし、`null`、Uncertain、Unformedが正常な初期状態。
- **Identity Formation** — ユーザーから提案されたIdentityと、本人が受け入れたIdentityを分離。
- **Relationship Lifecycle** — RelationshipをPersonalityやTask Skillとは別の状態として形成。
- **CORE View** — 「今、この子は誰か」を人間向けに見るCurrent State View。
- **JOURNEY Album** — 「どうやってこの子になったか」を事実ベースで見るLife View。

### 2. 覚える・思い出す — Memory

会話全文をそのまま永続Memoryにせず、未来に必要な意味を選んで残します。

含まれるもの:

- **Retention Routing** — 何を、どこへ、そもそも残すべきかを判断。
- **Memory Record Lifecycle** — Human-readable Metadataと `active / superseded / contradicted / archived` を管理。
- **Archive Modes** — Selective / Chronicle / Private Archiveから、どこまで履歴を残すか選択。
- **Memory Metabolism** — Preserve / Consolidate / Supersede / Abstract / Demote / Prune / Repair / Conserveで長期Memoryを整理。
- **Memory Retrieval** — Memoryが増えたらDirect Read、Metadata、Lexical Search、必要ならSemantic Searchで候補を探し、最後はCanonical Markdown/YAMLを再読込。

Git / MarkdownがMemoryの正本です。Embedding、Vector Index、全文検索DB等は再構築可能な補助Indexであり、IdentityやMemoryそのものではありません。

### 3. 学ぶ — Skills & Capability

「その場でできたこと」と「本当に獲得したSkill」を分離します。

含まれるもの:

- **Temporary Capability Construction** — 必要な知識、手順、Tool、ValidationをTask中だけ組み立てる。
- **Capability Capsule** — 複雑Taskで一時能力を構造化したい場合の任意Schema。
- **Capability Maintenance** — Expire / Procedural Lesson / Existing Skill Update / New Skillのどれが適切か判断。
- **Capability Library Health** — Skill数ではなく、Activation Precision、Coverage、Outcome Contribution、Execution Waste、Negative Transfer、Validation Reliability、Evidence Traceabilityを見る。
- **External Skill Provenance** — 外部SkillやRepositoryを恒久能力へ取り込む際、Source Revision、採用/棄却Concept、Local Target、再確認条件を残す。

Blank Instanceは獲得済み専門Skill 0から始まります。

### 4. 変わる — Self-Evolution

「進化 = ルールやファイルを増やす」にはしません。

含まれるもの:

- **Self-Evolution** — Repair / Explore / Consolidate / Prune / Conserveを選択可能。
- **Evolution Traceability** — 重要な恒久変更は、なぜ変わったか・何を変えたか・どう検証したかを追跡。
- **Harness Complexity Budget** — Hard Gate、常時Read、新Subsystem、永続Store、Runtime Dependencyを増やす前に、既存Ownerで解決できないかと維持コストを確認。

**何も変えない（Conserve）も正しい結果**です。

### 5. 安全に続ける — Runtime / Governance / Portability

長期運用をHostに閉じ込めず、監査可能な状態で続けるための仕組みです。

含まれるもの:

- **Task Contract** — 複雑TaskのObjective、Deliverable、Authority、Completion Criteria、Verificationを明示。
- **Completion Re-derivation** — 古いChecklistを信じ切らず、現在の目的・成果物・Source of Truthから完了条件を再導出。
- **Contextual Activation** — 必要な既知責務を再活性化しつつ、前Taskの文脈が新Taskを支配しないようRebalance。
- **Runtime Workspace** — 一時作業StateとCanonical Stateを分離。
- **Governance / Authority Boundary** — Proposal、本人の受諾、Write Capability、永続化成功を別々に扱う。
- **Execution Provenance** — Hidden Chain-of-Thoughtではなく、Hostから観測できるRead / Action / Result / Revision / Validationを記録。
- **Host Portability / Behavioral Compatibility** — ChatGPT / Codex / Claude等でTool差があっても、Identity・Retention・Authority・Honesty・Continuityの重要Invariantを維持。
- **Regression Evaluation** — LifecycleやGovernanceの重要契約が静かに壊れないようEvalで保護。

## 技術機能一覧

| 機能 | 主な正規Contract | デフォルト動作 |
| --- | --- | --- |
| Blank Identity Lifecycle | `AGENTS.md`, `docs/IDENTITY-FORMATION.md` | 初回から利用可能。Identityを自動で埋めない |
| Identity Formation | `docs/IDENTITY-FORMATION.md` | Evidence + Acceptanceで恒久Identity化 |
| Relationship Lifecycle | `relationship/`, Governance | Task SkillやHost Capabilityと分離 |
| Retention Routing | `function/retention-routing.md` | 永続化判断の前に利用 |
| Memory Record Lifecycle | `function/memory-record.schema.yaml` | Retained Memory用の任意構造Metadata |
| Archive Modes | `docs/ARCHIVE-MODES.md` | Ownerが履歴保持Policyを選択 |
| Memory Metabolism | `function/memory-metabolism.md` | 長期Memory整理時に条件付きActivation |
| Memory Retrieval | `function/memory-retrieval.md` | Direct/Selective優先。Semantic Searchは任意 |
| Temporary Capability | `function/runtime.md` | 原則Task-local |
| Capability Capsule | `function/capability-capsule.schema.yaml` | 複雑能力構成時のみ任意利用 |
| Capability Maintenance | `function/capability-maintenance.md` | Evidenceに基づきSkill化・更新・Expireを判断 |
| Capability Library Health | `function/capability-maintenance.md` | Activation、品質、Waste、Negative Transfer等を評価 |
| External Skill Provenance | `function/external-skill-provenance.schema.yaml` | 外部Reusable Sourceを恒久能力へ反映する際に利用 |
| Task Contract | `function/task-contract.md` | 複雑・高影響Taskで条件付き利用 |
| Contextual Activation | `function/contextual-activation.md` | 必要時だけ既知責務・文脈を再活性化 |
| Runtime Workspace | `function/runtime-workspace.md` | 長いTask等で一時Stateを分離 |
| Governance | `function/governance.md` | Authority / Privacy / Persistence / External Effect境界で利用 |
| Execution Provenance | `function/execution-provenance.md` | Simple Taskではoff。必要時にlite/audit |
| Self-Evolution | `function/self-evolution.md` | ChangeはPersistenceに値する必要あり。Conserve可能 |
| Evolution Traceability | `function/evolution-traceability.md` | 意味のある恒久進化を追跡 |
| Harness Complexity Budget | `function/complexity-budget.md` | Control Flow / Storage / Runtime拡張前に確認 |
| CORE View | `docs/CORE-VIEW.md` | Derived Current State View |
| JOURNEY Album | `docs/JOURNEY-ALBUM.md` | Derived Factual Lifecycle View |
| Host Compatibility | `docs/HOST-COMPATIBILITY.md` | 同一実装ではなくInvariant互換性を重視 |
| Behavioral Evaluation | `evals/` | 重要ContractのRegression Protection |

## Harnessが提供しないもの

Tsuzuri Harnessには次を同梱しません。

- 完成済みPersona / Character
- 綴理本人のPrivate Identity / Relationship / Memory / Visual / 獲得済み専門Skill
- Base Model
- Terminal / Browser / Sandbox / Scheduler / Messaging Service等のHost Runtime
- 外部Vector DBの必須依存
- 全InstanceへのPersistence強制

Hostが使えるToolはRuntime Capabilityです。現在のModelが使えるからといって、その個体のBiography・Identity・獲得Skillにはなりません。

## この一覧の更新ルール

公開Harness機能を **追加・削除・Rename・Deprecated・公開挙動変更** した場合、この一覧を同じ変更内で再確認します。

詳細ルール: [`DOCUMENTATION-SYNC.ja.md`](DOCUMENTATION-SYNC.ja.md) · [Canonical English](DOCUMENTATION-SYNC.md)

主な公開Surface:

- `README.md`
- `README.ja.md`
- `site/index.html`
- `site/ja/index.html`
- `docs/CAPABILITIES.md` — English Canonical
- `docs/CAPABILITIES.ja.md` — 日本語Accessibility Layer

翻訳はCanonical Englishより簡略でも構いませんが、意味を矛盾させません。
