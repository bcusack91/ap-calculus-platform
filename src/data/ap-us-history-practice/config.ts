import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'Which of the following best describes a key concept in Native Societies & Exploration?', options: ['A fundamental principle of Native Societies & Exploration', 'An unrelated concept from another field', 'A common misconception about Native Societies & Exploration', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Native Societies & Exploration is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Colonial America?', options: ['A fundamental principle of Colonial America', 'An unrelated concept from another field', 'A common misconception about Colonial America', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Colonial America is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Colonial Society?', options: ['A fundamental principle of Colonial Society', 'An unrelated concept from another field', 'A common misconception about Colonial Society', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Colonial Society is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Revolution & Independence?', options: ['A fundamental principle of Revolution & Independence', 'An unrelated concept from another field', 'A common misconception about Revolution & Independence', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Revolution & Independence is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Constitution & Early Republic?', options: ['A fundamental principle of Constitution & Early Republic', 'An unrelated concept from another field', 'A common misconception about Constitution & Early Republic', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Constitution & Early Republic is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Democracy & Expansion?', options: ['A fundamental principle of Democracy & Expansion', 'An unrelated concept from another field', 'A common misconception about Democracy & Expansion', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Democracy & Expansion is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Reform Movements?', options: ['A fundamental principle of Reform Movements', 'An unrelated concept from another field', 'A common misconception about Reform Movements', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Reform Movements is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Civil War?', options: ['A fundamental principle of Civil War', 'An unrelated concept from another field', 'A common misconception about Civil War', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Civil War is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Reconstruction?', options: ['A fundamental principle of Reconstruction', 'An unrelated concept from another field', 'A common misconception about Reconstruction', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Reconstruction is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Gilded Age?', options: ['A fundamental principle of Gilded Age', 'An unrelated concept from another field', 'A common misconception about Gilded Age', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Gilded Age is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Progressivism & WWI?', options: ['A fundamental principle of Progressivism & WWI', 'An unrelated concept from another field', 'A common misconception about Progressivism & WWI', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Progressivism & WWI is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Depression & WWII?', options: ['A fundamental principle of Depression & WWII', 'An unrelated concept from another field', 'A common misconception about Depression & WWII', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Depression & WWII is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Native Societies & Exploration?', options: ['A fundamental principle of Native Societies & Exploration', 'An unrelated concept from another field', 'A common misconception about Native Societies & Exploration', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Native Societies & Exploration is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Colonial America?', options: ['A fundamental principle of Colonial America', 'An unrelated concept from another field', 'A common misconception about Colonial America', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Colonial America is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Colonial Society?', options: ['A fundamental principle of Colonial Society', 'An unrelated concept from another field', 'A common misconception about Colonial Society', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Colonial Society is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Revolution & Independence?', options: ['A fundamental principle of Revolution & Independence', 'An unrelated concept from another field', 'A common misconception about Revolution & Independence', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Revolution & Independence is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Constitution & Early Republic?', options: ['A fundamental principle of Constitution & Early Republic', 'An unrelated concept from another field', 'A common misconception about Constitution & Early Republic', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Constitution & Early Republic is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Democracy & Expansion?', options: ['A fundamental principle of Democracy & Expansion', 'An unrelated concept from another field', 'A common misconception about Democracy & Expansion', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Democracy & Expansion is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Reform Movements?', options: ['A fundamental principle of Reform Movements', 'An unrelated concept from another field', 'A common misconception about Reform Movements', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Reform Movements is essential for the AP US History exam.', topic: 'apush' },
  { question: 'Which of the following best describes a key concept in Civil War?', options: ['A fundamental principle of Civil War', 'An unrelated concept from another field', 'A common misconception about Civil War', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Civil War is essential for the AP US History exam.', topic: 'apush' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP US History',
  description: 'Timed practice covering all 9 periods of US History.',
  backLink: { href: '/ap-us-history', label: 'AP US History' },
  ctaLinks: [
    { href: '/ap-us-history-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-us-history-daily-question', label: 'Daily Question' },
  ],
  accent: 'red',
  sections: [
  {
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all units of AP US History.',
    questionCount: 30, timeLimitMinutes: 35,
  }
  ],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP US History Exam',
    columns: [
    { heading: 'Exam Structure', items: ['Section I: 55 MC + 3 SAQs (95 min)', 'Section II: 1 DBQ + 1 LEQ (100 min)', 'Total: 3 hours 15 min'] },
    { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 40%', 'SAQ: 20%', 'DBQ: 25%', 'LEQ: 15%'] }
    ],
  },
}
