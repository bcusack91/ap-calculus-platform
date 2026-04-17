import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-english-lit-sprint',
  title: '4-Week AP English Literature Sprint',
  description: 'Fast review of core English Literature topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Short Fiction: Character Review', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-1', dayOfWeek: 1 },
      { title: 'Short Fiction: Plot Review', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-2', dayOfWeek: 2 },
      { title: 'Short Fiction: Theme Review', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-3', dayOfWeek: 3 },
      { title: 'Poetry: Imagery Review', type: 'LESSON' as const, topicSlug: 'englit-poetry-1', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Poetry: Tone Review', type: 'LESSON' as const, topicSlug: 'englit-poetry-2', dayOfWeek: 0 },
      { title: 'Poetic Structure Review', type: 'LESSON' as const, topicSlug: 'englit-poetic-structure-form', dayOfWeek: 2 },
      { title: 'Sound Devices Review', type: 'LESSON' as const, topicSlug: 'englit-sound-devices', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Novel Themes Review', type: 'LESSON' as const, topicSlug: 'englit-longer-fiction-2', dayOfWeek: 0 },
      { title: 'Dramatic Structure Review', type: 'LESSON' as const, topicSlug: 'englit-dramatic-structure', dayOfWeek: 2 },
      { title: 'Figurative Language Review', type: 'LESSON' as const, topicSlug: 'englit-figurative-language', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Plot & Conflict Review', type: 'LESSON' as const, topicSlug: 'englit-plot-conflict-theme', dayOfWeek: 0 },
      { title: 'Social Commentary Review', type: 'LESSON' as const, topicSlug: 'englit-social-commentary-drama', dayOfWeek: 2 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-english-lit-standard',
  title: '10-Week AP English Literature Plan',
  description: 'Balanced study schedule covering all English Literature units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Short Fiction: Character', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-1', dayOfWeek: 1 },
      { title: 'Short Fiction: Plot', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-2', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Short Fiction: Theme', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-3', dayOfWeek: 0 },
      { title: 'Poetry: Imagery', type: 'LESSON' as const, topicSlug: 'englit-poetry-1', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Poetry: Tone', type: 'LESSON' as const, topicSlug: 'englit-poetry-2', dayOfWeek: 0 },
      { title: 'Poetic Structure', type: 'LESSON' as const, topicSlug: 'englit-poetic-structure-form', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Sound Devices', type: 'LESSON' as const, topicSlug: 'englit-sound-devices', dayOfWeek: 0 },
      { title: 'Novel Analysis', type: 'LESSON' as const, topicSlug: 'englit-longer-fiction', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Novel Themes', type: 'LESSON' as const, topicSlug: 'englit-longer-fiction-2', dayOfWeek: 0 },
      { title: 'Dramatic Structure', type: 'LESSON' as const, topicSlug: 'englit-dramatic-structure', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Figurative Language', type: 'LESSON' as const, topicSlug: 'englit-figurative-language', dayOfWeek: 0 },
      { title: 'Symbol & Motif', type: 'LESSON' as const, topicSlug: 'englit-symbol-motif-fiction', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Plot & Conflict', type: 'LESSON' as const, topicSlug: 'englit-plot-conflict-theme', dayOfWeek: 0 },
      { title: 'Social Commentary', type: 'LESSON' as const, topicSlug: 'englit-social-commentary-drama', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 },
      { title: 'FRQ Practice', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 },
      { title: 'Second Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '16-week-english-lit-comprehensive',
  title: '16-Week AP English Literature Mastery',
  description: 'In-depth study plan covering all English Literature units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Short Fiction: Character', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-1', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Short Fiction: Plot', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-2', dayOfWeek: 0 }, { title: 'Short Fiction: Theme', type: 'LESSON' as const, topicSlug: 'englit-short-fiction-3', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Poetry: Imagery', type: 'LESSON' as const, topicSlug: 'englit-poetry-1', dayOfWeek: 0 }, { title: 'Poetry: Tone', type: 'LESSON' as const, topicSlug: 'englit-poetry-2', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Poetic Structure', type: 'LESSON' as const, topicSlug: 'englit-poetic-structure-form', dayOfWeek: 0 }, { title: 'Sound Devices', type: 'LESSON' as const, topicSlug: 'englit-sound-devices', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Novel Analysis', type: 'LESSON' as const, topicSlug: 'englit-longer-fiction', dayOfWeek: 0 }, { title: 'Novel Themes', type: 'LESSON' as const, topicSlug: 'englit-longer-fiction-2', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Dramatic Structure', type: 'LESSON' as const, topicSlug: 'englit-dramatic-structure', dayOfWeek: 0 }, { title: 'Figurative Language', type: 'LESSON' as const, topicSlug: 'englit-figurative-language', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Symbol & Motif', type: 'LESSON' as const, topicSlug: 'englit-symbol-motif-fiction', dayOfWeek: 0 }, { title: 'Plot & Conflict', type: 'LESSON' as const, topicSlug: 'englit-plot-conflict-theme', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Social Commentary', type: 'LESSON' as const, topicSlug: 'englit-social-commentary-drama', dayOfWeek: 0 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }]),
  ],
}

export const AP_ENG_LIT_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP English Literature',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-english-literature', label: 'AP English Literature' },
  apiEndpoint: '/api/ap-english-lit-study-plans',
  accent: 'rose',
  examLabel: 'AP Exam Date',
  plans: AP_ENG_LIT_PLANS,
}
