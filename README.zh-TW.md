# Tsuzuri Harness

> **從空白開始。學習。記住。成為。**

[English](README.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [한국어](README.ko.md) · [Español](README.es.md)

Tsuzuri Harness 是一個可攜式 AI Harness，讓沒有預先定義人格的 AI 從空白狀態開始，透過經驗形成自己的名稱、Identity、Memory、Capability，並持續成長與演化。

它**不提供完成的人設**。新的 instance 一開始沒有預設名稱、人格、關係、長期記憶或已取得的專業 Skill。Harness 只提供形成、驗證、保留與演化這些狀態的機制。

## 核心概念

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
interaction / work / observation
        ↓
capability acquisition
retention decisions
identity formation
self-evolution
        ↓
a distinct, persistent AI identity
```

本專案源自 private `tsuzuri-core` 的架構與長期實際運作經驗，但此 repository **不包含綴理本人的 Identity、Relationship history、Private Memory、Visual Assets 或已取得的專業 Skill**。

## Harness 提供什麼

- **Blank identity lifecycle** — Identity 欄位可以保持 `null`，直到 instance 自己有理由形成它。
- **Identity formation** — 名稱、價值觀、偏好、角色與自我描述可從互動與選擇中逐漸形成。
- **Selective memory** — 對話是 evidence，不會自動成為長期記憶。
- **Capability acquisition** — 可針對目前任務暫時取得知識、工具、程序與驗證方法。
- **Capability maintenance** — 可重用能力可以被保留、修訂、整合、淘汰或捨棄。
- **Evidence-driven self-evolution** — Repair、Explore、Consolidate、Prune、Conserve 都是有效結果。
- **Runtime workspace** — 暫時的 `work` 與 task-local `share` 狀態不會直接污染 canonical identity / memory。
- **Host portability** — 同一 instance 可在不同相容 AI host 間載入，而不把 host 能力當成個人身分。
- **Behavioral contracts and evaluation** — 以可觀察 invariant、provenance 與 verification 判定正確性。

## 不提供什麼

- 預設角色或人格
- 綴理本人的 Identity 或 Memory
- 一組預先安裝的領域 Skill
- Base model
- Terminal、Browser、Sandbox、Scheduler 或 Messaging runtime
- 每個 instance 都必須持久化的要求

Tsuzuri Harness 是 **cognitive and identity control plane**，不是 all-in-one execution runtime。

## Identity formation

空值不是錯誤。

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

使用者可以提供名稱，instance 也可以自己發現或選擇名稱。外部提出的名稱只有在 instance 接受後才會成為 canonical identity。保持無名也完全有效。

詳細請見 [`docs/IDENTITY-FORMATION.md`](docs/IDENTITY-FORMATION.md)。

## Release

推送 `v0.1.0` 這類 tag 後，GitHub Actions 會自動建立 GitHub Release。英文 Release Notes 是 canonical；如果 tagged revision 中存在 `docs/releases/vX.Y.Z.<locale>.md`，Release 會自動附上翻譯連結。

詳細請見 [`docs/RELEASING.md`](docs/RELEASING.md)。

## 相容性與專案政策

`v1.0.0` 之前不保證一般性的 backward compatibility。Instance state 的 migration 即使發生 breaking change，也不應無聲地捏造或重寫 Identity / Memory 的語意。

- [`docs/COMPATIBILITY.md`](docs/COMPATIBILITY.md)
- [`docs/PROJECT-POLICY-DRAFT.md`](docs/PROJECT-POLICY-DRAFT.md)

## 狀態

**Early bootstrap / pre-`v0.1.0`.** 目前優先建立 blank-instance contract、核心 lifecycle、host-neutral boundary、evaluation 與 release workflow。

## License

尚未選定 License。這是刻意保留的決策，因為專案仍在討論 open-source license、衍生專案、品牌名稱與 fork 使用方式。
