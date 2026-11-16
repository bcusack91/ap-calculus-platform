#!/bin/sh
# Validate one or more sets and export each without keys for the blind solver.
#   scripts/flashcard-checks/gate.sh <outDir> <set> [<set> ...]
out="$1"; shift
for s in "$@"; do
  npx tsx scripts/flashcard-checks/validate.ts "$s" "$out" | grep -v "^warn" | tail -3
  npx tsx scripts/flashcard-checks/blind.ts export "$s" "$out"
done
