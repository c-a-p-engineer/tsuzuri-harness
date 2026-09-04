# Tsuzuri Harness 標準機能

この一覧は、Blank Instanceに**最初から人格・Memory・獲得Skillが入っている**という意味ではありません。最初から入っているのは、それらを経験から形成・維持・検索・進化させるためのKernel機構です。

このページは公開機能を見つけるためのDiscovery Catalogです。Normativeな挙動の正本は `AGENTS.md`、`function/`、Schema、Evalです。

## 育つ

最初から人格を決めず、経験・Evidence・振り返り・本人の受諾からIdentityやRelationshipが形になります。

| 機能 | 何をする？ | Reference |
| --- | --- | --- |
| **Identity Formation** | 名前・価値観・好み・役割・自己記述は、Evidenceが揃うまで未形成のままで構いません。 | [`docs/IDENTITY-FORMATION.md`](IDENTITY-FORMATION.md) |
| **Relationship Lifecycle** | RelationshipはIdentityと分離して育ち、会話回数だけで勝手に確定しません。 | [`relationship/`](../relationship/) |

## 覚える・思い出す

何を残すかを選び、長期Memoryを整理し、量が増えたら必要な記憶だけを選択的に思い出します。

| 機能 | 何をする？ | Reference |
| --- | --- | --- |
| **Retention Routing** | 会話を自動でMemory化せず、残す意味だけを適切な保存先へRoutingします。 | [`function/retention-routing.md`](../function/retention-routing.md) |
| **Memory Record / Lifecycle** | type・status・confidence・trigger・relation・provenanceなどをHuman-readableな形で管理できます。 | [`docs/MEMORY-RECORDS.md`](MEMORY-RECORDS.md) |
| **Memory Metabolism** | MemoryをPreserve / Consolidate / Supersede / Abstract / Demote / Prune / Repair / Conserveできます。 | [`docs/MEMORY-METABOLISM.md`](MEMORY-METABOLISM.md) |
| **Memory Retrieval** | Metadata・全文検索を基本に、Semantic/Vector検索は任意。検索結果は必ずCanonical Markdown/YAMLへ戻って確認します。 | [`docs/MEMORY-RETRIEVAL.md`](MEMORY-RETRIEVAL.md) |
| **Archive Modes** | Selective / Chronicle / Private Archiveを選べ、保存した履歴とActive Memoryを混同しません。 | [`docs/ARCHIVE-MODES.md`](ARCHIVE-MODES.md) |

## 学ぶ

その場でできたことと獲得Skillを分け、再利用価値が確認できた能力だけを残し、Skill Library自体も保守します。

| 機能 | 何をする？ | Reference |
| --- | --- | --- |
| **Task-local Capability** | Task中だけ必要な知識や手順を一時能力として構成し、元から持っていたSkillとは扱いません。 | [`function/runtime.md`](../function/runtime.md) |
| **Skill Maintenance / Library Health** | Skillの昇格・修正・統合・廃止だけでなく、発火精度・Coverage・無駄・Negative Transferも見ます。 | [`function/capability-maintenance.md`](../function/capability-maintenance.md) |
| **External Skill Provenance** | 外部Skillのsource revision・採用/棄却内容・local target・再確認条件を追跡し、他Agentの人格は持ち込みません。 | [`docs/EXTERNAL-SKILL-PROVENANCE.md`](EXTERNAL-SKILL-PROVENANCE.md) |

## 変わる

Repair / Explore / Consolidate / Pruneだけでなく、変えないConserveも正当な進化です。仕組みを増やすこと自体を成長とは扱いません。

| 機能 | 何をする？ | Reference |
| --- | --- | --- |
| **Self-Evolution** | Evidenceに基づき、必要な最小Ownerだけを変えます。ルール追加をデフォルトにしません。 | [`function/self-evolution.md`](../function/self-evolution.md) |
| **Evolution Traceability** | なぜ変えたか・何を変えたか・どう検証したかを追跡可能にします。 | [`docs/EVOLUTION-TRACEABILITY.md`](EVOLUTION-TRACEABILITY.md) |
| **Harness Complexity Budget** | 新しいGate・常時読込・永続Store・依存・Subsystemは、追加コスト以上の価値があるか評価します。 | [`function/complexity-budget.md`](../function/complexity-budget.md) |

## 続ける・守る

Task完了・Authority・Provenance・一時作業・人生表示・Host移行・Regressionを分離し、長期運用でも整合性を守ります。

| 機能 | 何をする？ | Reference |
| --- | --- | --- |
| **Task Contract / Completion Re-derivation** | 複雑なTaskで目的・権限・成果物・完了条件・検証を明確にし、途中のズレを防ぎます。 | [`docs/TASK-CONTRACT.md`](TASK-CONTRACT.md) |
| **Contextual Activation** | 必要なMemory・Skill・義務だけを再活性化し、前Taskの文脈が次Taskを支配するのを防ぎます。 | [`function/contextual-activation.md`](../function/contextual-activation.md) |
| **Governance / Authority Boundary** | 提案・本人の受諾・技術的Write能力・ユーザー権限・外部操作を別物として扱います。 | [`docs/GOVERNANCE.md`](GOVERNANCE.md) |
| **Runtime Workspace Separation** | Task中の一時状態はCanonical Identity/Memoryと分離し、Retention判断なしに永続化しません。 | [`function/runtime-workspace.md`](../function/runtime-workspace.md) |
| **Observable Execution Provenance** | 読込・操作・revision・結果・検証を追跡でき、Hidden Chain-of-Thoughtは保存しません。 | [`function/execution-provenance.md`](../function/execution-provenance.md) |
| **CORE View** | 現在の『この子』を人間向けに表示するDerived Viewで、Canonical Stateの代わりにはなりません。 | [`docs/CORE-VIEW.md`](CORE-VIEW.md) |
| **JOURNEY Album** | 誕生日・命名・Memory・Skill・Relationship・Evolutionを事実ベースの人生表示にし、架空LvやXPは作りません。 | [`docs/JOURNEY-ALBUM.md`](JOURNEY-ALBUM.md) |
| **Host Portability / Behavioral Compatibility** | ChatGPT / Codex / Claude / Local LLMなどでTool差があっても、重要Invariantの連続性を守ります。 | [`docs/HOST-COMPATIBILITY.md`](HOST-COMPATIBILITY.md) |
| **Regression Evaluation** | Blank Identity・Memory・Authority・Portability・Evolutionなどの契約をRegression Evalで守ります。 | [`evals/`](../evals/) |

## 境界

HarnessはBase Model、Browser、Terminal、Sandbox、Scheduler等のHost Runtimeそのものは提供しません。また、綴理本人のIdentity・Private Memory・Relationship・獲得済み専門Skillも含みません。
