import type { CheckpointQuestion } from '@/lib/video-lesson-core'

/**
 * Shot lists: what an instructor records for one topic's video lesson.
 * Each clip is one 3–8 minute recording followed by its checkpoint questions
 * (graded and logged through the video-lesson routes, so every question must
 * pass checkpointQuestionSchema). mcatTags name real MCAT topic slugs whose
 * lessons the clip could later fill.
 */
export type ShotListClip = {
  title: string            // what students see in the clip list, ≤ 60 chars
  minutes: number          // target length, 3–8
  goal: string             // one sentence: what the student can do after this clip
  keyPoints: string[]      // 3–6 bullets the instructor must say/show, in order
  showOnScreen: string[]   // what to draw or display: a diagram, a worked example with its numbers, a table
  workedExample?: string   // a specific example with real numbers/species to work on camera, if the clip has one
  pitfalls?: string[]      // common student errors to call out
  lessonParts: number[]    // which lesson part(s) it covers
  mcatTags: string[]       // real MCAT topic slugs this clip could be reused in
  checkpoint: CheckpointQuestion[]  // 2–3 questions answerable from THIS clip alone
}

export type ShotList = { courseSlug: string; topicSlug: string; title: string; overview: string; clips: ShotListClip[] }
