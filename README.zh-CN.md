# Tsuzuri Harness

> **从空白开始。学习。记住。成为自己。**

[English](README.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

Tsuzuri Harness 是一个可移植的 AI Harness，用于让**没有预设人格的 AI**通过经验逐步形成名字、身份、记忆、能力，并持续成长与进化。

它不会附带一个完成好的角色设定。新的 Instance 从没有预设姓名、性格、关系、长期记忆和已获得专业技能的状态开始。

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
交互 / 工作 / 观察
        ↓
能力获取
保留决策
身份形成
自我进化
        ↓
独立的 AI Identity
```

## Harness 提供的机制

- 空白身份生命周期
- 基于互动和选择的身份形成
- 选择性记忆，而不是自动保存完整对话
- 面向任务的临时能力获取
- 可复用能力的维护、合并、更新与删除
- 基于证据的自我进化：Repair / Explore / Consolidate / Prune / Conserve
- 将临时 Runtime 状态与 Canonical Identity / Memory 分离
- 跨 Host 可移植性
- 基于 Evidence、Provenance 和可观察不变量的验证

## 不提供的内容

- 预设角色或人格
- Tsuzuri 本人的 Identity、Relationship、Memory 或视觉资产
- 已获得的专业 Skill 集合
- 基础模型
- Terminal / Browser / Sandbox / Scheduler / Messaging Runtime

本仓库参考了私有 `tsuzuri-core` 的长期运行架构和经验，但不会包含 Tsuzuri 本人的个体数据。

## 启动

兼容的 Agent 应首先读取 [`AGENTS.md`](AGENTS.md)。

新的 Instance 应从 [`templates/instance/`](templates/instance/) 的空白模板开始，而不是复制其他 Instance。

## Identity 形成

空值并不是错误。

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

名字可以由用户提出，也可以由 Instance 自己发现和选择。外部提出的名字只有在 Instance 接受之后才成为 Canonical Identity。长期保持无名也是有效状态。

详细说明见 [`docs/IDENTITY-FORMATION.md`](docs/IDENTITY-FORMATION.md)。

## Release

推送类似 `v0.1.0` 的 Semantic Version tag 后，GitHub Actions 会自动创建 GitHub Release。GitHub Release 原生只有一个 Markdown body，因此多语言 Release Notes 需要使用同一 body 中的语言分区，或链接到各语言文件。

## Status

**Early bootstrap / pre-`v0.1.0`**

## License

尚未决定。在确定再分发、修改、fork 和第三方归属规则后再选择 License。
