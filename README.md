# Mini-Fleet: Light-weight Robot Control System

로봇관제 팀 합류를 목표로 진행하는 개인 사이드 프로젝트. Next.js 기반으로 2D 지도 → 3D 뷰어 → 관제/제어 순서로 확장한다.

## 문서 구성

| 문서 | 역할 |
| --- | --- |
| [`docs/ROADMAP.md`](./docs/ROADMAP.md) | Phase 1~3 목표, 핵심 기능, 완료 기준, 기술 스택 — "무엇을, 왜, 어떤 순서로" 만드는지 |
| [`docs/STRUCTURE.md`](./docs/STRUCTURE.md) | 디렉토리 구조와 설계 원칙 — "어디에 무엇을 두는지" |
| [`docs/WBS.md`](./docs/WBS.md) | 하루 30분 단위로 쪼갠 작업 목록 — "오늘 뭘 하는지" |
| [`docs/FEATURES.md`](./docs/FEATURES.md) | WBS 각 작업과 대응하는 기능 명세서 — "그 작업이 정확히 뭘 만드는지" (입출력, 상태, 완료 기준) |
| [`docs/ROUTINE.md`](./docs/ROUTINE.md) | 매일 작업 루틴 — 세션 시작(WBS 알림)부터 종료(Obsidian 기록·git push)까지 흐름과 담당 스킬/훅 |
| `README.md` (이 파일) | 프로젝트 소개, 실행 방법 — 저장소 진입점 |
| [`AGENTS.md`](./AGENTS.md) (`CLAUDE.md`에서 참조) | AI 코딩 에이전트용 컨텍스트 — 이 Next.js 버전의 학습 데이터와 다른 breaking changes 안내 |

`README.md`, `AGENTS.md`, `CLAUDE.md`는 각각 GitHub 저장소 첫 화면 노출, AI 코딩 에이전트 자동 인식을 위해 관례상 루트에 두고, 나머지 기획/설계 문서는 `docs/`에 모아둔다.

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인.
