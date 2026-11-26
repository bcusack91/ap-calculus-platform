/**
 * Fluids Part 2: write (or refresh) its website video lesson from fluids2-lesson.ts.
 * Same flags as sync-lesson.ts (SEED_DB=prod, APPLY=1, INCLUDE_PLACEHOLDERS=1).
 */
import { LESSON } from './fluids2-lesson'
import { syncLesson } from './sync-lesson'

syncLesson(LESSON).catch((err) => {
  console.error(err)
  process.exit(1)
})
