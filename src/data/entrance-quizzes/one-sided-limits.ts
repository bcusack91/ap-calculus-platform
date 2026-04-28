/**
 * Entrance Quiz — One-Sided Limits
 * 8 questions, 2 per part. Strictly scoped to one-sided limit notation,
 * computation on piecewise/abs-value functions, the existence theorem,
 * and one-sided existence at domain endpoints.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'osl-ent-1a',
    question: 'In the symbol $\\lim_{x \\to 6^-} f(x)$, the "$-$" superscript means:',
    options: [
      '$x$ is negative',
      '$x$ approaches 6 from values LESS than 6 (left)',
      'Subtract 1 from 6',
      '$f(x)$ becomes negative',
    ],
    correctIndex: 1,
    explanation: '"$-$" superscript = "from the left" (smaller values). Has nothing to do with sign.',
    partNumber: 1,
    partTitle: 'Notation and Idea',
  },
  {
    id: 'osl-ent-1b',
    question: 'How do you read $\\lim_{x \\to 0^+} g(x) = 5$ aloud?',
    options: [
      '$g$ at $0 + 1$ equals 5',
      'The limit of $g$ as $x$ approaches 0 from the right equals 5',
      'The right-side average of $g$ at 0 is 5',
      '$g(0)$ plus 5 equals 0',
    ],
    correctIndex: 1,
    explanation: '"$+$" superscript means "from the right" (values greater than the target).',
    partNumber: 1,
    partTitle: 'Notation and Idea',
  },

  // Part 2
  {
    id: 'osl-ent-2a',
    question: 'For $f(x) = \\dfrac{|x|}{x}$: $\\lim_{x \\to 0^-} f(x) = ?$',
    options: ['$1$', '$-1$', '$0$', 'DNE'],
    correctIndex: 1,
    explanation: 'For $x < 0$, $|x|/x = -x/x = -1$.',
    partNumber: 2,
    partTitle: 'Computing One-Sided Limits',
  },
  {
    id: 'osl-ent-2b',
    question: 'For $f(x) = \\begin{cases} 2x & x < 1 \\\\ x + 5 & x \\ge 1 \\end{cases}$, $\\lim_{x \\to 1^+} f(x) = ?$',
    options: ['$2$', '$6$', '$1$', 'DNE'],
    correctIndex: 1,
    explanation: 'Approach from the right ($x > 1$) → use $x + 5$, plug in 1 → 6.',
    partNumber: 2,
    partTitle: 'Computing One-Sided Limits',
  },

  // Part 3
  {
    id: 'osl-ent-3a',
    question: 'Existence theorem: $\\lim_{x \\to a} f(x)$ exists if and only if:',
    options: [
      '$f(a)$ is defined',
      'Both one-sided limits exist and are equal',
      '$f$ is increasing at $a$',
      '$f$ is bounded',
    ],
    correctIndex: 1,
    explanation: 'The existence theorem depends only on agreement of the two one-sided limits — not on $f(a)$.',
    partNumber: 3,
    partTitle: 'The Existence Theorem',
  },
  {
    id: 'osl-ent-3b',
    question: '$\\lim_{x \\to 4^-} f = 2$, $\\lim_{x \\to 4^+} f = 9$, $f(4) = 2$. What is $\\lim_{x \\to 4} f(x)$?',
    options: ['$2$', '$9$', '$5.5$', 'DNE'],
    correctIndex: 3,
    explanation: 'One-sided limits disagree → two-sided DNE. Matching $f(4)$ to one side isn\'t enough.',
    partNumber: 3,
    partTitle: 'The Existence Theorem',
  },

  // Part 4
  {
    id: 'osl-ent-4a',
    question: 'For $f(x) = \\sqrt{x - 5}$: $\\lim_{x \\to 5^+} f(x) = ?$',
    options: ['$0$', '$5$', '$\\sqrt{5}$', 'DNE'],
    correctIndex: 0,
    explanation: 'For $x > 5$, $\\sqrt{x-5}$ is defined and approaches $\\sqrt{0} = 0$.',
    partNumber: 4,
    partTitle: 'When Only One Side Exists',
  },
  {
    id: 'osl-ent-4b',
    question: 'Why does $\\lim_{x \\to 5^-} \\sqrt{x - 5}$ fail to exist?',
    options: [
      'Because $\\sqrt{0} = 0$',
      'Because $\\sqrt{x - 5}$ requires $x \\ge 5$ — for $x < 5$ it isn\'t a real number',
      'Because the function oscillates',
      'Because the function blows up',
    ],
    correctIndex: 1,
    explanation: 'Domain restriction: $\\sqrt{x - 5}$ isn\'t real for $x < 5$. The left-side approach has no values to use.',
    partNumber: 4,
    partTitle: 'When Only One Side Exists',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Notation and Idea' },
    { partNumber: 2, partTitle: 'Computing One-Sided Limits' },
    { partNumber: 3, partTitle: 'The Existence Theorem' },
    { partNumber: 4, partTitle: 'When Only One Side Exists' },
  ]
}
