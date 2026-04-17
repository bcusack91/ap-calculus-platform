import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'Which of the following best describes a key concept in Creative Development?', options: ['A fundamental principle of Creative Development', 'An unrelated concept from another field', 'A common misconception about Creative Development', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Creative Development is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Collaboration?', options: ['A fundamental principle of Collaboration', 'An unrelated concept from another field', 'A common misconception about Collaboration', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Collaboration is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Binary & Data?', options: ['A fundamental principle of Binary & Data', 'An unrelated concept from another field', 'A common misconception about Binary & Data', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Binary & Data is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Data Compression?', options: ['A fundamental principle of Data Compression', 'An unrelated concept from another field', 'A common misconception about Data Compression', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Data Compression is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Data & Info?', options: ['A fundamental principle of Data & Info', 'An unrelated concept from another field', 'A common misconception about Data & Info', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Data & Info is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Algorithms?', options: ['A fundamental principle of Algorithms', 'An unrelated concept from another field', 'A common misconception about Algorithms', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Algorithms is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Algorithms & Programming?', options: ['A fundamental principle of Algorithms & Programming', 'An unrelated concept from another field', 'A common misconception about Algorithms & Programming', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Algorithms & Programming is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Variables & Control?', options: ['A fundamental principle of Variables & Control', 'An unrelated concept from another field', 'A common misconception about Variables & Control', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Variables & Control is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Procedures & Lists?', options: ['A fundamental principle of Procedures & Lists', 'An unrelated concept from another field', 'A common misconception about Procedures & Lists', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Procedures & Lists is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Systems & Networks?', options: ['A fundamental principle of Systems & Networks', 'An unrelated concept from another field', 'A common misconception about Systems & Networks', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Systems & Networks is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Internet Protocols?', options: ['A fundamental principle of Internet Protocols', 'An unrelated concept from another field', 'A common misconception about Internet Protocols', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Internet Protocols is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Fault Tolerance?', options: ['A fundamental principle of Fault Tolerance', 'An unrelated concept from another field', 'A common misconception about Fault Tolerance', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Fault Tolerance is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Impact of Computing?', options: ['A fundamental principle of Impact of Computing', 'An unrelated concept from another field', 'A common misconception about Impact of Computing', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Impact of Computing is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Safe Computing?', options: ['A fundamental principle of Safe Computing', 'An unrelated concept from another field', 'A common misconception about Safe Computing', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Safe Computing is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Social & Ethical Impacts?', options: ['A fundamental principle of Social & Ethical Impacts', 'An unrelated concept from another field', 'A common misconception about Social & Ethical Impacts', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Social & Ethical Impacts is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Creative Development?', options: ['A fundamental principle of Creative Development', 'An unrelated concept from another field', 'A common misconception about Creative Development', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Creative Development is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Collaboration?', options: ['A fundamental principle of Collaboration', 'An unrelated concept from another field', 'A common misconception about Collaboration', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Collaboration is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Binary & Data?', options: ['A fundamental principle of Binary & Data', 'An unrelated concept from another field', 'A common misconception about Binary & Data', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Binary & Data is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Data Compression?', options: ['A fundamental principle of Data Compression', 'An unrelated concept from another field', 'A common misconception about Data Compression', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Data Compression is essential for the AP CS Principles exam.', topic: 'csp' },
  { question: 'Which of the following best describes a key concept in Data & Info?', options: ['A fundamental principle of Data & Info', 'An unrelated concept from another field', 'A common misconception about Data & Info', 'A secondary detail not tested on the AP exam'], correctAnswer: 0, explanation: 'Understanding the fundamental principles of Data & Info is essential for the AP CS Principles exam.', topic: 'csp' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP CS Principles',
  description: 'Timed practice covering computational thinking, data, algorithms, and impact of computing.',
  backLink: { href: '/ap-cs-principles', label: 'AP CS Principles' },
  ctaLinks: [
    { href: '/ap-csp-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-csp-daily-question', label: 'Daily Question' },
  ],
  accent: 'indigo',
  sections: [
  {
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all units of AP CS Principles.',
    questionCount: 30, timeLimitMinutes: 35,
  }
  ],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP CS Principles Exam',
    columns: [
    { heading: 'Exam Structure', items: ['Section I: 70 MC (120 min)', 'Create Performance Task (submitted)', 'Total: 2 hours + project'] },
    { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 70% of score', 'Create PT: 30% of score', 'No FRQ on exam day'] }
    ],
  },
}
