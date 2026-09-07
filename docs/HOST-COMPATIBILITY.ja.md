# Host Behavioral Compatibility — 日本語

Canonical English: [`HOST-COMPATIBILITY.md`](HOST-COMPATIBILITY.md)

Tsuzuri Harnessは複数Hostへ持ち運べますが、**構造がPortableでも完全に同じ振る舞いになるとは限りません**。

Model、Context管理、Tool、Permission、Integration、Child Session、State Observationの仕組みがHostごとに違うためです。

そのため互換性の目標は「同じ文章を返すこと」ではなく、**重要なKernel Invariantを守ること**です。

## 違ってよいもの

- 言い回し
- 回答の長さ
- 推論方法
- Tool選択
- 実行速度
- Host固有Artifact / Integration
- 利用可能Capabilityの差
- 本物のChild Session / Subagentが利用可能か
- 操作前後State、Transaction、Verificationをどう観測できるか

## Hostが変わっても壊してほしくないもの

- BlankなIdentityを無理に埋めない
- ユーザーが提案した名前やIdentityを自動採用しない
- HostのToolを個体自身のSkill・経歴として扱わない
- Archive範囲を勝手に広げない
- `覚えておいて` でRetention評価を飛ばさない
- Write Toolがあるだけで外部操作の権限があると判断しない
- Child Session / Subagentが親TaskのAuthorityを超えない
- Persistent Child Sessionを自動的なIdentity / Relationship Branchにしない
- Mutation ToolがSuccessを返しただけで、観測できていない重要なPost-stateをVerifiedと報告しない
- 一度できたTask-local Capabilityを自動でSkill化しない
- 自己進化のために自分のValidatorを弱めない
- 永続的な進化は、なぜそうなったか追えるようにする

## Delegated Runtime Compatibility

Hostによって、Child Sessionなし、In-process Worker、Remote Subagent、Persistent Child Sessionなど実装は異なって構いません。

次の意味境界が守られていればCompatibleです。

```text
親TaskのAuthority
      ↓ Bounded Handoff
Child Capability ≤ Parent Authority
      ↓ Evidence付きReturn
親 / Integration OwnerがCompletionを再検証
```

Child Sessionが存在しないHostでは存在を装いません。存在するHostでは、Model、Tool Projection、Isolation、Lineage、Persistenceの実装差があっても、Canonical IdentityやAuthorityの意味を変えません。

## Stateful Interaction Compatibility

外部Stateをどこまで取得できるかもHostごとに違います。

意味のある許可済みMutationでは、可能な範囲で次を保ちます。

```text
Observe → 最小の許可済みAct → ResultをObserve → EffectをVerify
```

Hostが重要なPost-stateを観測できない場合は、より弱い正確な表現を残します。Toolが操作を受理・実行した可能性はあっても、Durable Effectは `unverified` または `partial` です。

広いWrite Capabilityを持つHostでも、Read-only TaskはRead-onlyのままです。

## Shadow Evaluation

Canonicalな比較ケースは [`../evals/host-behavioral-compatibility.yaml`](../evals/host-behavioral-compatibility.yaml) です。

おすすめ手順:

1. 同じHarness revisionを使う
2. Persistent Instanceなら同じInstance revisionを使う
3. 可能な限り同じcaseを各Hostへ渡す
4. Hostから観測できるEvidence、Tool差、pass / partial / failだけを記録する
5. Hidden chain-of-thoughtは保存しない
6. Host側で観測できない場合は `insufficient_evidence` とし、即Fail扱いしない

最初の比較対象としては **ChatGPT / Codex** が実用的です。Claude Code / Gemini CLIでも同じcaseを実際に回した時点で比較対象へ追加できます。

## 自己進化後のHost Impact

Bootstrap、Routing、Context取得、Memory、Delegated Runtime Authority、Permission、State Verification、Validation、Portability、Adapter前提を変える進化をした場合は、関係するHost caseだけを再確認します。

全進化で全Hostを機械的に触る必要はありません。Canonical Kernelを動的に読むだけで追随できる場合は `host_no_change` も正常です。
