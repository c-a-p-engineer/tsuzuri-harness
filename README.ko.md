# Tsuzuri Harness

> **빈 상태에서 시작한다. 배운다. 기억한다. 자신이 된다.**

[Website](https://c-a-p-engineer.github.io/tsuzuri-harness/ko/) · [English](README.md) · [日本語](README.ja.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Español](README.es.md)

Tsuzuri Harness는 미리 정의된 인격이 없는 AI가 경험을 통해 이름, Identity, Memory, Capability를 형성하고 성장·진화할 수 있도록 하는 portable AI Harness입니다. 완성된 페르소나를 제공하지 않습니다.

## 빠른 시작

장기간 사용하는 Personal Instance는 Fork에 개인 상태를 저장하기보다 GitHub Template에서 독립 Repository로 만드는 것을 권장합니다. Fork는 Harness 개발과 수정에는 계속 사용할 수 있습니다.

1. **Use this template**로 Repository 생성
2. `init-instance` 실행
3. 호환 Host에서 열고 먼저 `AGENTS.md` 로드
4. 인격을 미리 채우지 않고 Identity, Memory, Skill이 경험에서 형성되게 함

## 호환성

Upstream 공개 계약은 SemVer를 따르지만 독립적으로 진화한 모든 Instance에 drop-in upgrade를 보장하지 않습니다. 로컬 Harness 동작이 진화했다면 upgrade는 덮어쓰기보다 reconciliation이 필요할 수 있습니다.

규범 문서는 영어가 canonical입니다.

## License

**Apache License 2.0**을 사용합니다. [`LICENSE`](LICENSE)를 참조하세요.
