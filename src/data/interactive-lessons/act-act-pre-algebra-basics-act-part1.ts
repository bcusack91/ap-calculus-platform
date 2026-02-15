export const actPreAlgebraPart1Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p1-intro',
      type: 'text' as const,
      content: `
# 📋 Pre Algebra Basics

**Part 1 of 7 — Number Properties**

Integers, primes, factors, multiples — these form the foundation of ACT Math.

Even × odd = even; odd × odd = odd; even + odd = odd.
      `
    },
    {
      id: 'act-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes integers, primes, factors, multiples — these form the foundation of act math?',
            options: [
              'Integers, primes, factors, multiples — these form the foundation of ACT Math is a key concept for ACT Math',
              'Even × odd = even; odd × odd = odd; even + odd = odd',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Integers, primes, factors, multiples — these form the foundation of ACT Math'
          }
        ]
      }
    },
    {
      id: 'act-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Prime factorization helps with GCF and LCM.

**ACT Tip:** Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).
      `
    },
    {
      id: 'act-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for number properties?',
            options: [
              'Prime factorization helps with GCF and LCM',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Prime factorization helps with GCF and LCM'
          }
        ]
      }
    },
    {
      id: 'act-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Number Properties:',
            options: ['Integers, primes, factors, multiples — these form ', 'Even × odd = even; odd × odd = odd; even + odd = o', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Prime factorization helps with GCF and LCM', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Integers, primes, factors, multiples — these form ', 'Prime factorization helps with GCF and LCM'],
        hint1: 'Think about number properties',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Integers, primes, factors, multiples — these form the foundation of ACT Math. Prime factorization helps with GCF and LCM.'
      }
    }
  ]
}
