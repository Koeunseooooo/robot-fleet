---
name: ship
description: fleet_web(Mini-Fleet) 프로젝트에서 작업한 내용을 GitHub(Koeunseooooo/robot-fleet)에 커밋/푸시한다. "git에 올려줘", "커밋하고 푸시해줘", "작업 다 올려줘", "오늘 작업 반영해줘" 같은 요청이나 하루 작업이 끝났을 때 사용한다.
---

# 작업 내용 git 반영 (ship)

fleet_web은 학습 목적 사이드 프로젝트로, 하루 작업 단위(docs/WBS.md 기준 Day 1개 이상)가 끝나면 그 결과를 매번 GitHub에 반영한다. 저장소: `https://github.com/Koeunseooooo/robot-fleet.git`, 브랜치: `main` (직접 push, 별도 PR 프로세스 없음).

## 절차

1. `git status`로 변경 사항 확인. `.env`, credentials 등 비밀정보로 보이는 파일이 있으면 절대 add하지 말고 사용자에게 알린다.
2. `git diff` / `git diff --staged`로 실제 변경 내용을 파악한다.
3. docs/WBS.md를 참고해 오늘 작업한 Day 번호와 내용을 파악하고, 그걸 기준으로 커밋 메시지를 작성한다 (무엇을 했는지가 아니라 왜 했는지 위주로 1~2문장).
4. 관련 파일만 명시적으로 `git add` (`git add -A`/`git add .` 금지 — 의도치 않은 파일 포함 방지).
5. 아래 형식으로 커밋한다 (HEREDOC 사용):

```bash
git commit -m "$(cat <<'EOF'
<커밋 메시지>

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

6. `git push origin main` 실행.
7. push 결과와 커밋 요약을 사용자에게 짧게 보고한다.

## 주의사항

- force push, `git reset --hard`, hook 건너뛰기(`--no-verify`) 등은 절대 하지 않는다.
- docs/WBS.md의 해당 Day 상태(`⬜ 예정` → `✅ 완료`)를 아직 갱신 안 했다면, 커밋에 포함하기 전에 갱신할지 사용자에게 확인하거나 같이 갱신한다.
- 커밋할 변경 사항이 없으면 빈 커밋을 만들지 않는다.
