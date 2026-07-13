---
name: obsidian-log
description: fleet_web(Mini-Fleet) 세션 종료 시 오늘 작업한 내용을 Obsidian TIL과 daily report에 기록한다. "TIL 작성해줘", "오늘 정리해줘", "데일리 정리해줘", "옵시디언에 기록해줘" 같은 요청이나, 하루 작업 단위가 끝났을 때 사용한다.
---

# Obsidian TIL / Daily Report 자동 기록

fleet_web 프로젝트는 학습 목적 사이드 프로젝트다. 하루 작업 단위(WBS.md의 Day 1개, 또는 그 이상)가 끝날 때마다 두 개의 서로 다른 문서를 Obsidian vault에 작성한다. 같은 날 이미 파일이 있으면 **덮어쓰지 말고 이어서 추가**한다 (하루에 여러 세션이 있을 수 있음).

- Vault 루트: `/Users/koeunseo/Documents/Obsidian Vault/sideproj/fleet_web/`
- TIL 경로: `TIL/{YYYY-MM-DD}.md`
- Daily report 경로: `daily report/{YYYY-MM-DD}.md`
- 날짜는 시스템 컨텍스트의 오늘 날짜(currentDate)를 사용한다.

## 1. TIL (`TIL/{YYYY-MM-DD}.md`) — 무엇을 했는가

이번 세션에서 실제로 진행한 작업(코드 변경, 설정, 디버깅, 결정 사항)을 정리한다. WBS.md에서 해당하는 Day 번호가 있으면 함께 표기한다.

템플릿:

```markdown
# {YYYY-MM-DD} TIL

## 오늘 한 일
- (WBS Day N) ...
- ...

## 배운 것
- 작업 중 새로 알게 된 사실, 삽질하고 해결한 문제, 라이브러리/툴의 예상 밖 동작 등

## 다음에 할 일
- WBS 기준 다음 Day 또는 남은 작업
```

## 2. Daily report (`daily report/{YYYY-MM-DD}.md`) — 무엇을 공부해야 하는가

TIL과 달리 이 문서는 **작업 로그가 아니라 공부 포인트**다. 다음 두 가지를 합쳐서 작성한다:

1. **오늘 다룬 핵심 개념**: 오늘 작업에 실제로 쓰인 기술/개념 중 로봇관제 직무와 연관되어 깊이 알아둘 가치가 있는 것 (예: OpenLayers Vector Layer 렌더링 파이프라인, WebSocket vs Polling, Zustand의 리렌더링 최적화, Three.js useFrame과 렌더 루프, CI/CD의 배포 게이트 개념 등).
2. **대화에서 파악된 학습 의도**: 이번 세션 대화 중 사용자가 명시적으로 물어본 것뿐 아니라, 질문의 맥락이나 반복해서 파고든 주제로 미루어 "이 사람이 더 알고 싶어 하는 것 같다"고 판단되는 부분을 짚어준다. 확신이 없으면 추측이라고 표시한다.

템플릿:

```markdown
# {YYYY-MM-DD} Daily Report

## 오늘 다룬 핵심 개념
- **개념명**: 한 줄 설명 + 왜 중요한지 (실무/로봇관제 연관성)

## 공부하면 좋을 포인트 (대화 기반 추정)
- ...

## 스스로 점검할 질문
- (이해도 확인용 질문 1~3개)
```

## 실행 방법

1. 시스템 컨텍스트의 오늘 날짜를 확인한다.
2. 두 대상 폴더가 존재하는지 확인하고, 없으면 만든다.
3. 해당 날짜 파일이 이미 있으면 Read로 기존 내용을 먼저 확인하고, 새 세션 내용을 아래에 이어 붙인다 (구분선 `---` 사용). 없으면 새로 생성한다.
4. 파일 작성 후 무엇을 썼는지 사용자에게 간단히 요약해서 알려준다.
