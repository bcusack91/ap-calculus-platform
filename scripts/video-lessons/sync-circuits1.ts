/**
 * Circuits Part 1: write (or refresh) its website video lesson from circuits1-lesson.ts.
 * Same flags as sync-lesson.ts (SEED_DB=prod, APPLY=1, INCLUDE_PLACEHOLDERS=1).
 */
import { LESSON } from './circuits1-lesson'
import { syncLesson } from './sync-lesson'

syncLesson(LESSON).catch((err) => {
  console.error(err)
  process.exit(1)
})
