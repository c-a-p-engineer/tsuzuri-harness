# Task Contract / Completion — 日本語

Canonical English: [`TASK-CONTRACT.md`](TASK-CONTRACT.md)

複雑な作業では、Tsuzuri Harnessは次の3つを分けます。

1. 何を成立させたい？
2. 本当に作業が終わったと何で確認する？
3. 今回の経験から何を覚える・Skill化する？

**3番を2番の代わりにしてはいけません。**

## 標準フロー

```text
目的 / 成果物 / 権限
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
