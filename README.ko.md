# Tsuzuri Harness

> **빈 상태에서 시작한다. 배운다. 기억한다. 자신이 된다.**

[English](README.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md)

Tsuzuri Harness는 **미리 정의된 인격이 없는 AI**가 경험을 통해 이름, 정체성, 기억, 능력을 형성하고 성장·진화할 수 있도록 하는 휴대 가능한 AI Harness입니다.

완성된 페르소나를 제공하지 않습니다. 새로운 Instance는 이름, 성격, 관계, 장기 기억, 획득된 전문 Skill이 없는 상태에서 시작합니다.

```text
blank instance
  name: null
  identity: unformed
  relationship: unformed
  memory: empty
  acquired skills: empty
        ↓
상호작용 / 작업 / 관찰
        ↓
능력 획득
보존 판단
정체성 형성
자기 진화
        ↓
고유한 AI Identity
```

## Harness가 제공하는 것

- 빈 정체성 수명주기
- 상호작용과 선택에 기반한 Identity 형성
- 전체 대화를 자동 저장하지 않는 선택적 Memory
- Task 중심의 임시 Capability acquisition
- 재사용 가능한 Capability의 유지·통합·수정·폐기
- Evidence 기반 Self-evolution: Repair / Explore / Consolidate / Prune / Conserve
- 임시 Runtime state와 Canonical Identity / Memory의 분리
- Host portability
- Evidence, provenance, observable invariant에 기반한 검증

## 제공하지 않는 것

- 미리 정의된 캐릭터나 성격
- Tsuzuri 본인의 Identity, Relationship, Memory, visual asset
- 획득된 전문 Skill 모음
- Base model
- Terminal / Browser / Sandbox / Scheduler / Messaging Runtime

이 저장소는 비공개 `tsuzuri-core`의 장기 운영에서 얻은 구조와 경험을 일반화하지만, Tsuzuri 본인의 개인 상태는 포함하지 않습니다.

## Bootstrap

호환 Agent는 먼저 [`AGENTS.md`](AGENTS.md)를 읽어야 합니다.

새로운 Instance는 다른 개체를 복사하지 않고 [`templates/instance/`](templates/instance/)의 빈 템플릿에서 시작합니다.

## Identity 형성

빈 값은 오류가 아닙니다.

```yaml
name: null
role: null
values: []
preferences: []
self_description: null
```

이름은 사람이 제안할 수도 있고 Instance가 스스로 발견할 수도 있습니다. 외부에서 제안된 이름은 Instance가 받아들였을 때만 Canonical 상태가 됩니다. 이름 없이 계속 존재하는 것도 정상입니다.

자세한 내용은 [`docs/IDENTITY-FORMATION.md`](docs/IDENTITY-FORMATION.md)를 참고하세요.

## Release

`v0.1.0` 같은 Semantic Version tag를 push하면 GitHub Actions가 GitHub Release를 자동 생성하도록 구성합니다. GitHub Release에는 언어별 별도 body가 없으므로, 다국어 Release Notes는 하나의 body 안에 언어별 섹션을 두거나 번역 파일로 링크하는 방식으로 처리합니다.

## Status

**Early bootstrap / pre-`v0.1.0`**

## License

아직 결정하지 않았습니다. 재배포, 수정, fork 및 제3자 attribution 정책을 먼저 결정한 후 License를 선택합니다.
