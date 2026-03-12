export interface NegativeNumberQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: NegativeNumberQuestion[] = [
  // ── EASY ──────────────────────────────────────────────
  {
    id: 1,
    question: 'Which number is greater: $-3$ or $-8$?',
    options: ['$-3$', '$-8$', 'They are equal', 'Cannot be determined'],
    correctAnswer: 0,
    explanation: '$-3$ is closer to zero on the number line, so $-3 > -8$.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is $(-2) + (-5)$?',
    options: ['$-7$', '$7$', '$-3$', '$3$'],
    correctAnswer: 0,
    explanation: 'Same signs: add the absolute values ($2+5=7$) and keep the negative sign → $-7$.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is $|{-9}|$?',
    options: ['$9$', '$-9$', '$0$', '$-1$'],
    correctAnswer: 0,
    explanation: 'Absolute value is the distance from zero: $|{-9}| = 9$.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which of these is a negative number?',
    options: ['$-4$', '$0$', '$\\frac{1}{2}$', '$4$'],
    correctAnswer: 0,
    explanation: '$-4$ is less than zero, making it a negative number.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'On a number line, $-6$ is to the _____ of $-1$.',
    options: ['left', 'right', 'same position', 'above'],
    correctAnswer: 0,
    explanation: 'Smaller numbers are to the left. Since $-6 < -1$, it is to the left.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is $0 + (-4)$?',
    options: ['$-4$', '$4$', '$0$', '$-8$'],
    correctAnswer: 0,
    explanation: 'Adding zero to any number gives that same number: $0 + (-4) = -4$.',
    difficulty: 'easy',
  },

  // ── MEDIUM ────────────────────────────────────────────
  {
    id: 7,
    question: 'What is $8 + (-12)$?',
    options: ['$-4$', '$4$', '$-20$', '$20$'],
    correctAnswer: 0,
    explanation: 'Different signs: $12 - 8 = 4$. The larger absolute value is negative, so the answer is $-4$.',
    difficulty: 'medium',
  },
  {
    id: 8,
    question: 'What is $5 - (-3)$?',
    options: ['$8$', '$2$', '$-8$', '$-2$'],
    correctAnswer: 0,
    explanation: 'Subtracting a negative = adding a positive: $5 - (-3) = 5 + 3 = 8$.',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'Order from least to greatest: $-2, 5, -7, 0$.',
    options: ['$-7, -2, 0, 5$', '$-2, -7, 0, 5$', '$0, -2, -7, 5$', '$5, 0, -2, -7$'],
    correctAnswer: 0,
    explanation: 'On the number line, left to right: $-7 < -2 < 0 < 5$.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Which statement is true?',
    options: ['$-3 > -10$', '$-3 < -10$', '$-3 = -10$', '$-3 > 0$'],
    correctAnswer: 0,
    explanation: '$-3$ is closer to zero than $-10$, so $-3 > -10$.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is $(-6) - (-6)$?',
    options: ['$0$', '$-12$', '$12$', '$-6$'],
    correctAnswer: 0,
    explanation: '$(-6) - (-6) = -6 + 6 = 0$. A number minus itself is always zero.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'The temperature was $-3°F$ and dropped $7$ more degrees. What is the new temperature?',
    options: ['$-10°F$', '$4°F$', '$-4°F$', '$10°F$'],
    correctAnswer: 0,
    explanation: '$-3 + (-7) = -10$. Dropping $7$ degrees from $-3$ gives $-10°F$.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is $|{-15}| - |{-5}|$?',
    options: ['$10$', '$-10$', '$20$', '$-20$'],
    correctAnswer: 0,
    explanation: '$|{-15}| = 15$ and $|{-5}| = 5$, so $15 - 5 = 10$.',
    difficulty: 'medium',
  },

  // ── HARD ──────────────────────────────────────────────
  {
    id: 14,
    question: 'What is $(-8) + 3 + (-5) + 10$?',
    options: ['$0$', '$-10$', '$6$', '$-6$'],
    correctAnswer: 0,
    explanation: 'Group: $(-8) + (-5) = -13$ and $3 + 10 = 13$. Then $-13 + 13 = 0$.',
    difficulty: 'hard',
  },
  {
    id: 15,
    question: 'A submarine is at $-200$ feet. It rises $75$ feet, then dives $120$ feet. What is its final depth?',
    options: ['$-245$ feet', '$-155$ feet', '$-95$ feet', '$-395$ feet'],
    correctAnswer: 0,
    explanation: '$-200 + 75 = -125$, then $-125 + (-120) = -245$ feet.',
    difficulty: 'hard',
  },
  {
    id: 16,
    question: 'If $a = -4$ and $b = -9$, what is $a - b$?',
    options: ['$5$', '$-5$', '$-13$', '$13$'],
    correctAnswer: 0,
    explanation: '$a - b = (-4) - (-9) = -4 + 9 = 5$.',
    difficulty: 'hard',
  },
  {
    id: 17,
    question: 'Which list is in order from greatest to least?',
    options: ['$3, 0, -1, -4, -9$', '$-9, -4, -1, 0, 3$', '$3, -1, 0, -4, -9$', '$0, 3, -1, -9, -4$'],
    correctAnswer: 0,
    explanation: 'Greatest to least: $3 > 0 > -1 > -4 > -9$.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What integer is exactly halfway between $-8$ and $4$ on the number line?',
    options: ['$-2$', '$-4$', '$0$', '$2$'],
    correctAnswer: 0,
    explanation: 'The midpoint is $\\frac{-8 + 4}{2} = \\frac{-4}{2} = -2$.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'If the temperature changes from $-12°F$ to $7°F$, how many degrees did it rise?',
    options: ['$19$ degrees', '$5$ degrees', '$-5$ degrees', '$-19$ degrees'],
    correctAnswer: 0,
    explanation: 'Change = $7 - (-12) = 7 + 12 = 19$ degrees.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Simplify: $-|{-3}| + |{5}| - (-2)$.',
    options: ['$4$', '$0$', '$6$', '$-4$'],
    correctAnswer: 0,
    explanation: '$-|{-3}| = -3$, $|{5}| = 5$, and $-(-2) = 2$. So $-3 + 5 + 2 = 4$.',
    difficulty: 'hard',
  },
]

export function getNegativeNumbersQuestions(count: number = 10): NegativeNumberQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
