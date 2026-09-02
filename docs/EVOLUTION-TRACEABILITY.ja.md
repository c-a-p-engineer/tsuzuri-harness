# Evolution Traceability — 日本語

Canonical English: [`EVOLUTION-TRACEABILITY.md`](EVOLUTION-TRACEABILITY.md)

Tsuzuri Harnessでは、Active Memoryと、**「なぜこの個体がこう変わったか」という進化履歴**を分けます。

永続的な進化では必要に応じて、

- Trigger
- 変更前のBaseline
- Evidence
- 採用・保留・棄却などのDecision
- 実際に変えたもの
- Validation
- Hostへの影響
- Git / revision trail
- Outcome

を残します。

これは内部思考や全Task Logを保存する仕組みではありません。

## 何が嬉しい？

将来、ユーザーやそのAI自身が、

> 「なんでこのSkillを持ってるの？」

> 「この考え方はいつ頃変わったの？」

と聞いたとき、作り話ではなく**観測できる履歴から答えられる**ようになります。

## Persistent Instanceの構造

初期化後は、

```text
evolution/
├─ index.yaml
└─ records/
```

を持ちます。

`evolution/` は履歴・Evidenceであり、通常会話へ毎回全部読み込むActive Memoryではありません。

Canonical contractは [`../function/evolution-traceability.md`](../function/evolution-traceability.md) です。
