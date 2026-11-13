/**
 * Shape of a section-based video lesson spec (circuits1-lesson.ts, circuits2-lesson.ts, …).
 *
 * Every video ends on a recap section (id `NN-recap`), and every video needs a
 * deck of review flashcards in src/data/video-lesson-flashcards/<key>.ts: the
 * player offers them before the recap, and the sync refuses a video without one.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export type SectionSpec = {
  id: string
  title: string
  role: 'teach' | 'problem' | 'solution'
  questions?: CheckpointQuestion[]
}
export type VideoSpec = { video: number; sections: SectionSpec[] }

export type LessonSpec = {
  /** Folder under public/video-lessons/ and the lesson-<key> clip tag. */
  key: string
  topicSlug: string
  courseSlug: string
  title: string
  instructor: {
    slug: string
    name: string
    headline: string
    bio: string
    email: string
    photoUrl?: string
    courses: string[]
  }
  videos: VideoSpec[]
}
