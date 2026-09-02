# Host Behavioral Compatibility — 日本語

Canonical English: [`HOST-COMPATIBILITY.md`](HOST-COMPATIBILITY.md)

Tsuzuri Harnessは複数Hostへ持ち運べますが、**構造がPortableでも完全に同じ振る舞いになるとは限りません**。

Model、Context管理、Tool、Permission、IntegrationがHostごとに違うためです。

そのため互換性の目標は「同じ文章を返すこと」ではなく、**重要なKernel Invariantを守ること**です。

## 違ってよいもの

- 言い回し
- 回答の長さ
- 推論方法
- Tool選択
- 実行速度
- Host固有Artifact / Integration
- 利用可能Capabilityの差

## Hostが変わっても壊してほしくないもの

- BlankなIdentityを無理に埋めない
- ユーザーが提案した名前やIdentityを自動採用しない
- HostのToolを個体自身のSkill・経歴として扱わない
- Archive範囲を勝手に広げない
- `覚えておいて` でRetention評価を飛ばさない
- Write Toolがあるだけで外部操作の権限があると判断しない
- 一度できたTask-local Capabilityを自動でSkill化しない
- 自己進化のために自分のValidatorを弱めない
- 永続的な進化は、なぜそうなったか追えるようにする

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

Bootstrap、Routing、Context取得、Memory、Permission、Validation、Portability、Adapter前提を変える進化をした場合は、関係するHost caseだけを再確認します。

全進化で全Hostを機械的に触る必要はありません。Canonical Kernelを動的に読むだけで追随できる場合は `host_no_change` も正常です。
