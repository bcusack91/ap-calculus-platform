/**
 * AP Physics 2 circuits: write (or refresh) the three video lessons built in
 * ap-physics2-circuits.ts. Same flags as sync-lesson.ts (SEED_DB=prod, APPLY=1).
 * ONLY=<lesson key> syncs one of them.
 */
import { LESSONS } from './ap-physics2-circuits'
import { syncLesson } from './sync-lesson'

async function main() {
  for (const lesson of LESSONS) {
    if (process.env.ONLY && process.env.ONLY !== lesson.key) continue
    console.log(`\n=== ${lesson.key} → ${lesson.topicSlug}`)
    await syncLesson(lesson)
  }
}
main().catch((err) => {
  console.error(err)
  process.exit(1)
})
