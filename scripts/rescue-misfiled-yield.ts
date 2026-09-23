/**
 * Rescue pass over the exam-yield artifact: a card hidden only because it sits
 * in the wrong deck must not vanish from the student's queue if no other deck
 * carries the same card.
 *
 * Classifiers were told "content outside this topic's categories" is LOW, and
 * they flagged such cards in their reasons. That is right when the fact lives
 * in its proper deck too (the student still meets it there) and wrong when
 * this misfiled copy is the only one. So: any LOW whose reason says "misfiled"
 * (or similar) is flipped to MEDIUM unless an identical card — same
 * fingerprint or same front text — is labeled HIGH/MEDIUM in another topic.
 *
 *   npx tsx scripts/rescue-misfiled-yield.ts          # report
 *   APPLY=1 npx tsx scripts/rescue-misfiled-yield.ts  # rewrite the artifact files
 */
import fs from 'node:fs'
import path from 'node:path'
import { ARTIFACT_DIR, loadArtifacts, normalizeFront, type ArtifactEntry } from '../src/lib/flashcard-yield-artifact'

const APPLY = process.env.APPLY === '1'
const MISFILED =
  /misfil|out[- ]of[- ](category|scope|topic)|outside (this|the) (section|topic|category|row|deck)|belongs? (to|in|with)|wrong (topic|deck)|different (topic|deck)|not (this|in this) (topic|deck)|off[- ]topic|other (mcat )?(topic|deck)/i

const artifacts = loadArtifacts()

// Where each card is served (HIGH/MEDIUM) anywhere in the artifact.
const servedByFp = new Set<string>()
const servedByFront = new Set<string>()
for (const entries of artifacts.values()) {
  for (const e of entries) {
    if (e.yield === 'LOW') continue
    servedByFp.add(e.fp)
    servedByFront.add(normalizeFront(e.front))
  }
}

let flagged = 0
let coveredElsewhere = 0
let rescued = 0
for (const [topic, entries] of [...artifacts.entries()].sort()) {
  let changed = false
  for (const e of entries as ArtifactEntry[]) {
    if (e.yield !== 'LOW' || !MISFILED.test(e.why)) continue
    flagged++
    if (servedByFp.has(e.fp) || servedByFront.has(normalizeFront(e.front))) {
      coveredElsewhere++
      continue
    }
    rescued++
    console.log(`  RESCUE ${topic}: "${e.front.slice(0, 80)}"\n         was: ${e.why}`)
    e.yield = 'MEDIUM'
    e.why = `${e.why.slice(0, 80)} [rescued: misfiled, not served elsewhere]`.slice(0, 120)
    changed = true
  }
  if (changed && APPLY) {
    fs.writeFileSync(path.join(ARTIFACT_DIR, `${topic}.json`), JSON.stringify(entries, null, 1))
  }
}

console.log(
  `\nLOW cards flagged as misfiled: ${flagged}; covered elsewhere (stay LOW): ${coveredElsewhere}; ` +
    `${APPLY ? 'rescued to MEDIUM' : 'would rescue to MEDIUM'}: ${rescued}`,
)
if (!APPLY && rescued) console.log('Set APPLY=1 to write.')
