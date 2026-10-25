/**
 * ASVAB study plans (asvab-pipeline PLAN.md, B1). AFQT first: the four AFQT
 * subtests (WK, PC, AR, MK) decide enlistment eligibility, and VE counts twice,
 * so every plan opens with them and keeps verbal work running all the way
 * through. The technical subtests follow, grouped by the kind of job they
 * qualify you for (electronics and science, mechanical and maintenance,
 * Navy operations with Assembling Objects). Every task links one of the 35
 * ASVAB topic slugs, or is a tool task (diagnostic, practice test).
 */
import { type StudyPlanTemplate, weekTasks } from '@/lib/study-plan-utils'
import type { StudyPlanSelectorConfig } from '@/components/StudyPlanSelector'

const four: StudyPlanTemplate = {
  id: '4-week-asvab-afqt-sprint',
  title: '4-Week AFQT Sprint',
  description: 'For a test date coming up fast: the four AFQT subtests first (math by hand and vocabulary), a full practice test in week 4, and a quick technical refresher for the jobs you want.',
  durationWeeks: 4, targetImprovement: '8–15 AFQT percentile points', weeklyHours: '5–7 hours', difficulty: 'Beginner',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the ASVAB Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'AR: Word Problems with Whole Numbers', type: 'LESSON', topicSlug: 'asvab-ar-whole-number-problems', dayOfWeek: 1 },
      { title: 'WK: Vocabulary in Context', type: 'LESSON', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 2 },
      { title: 'MK: Number Properties, Exponents and Roots', type: 'LESSON', topicSlug: 'asvab-mk-number-properties', dayOfWeek: 3 },
      { title: 'PC: Main Idea and Purpose', type: 'LESSON', topicSlug: 'asvab-pc-main-idea', dayOfWeek: 4 },
      { title: 'Vocabulary Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 5 },
    ]),
    ...weekTasks(1, [
      { title: 'AR: Fractions and Decimals in Context', type: 'LESSON', topicSlug: 'asvab-ar-fractions-decimals', dayOfWeek: 0 },
      { title: 'MK: Linear Equations and Inequalities', type: 'LESSON', topicSlug: 'asvab-mk-algebra-equations', dayOfWeek: 1 },
      { title: 'AR: Percents, Discounts and Interest', type: 'LESSON', topicSlug: 'asvab-ar-percents-interest', dayOfWeek: 2 },
      { title: 'WK: Roots, Prefixes and Suffixes', type: 'LESSON', topicSlug: 'asvab-wk-word-parts', dayOfWeek: 3 },
      { title: 'PC: Stated Details and Sequence', type: 'LESSON', topicSlug: 'asvab-pc-details', dayOfWeek: 4 },
      { title: 'Math Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-mk-number-properties', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'AR: Ratios, Proportions and Rates', type: 'LESSON', topicSlug: 'asvab-ar-ratios-rates', dayOfWeek: 0 },
      { title: 'MK: Angles, Triangles and Polygons', type: 'LESSON', topicSlug: 'asvab-mk-geometry-shapes', dayOfWeek: 1 },
      { title: 'PC: Inference, Tone and Word Meaning', type: 'LESSON', topicSlug: 'asvab-pc-inference', dayOfWeek: 2 },
      { title: 'MK: Area, Volume, Circles and Coordinates', type: 'LESSON', topicSlug: 'asvab-mk-geometry-measurement', dayOfWeek: 3 },
      { title: 'WK: Synonyms, Connotation and Test Strategy', type: 'LESSON', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 4 },
      { title: 'AR Quiz: Averages and Probability', type: 'QUIZ', topicSlug: 'asvab-ar-averages-probability', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'Full ASVAB Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Your AFQT, Line Scores and Job Eligibility', type: 'LESSON', topicSlug: 'asvab-afqt-scores', dayOfWeek: 1 },
      { title: 'Technical Refresher: Forces, Work and Energy', type: 'LESSON', topicSlug: 'asvab-mc-forces-motion', dayOfWeek: 2 },
      { title: 'Technical Refresher: Electricity and Ohm\'s Law', type: 'LESSON', topicSlug: 'asvab-ei-electricity-basics', dayOfWeek: 3 },
      { title: 'CAT-ASVAB Strategy and Test Day', type: 'LESSON', topicSlug: 'asvab-test-strategy', dayOfWeek: 4 },
      { title: 'Final Vocabulary and Math Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 5 },
    ]),
  ],
}

const eight: StudyPlanTemplate = {
  id: '8-week-asvab-standard',
  title: '8-Week ASVAB Plan',
  description: 'Four weeks on the AFQT subtests, a mid-plan practice test, then three weeks on the technical subtests grouped by job area, ending with a second practice test.',
  durationWeeks: 8, targetImprovement: '12–20 AFQT percentile points', weeklyHours: '6–8 hours', difficulty: 'Intermediate',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the ASVAB Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Your AFQT, Line Scores and Job Eligibility', type: 'LESSON', topicSlug: 'asvab-afqt-scores', dayOfWeek: 1 },
      { title: 'AR: Word Problems with Whole Numbers', type: 'LESSON', topicSlug: 'asvab-ar-whole-number-problems', dayOfWeek: 2 },
      { title: 'WK: Vocabulary in Context', type: 'LESSON', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 3 },
      { title: 'MK: Number Properties, Exponents and Roots', type: 'LESSON', topicSlug: 'asvab-mk-number-properties', dayOfWeek: 4 },
    ]),
    ...weekTasks(1, [
      { title: 'AR: Fractions and Decimals in Context', type: 'LESSON', topicSlug: 'asvab-ar-fractions-decimals', dayOfWeek: 0 },
      { title: 'WK: Roots, Prefixes and Suffixes', type: 'LESSON', topicSlug: 'asvab-wk-word-parts', dayOfWeek: 1 },
      { title: 'MK: Linear Equations and Inequalities', type: 'LESSON', topicSlug: 'asvab-mk-algebra-equations', dayOfWeek: 2 },
      { title: 'PC: Main Idea and Purpose', type: 'LESSON', topicSlug: 'asvab-pc-main-idea', dayOfWeek: 3 },
      { title: 'Vocabulary Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-word-parts', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'AR: Percents, Discounts and Interest', type: 'LESSON', topicSlug: 'asvab-ar-percents-interest', dayOfWeek: 0 },
      { title: 'MK: Polynomials, Factoring and Quadratics', type: 'LESSON', topicSlug: 'asvab-mk-algebra-expressions', dayOfWeek: 1 },
      { title: 'PC: Stated Details and Sequence', type: 'LESSON', topicSlug: 'asvab-pc-details', dayOfWeek: 2 },
      { title: 'WK: Synonyms, Connotation and Test Strategy', type: 'LESSON', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 3 },
      { title: 'Math Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-ar-percents-interest', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'AR: Ratios, Proportions and Rates', type: 'LESSON', topicSlug: 'asvab-ar-ratios-rates', dayOfWeek: 0 },
      { title: 'MK: Angles, Triangles and Polygons', type: 'LESSON', topicSlug: 'asvab-mk-geometry-shapes', dayOfWeek: 1 },
      { title: 'PC: Inference, Tone and Word Meaning', type: 'LESSON', topicSlug: 'asvab-pc-inference', dayOfWeek: 2 },
      { title: 'AR: Averages, Counting and Probability', type: 'LESSON', topicSlug: 'asvab-ar-averages-probability', dayOfWeek: 3 },
      { title: 'MK: Area, Volume, Circles and Coordinates', type: 'LESSON', topicSlug: 'asvab-mk-geometry-measurement', dayOfWeek: 4 },
    ]),
    ...weekTasks(4, [
      { title: 'Mid-Plan ASVAB Practice Test', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Retake Your Weakest AFQT Quiz: Rates', type: 'QUIZ', topicSlug: 'asvab-ar-ratios-rates', dayOfWeek: 2 },
      { title: 'Electronics & Science Jobs: Physics', type: 'LESSON', topicSlug: 'asvab-gs-physics', dayOfWeek: 3 },
      { title: 'Electronics & Science Jobs: Electricity Basics', type: 'LESSON', topicSlug: 'asvab-ei-electricity-basics', dayOfWeek: 4 },
      { title: 'Vocabulary Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 5 },
    ]),
    ...weekTasks(5, [
      { title: 'Electronics & Science Jobs: Series and Parallel Circuits', type: 'LESSON', topicSlug: 'asvab-ei-circuits', dayOfWeek: 0 },
      { title: 'Electronics & Science Jobs: Life Science', type: 'LESSON', topicSlug: 'asvab-gs-life-science', dayOfWeek: 1 },
      { title: 'Electronics & Science Jobs: Chemistry', type: 'LESSON', topicSlug: 'asvab-gs-chemistry', dayOfWeek: 2 },
      { title: 'Electronics & Science Jobs: Earth and Space', type: 'LESSON', topicSlug: 'asvab-gs-earth-space', dayOfWeek: 3 },
      { title: 'Electronics & Science Jobs: Components and AC vs DC', type: 'LESSON', topicSlug: 'asvab-ei-components', dayOfWeek: 4 },
    ]),
    ...weekTasks(6, [
      { title: 'Mechanical Jobs: Forces, Work and Energy', type: 'LESSON', topicSlug: 'asvab-mc-forces-motion', dayOfWeek: 0 },
      { title: 'Mechanical Jobs: Levers, Pulleys and Ramps', type: 'LESSON', topicSlug: 'asvab-mc-simple-machines', dayOfWeek: 1 },
      { title: 'Mechanical Jobs: Engines and Combustion', type: 'LESSON', topicSlug: 'asvab-ai-engine', dayOfWeek: 2 },
      { title: 'Mechanical Jobs: Hand and Power Tools', type: 'LESSON', topicSlug: 'asvab-si-tools', dayOfWeek: 3 },
      { title: 'Mechanical Jobs: Gears, Fluids and Structures', type: 'LESSON', topicSlug: 'asvab-mc-gears-fluids', dayOfWeek: 4 },
    ]),
    ...weekTasks(7, [
      { title: 'Navy Jobs: Assembling Objects (Connecting Parts)', type: 'LESSON', topicSlug: 'asvab-ao-connections', dayOfWeek: 0 },
      { title: 'CAT-ASVAB Strategy and Test Day', type: 'LESSON', topicSlug: 'asvab-test-strategy', dayOfWeek: 1 },
      { title: 'Final ASVAB Practice Test', type: 'PRACTICE', dayOfWeek: 2 },
      { title: 'Review Missed Questions: Fractions and Decimals', type: 'QUIZ', topicSlug: 'asvab-ar-fractions-decimals', dayOfWeek: 4 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 5 },
    ]),
  ],
}

const twelve: StudyPlanTemplate = {
  id: '12-week-asvab-comprehensive',
  title: '12-Week ASVAB Mastery',
  description: 'Every one of the 35 ASVAB topics: six weeks building the AFQT subtests, then all ten subtests grouped by job area, with three full practice tests along the way.',
  durationWeeks: 12, targetImprovement: '15–25 AFQT percentile points', weeklyHours: '7–9 hours', difficulty: 'Advanced',
  tasks: [
    ...weekTasks(0, [
      { title: 'Take the ASVAB Diagnostic', type: 'QUIZ', dayOfWeek: 0 },
      { title: 'Your AFQT, Line Scores and Job Eligibility', type: 'LESSON', topicSlug: 'asvab-afqt-scores', dayOfWeek: 1 },
      { title: 'CAT-ASVAB Strategy and Test Day', type: 'LESSON', topicSlug: 'asvab-test-strategy', dayOfWeek: 3 },
      { title: 'AR: Word Problems with Whole Numbers', type: 'LESSON', topicSlug: 'asvab-ar-whole-number-problems', dayOfWeek: 4 },
    ]),
    ...weekTasks(1, [
      { title: 'MK: Number Properties, Exponents and Roots', type: 'LESSON', topicSlug: 'asvab-mk-number-properties', dayOfWeek: 0 },
      { title: 'WK: Vocabulary in Context', type: 'LESSON', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 1 },
      { title: 'AR: Fractions and Decimals in Context', type: 'LESSON', topicSlug: 'asvab-ar-fractions-decimals', dayOfWeek: 2 },
      { title: 'PC: Main Idea and Purpose', type: 'LESSON', topicSlug: 'asvab-pc-main-idea', dayOfWeek: 3 },
      { title: 'Vocabulary Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 5 },
    ]),
    ...weekTasks(2, [
      { title: 'MK: Linear Equations and Inequalities', type: 'LESSON', topicSlug: 'asvab-mk-algebra-equations', dayOfWeek: 0 },
      { title: 'WK: Roots, Prefixes and Suffixes', type: 'LESSON', topicSlug: 'asvab-wk-word-parts', dayOfWeek: 1 },
      { title: 'AR: Percents, Discounts and Interest', type: 'LESSON', topicSlug: 'asvab-ar-percents-interest', dayOfWeek: 2 },
      { title: 'PC: Stated Details and Sequence', type: 'LESSON', topicSlug: 'asvab-pc-details', dayOfWeek: 3 },
      { title: 'Math Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-ar-percents-interest', dayOfWeek: 5 },
    ]),
    ...weekTasks(3, [
      { title: 'MK: Polynomials, Factoring and Quadratics', type: 'LESSON', topicSlug: 'asvab-mk-algebra-expressions', dayOfWeek: 0 },
      { title: 'WK: Synonyms, Connotation and Test Strategy', type: 'LESSON', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 1 },
      { title: 'AR: Ratios, Proportions and Rates', type: 'LESSON', topicSlug: 'asvab-ar-ratios-rates', dayOfWeek: 2 },
      { title: 'PC: Inference, Tone and Word Meaning', type: 'LESSON', topicSlug: 'asvab-pc-inference', dayOfWeek: 3 },
      { title: 'Word Parts Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-word-parts', dayOfWeek: 5 },
    ]),
    ...weekTasks(4, [
      { title: 'MK: Angles, Triangles and Polygons', type: 'LESSON', topicSlug: 'asvab-mk-geometry-shapes', dayOfWeek: 0 },
      { title: 'AR: Averages, Counting and Probability', type: 'LESSON', topicSlug: 'asvab-ar-averages-probability', dayOfWeek: 1 },
      { title: 'MK: Area, Volume, Circles and Coordinates', type: 'LESSON', topicSlug: 'asvab-mk-geometry-measurement', dayOfWeek: 2 },
      { title: 'AR Quiz: Mixed Word Problems', type: 'QUIZ', topicSlug: 'asvab-ar-whole-number-problems', dayOfWeek: 3 },
      { title: 'MK Quiz: Equations', type: 'QUIZ', topicSlug: 'asvab-mk-algebra-equations', dayOfWeek: 4 },
    ]),
    ...weekTasks(5, [
      { title: 'ASVAB Practice Test #1', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Retake Your Weakest Verbal Quiz', type: 'QUIZ', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 2 },
      { title: 'Retake Your Weakest Reading Quiz', type: 'QUIZ', topicSlug: 'asvab-pc-inference', dayOfWeek: 3 },
      { title: 'Retake Your Weakest Math Quiz', type: 'QUIZ', topicSlug: 'asvab-ar-ratios-rates', dayOfWeek: 4 },
      { title: 'Vocabulary Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 5 },
    ]),
    ...weekTasks(6, [
      { title: 'Science Jobs: Life Science', type: 'LESSON', topicSlug: 'asvab-gs-life-science', dayOfWeek: 0 },
      { title: 'Science Jobs: Earth and Space Science', type: 'LESSON', topicSlug: 'asvab-gs-earth-space', dayOfWeek: 1 },
      { title: 'Science Jobs: Chemistry', type: 'LESSON', topicSlug: 'asvab-gs-chemistry', dayOfWeek: 2 },
      { title: 'Science Jobs: Physics', type: 'LESSON', topicSlug: 'asvab-gs-physics', dayOfWeek: 3 },
      { title: 'Science Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-gs-life-science', dayOfWeek: 5 },
    ]),
    ...weekTasks(7, [
      { title: 'Electronics Jobs: Current, Voltage and Ohm\'s Law', type: 'LESSON', topicSlug: 'asvab-ei-electricity-basics', dayOfWeek: 0 },
      { title: 'Electronics Jobs: Series and Parallel Circuits', type: 'LESSON', topicSlug: 'asvab-ei-circuits', dayOfWeek: 1 },
      { title: 'Electronics Jobs: Components and AC vs DC', type: 'LESSON', topicSlug: 'asvab-ei-components', dayOfWeek: 2 },
      { title: 'Keep the AFQT Sharp: Percents', type: 'QUIZ', topicSlug: 'asvab-ar-percents-interest', dayOfWeek: 4 },
      { title: 'Electronics Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-ei-circuits', dayOfWeek: 5 },
    ]),
    ...weekTasks(8, [
      { title: 'Mechanical Jobs: Forces, Work and Energy', type: 'LESSON', topicSlug: 'asvab-mc-forces-motion', dayOfWeek: 0 },
      { title: 'Mechanical Jobs: Levers, Pulleys, Inclined Planes and Screws', type: 'LESSON', topicSlug: 'asvab-mc-simple-machines', dayOfWeek: 1 },
      { title: 'Mechanical Jobs: Gears, Fluids and Structures', type: 'LESSON', topicSlug: 'asvab-mc-gears-fluids', dayOfWeek: 2 },
      { title: 'ASVAB Practice Test #2', type: 'PRACTICE', dayOfWeek: 4 },
    ]),
    ...weekTasks(9, [
      { title: 'Maintenance Jobs: Engines and Combustion', type: 'LESSON', topicSlug: 'asvab-ai-engine', dayOfWeek: 0 },
      { title: 'Maintenance Jobs: Drivetrain, Brakes, Steering and Suspension', type: 'LESSON', topicSlug: 'asvab-ai-drivetrain-chassis', dayOfWeek: 1 },
      { title: 'Maintenance Jobs: Electrical, Fuel, Cooling and Exhaust', type: 'LESSON', topicSlug: 'asvab-ai-systems', dayOfWeek: 2 },
      { title: 'Keep the AFQT Sharp: Vocabulary in Context', type: 'QUIZ', topicSlug: 'asvab-wk-vocabulary-in-context', dayOfWeek: 4 },
      { title: 'Auto Flashcards', type: 'FLASHCARD', topicSlug: 'asvab-ai-engine', dayOfWeek: 5 },
    ]),
    ...weekTasks(10, [
      { title: 'Maintenance Jobs: Hand and Power Tools', type: 'LESSON', topicSlug: 'asvab-si-tools', dayOfWeek: 0 },
      { title: 'Maintenance Jobs: Materials, Fasteners and Shop Processes', type: 'LESSON', topicSlug: 'asvab-si-materials-fasteners', dayOfWeek: 1 },
      { title: 'Navy Jobs: Assembling Objects (Connecting Parts)', type: 'LESSON', topicSlug: 'asvab-ao-connections', dayOfWeek: 2 },
      { title: 'Navy Jobs: Assembling Objects (Fitting Shapes Together)', type: 'LESSON', topicSlug: 'asvab-ao-shapes', dayOfWeek: 3 },
      { title: 'Keep the AFQT Sharp: Geometry', type: 'QUIZ', topicSlug: 'asvab-mk-geometry-measurement', dayOfWeek: 4 },
    ]),
    ...weekTasks(11, [
      { title: 'ASVAB Practice Test #3', type: 'PRACTICE', dayOfWeek: 0 },
      { title: 'Review: CAT-ASVAB Strategy and Test Day', type: 'LESSON', topicSlug: 'asvab-test-strategy', dayOfWeek: 2 },
      { title: 'Review: Your AFQT and Line Scores', type: 'LESSON', topicSlug: 'asvab-afqt-scores', dayOfWeek: 3 },
      { title: 'Final Flashcard Review', type: 'FLASHCARD', topicSlug: 'asvab-wk-synonym-strategies', dayOfWeek: 5 },
    ]),
  ],
}

export const ASVAB_PLANS: StudyPlanTemplate[] = [four, eight, twelve]

export const config: StudyPlanSelectorConfig = {
  subject: 'ASVAB',
  description: 'Choose a pre-built ASVAB schedule. Every plan builds your AFQT first (word knowledge, reading, arithmetic and math), then covers the technical subtests by job area, with full practice tests along the way.',
  backLink: { href: '/asvab', label: 'ASVAB' },
  apiEndpoint: '/api/asvab-study-plans',
  diagnosticPrefix: 'asvab-diagnostic',
  accent: 'green',
  examLabel: 'ASVAB Test Date',
  plans: ASVAB_PLANS,
}
