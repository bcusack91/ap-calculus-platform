import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

// Resolvable interactive-lesson slugs for Geometry (verified via getInteractiveTopicConfig):
//   triangle-congruence-geometry, circles-geometry, coordinate-proofs-geometry,
//   rigid-transformations-geo, reflection-geo, rotation-geo, translation-geo

const sprint: StudyPlanTemplate = {
  id: '4-week-geometry-sprint',
  title: '4-Week Geometry Sprint',
  description: 'A fast review of the most-tested Geometry topics — triangle congruence, circles, transformations, and coordinate proofs — for students who need a focused refresh.',
  durationWeeks: 4, targetImprovement: '1 letter grade', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Geometry Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Triangle Congruence (SSS, SAS, ASA)', type: 'LESSON', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 1 },
      { title: 'CPCTC & Congruence Proofs', type: 'LESSON', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 3 },
      { title: 'Congruence Quiz', type: 'QUIZ', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 4 },
      { title: 'Triangles Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Circle Basics & Theorems', type: 'LESSON', topicSlug: 'circles-geometry', dayOfWeek: 0 },
      { title: 'Arcs, Sectors & Inscribed Angles', type: 'LESSON', topicSlug: 'circles-geometry', dayOfWeek: 2 },
      { title: 'Circles Practice', type: 'PRACTICE', topicSlug: 'circles-geometry', dayOfWeek: 4 },
      { title: 'Circles Quiz', type: 'QUIZ', topicSlug: 'circles-geometry', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Rigid Transformations', type: 'LESSON', topicSlug: 'rigid-transformations-geo', dayOfWeek: 0 },
      { title: 'Reflections', type: 'LESSON', topicSlug: 'reflection-geo', dayOfWeek: 2 },
      { title: 'Rotations & Translations', type: 'LESSON', topicSlug: 'rotation-geo', dayOfWeek: 4 },
      { title: 'Transformations Quiz', type: 'QUIZ', topicSlug: 'rigid-transformations-geo', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Coordinate Proofs', type: 'LESSON', topicSlug: 'coordinate-proofs-geometry', dayOfWeek: 0 },
      { title: 'Coordinate Geometry Practice', type: 'PRACTICE', topicSlug: 'coordinate-proofs-geometry', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-geometry-standard',
  title: '8-Week Geometry Plan',
  description: 'A balanced plan covering congruence, similarity, circles, transformations, and coordinate proofs with regular quizzes, practice, and a full practice test.',
  durationWeeks: 8, targetImprovement: '1–2 letter grades', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the Geometry Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 1 },
      { title: 'Triangle Congruence Criteria', type: 'LESSON', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 3 },
      { title: 'Triangles Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Proving Triangles Congruent', type: 'LESSON', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 0 },
      { title: 'CPCTC & Isosceles Triangles', type: 'LESSON', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 2 },
      { title: 'Congruence Practice', type: 'PRACTICE', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 4 },
      { title: 'Congruence Quiz', type: 'QUIZ', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Circle Basics & Central Angles', type: 'LESSON', topicSlug: 'circles-geometry', dayOfWeek: 0 },
      { title: 'Inscribed Angles & Chord Theorems', type: 'LESSON', topicSlug: 'circles-geometry', dayOfWeek: 2 },
      { title: 'Arc Length & Sector Area', type: 'LESSON', topicSlug: 'circles-geometry', dayOfWeek: 4 },
      { title: 'Circles Quiz', type: 'QUIZ', topicSlug: 'circles-geometry', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Translations', type: 'LESSON', topicSlug: 'translation-geo', dayOfWeek: 0 },
      { title: 'Reflections', type: 'LESSON', topicSlug: 'reflection-geo', dayOfWeek: 2 },
      { title: 'Rotations', type: 'LESSON', topicSlug: 'rotation-geo', dayOfWeek: 4 },
      { title: 'Transformations Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Composing Rigid Transformations', type: 'LESSON', topicSlug: 'rigid-transformations-geo', dayOfWeek: 0 },
      { title: 'Symmetry & Congruence via Transformations', type: 'LESSON', topicSlug: 'rigid-transformations-geo', dayOfWeek: 2 },
      { title: 'Mid-Course Checkpoint Practice', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Coordinate Plane & Distance', type: 'LESSON', topicSlug: 'coordinate-proofs-geometry', dayOfWeek: 0 },
      { title: 'Slope, Midpoint & Partitioning', type: 'LESSON', topicSlug: 'coordinate-proofs-geometry', dayOfWeek: 2 },
      { title: 'Coordinate Proofs', type: 'LESSON', topicSlug: 'coordinate-proofs-geometry', dayOfWeek: 4 },
      { title: 'Coordinate Geometry Quiz', type: 'QUIZ', topicSlug: 'coordinate-proofs-geometry', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Circles & Transformations Review', type: 'LESSON', topicSlug: 'circles-geometry', dayOfWeek: 0 },
      { title: 'Congruence & Coordinate Practice', type: 'PRACTICE', topicSlug: 'triangle-congruence-geometry', dayOfWeek: 2 },
      { title: 'Transformations Practice', type: 'PRACTICE', topicSlug: 'rigid-transformations-geo', dayOfWeek: 4 },
      { title: 'Cumulative Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Full Geometry Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Missed Problems', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Test Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const GEOMETRY_PLANS: StudyPlanTemplate[] = [sprint, standard]

export const config: StudyPlanSelectorConfig = {
  subject: 'Geometry',
  description: 'Choose a pre-built study schedule for Geometry covering triangle congruence, circles, transformations, and coordinate proofs.',
  backLink: { href: '/geometry', label: 'Geometry' },
  apiEndpoint: '/api/geometry-study-plans',
  accent: 'emerald',
  examLabel: 'Target Test Date',
  plans: GEOMETRY_PLANS,
  diagnosticPrefix: 'geometry-diagnostic',
}
