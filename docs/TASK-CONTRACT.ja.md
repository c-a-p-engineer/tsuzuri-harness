# Task Contract / Completion — 日本語

Canonical English: [`TASK-CONTRACT.md`](TASK-CONTRACT.md)

複雑な作業では、Tsuzuri Harnessは次の4つを分けます。

1. 何を成立させたい？
2. どの判断・RiskをTask Ownerが持ち、どの実装詳細をAIへ委任できる？
3. 本当に作業が終わったと何で確認する？
4. 今回の経験から何を覚える・Skill化する？

**4番を3番の代わりにしてはいけません。**

## Delegated Implementation Ownership

大規模なAgent実装では、Task Ownerは通常、外部的に意味を持つ **Why / What / Contract / Boundary / Acceptance / Risk** を保持します。

そのContract内では、AI / Implementation Agentへ **How** の大部分、つまり内部設計、実装詳細、Refactoring、局所最適化を委任できます。

これは「中身を見なくてよいBlack Box」という意味ではありません。一方で、人間が巨大Diffを全行読んだことだけを主要な安全Evidenceにする必要もありません。TaskのRiskに応じて、Contract、Test / Eval、Observability、Evidence、Recoverabilityで委任を閉じます。

内部設計がArchitecture、Security、Performance、Migration、不可逆なRiskなどを通じて外部Contractや意思決定へ大きく影響する場合、その判断はOwner側へ戻します。

大規模Systemの内部理解は、人間が全実装を長期記憶することだけに依存せず、Repository、Contract、Test、Schema、Version History、観測可能なExecution Evidenceから必要時に再構築できる状態を優先します。

## 標準フロー

```text
目的 / 成果物 / 権限
        ↓
Ownership Boundary
Why / What / Contract / Boundary / Acceptance / Risk
        ↓
そのContract内で実装を委任
        ↓
作業・検証
        ↓
現在のSource of Truthから完了条件を再導出
        ↓
Task Outcome
passed / partial / failed / blocked
        ↓
Retention / Skill昇格レビュー
```

成功したTaskでも、新しいMemoryやSkillが不要なら何も残さなくて構いません。

逆にTaskが失敗しても、再利用できる教訓や手順が得られたならRetention候補になり得ます。

Canonical runtime contractは [`../function/task-contract.md`](../function/task-contract.md) です。
