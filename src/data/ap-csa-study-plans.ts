import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-csa-sprint',
  title: '4-Week AP Computer Science A Sprint',
  description: 'Fast review of core Computer Science A topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Variables & Types Review', type: 'LESSON' as const, topicSlug: 'csa-variables-types', dayOfWeek: 1 },
      { title: 'Expressions & Operators Review', type: 'LESSON' as const, topicSlug: 'csa-expressions-operators', dayOfWeek: 2 },
      { title: 'Strings & Objects Review', type: 'LESSON' as const, topicSlug: 'csa-strings-objects', dayOfWeek: 3 },
      { title: 'Using Objects Review', type: 'LESSON' as const, topicSlug: 'csa-using-objects', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Boolean & If Review', type: 'LESSON' as const, topicSlug: 'csa-boolean-if', dayOfWeek: 0 },
      { title: 'Conditionals Review', type: 'LESSON' as const, topicSlug: 'csa-conditionals', dayOfWeek: 2 },
      { title: 'Iteration Review', type: 'LESSON' as const, topicSlug: 'csa-iteration', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Writing Classes Review', type: 'LESSON' as const, topicSlug: 'csa-writing-classes', dayOfWeek: 0 },
      { title: 'Class Design Review', type: 'LESSON' as const, topicSlug: 'csa-class-design', dayOfWeek: 2 },
      { title: 'Arrays Review', type: 'LESSON' as const, topicSlug: 'csa-array', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'ArrayList Review', type: 'LESSON' as const, topicSlug: 'csa-arraylist', dayOfWeek: 0 },
      { title: '2D Arrays Review', type: 'LESSON' as const, topicSlug: 'csa-2d-array', dayOfWeek: 2 },
      { title: 'Inheritance Review', type: 'LESSON' as const, topicSlug: 'csa-inheritance', dayOfWeek: 4 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-csa-standard',
  title: '10-Week AP Computer Science A Plan',
  description: 'Balanced study schedule covering all Computer Science A units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Variables & Types', type: 'LESSON' as const, topicSlug: 'csa-variables-types', dayOfWeek: 1 },
      { title: 'Expressions & Operators', type: 'LESSON' as const, topicSlug: 'csa-expressions-operators', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Strings & Objects', type: 'LESSON' as const, topicSlug: 'csa-strings-objects', dayOfWeek: 0 },
      { title: 'Using Objects', type: 'LESSON' as const, topicSlug: 'csa-using-objects', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Boolean & If', type: 'LESSON' as const, topicSlug: 'csa-boolean-if', dayOfWeek: 0 },
      { title: 'Conditionals', type: 'LESSON' as const, topicSlug: 'csa-conditionals', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Iteration', type: 'LESSON' as const, topicSlug: 'csa-iteration', dayOfWeek: 0 },
      { title: 'Loops', type: 'LESSON' as const, topicSlug: 'csa-loops', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Writing Classes', type: 'LESSON' as const, topicSlug: 'csa-writing-classes', dayOfWeek: 0 },
      { title: 'Class Design', type: 'LESSON' as const, topicSlug: 'csa-class-design', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Arrays', type: 'LESSON' as const, topicSlug: 'csa-array', dayOfWeek: 0 },
      { title: 'Array Algorithms', type: 'LESSON' as const, topicSlug: 'csa-arrays', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'ArrayList', type: 'LESSON' as const, topicSlug: 'csa-arraylist', dayOfWeek: 0 },
      { title: '2D Arrays', type: 'LESSON' as const, topicSlug: 'csa-2d-array', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Inheritance', type: 'LESSON' as const, topicSlug: 'csa-inheritance', dayOfWeek: 0 },
      { title: 'Polymorphism', type: 'LESSON' as const, topicSlug: 'csa-inheritance-polymorphism', dayOfWeek: 2 },
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
  id: '16-week-csa-comprehensive',
  title: '16-Week AP Computer Science A Mastery',
  description: 'In-depth study plan covering all Computer Science A units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Variables & Types', type: 'LESSON' as const, topicSlug: 'csa-variables-types', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Expressions & Operators', type: 'LESSON' as const, topicSlug: 'csa-expressions-operators', dayOfWeek: 0 }, { title: 'Strings & Objects', type: 'LESSON' as const, topicSlug: 'csa-strings-objects', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Using Objects', type: 'LESSON' as const, topicSlug: 'csa-using-objects', dayOfWeek: 0 }, { title: 'Boolean & If', type: 'LESSON' as const, topicSlug: 'csa-boolean-if', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Conditionals', type: 'LESSON' as const, topicSlug: 'csa-conditionals', dayOfWeek: 0 }, { title: 'Iteration', type: 'LESSON' as const, topicSlug: 'csa-iteration', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Loops', type: 'LESSON' as const, topicSlug: 'csa-loops', dayOfWeek: 0 }, { title: 'Writing Classes', type: 'LESSON' as const, topicSlug: 'csa-writing-classes', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Class Design', type: 'LESSON' as const, topicSlug: 'csa-class-design', dayOfWeek: 0 }, { title: 'Arrays', type: 'LESSON' as const, topicSlug: 'csa-array', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Array Algorithms', type: 'LESSON' as const, topicSlug: 'csa-arrays', dayOfWeek: 0 }, { title: 'ArrayList', type: 'LESSON' as const, topicSlug: 'csa-arraylist', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: '2D Arrays', type: 'LESSON' as const, topicSlug: 'csa-2d-array', dayOfWeek: 0 }, { title: 'Inheritance', type: 'LESSON' as const, topicSlug: 'csa-inheritance', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Target Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcard Drill', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Polymorphism', type: 'LESSON' as const, topicSlug: 'csa-inheritance-polymorphism', dayOfWeek: 0 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(12, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(13, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(14, [{ title: 'Full Practice Exam #2', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Review Results', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'FRQ Practice Set', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(15, [{ title: 'Full Practice Exam #3', type: 'PRACTICE' as const, dayOfWeek: 0 }, { title: 'Final Review & Weak Areas', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD' as const, dayOfWeek: 4 }, { title: 'Exam Tips & Strategy', type: 'CUSTOM' as const, dayOfWeek: 5 }]),
  ],
}

export const AP_CSA_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Computer Science A',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-computer-science-a', label: 'AP Computer Science A' },
  apiEndpoint: '/api/ap-csa-study-plans',
  accent: 'amber',
  examLabel: 'AP Exam Date',
  plans: AP_CSA_PLANS,
}
