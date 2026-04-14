import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-precalc-sprint',
  title: '4-Week AP Precalculus Sprint',
  description: 'Fast review of functions, trig, and polar for students with a solid precalc foundation who need a final push before the AP exam.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Precalculus Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Polynomial Functions Review', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 1 },
      { title: 'Rational Functions & Asymptotes', type: 'LESSON', topicSlug: 'rational-functions', dayOfWeek: 3 },
      { title: 'Functions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Exponential & Logarithmic Functions', type: 'LESSON', topicSlug: 'exponential-functions', dayOfWeek: 0 },
      { title: 'Log Properties & Equations', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 2 },
      { title: 'Exp/Log Quiz', type: 'QUIZ', topicSlug: 'exponential-functions', dayOfWeek: 4 },
      { title: 'Exp/Log Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Unit Circle & Trig Functions', type: 'LESSON', topicSlug: 'trig-unit-circle', dayOfWeek: 0 },
      { title: 'Trig Identities & Graphs', type: 'LESSON', topicSlug: 'trig-identities', dayOfWeek: 2 },
      { title: 'Trig Practice', type: 'PRACTICE', topicSlug: 'trig-unit-circle', dayOfWeek: 4 },
      { title: 'Trig Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Polar & Parametric Equations', type: 'LESSON', topicSlug: 'polar-coordinates', dayOfWeek: 0 },
      { title: 'Full AP Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-precalc-standard',
  title: '8-Week AP Precalculus Plan',
  description: 'Balanced study covering all four AP Precalculus units — polynomials, exponentials/logs, trigonometry, and polar/parametric — with regular quizzes and FRQ practice.',
  durationWeeks: 8, targetImprovement: '1–2 AP score points', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Precalculus Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Functions & Domain/Range', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 1 },
      { title: 'Transformations of Functions', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 3 },
      { title: 'End Behavior & Zeros', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Polynomial Factoring & Division', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 0 },
      { title: 'Rational Functions & Asymptotes', type: 'LESSON', topicSlug: 'rational-functions', dayOfWeek: 2 },
      { title: 'Unit 1 Quiz', type: 'QUIZ', topicSlug: 'polynomial-functions', dayOfWeek: 4 },
      { title: 'Functions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Exponential Growth & Decay', type: 'LESSON', topicSlug: 'exponential-functions', dayOfWeek: 0 },
      { title: 'Intro to Logarithms', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 2 },
      { title: 'Log Properties', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 4 },
      { title: 'Exp/Log Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Solving Log & Exp Equations', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 0 },
      { title: 'Modeling with Exp/Log', type: 'LESSON', topicSlug: 'exponential-functions', dayOfWeek: 2 },
      { title: 'Unit 2 Quiz', type: 'QUIZ', topicSlug: 'exponential-functions', dayOfWeek: 4 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Unit Circle & Radians', type: 'LESSON', topicSlug: 'trig-unit-circle', dayOfWeek: 0 },
      { title: 'Trig Values & Graphs', type: 'LESSON', topicSlug: 'trig-unit-circle', dayOfWeek: 2 },
      { title: 'Graphing sin/cos/tan', type: 'LESSON', topicSlug: 'trig-graphs', dayOfWeek: 4 },
      { title: 'Trig Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Trig Identities', type: 'LESSON', topicSlug: 'trig-identities', dayOfWeek: 0 },
      { title: 'Inverse Trig Functions', type: 'LESSON', topicSlug: 'inverse-trig', dayOfWeek: 2 },
      { title: 'Law of Sines & Cosines', type: 'LESSON', topicSlug: 'law-sines-cosines', dayOfWeek: 4 },
      { title: 'Unit 3 Quiz', type: 'QUIZ', topicSlug: 'trig-unit-circle', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Polar Coordinates', type: 'LESSON', topicSlug: 'polar-coordinates', dayOfWeek: 0 },
      { title: 'Polar Curves & Roses', type: 'LESSON', topicSlug: 'polar-coordinates', dayOfWeek: 2 },
      { title: 'Parametric Equations', type: 'LESSON', topicSlug: 'parametric-equations', dayOfWeek: 4 },
      { title: 'Polar/Parametric Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Full AP Practice Exam', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'FRQ Practice', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Strategy Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '12-week-precalc-comprehensive',
  title: '12-Week AP Precalculus Mastery',
  description: 'Complete AP Precalculus preparation with deep coverage of all units, extensive FRQ practice, calculator skills, and multiple timed practice exams.',
  durationWeeks: 12, targetImprovement: '2–3 AP score points', weeklyHours: '7–9 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Set Goals & Review Plan', type: 'CUSTOM', dayOfWeek: 2 },
      { title: 'Function Notation & Evaluation', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 4 },
    ]),
    ...weekTasks(1, [
      { title: 'Domain, Range & Transformations', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 0 },
      { title: 'Composition & Inverses', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 2 },
      { title: 'Polynomial End Behavior', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 4 },
      { title: 'Functions Quiz', type: 'QUIZ', topicSlug: 'polynomial-functions', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Polynomial Zeros & Factoring', type: 'LESSON', topicSlug: 'polynomial-functions', dayOfWeek: 0 },
      { title: 'Rational Functions & Asymptotes', type: 'LESSON', topicSlug: 'rational-functions', dayOfWeek: 2 },
      { title: 'Holes vs Asymptotes', type: 'LESSON', topicSlug: 'rational-functions', dayOfWeek: 4 },
      { title: 'Rational Functions Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Unit 1 FRQ Practice', type: 'PRACTICE', topicSlug: 'polynomial-functions', dayOfWeek: 0 },
      { title: 'Unit 1 Quiz', type: 'QUIZ', topicSlug: 'polynomial-functions', dayOfWeek: 2 },
      { title: 'Intro to Exponentials', type: 'LESSON', topicSlug: 'exponential-functions', dayOfWeek: 4 },
      { title: 'Exponential Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'Exponential Growth & Decay Models', type: 'LESSON', topicSlug: 'exponential-functions', dayOfWeek: 0 },
      { title: 'Intro to Logarithms', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 2 },
      { title: 'Log Properties & Rules', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 4 },
      { title: 'Log Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Solving Exp & Log Equations', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 0 },
      { title: 'Change of Base & Modeling', type: 'LESSON', topicSlug: 'logarithmic-functions', dayOfWeek: 2 },
      { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 4 },
      { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Angles, Radians & Unit Circle', type: 'LESSON', topicSlug: 'trig-unit-circle', dayOfWeek: 0 },
      { title: 'Evaluating Trig Functions', type: 'LESSON', topicSlug: 'trig-unit-circle', dayOfWeek: 2 },
      { title: 'Graphing Sinusoids', type: 'LESSON', topicSlug: 'trig-graphs', dayOfWeek: 4 },
      { title: 'Unit Circle Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Trig Graph Transformations', type: 'LESSON', topicSlug: 'trig-graphs', dayOfWeek: 0 },
      { title: 'Trig Identities', type: 'LESSON', topicSlug: 'trig-identities', dayOfWeek: 2 },
      { title: 'Double Angle & Sum Formulas', type: 'LESSON', topicSlug: 'trig-identities', dayOfWeek: 4 },
      { title: 'Trig Identity Quiz', type: 'QUIZ', topicSlug: 'trig-identities', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Inverse Trig Functions', type: 'LESSON', topicSlug: 'inverse-trig', dayOfWeek: 0 },
      { title: 'Law of Sines', type: 'LESSON', topicSlug: 'law-sines-cosines', dayOfWeek: 2 },
      { title: 'Law of Cosines & Area', type: 'LESSON', topicSlug: 'law-sines-cosines', dayOfWeek: 4 },
      { title: 'Trig Applications Quiz', type: 'QUIZ', topicSlug: 'inverse-trig', dayOfWeek: 5 },
    ]),
    ...weekTasks(9, [
      { title: 'Polar Coordinates & Conversion', type: 'LESSON', topicSlug: 'polar-coordinates', dayOfWeek: 0 },
      { title: 'Polar Curves: Roses & Cardioids', type: 'LESSON', topicSlug: 'polar-coordinates', dayOfWeek: 2 },
      { title: 'Parametric Equations', type: 'LESSON', topicSlug: 'parametric-equations', dayOfWeek: 4 },
      { title: 'Polar Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Sequences & Series Review', type: 'LESSON', topicSlug: 'sequences-series', dayOfWeek: 0 },
      { title: 'Vectors Intro', type: 'LESSON', topicSlug: 'vectors', dayOfWeek: 2 },
      { title: 'Unit 4 FRQ Practice', type: 'PRACTICE', topicSlug: 'polar-coordinates', dayOfWeek: 4 },
      { title: 'Unit 4 Quiz', type: 'QUIZ', topicSlug: 'polar-coordinates', dayOfWeek: 5 },
    ]),
    ...weekTasks(11, [
      { title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 },
      { title: 'Exam Strategy & Review', type: 'CUSTOM', dayOfWeek: 5 },
    ]),
  ],
}

export const AP_PRECALC_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Precalculus',
  description: 'Choose a pre-built study schedule for AP Precalculus covering polynomials, exponentials, trigonometry, and polar/parametric functions.',
  backLink: { href: '/ap-precalculus', label: 'AP Precalculus' },
  apiEndpoint: '/api/ap-precalc-study-plans',
  accent: 'emerald',
  examLabel: 'AP Exam Date',
  plans: AP_PRECALC_PLANS,
}
