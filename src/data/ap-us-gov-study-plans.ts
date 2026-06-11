import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-us-gov-sprint',
  title: '4-Week AP US Government Sprint',
  description: 'Fast review of core US Government topics — perfect for students who need a quick refresher before the exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Constitutional Foundations Review', type: 'LESSON' as const, topicSlug: 'gov-constitutional-foundations', dayOfWeek: 1 },
      { title: 'Federalism Review', type: 'LESSON' as const, topicSlug: 'gov-federalism', dayOfWeek: 2 },
      { title: 'Separation of Powers Review', type: 'LESSON' as const, topicSlug: 'gov-separation-of-powers', dayOfWeek: 3 },
      { title: 'Congress Review', type: 'LESSON' as const, topicSlug: 'gov-congress', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'The Presidency Review', type: 'LESSON' as const, topicSlug: 'gov-presidency', dayOfWeek: 0 },
      { title: 'The Federal Judiciary Review', type: 'LESSON' as const, topicSlug: 'gov-judiciary', dayOfWeek: 2 },
      { title: 'The Bureaucracy Review', type: 'LESSON' as const, topicSlug: 'gov-bureaucracy', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Civil Rights Review', type: 'LESSON' as const, topicSlug: 'gov-civil-rights', dayOfWeek: 0 },
      { title: 'Political Ideologies Review', type: 'LESSON' as const, topicSlug: 'gov-ideologies', dayOfWeek: 2 },
      { title: 'Public Opinion Review', type: 'LESSON' as const, topicSlug: 'gov-public-opinion', dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Parties & Interest Groups Review', type: 'LESSON' as const, topicSlug: 'gov-parties-interest-groups', dayOfWeek: 0 },
      { title: 'Media & Technology Review', type: 'LESSON' as const, topicSlug: 'gov-media-technology', dayOfWeek: 2 },
      { title: 'Full Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 3 },
      { title: 'Final Review', type: 'CUSTOM' as const, dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '10-week-us-gov-standard',
  title: '10-Week AP US Government Plan',
  description: 'Balanced study schedule covering all US Government units with lessons, quizzes, practice, and flashcard drills.',
  durationWeeks: 10, targetImprovement: '1–2 AP score points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 },
      { title: 'Constitutional Foundations', type: 'LESSON' as const, topicSlug: 'gov-constitutional-foundations', dayOfWeek: 1 },
      { title: 'Federalism', type: 'LESSON' as const, topicSlug: 'gov-federalism', dayOfWeek: 3 },
      { title: 'Flashcards', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Separation of Powers', type: 'LESSON' as const, topicSlug: 'gov-separation-of-powers', dayOfWeek: 0 },
      { title: 'Congress', type: 'LESSON' as const, topicSlug: 'gov-congress', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'The Presidency', type: 'LESSON' as const, topicSlug: 'gov-presidency', dayOfWeek: 0 },
      { title: 'The Federal Judiciary', type: 'LESSON' as const, topicSlug: 'gov-judiciary', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'The Bureaucracy', type: 'LESSON' as const, topicSlug: 'gov-bureaucracy', dayOfWeek: 0 },
      { title: 'Civil Liberties', type: 'LESSON' as const, topicSlug: 'gov-civil-liberties', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Civil Rights', type: 'LESSON' as const, topicSlug: 'gov-civil-rights', dayOfWeek: 0 },
      { title: 'Political Ideologies', type: 'LESSON' as const, topicSlug: 'gov-ideologies', dayOfWeek: 2 },
      { title: 'Topic Quiz', type: 'QUIZ' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Public Opinion', type: 'LESSON' as const, topicSlug: 'gov-public-opinion', dayOfWeek: 0 },
      { title: 'Voting & Elections', type: 'LESSON' as const, topicSlug: 'gov-voting-elections', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE' as const, dayOfWeek: 4 },
      { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Parties & Interest Groups', type: 'LESSON' as const, topicSlug: 'gov-parties-interest-groups', dayOfWeek: 0 },
      { title: 'Media & Technology', type: 'LESSON' as const, topicSlug: 'gov-media-technology', dayOfWeek: 2 },
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
  id: '16-week-us-gov-comprehensive',
  title: '16-Week AP US Government Mastery',
  description: 'In-depth study plan covering all US Government units with practice problems, FRQ practice, and multiple review cycles.',
  durationWeeks: 16, targetImprovement: '2–3 AP score points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ' as const, dayOfWeek: 0 }, { title: 'Set Goals & Review Syllabus', type: 'CUSTOM' as const, dayOfWeek: 2 }, { title: 'Constitutional Foundations', type: 'LESSON' as const, topicSlug: 'gov-constitutional-foundations', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Federalism', type: 'LESSON' as const, topicSlug: 'gov-federalism', dayOfWeek: 0 }, { title: 'Separation of Powers', type: 'LESSON' as const, topicSlug: 'gov-separation-of-powers', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Congress', type: 'LESSON' as const, topicSlug: 'gov-congress', dayOfWeek: 0 }, { title: 'The Presidency', type: 'LESSON' as const, topicSlug: 'gov-presidency', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'The Federal Judiciary', type: 'LESSON' as const, topicSlug: 'gov-judiciary', dayOfWeek: 0 }, { title: 'The Bureaucracy', type: 'LESSON' as const, topicSlug: 'gov-bureaucracy', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Civil Liberties', type: 'LESSON' as const, topicSlug: 'gov-civil-liberties', dayOfWeek: 0 }, { title: 'Civil Rights', type: 'LESSON' as const, topicSlug: 'gov-civil-rights', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Political Ideologies', type: 'LESSON' as const, topicSlug: 'gov-ideologies', dayOfWeek: 0 }, { title: 'Public Opinion', type: 'LESSON' as const, topicSlug: 'gov-public-opinion', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Voting & Elections', type: 'LESSON' as const, topicSlug: 'gov-voting-elections', dayOfWeek: 0 }, { title: 'Parties & Interest Groups', type: 'LESSON' as const, topicSlug: 'gov-parties-interest-groups', dayOfWeek: 2 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Media & Technology', type: 'LESSON' as const, topicSlug: 'gov-media-technology', dayOfWeek: 0 }, { title: 'Practice Problems', type: 'PRACTICE' as const, dayOfWeek: 4 }, { title: 'Flashcard Review', type: 'FLASHCARD' as const, dayOfWeek: 5 }]),
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

export const AP_US_GOV_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP US Government',
  description: 'Choose a pre-built study schedule that fits your timeline. Each plan includes lessons, quizzes, practice, and review tasks — automatically scheduled for you.',
  backLink: { href: '/ap-us-government', label: 'AP US Government' },
  apiEndpoint: '/api/ap-us-gov-study-plans',
  diagnosticPrefix: 'ap-us-gov-diagnostic',
  accent: 'blue',
  examLabel: 'AP Exam Date',
  plans: AP_US_GOV_PLANS,
}
