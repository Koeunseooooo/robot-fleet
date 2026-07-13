# WBS (Work Breakdown Structure)

학습 목적 사이드 프로젝트이므로 **하루 = 30분 이내로 끝낼 수 있는 작업 1개** 기준으로 쪼갰다. 순서대로 하루에 하나씩 진행하는 것을 기본으로 하되, 컨디션에 따라 하루에 여러 개를 진행해도 무방하다.

- **상태**: `⬜ 예정` / `✅ 완료`
- 완료한 Day는 상태를 갱신하고, 그날의 TIL/공부 포인트는 Obsidian에, 코드는 git에 반영한다.
- Phase 완료 시점마다 Vercel Production 배포를 확인하고 git 태그(`v0.1.0`, `v0.2.0`, `v1.0.0`)를 남긴다.
- 각 기능의 상세 스펙은 [`FEATURES.md`](./FEATURES.md)에서 Day 번호로 대응시켜 확인한다.

## Phase 0 — 준비 (완료, 기록용)

| Day | 작업 내용 | 산출물 / 완료 기준 | 상태 |
| --- | --- | --- | --- |
| 0-1 | GitHub 저장소(`Koeunseooooo/robot-fleet`) 연동 | 로컬 repo ↔ origin 연결, 첫 push | ✅ 완료 |
| 0-2 | Next.js 스캐폴딩 + 기술스택(OpenLayers/Three.js) 검증 | `/verify` 페이지 렌더링 스크린샷 확인 | ✅ 완료 |
| 0-3 | 프로젝트 구조 설계 (`STRUCTURE.md`) | `src/` 하위 디렉토리 및 `mock-server/` 자리 확정 | ✅ 완료 |
| 0-4 | 문서 정리 (`ROADMAP.md` 개명, 문서 역할 정리, WBS 작성) | `README.md`에 문서 표, 이 `WBS.md` | ✅ 완료 |
| 0-5 | Storybook 설치/설정 + `ui/Button` 예제 스토리 | `npm run storybook`으로 Button 스토리 렌더링 확인 | ✅ 완료 |

## Phase 1 — MVP: 2D 격자 지도와 실시간 뽈뽈이

| Day | 작업 내용 | 산출물 / 완료 기준 | 상태 |
| --- | --- | --- | --- |
| 1 | Vercel 프로젝트 연결 + GitHub Actions CI 구성 (lint/typecheck/build) | push 시 Preview 배포 URL 생성 확인 | ⬜ 예정 |
| 2 | Mock 서버 스펙 정의 (좌표/상태 JSON 포맷 설계) | `mock-server/`에 스펙 문서 또는 타입 초안 | ⬜ 예정 |
| 3 | Mock 서버 프로젝트 초기화 + 기본 서버 기동 | `node mock-server` 실행 시 응답 확인 | ⬜ 예정 |
| 4 | Mock 서버: 로봇 좌표 랜덤 이동 로직 (REST) | `GET /robots` 호출 시 좌표 변화 | ⬜ 예정 |
| 5 | Mock 서버: 로봇 상태(Running/Error/Charging) 랜덤 전환 로직 | 상태값이 주기적으로 바뀜 | ⬜ 예정 |
| 6 | FE 타입 정의 (`Robot`/`Position`/`RobotStatus`) | `src/types` 작성 | ⬜ 예정 |
| 7 | Zustand `robotStore` 설계 및 기본 구현 (실시간 좌표/상태, 선택 로봇, 뷰 모드) | 스토어 상태 콘솔 확인 | ⬜ 예정 |
| 8 | TanStack Query 세팅 + Polling 훅(`useRobotPolling`, `refetchInterval`)으로 mock 서버 연동, 응답을 `robotStore`에 반영 | 0.5초 주기로 store 갱신 확인 | ⬜ 예정 |
| 9 | OpenLayers 격자(Grid) 배경 레이어 구현 | 지도 페이지에 격자 렌더링 | ⬜ 예정 |
| 10 | 로봇 좌표 → Vector Layer 마커 렌더링 | 지도 위 로봇 점 표시 | ⬜ 예정 |
| 11 | 로봇 이동 애니메이션(보간) 처리 | 좌표 변경 시 부드럽게 이동 | ⬜ 예정 |
| 12 | 좌측 로봇 리스트 UI 구현 | 리스트에 3~5대 상태 표시 | ⬜ 예정 |
| 13 | 로봇 리스트 ↔ 지도 상태 연동 (선택 하이라이트) | 리스트 클릭 시 지도 포커스 | ⬜ 예정 |
| 14 | 로봇 클릭 시 이동 궤적(Line) 렌더링 | 클릭한 로봇의 궤적 라인 표시 | ⬜ 예정 |
| 15 | Error 상태 빨간색 깜빡임 인터랙션 | Error 시 시각적 피드백 확인 | ⬜ 예정 |
| 16 | Mock 서버 WebSocket 엔드포인트 추가 | ws 연결 시 좌표 push 확인 | ⬜ 예정 |
| 17 | FE Polling → WebSocket 훅 전환 | 소켓 기반 실시간 갱신 확인 | ⬜ 예정 |
| 18 | FE 테스트 환경 구성 (Vitest + React Testing Library) + `robotStore`/유틸 함수 예제 테스트 1개 작성 | `npx vitest run` 통과 | ⬜ 예정 |
| 19 | Phase 1 통합 테스트 및 버그 수정 | 완료 기준 항목 전체 체크 | ⬜ 예정 |
| 20 | Phase 1 배포 확인 및 태깅 (`v0.1.0`) | Vercel Production에서 데모 확인 | ⬜ 예정 |

## Phase 2 — 3D 뷰어 전환: Three.js 맛보기

| Day | 작업 내용 | 산출물 / 완료 기준 | 상태 |
| --- | --- | --- | --- |
| 21 | 3D Canvas 기본 세팅 + 바닥(`PlaneGeometry`) 구현 | 3D 페이지에 바닥 렌더링 | ⬜ 예정 |
| 22 | 로봇 큐브(`BoxGeometry`) + `robotStore` 연동 렌더링 | 3D 공간에 로봇 위치 반영 | ⬜ 예정 |
| 23 | `useFrame` 기반 실시간 좌표 업데이트 | 좌표 변경 시 큐브 이동 | ⬜ 예정 |
| 24 | OrbitControls 카메라 조작 추가 | 드래그로 360도 회전 | ⬜ 예정 |
| 25 | 2D/3D 전환 토글 버튼 UI | 버튼 클릭 시 화면 전환 | ⬜ 예정 |
| 26 | 토글 상태에 따른 컴포넌트 스위칭 로직 | 상태 공유하며 뷰만 교체 | ⬜ 예정 |
| 27 | 로봇 더블클릭 카메라 추적 로직 (기본) | 특정 로봇 따라가기 동작 | ⬜ 예정 |
| 28 | 카메라 추적 보간(lerp) 부드럽게 처리 | 카메라 이동이 자연스러움 | ⬜ 예정 |
| 29 | Phase 2 통합 테스트 및 버그 수정 | 완료 기준 항목 전체 체크 | ⬜ 예정 |
| 30 | Phase 2 배포 확인 및 태깅 (`v0.2.0`) | Vercel Production에서 3D 토글 데모 확인 | ⬜ 예정 |

## Phase 3 — 관제 이벤트 및 제어

| Day | 작업 내용 | 산출물 / 완료 기준 | 상태 |
| --- | --- | --- | --- |
| 31 | `FleetEvent` 타입 정의 + Mock 서버 이벤트 발행 로직 | 무작위 충돌 이벤트 발행 확인 | ⬜ 예정 |
| 32 | FE WebSocket 이벤트 구독 훅 구현 | 이벤트 수신 콘솔 확인 | ⬜ 예정 |
| 33 | 토스트 알림 UI 구현 | 이벤트 수신 시 토스트 표시 | ⬜ 예정 |
| 34 | 2D/3D 화면 경고 마커 표시 | 해당 로봇 위치에 ⚠️ 표시 | ⬜ 예정 |
| 35 | 지도 클릭 좌표 선택 UI | 빈 좌표 클릭 시 선택 상태 표시 | ⬜ 예정 |
| 36 | 원격 이동 명령 패널 UI | 선택 좌표 + 전송 버튼 구현 | ⬜ 예정 |
| 37 | FE → Mock 서버 명령 전송 (WS publish) | 명령 전송 시 서버 로그 확인 | ⬜ 예정 |
| 38 | Mock 서버: 명령 수신 후 로봇 이동 반영 | 로봇이 지정 좌표로 이동 시작 | ⬜ 예정 |
| 39 | Phase 3 통합 테스트 및 버그 수정 | 완료 기준 항목 전체 체크 | ⬜ 예정 |
| 40 | Phase 3 최종 배포 + 데모 정리 (`v1.0.0`) | Vercel Production 최종 데모, README 데모 링크 갱신 | ⬜ 예정 |

## CI/CD 메모

- **Vercel**: GitHub 저장소(`Koeunseooooo/robot-fleet`)와 연결해 `main` 브랜치 push마다 Production 자동 배포, 그 외 브랜치/PR은 Preview 배포.
- **GitHub Actions**: `.github/workflows/ci.yml`에서 `npm ci && npm run lint && npx tsc --noEmit && npm run build`를 push/PR마다 실행해 배포 전 최소 품질 게이트 확보.
- Phase 완료 Day(20, 30, 40)에는 실제 배포 URL에서 눈으로 확인 후 `git tag`로 마일스톤을 남긴다.

## FE 테스트 메모

- **Storybook (`@storybook/addon-vitest`)**: 스토리를 브라우저(Playwright)에서 렌더링해 시각적으로 깨지지 않았는지 확인하는 용도. `vitest.config.ts`의 `storybook` project가 담당.
- **Vitest + React Testing Library (Day 18 도입)**: jsdom 환경에서 컴포넌트 로직/렌더링 결과를 빠르게 단위 테스트하는 용도. `vitest.config.ts`에 `unit` project를 추가해 두 종류의 테스트를 분리 운영한다.
- 처음부터 커버리지를 욕심내지 않는다 — `robotStore`의 좌표 갱신 로직처럼 "틀리면 눈에 바로 티 나지 않는" 순수 로직 위주로 테스트를 붙인다.
