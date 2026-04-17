import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-csp-sprint',
  title: '4-Week AP CS Principles Sprint',
  description: 'Fast review of core CS Principles topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Creative Development Review', type: 'LESSON' as const, topicSlug: 'csp-creative-development', dayOfWeek: 1 },
      { title: 'Collaboration Review', type: 'LESSON' as const, topicSlug: 'csp-collaboration-development', dayOfWeek: 2 },
      { title: 'Binary & Data Review', type: 'LESSON' as const, topicSlug: 'csp-binary-data', dayOfWeek: 3 },
      { title: 'Data Compression Review', type: 'LESSON' as const, topicSlug: 'csp-data-compression-analysis', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Data & Info Review', type: 'LESSON' as const, topicSlug: 'csp-data', dayOfWeek: 0 },
      { title: 'Algorithms Review', type: 'LESSON' as const, topicSlug: 'csp-algorithms', dayOfWeek: 2 },
      { title: 'Variables & Control Review', type: 'LESSON' as const, topicSlug: 'csp-variables-control', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Systems & Networks Review', type: 'LESSON' as const, topicSlug: 'csp-computing-systems-networks', dayOfWeek: 0 },
      { title: 'Internet Protocols Review', type: 'LESSON' as const, topicSlug: 'csp-internet-protocols', dayOfWeek: 2 },
      { title: 'Fault Tolerance Review', type: 'LESSON' as const, topicSlug: 'csp-fault-tolerance-security', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Safe Computing Review', type: 'LESSON' as const, topicSlug: 'csp-safe-computing', dayOfWeek: 0 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-csp-standard',
  title: '10-Week AP CS Principles Plan',
  description: 'Balanced study schedule covering all CS Principles units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Creative Development', type: 'LESSON' as const, topicSlug: 'csp-creative-development', dayOfWeek: 1 },
      { title: 'Collaboration', type: 'LESSON' as const, topicSlug: 'csp-collaboration-development', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Binary & Data', type: 'LESSON' as const, topicSlug: 'csp-binary-data', dayOfWeek: 0 },
      { title: 'Data Compression', type: 'LESSON' as const, topicSlug: 'csp-data-compression-analysis', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Data & Info', type: 'LESSON' as const, topicSlug: 'csp-data', dayOfWeek: 0 },
      { title: 'Algorithms', type: 'LESSON' as const, topicSlug: 'csp-algorithms', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Variables & Control', type: 'LESSON' as const, topicSlug: 'csp-variables-control', dayOfWeek: 0 },
      { title: 'Procedures & Lists', type: 'LESSON' as const, topicSlug: 'csp-procedures-lists', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Systems & Networks', type: 'LESSON' as const, topicSlug: 'csp-computing-systems-networks', dayOfWeek: 0 },
      { title: 'Internet Protocols', type: 'LESSON' as const, topicSlug: 'csp-internet-protocols', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Fault Tolerance', type: 'LESSON' as const, topicSlug: 'csp-fault-tolerance-security', dayOfWeek: 0 },
      { title: 'Impact of Computing', type: 'LESSON' as const, topicSlug: 'csp-impact-of-computing', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Safe Computing', type: 'LESSON' as const, topicSlug: 'csp-safe-computing', dayOfWeek: 0 },
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
  id: '16-week-csp-comprehensive',
  title: '16-Week AP CS Principles Mastery',
  description: 'In-depth study plan covering all CS Principles units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Creative Development', type: 'LESSON' as const, topicSlug: 'csp-creative-development', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Collaboration', type: 'LESSON' as const, topicSlug: 'csp-collaboration-development', dayOfWeek: 0 }, { title: 'Binary & Data', type: 'LESSON' as const, topicSlug: 'csp-binary-data', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Data Compression', type: 'LESSON' as const, topicSlug: 'csp-data-compression-analysis', dayOfWeek: 0 }, { title: 'Data & Info', type: 'LESSON' as const, topicSlug: 'csp-data', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Algorithms', type: 'LESSON' as const, topicSlug: 'csp-algorithms', dayOfWeek: 0 }, { title: 'Variables & Control', type: 'LESSON' as const, topicSlug: 'csp-variables-control', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Procedures & Lists', type: 'LESSON' as const, topicSlug: 'csp-procedures-lists', dayOfWeek: 0 }, { title: 'Systems & Networks', type: 'LESSON' as const, topicSlug: 'csp-computing-systems-networks', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Internet Protocols', type: 'LESSON' as const, topicSlug: 'csp-internet-protocols', dayOfWeek: 0 }, { title: 'Fault Tolerance', type: 'LESSON' as const, topicSlug: 'csp-fault-tolerance-security', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Impact of Computing', type: 'LESSON' as const, topicSlug: 'csp-impact-of-computing', dayOfWeek: 0 }, { title: 'Safe Computing', type: 'LESSON' as const, topicSlug: 'csp-safe-computing', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
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

export const AP_CSP_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP CS Principles',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-cs-principles', label: 'AP CS Principles' },
  apiEndpoint: '/api/ap-csp-study-plans',
  accent: 'blue',
  examLabel: 'AP Exam Date',
  plans: AP_CSP_PLANS,
}
