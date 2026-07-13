#!/usr/bin/env bash
# Prints the next pending WBS day (docs/WBS.md) as a one-line reminder.
# Used by the SessionStart hook and by the daily-kickoff skill.
set -euo pipefail
cd "$(dirname "$0")/.."

wbs="docs/WBS.md"
if [ ! -f "$wbs" ]; then
  exit 0
fi

line=$(grep -m1 -E '^\| .*⬜ 예정' "$wbs" || true)
if [ -z "$line" ]; then
  echo "WBS 알림 (fleet_web): docs/WBS.md에 남은 '⬜ 예정' 작업이 없습니다. 다음 Phase/Day를 추가할 때입니다."
  exit 0
fi

day=$(echo "$line" | awk -F'|' '{gsub(/^[ \t]+|[ \t]+$/,"",$2); print $2}')
task=$(echo "$line" | awk -F'|' '{gsub(/^[ \t]+|[ \t]+$/,"",$3); print $3}')
criteria=$(echo "$line" | awk -F'|' '{gsub(/^[ \t]+|[ \t]+$/,"",$4); print $4}')

echo "WBS 알림 (fleet_web): 다음 작업은 Day ${day} — ${task} (완료 기준: ${criteria}). 세션 시작 시 이 작업을 오늘 할 일로 제안하고, docs/FEATURES.md에서 대응하는 기능 스펙(F 번호)을 같이 확인할 것."
