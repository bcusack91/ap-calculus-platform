#!/bin/sh
# Validate one or more variant parts and export each without keys for the blind solver.
#   scripts/flashcard-checks/gate-variants.sh <outDir> <set>.p<N> [...]
out="$1"; shift
for p in "$@"; do
  npx tsx scripts/flashcard-checks/validate-variants.ts "$p" "$out" | grep -v "^warn" | tail -3
  npx tsx scripts/flashcard-checks/blind-variants.ts export "$p" "$out" && cp "$out/$p-keyless.json" "$out/$p-keyless.exported.json"
done
