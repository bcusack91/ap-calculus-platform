import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'Which of the following best describes a key concept in Ecosystem Structure?', options: ['A fundamental principle of Ecosystem Structure', 'An unrelated concept from another field', 'A common misconception about Ecosystem Structure', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Ecosystem Structure is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Biogeochemical Cycles?', options: ['A fundamental principle of Biogeochemical Cycles', 'An unrelated concept from another field', 'A common misconception about Biogeochemical Cycles', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Biogeochemical Cycles is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Earth Systems?', options: ['A fundamental principle of Earth Systems', 'An unrelated concept from another field', 'A common misconception about Earth Systems', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Earth Systems is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Biodiversity?', options: ['A fundamental principle of Biodiversity', 'An unrelated concept from another field', 'A common misconception about Biodiversity', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Biodiversity is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Conservation?', options: ['A fundamental principle of Conservation', 'An unrelated concept from another field', 'A common misconception about Conservation', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Conservation is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Biomes & Succession?', options: ['A fundamental principle of Biomes & Succession', 'An unrelated concept from another field', 'A common misconception about Biomes & Succession', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Biomes & Succession is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Population Ecology?', options: ['A fundamental principle of Population Ecology', 'An unrelated concept from another field', 'A common misconception about Population Ecology', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Population Ecology is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Human Population?', options: ['A fundamental principle of Human Population', 'An unrelated concept from another field', 'A common misconception about Human Population', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Human Population is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Agriculture & Land?', options: ['A fundamental principle of Agriculture & Land', 'An unrelated concept from another field', 'A common misconception about Agriculture & Land', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Agriculture & Land is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Water Resources?', options: ['A fundamental principle of Water Resources', 'An unrelated concept from another field', 'A common misconception about Water Resources', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Water Resources is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Fossil Fuels & Nuclear?', options: ['A fundamental principle of Fossil Fuels & Nuclear', 'An unrelated concept from another field', 'A common misconception about Fossil Fuels & Nuclear', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Fossil Fuels & Nuclear is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Renewable Energy?', options: ['A fundamental principle of Renewable Energy', 'An unrelated concept from another field', 'A common misconception about Renewable Energy', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Renewable Energy is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Energy Concepts?', options: ['A fundamental principle of Energy Concepts', 'An unrelated concept from another field', 'A common misconception about Energy Concepts', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Energy Concepts is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Atmospheric Pollution?', options: ['A fundamental principle of Atmospheric Pollution', 'An unrelated concept from another field', 'A common misconception about Atmospheric Pollution', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Atmospheric Pollution is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Climate Change?', options: ['A fundamental principle of Climate Change', 'An unrelated concept from another field', 'A common misconception about Climate Change', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Climate Change is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Ecosystem Structure?', options: ['A fundamental principle of Ecosystem Structure', 'An unrelated concept from another field', 'A common misconception about Ecosystem Structure', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Ecosystem Structure is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Biogeochemical Cycles?', options: ['A fundamental principle of Biogeochemical Cycles', 'An unrelated concept from another field', 'A common misconception about Biogeochemical Cycles', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Biogeochemical Cycles is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Earth Systems?', options: ['A fundamental principle of Earth Systems', 'An unrelated concept from another field', 'A common misconception about Earth Systems', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Earth Systems is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Biodiversity?', options: ['A fundamental principle of Biodiversity', 'An unrelated concept from another field', 'A common misconception about Biodiversity', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Biodiversity is essential for the AP Environmental Science exam.', topic: 'apes' },
  { question: 'Which of the following best describes a key concept in Conservation?', options: ['A fundamental principle of Conservation', 'An unrelated concept from another field', 'A common misconception about Conservation', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Conservation is essential for the AP Environmental Science exam.', topic: 'apes' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Environmental Science',
  description: 'Timed practice covering ecosystems, energy, pollution, and climate change.',
  backLink: { href: '/ap-environmental-science', label: 'AP Environmental Science' },
  ctaLinks: [
    { href: '/ap-enviro-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-enviro-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
  sections: [
  {
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all units of AP Environmental Science.',
    questionCount: 30, timeLimitMinutes: 35,
  }
  ],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Environmental Science Exam',
    columns: [
    { heading: 'Exam Structure', items: ['Section I: 80 MC (90 min)', 'Section II: 3 FRQs (70 min)', 'Total: 2 hours 40 min'] },
    { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 60% of score', 'FRQ: 40% of score', 'Math calculations included'] }
    ],
  },
}
