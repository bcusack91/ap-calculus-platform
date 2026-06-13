import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const sprint: StudyPlanTemplate = {
  id: '4-week-stats-sprint',
  title: '4-Week AP Statistics Sprint',
  description: 'Fast review of exploring data, probability, inference, and regression for students who already have a solid stats foundation.',
  durationWeeks: 4, targetImprovement: '1 AP score point', weeklyHours: '4–6 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take AP Statistics Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Exploring Data: Distributions', type: 'LESSON', topicSlug: 'displaying-distributions-graphs', dayOfWeek: 1 },
      { title: 'Descriptive Statistics & Measures', type: 'LESSON', topicSlug: 'measures-of-center', dayOfWeek: 3 },
      { title: 'Data Display Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'Sampling Methods & Experiments', type: 'LESSON', topicSlug: 'sampling-methods', dayOfWeek: 0 },
      { title: 'Probability Rules', type: 'LESSON', topicSlug: 'basic-probability-rules', dayOfWeek: 2 },
      { title: 'Probability Quiz', type: 'QUIZ', topicSlug: 'basic-probability-rules', dayOfWeek: 4 },
      { title: 'Probability Flashcards', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'Confidence Intervals', type: 'LESSON', topicSlug: 'ci-means', dayOfWeek: 0 },
      { title: 'Hypothesis Testing', type: 'LESSON', topicSlug: 'hypothesis-testing-framework', dayOfWeek: 2 },
      { title: 'Inference Practice', type: 'PRACTICE', topicSlug: 'tests-means', dayOfWeek: 4 },
      { title: 'Inference Quiz', type: 'QUIZ', topicSlug: 'hypothesis-testing-framework', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Linear Regression & Correlation', type: 'LESSON', topicSlug: 'least-squares-regression', dayOfWeek: 0 },
      { title: 'Full AP Statistics Practice Exam', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Weak Areas', type: 'CUSTOM', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', dayOfWeek: 5 },
    ]),
  ],
}

const standard: StudyPlanTemplate = {
  id: '8-week-stats-standard',
  title: '8-Week AP Statistics Plan',
  description: 'Balanced study covering all four AP Statistics units — exploring data, sampling, probability, and inference — with regular quizzes and FRQ practice.',
  durationWeeks: 8, targetImprovement: '1–2 AP score points', weeklyHours: '5–7 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [{ title: 'Take AP Statistics Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'Categorical & Quantitative Variables', type: 'LESSON', topicSlug: 'types-data-sampling', dayOfWeek: 1 }, { title: 'Displaying Distributions', type: 'LESSON', topicSlug: 'displaying-distributions-graphs', dayOfWeek: 3 }, { title: 'Center, Spread & Shape', type: 'LESSON', topicSlug: 'measures-of-spread', dayOfWeek: 5 }]),
    ...weekTasks(1, [{ title: 'Comparing Distributions', type: 'LESSON', topicSlug: 'describing-distributions', dayOfWeek: 0 }, { title: 'Normal Distribution', type: 'LESSON', topicSlug: 'normal-distributions', dayOfWeek: 2 }, { title: 'Exploring Data Quiz', type: 'QUIZ', topicSlug: 'measures-of-center', dayOfWeek: 4 }, { title: 'Data Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Sampling Methods', type: 'LESSON', topicSlug: 'sampling-methods', dayOfWeek: 0 }, { title: 'Experimental Design', type: 'LESSON', topicSlug: 'experimental-design', dayOfWeek: 2 }, { title: 'Bias & Confounding', type: 'LESSON', topicSlug: 'bias-sampling-surveys', dayOfWeek: 4 }, { title: 'Sampling & Design Quiz', type: 'QUIZ', topicSlug: 'observational-vs-experiments', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Probability Rules & Independence', type: 'LESSON', topicSlug: 'independence', dayOfWeek: 0 }, { title: 'Random Variables & Distributions', type: 'LESSON', topicSlug: 'discrete-random-variables', dayOfWeek: 2 }, { title: 'Binomial & Geometric Distributions', type: 'LESSON', topicSlug: 'binomial-distribution', dayOfWeek: 4 }, { title: 'Probability Quiz', type: 'QUIZ', topicSlug: 'basic-probability-rules', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Sampling Distributions', type: 'LESSON', topicSlug: 'sampling-distributions', dayOfWeek: 0 }, { title: 'Central Limit Theorem', type: 'LESSON', topicSlug: 'central-limit-theorem', dayOfWeek: 2 }, { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 4 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Confidence Intervals for Proportions', type: 'LESSON', topicSlug: 'ci-proportions', dayOfWeek: 0 }, { title: 'Confidence Intervals for Means', type: 'LESSON', topicSlug: 'ci-means', dayOfWeek: 2 }, { title: 'Inference Practice', type: 'PRACTICE', topicSlug: 'interpreting-ci', dayOfWeek: 4 }, { title: 'CI Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Hypothesis Testing (z & t)', type: 'LESSON', topicSlug: 'hypothesis-testing-framework', dayOfWeek: 0 }, { title: 'Chi-Square Tests', type: 'LESSON', topicSlug: 'chi-square-tests', dayOfWeek: 2 }, { title: 'Linear Regression', type: 'LESSON', topicSlug: 'least-squares-regression', dayOfWeek: 4 }, { title: 'Hypothesis Testing Quiz', type: 'QUIZ', topicSlug: 'tests-proportions', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Full AP Statistics Practice Exam', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'FRQ Practice', type: 'PRACTICE', dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Exam Strategy Review', type: 'CUSTOM', dayOfWeek: 5 }]),
  ],
}

const comprehensive: StudyPlanTemplate = {
  id: '12-week-stats-comprehensive',
  title: '12-Week AP Statistics Mastery',
  description: 'Complete AP Statistics preparation with in-depth coverage of all units, extensive FRQ practice, calculator skills, and multiple timed practice exams.',
  durationWeeks: 12, targetImprovement: '2–3 AP score points', weeklyHours: '7–9 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [{ title: 'Take Diagnostic', type: 'QUIZ', dayOfWeek: 0 }, { title: 'Set Goals & Review Plan', type: 'CUSTOM', dayOfWeek: 2 }, { title: 'Types of Variables', type: 'LESSON', topicSlug: 'types-data-sampling', dayOfWeek: 4 }]),
    ...weekTasks(1, [{ title: 'Displaying Data: Histograms, Boxplots', type: 'LESSON', topicSlug: 'displaying-distributions-graphs', dayOfWeek: 0 }, { title: 'Measures of Center & Spread', type: 'LESSON', topicSlug: 'measures-of-center', dayOfWeek: 2 }, { title: 'Outliers & Five-Number Summary', type: 'LESSON', topicSlug: 'measures-of-spread', dayOfWeek: 4 }, { title: 'Data Quiz', type: 'QUIZ', topicSlug: 'describing-distributions', dayOfWeek: 5 }]),
    ...weekTasks(2, [{ title: 'Normal Distribution & z-Scores', type: 'LESSON', topicSlug: 'normal-distributions', dayOfWeek: 0 }, { title: 'Scatterplots & Correlation', type: 'LESSON', topicSlug: 'scatterplots-correlation', dayOfWeek: 2 }, { title: 'LSRL & Residuals', type: 'LESSON', topicSlug: 'residuals-residual-plots', dayOfWeek: 4 }, { title: 'Regression Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(3, [{ title: 'Regression Diagnostics', type: 'LESSON', topicSlug: 'coefficient-determination', dayOfWeek: 0 }, { title: 'Transformations for Linearity', type: 'LESSON', topicSlug: 'transformations-linearity', dayOfWeek: 1 }, { title: 'Regression Quiz', type: 'QUIZ', topicSlug: 'least-squares-regression', dayOfWeek: 2 }, { title: 'Sampling Methods', type: 'LESSON', topicSlug: 'sampling-methods', dayOfWeek: 4 }, { title: 'Sampling Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(4, [{ title: 'Experimental Design', type: 'LESSON', topicSlug: 'experimental-design', dayOfWeek: 0 }, { title: 'Observational Studies vs Experiments', type: 'LESSON', topicSlug: 'observational-vs-experiments', dayOfWeek: 1 }, { title: 'Bias, Confounding & Lurking Variables', type: 'LESSON', topicSlug: 'bias-sampling-surveys', dayOfWeek: 2 }, { title: 'Sampling Quiz', type: 'QUIZ', topicSlug: 'sampling-methods', dayOfWeek: 4 }, { title: 'Sampling Practice', type: 'PRACTICE', topicSlug: 'experimental-design', dayOfWeek: 5 }]),
    ...weekTasks(5, [{ title: 'Probability Basics', type: 'LESSON', topicSlug: 'basic-probability-rules', dayOfWeek: 0 }, { title: 'Conditional Probability', type: 'LESSON', topicSlug: 'conditional-probability', dayOfWeek: 2 }, { title: 'Random Variables', type: 'LESSON', topicSlug: 'discrete-random-variables', dayOfWeek: 4 }, { title: 'Probability Quiz', type: 'QUIZ', topicSlug: 'independence', dayOfWeek: 5 }]),
    ...weekTasks(6, [{ title: 'Binomial & Geometric Distributions', type: 'LESSON', topicSlug: 'binomial-distribution', dayOfWeek: 0 }, { title: 'Continuous Random Variables', type: 'LESSON', topicSlug: 'continuous-random-variables', dayOfWeek: 1 }, { title: 'Mid-Course Practice Exam', type: 'PRACTICE', dayOfWeek: 2 }, { title: 'Review Results', type: 'CUSTOM', dayOfWeek: 4 }, { title: 'Probability Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(7, [{ title: 'Sampling Distributions', type: 'LESSON', topicSlug: 'sampling-distributions', dayOfWeek: 0 }, { title: 'CLT & Standard Error', type: 'LESSON', topicSlug: 'central-limit-theorem', dayOfWeek: 2 }, { title: 'CI for Proportions', type: 'LESSON', topicSlug: 'ci-proportions', dayOfWeek: 4 }, { title: 'CI Practice', type: 'PRACTICE', topicSlug: 'ci-proportions', dayOfWeek: 5 }]),
    ...weekTasks(8, [{ title: 'CI for Means (z & t)', type: 'LESSON', topicSlug: 'ci-means', dayOfWeek: 0 }, { title: 'CI for Differences', type: 'LESSON', topicSlug: 'interpreting-ci', dayOfWeek: 2 }, { title: 'Confidence Intervals Quiz', type: 'QUIZ', topicSlug: 'ci-means', dayOfWeek: 4 }, { title: 'CI Flashcards', type: 'FLASHCARD', dayOfWeek: 5 }]),
    ...weekTasks(9, [{ title: 'Hypothesis Testing: z-Test & t-Test', type: 'LESSON', topicSlug: 'hypothesis-testing-framework', dayOfWeek: 0 }, { title: 'Tests for Proportions', type: 'LESSON', topicSlug: 'tests-proportions', dayOfWeek: 1 }, { title: 'Two-Sample Tests for Means', type: 'LESSON', topicSlug: 'tests-means', dayOfWeek: 2 }, { title: 'Type I & Type II Errors', type: 'LESSON', topicSlug: 'type-errors', dayOfWeek: 4 }, { title: 'HT Quiz', type: 'QUIZ', topicSlug: 'tests-means', dayOfWeek: 5 }]),
    ...weekTasks(10, [{ title: 'Chi-Square GOF & Independence', type: 'LESSON', topicSlug: 'chi-square-tests', dayOfWeek: 0 }, { title: 'Paired Data / Matched Pairs', type: 'LESSON', topicSlug: 'paired-data', dayOfWeek: 2 }, { title: 'Inference for Regression', type: 'LESSON', topicSlug: 'inference-regression', dayOfWeek: 4 }, { title: 'Chi-Square Quiz', type: 'QUIZ', topicSlug: 'chi-square-tests', dayOfWeek: 5 }]),
    ...weekTasks(11, [{ title: 'Full Practice Exam #2', type: 'PRACTICE', dayOfWeek: 0 }, { title: 'FRQ Practice Set', type: 'PRACTICE', dayOfWeek: 2 }, { title: 'Final Flashcard Marathon', type: 'FLASHCARD', dayOfWeek: 4 }, { title: 'Exam Strategy', type: 'CUSTOM', dayOfWeek: 5 }]),
  ],
}

export const AP_STATS_PLANS: StudyPlanTemplate[] = [sprint, standard, comprehensive]

export const config: StudyPlanSelectorConfig = {
  subject: 'AP Statistics',
  description: 'Choose a pre-built study schedule for AP Statistics covering data exploration, probability, sampling, and inference.',
  backLink: { href: '/ap-statistics', label: 'AP Statistics' },
  apiEndpoint: '/api/ap-stats-study-plans',
  accent: 'amber',
  examLabel: 'AP Exam Date',
  plans: AP_STATS_PLANS,
  diagnosticPrefix: 'ap-stats-diagnostic',
}
