/**
 * Guard for a re-tier pass: compares the working-tree artifact against the
 * committed one (git HEAD) and reports any card whose LOW label was promoted.
 * The owner's rule for the four-tier pass was "everything already hidden
 * stays hidden", so a promotion here is a classifier error, not a judgment.
 *
 *   npx tsx scripts/check-yield-retier.ts            # report
 *   npx tsx scripts/check-yield-retier.ts --fix      # restore LOW on those cards
 */
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { ARTIFACT_DIR, loadArtifacts, type ArtifactEntry } from '../src/lib/flashcard-yield-artifact'

const FIX = process.argv.includes('--fix')
const current = loadArtifacts()
let promoted = 0
let checked = 0

for (const [topic, entries] of [...current.entries()].sort()) {
  let committed: ArtifactEntry[]
  try {
    committed = JSON.parse(execSync(`git show HEAD:prisma/flashcard-yield/${topic}.json`, { encoding: 'utf8' }))
  } catch {
    continue // fresh topic, nothing to compare
  }
  const wasLow = new Map(committed.filter((e) => e.yield === 'LOW').map((e) => [e.fp, e]))
  let changed = false
  for (const e of entries) {
    const old = wasLow.get(e.fp)
    if (!old) continue
    checked++
    if (e.yield !== 'LOW') {
      promoted++
      console.log(`  PROMOTED ${topic}: LOW -> ${e.yield}: "${e.front.slice(0, 70)}"`)
      if (FIX) {
        e.yield = 'LOW'
        e.why = old.why
        changed = true
      }
    }
  }
  if (changed) fs.writeFileSync(path.join(ARTIFACT_DIR, `${topic}.json`), JSON.stringify(entries, null, 1))
}

console.log(`\npreviously-LOW cards checked: ${checked}; promoted: ${promoted}${FIX && promoted ? ' (restored to LOW)' : ''}`)
if (promoted && !FIX) process.exit(1)
