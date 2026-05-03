import type { FullLengthExamConfig } from '@/components/FullLengthPracticeExam'
import { ENGLISH_MCQS, MATH_MCQS, READING_MCQS, SCIENCE_MCQS } from './mcqs'

export const config: FullLengthExamConfig = {
  subject: 'ACT',
  description:
    'Full-length practice exam modeled on the Enhanced ACT (2025+) format: 4 sections covering English, Math, Reading, and Science with section-by-section timing. Representative scaled-down version (60 MCQs total).',
  backLink: { href: '/act', label: 'ACT Prep' },
  ctaLinks: [
    { href: '/act-diagnostic', label: 'Diagnostic Test' },
    { href: '/act-daily-question', label: 'Daily Question' },
    { href: '/act-score-predictor', label: 'Score Predictor' },
    { href: '/act-study-plans', label: 'Study Plans' },
  ],
  accent: 'red',
  totalTimeMinutes: 64,
  sections: [
    {
      id: 'english',
      name: 'English',
      shortName: 'English',
      description: 'Grammar, usage, punctuation, sentence structure, and rhetorical skills. (Real ACT: 50 questions, 35 min — practice version 16 questions, 12 min.)',
      timeLimitMinutes: 12,
      items: ENGLISH_MCQS,
    },
    {
      id: 'math',
      name: 'Mathematics',
      shortName: 'Math',
      description: 'Pre-algebra, algebra, geometry, trigonometry, and statistics. Calculator allowed. (Real ACT: 45 questions, 50 min — practice version 18 questions, 22 min.)',
      timeLimitMinutes: 22,
      items: MATH_MCQS,
    },
    {
      id: 'reading',
      name: 'Reading',
      shortName: 'Reading',
      description: 'Reading comprehension, inference, literary analysis, and vocabulary in context across prose fiction, social science, humanities, and natural science passages. (Real ACT: 36 questions, 40 min — practice version 13 questions, 15 min.)',
      timeLimitMinutes: 15,
      items: READING_MCQS,
    },
    {
      id: 'science',
      name: 'Science',
      shortName: 'Science',
      description: 'Data interpretation, experimental design, and conflicting viewpoints across biology, chemistry, physics, and earth/space science. Optional on the Enhanced ACT but recommended for STEM-bound students. (Real ACT: 40 questions, 40 min — practice version 13 questions, 15 min.)',
      timeLimitMinutes: 15,
      items: SCIENCE_MCQS,
    },
  ],
  aboutInfo: {
    title: 'About the Enhanced ACT (2025+)',
    columns: [
      {
        heading: 'Real Test Structure',
        items: [
          'English: 50 questions (35 min)',
          'Math: 45 questions (50 min, calculator allowed)',
          'Reading: 36 questions (40 min)',
          'Science: 40 questions (40 min, optional)',
          'Total with Science: 171 questions, 165 min',
          'Optional Writing essay: 40 min',
        ],
      },
      {
        heading: 'Scoring',
        items: [
          'Each section: 1–36',
          'Composite: average of section scores, 1–36',
          'Most colleges accept ACT or SAT',
          'Score-choice and superscoring policies vary by college',
        ],
      },
    ],
  },
}
