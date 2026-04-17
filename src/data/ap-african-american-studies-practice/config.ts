import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'Which of the following best describes a key concept in African Kingdoms?', options: ['A fundamental principle of African Kingdoms', 'An unrelated concept from another field', 'A common misconception about African Kingdoms', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of African Kingdoms is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Origins of Diaspora?', options: ['A fundamental principle of Origins of Diaspora', 'An unrelated concept from another field', 'A common misconception about Origins of Diaspora', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Origins of Diaspora is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Transatlantic Slave Trade?', options: ['A fundamental principle of Transatlantic Slave Trade', 'An unrelated concept from another field', 'A common misconception about Transatlantic Slave Trade', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Transatlantic Slave Trade is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Slavery in America?', options: ['A fundamental principle of Slavery in America', 'An unrelated concept from another field', 'A common misconception about Slavery in America', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Slavery in America is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Resistance & Abolition?', options: ['A fundamental principle of Resistance & Abolition', 'An unrelated concept from another field', 'A common misconception about Resistance & Abolition', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Resistance & Abolition is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Freedom & Enslavement?', options: ['A fundamental principle of Freedom & Enslavement', 'An unrelated concept from another field', 'A common misconception about Freedom & Enslavement', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Freedom & Enslavement is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Reconstruction & Jim Crow?', options: ['A fundamental principle of Reconstruction & Jim Crow', 'An unrelated concept from another field', 'A common misconception about Reconstruction & Jim Crow', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Reconstruction & Jim Crow is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Great Migration & Harlem?', options: ['A fundamental principle of Great Migration & Harlem', 'An unrelated concept from another field', 'A common misconception about Great Migration & Harlem', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Great Migration & Harlem is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in WWI & WWII Era?', options: ['A fundamental principle of WWI & WWII Era', 'An unrelated concept from another field', 'A common misconception about WWI & WWII Era', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of WWI & WWII Era is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Practice of Freedom?', options: ['A fundamental principle of Practice of Freedom', 'An unrelated concept from another field', 'A common misconception about Practice of Freedom', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Practice of Freedom is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Civil Rights Movement?', options: ['A fundamental principle of Civil Rights Movement', 'An unrelated concept from another field', 'A common misconception about Civil Rights Movement', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Civil Rights Movement is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Black Power & Beyond?', options: ['A fundamental principle of Black Power & Beyond', 'An unrelated concept from another field', 'A common misconception about Black Power & Beyond', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Black Power & Beyond is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Contemporary Issues?', options: ['A fundamental principle of Contemporary Issues', 'An unrelated concept from another field', 'A common misconception about Contemporary Issues', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Contemporary Issues is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Movements Today?', options: ['A fundamental principle of Movements Today', 'An unrelated concept from another field', 'A common misconception about Movements Today', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Movements Today is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in African Kingdoms?', options: ['A fundamental principle of African Kingdoms', 'An unrelated concept from another field', 'A common misconception about African Kingdoms', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of African Kingdoms is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Origins of Diaspora?', options: ['A fundamental principle of Origins of Diaspora', 'An unrelated concept from another field', 'A common misconception about Origins of Diaspora', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Origins of Diaspora is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Transatlantic Slave Trade?', options: ['A fundamental principle of Transatlantic Slave Trade', 'An unrelated concept from another field', 'A common misconception about Transatlantic Slave Trade', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Transatlantic Slave Trade is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Slavery in America?', options: ['A fundamental principle of Slavery in America', 'An unrelated concept from another field', 'A common misconception about Slavery in America', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Slavery in America is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Resistance & Abolition?', options: ['A fundamental principle of Resistance & Abolition', 'An unrelated concept from another field', 'A common misconception about Resistance & Abolition', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Resistance & Abolition is essential for the AP African American Studies exam.', topic: 'aas' },
  { question: 'Which of the following best describes a key concept in Freedom & Enslavement?', options: ['A fundamental principle of Freedom & Enslavement', 'An unrelated concept from another field', 'A common misconception about Freedom & Enslavement', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Freedom & Enslavement is essential for the AP African American Studies exam.', topic: 'aas' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP African American Studies',
  description: 'Timed practice covering the African American experience from origins through contemporary issues.',
  backLink: { href: '/ap-african-american-studies', label: 'AP African American Studies' },
  ctaLinks: [
    { href: '/ap-african-american-studies-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-african-american-studies-daily-question', label: 'Daily Question' },
  ],
  accent: 'amber',
  sections: [
  {
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all units of AP African American Studies.',
    questionCount: 30, timeLimitMinutes: 35,
  }
  ],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP African American Studies Exam',
    columns: [
    { heading: 'Exam Structure', items: ['Section I: 60 MC (80 min)', 'Section II: 3 FRQs (90 min)', 'Total: 2 hours 50 min'] },
    { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'Source analysis required'] }
    ],
  },
}
