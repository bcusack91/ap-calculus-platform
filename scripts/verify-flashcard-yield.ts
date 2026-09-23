/**
 * Verifies the exam-yield artifact against the committed card export.
 * Read-only; no database. Non-zero exit on any integrity error.
 *
 *   npx tsx scripts/verify-flashcard-yield.ts
 *   npx tsx scripts/verify-flashcard-yield.ts --write-inputs <dir>
 *       also writes one {fp, front, back} file per topic for classifiers
 */
import fs from 'node:fs'
import path from 'node:path'
import {
  checkArtifacts,
  fingerprint,
  formatReport,
  loadArtifacts,
  loadScopedExport,
} from '../src/lib/flashcard-yield-artifact'

const exportByTopic = loadScopedExport()

const inputsAt = process.argv.indexOf('--write-inputs')
if (inputsAt >= 0) {
  const dir = process.argv[inputsAt + 1]
  if (!dir) throw new Error('--write-inputs needs a directory')
  fs.mkdirSync(dir, { recursive: true })
  for (const [topic, cards] of exportByTopic) {
    const rows = cards.map((c) => ({ fp: fingerprint(c.front, c.back), front: c.front, back: c.back }))
    fs.writeFileSync(path.join(dir, `${topic}.json`), JSON.stringify(rows, null, 1))
  }
  console.log(`wrote ${exportByTopic.size} input files to ${dir}`)
}

const result = checkArtifacts(exportByTopic, loadArtifacts())
console.log(formatReport(result))
if (result.errors.length) {
  console.error(`\n${result.errors.length} error(s):`)
  for (const e of result.errors.slice(0, 40)) console.error('  ' + e)
  if (result.errors.length > 40) console.error(`  ... ${result.errors.length - 40} more`)
  process.exit(1)
}
console.log('\nOK: every in-scope card labeled exactly once')
