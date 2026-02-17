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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Integers, primes, factors, multiples —…?',
            options: [
              'Integers, primes, factors, multiples — these form the foundation of ACT Math.',
              'Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).',
              'Prime factorization helps with GCF and LCM.',
              'Even × odd = even; odd × odd = odd; even + odd = odd.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Integers, primes, factors, multiples — these form the foundation of ACT Math. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Pre Algebra Basics, which explains Key Insight?',
            options: [
              'Integers, primes, factors, multiples — these form the foundation of ACT Math.',
              'Prime factorization helps with GCF and LCM.',
              'Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).',
              'Even × odd = even; odd × odd = odd; even + odd = odd.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Prime factorization helps with GCF and LCM. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Pre Algebra Basics, which correctly describes ACT Tip?',
            options: [
              'Prime factorization helps with GCF and LCM.',
              'Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).',
              'Integers, primes, factors, multiples — these form the foundation of ACT Math.',
              'Even × odd = even; odd × odd = odd; even + odd = odd.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Prime factorization helps with GCF and LCM.', 'Even × odd = even; odd × odd = odd; even + odd = odd.', 'Integers, primes, factors, multiples — these form the foundation of ACT Math.', 'Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).']
          },
          {
            label: 'ACT Tip',
            options: ['Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).', 'Even × odd = even; odd × odd = odd; even + odd = odd.', 'Prime factorization helps with GCF and LCM.', 'Integers, primes, factors, multiples — these form the foundation of ACT Math.']
          }
        ],
        correctAnswers: ['Prime factorization helps with GCF and LCM.', 'Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).'],
        hint1: 'Think about what each concept specifically describes in Pre Algebra Basics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Pre Algebra Basics describes a specific idea. Key Insight: Prime factorization helps with GCF and LCM. ACT Tip: Divisibility rules: by 2 (even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5).'
      }
    }
  ]
}
