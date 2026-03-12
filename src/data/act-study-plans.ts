import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-act-sprint',
  title: '4-Week ACT Sprint',
  description: 'Rapid ACT prep covering English, Math, Reading, and Science test strategies with daily drills and a full practice test.',
  durationWeeks: 4, targetImprovement: '2–3 composite points', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take ACT Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'English: Grammar Rules', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 1 },
      { title: 'Math: Algebra & Functions', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 3 },
      { title: 'English Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Reading: Main Idea & Detail', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 0 },
      { title: 'Science: Data Interpretation', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 2 },
      { title: 'Reading & Science Quiz', type: 'QUIZ', dayOfWeek: 4 },
      { title: 'Vocabulary Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Math: Geometry & Trig', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 0 },
      { title: 'English: Rhetoric & Style', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 2 },
      { title: 'Science: Conflicting Viewpoints', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 4 },
      { title: 'Math Quiz', type: 'QUIZ', topicSlug: 'act-math', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full ACT Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Time Management Strategies', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Review & Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-act-standard',
  title: '8-Week ACT Plan',
  description: 'Comprehensive ACT prep alternating between all four sections each week, with timed section drills and two full-length practice tests.',
  durationWeeks: 8, targetImprovement: '3–5 composite points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [{ title: 'Take ACT Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'English: Subject-Verb Agreement', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 1 }, { title: 'English: Punctuation', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 3 }, { title: 'English Quiz', type: 'QUIZ', topicSlug: 'act-english', dayOfWeek: 5 }]),
    ...weekTasks(1, [{ title: 'Math: Pre-Algebra & Arithmetic', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 0 }, { title: 'Math: Algebra I & II', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 2 }, { title: 'Math Practice Drill', type: 'PRACTICE', topicSlug: 'act-math', dayOfWeek: 4 }, { title: 'Math Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Reading: Prose Fiction Passage', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 0 }, { title: 'Reading: Social Science Passage', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 2 }, { title: 'Reading: Natural Science Passage', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 4 }, { title: 'Reading Quiz', type: 'QUIZ', topicSlug: 'act-reading', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Science: Data Representation', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 0 }, { title: 'Science: Research Summaries', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 2 }, { title: 'Science: Conflicting Viewpoints', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 4 }, { title: 'Science Quiz', type: 'QUIZ', topicSlug: 'act-science', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Mid-Course Full Practice Test', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'English: Rhetoric & Organization', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 4 }, { title: 'Grammar Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Math: Geometry', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 0 }, { title: 'Math: Coordinate Geometry', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 2 }, { title: 'Math: Trigonometry', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 4 }, { title: 'Math Quiz', type: 'QUIZ', topicSlug: 'act-math', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Reading: Inference & Vocabulary', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 0 }, { title: 'Science: Mixed Practice', type: 'PRACTICE', topicSlug: 'act-science', dayOfWeek: 2 }, { title: 'English: Timed Section Drill', type: 'PRACTICE', topicSlug: 'act-english', dayOfWeek: 4 }, { title: 'Reading Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Full ACT Practice Test #2', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Results & Strategy', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Timed Section Drills (All)', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Final Review & Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '12-week-act-comprehensive',
  title: '12-Week ACT Mastery',
  description: 'Deep ACT preparation with thorough coverage of all sections, multiple timed full-length tests, question-type breakdowns, and test-day strategies.',
  durationWeeks: 12, targetImprovement: '5–7 composite points', weeklyHours: '8–10 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take ACT Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'Review Results & Set Goals', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'English: Parts of Speech Review', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'English: Subject-Verb Agreement', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 0 }, { title: 'English: Pronoun Reference', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 2 }, { title: 'English: Punctuation Rules', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 4 }, { title: 'Grammar Quiz', type: 'QUIZ', topicSlug: 'act-english', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'English: Sentence Structure', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 0 }, { title: 'English: Rhetoric & Style', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 2 }, { title: 'English: Organization', type: 'LESSON', topicSlug: 'act-english', dayOfWeek: 4 }, { title: 'English Timed Drill', type: 'PRACTICE', topicSlug: 'act-english', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Math: Arithmetic & Pre-Algebra', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 0 }, { title: 'Math: Elementary Algebra', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 2 }, { title: 'Math: Intermediate Algebra', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 4 }, { title: 'Algebra Quiz', type: 'QUIZ', topicSlug: 'act-math', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Math: Plane Geometry', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 0 }, { title: 'Math: Coordinate Geometry', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 2 }, { title: 'Math: Trigonometry', type: 'LESSON', topicSlug: 'act-math', dayOfWeek: 4 }, { title: 'Math Timed Drill', type: 'PRACTICE', topicSlug: 'act-math', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Full Practice Test #1', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Review Test Results', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Target Weak Sections', type: 'CUSTOM', dayOfWeek: 4 }, { title: 'Math & English Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Reading: Main Idea Questions', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 0 }, { title: 'Reading: Detail & Inference', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 2 }, { title: 'Reading: Vocabulary in Context', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 4 }, { title: 'Reading Quiz', type: 'QUIZ', topicSlug: 'act-reading', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Reading: Paired Passages', type: 'LESSON', topicSlug: 'act-reading', dayOfWeek: 0 }, { title: 'Reading: Timed Practice', type: 'PRACTICE', topicSlug: 'act-reading', dayOfWeek: 2 }, { title: 'Science: Data Tables & Graphs', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 4 }, { title: 'Reading Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'Science: Research Summaries', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 0 }, { title: 'Science: Conflicting Viewpoints In-Depth', type: 'LESSON', topicSlug: 'act-science', dayOfWeek: 2 }, { title: 'Science Timed Drill', type: 'PRACTICE', topicSlug: 'act-science', dayOfWeek: 4 }, { title: 'Science Quiz', type: 'QUIZ', topicSlug: 'act-science', dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Full Practice Test #2', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Score Analysis & Weak Areas', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Mixed Section Drill', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Comprehensive Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Targeted Review: Weakest Section', type: 'CUSTOM', dayOfWeek: 0 }, { title: 'Targeted Review: Second Weakest', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Timed Full Sections (2 sections)', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Strategy Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Full Practice Test #3', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'Final Review & Score Check', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Test Day Strategy', type: 'CUSTOM', dayOfWeek: 4 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 5 }]),
  ],
}

export const ACT_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'ACT',
  description: 'Choose a pre-built ACT study schedule covering English, Math, Reading, and Science with timed drills and full-length practice tests.',
  backLink: { href: '/act', label: 'ACT Prep' },
  apiEndpoint: '/api/act-study-plans',
  accent: 'red',
  examLabel: 'ACT Test Date',
  plans: ACT_PLANS,
}
