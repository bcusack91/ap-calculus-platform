export const precalcPolynomialPart5Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn5-intro',
      type: 'text' as const,
      content: `
# Polynomial Division

**Part 5 of 7 — Polynomial Division**

### 1. Long division of polynomials

divide step by step

### 2. Synthetic division

shortcut when dividing by (x - c)

### 3. Remainder Theorem

f(c) = remainder when dividing by (x - c)

### 4. Factor Theorem

(x - c) is a factor if and only if f(c) = 0
      `
    },
    {
      id: 'polyn5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Long division of polynomials" refer to in precalculus?',
            options: [
              'f(c) = remainder when dividing by (x - c)',
              'shortcut when dividing by (x - c)',
              'divide step by step',
              '(x - c) is a factor if and only if f(c) = 0'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Long division of polynomials: divide step by step. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Remainder Theorem:',
            options: [
              'divide step by step',
              '(x - c) is a factor if and only if f(c) = 0',
              'shortcut when dividing by (x - c)',
              'f(c) = remainder when dividing by (x - c)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Remainder Theorem: f(c) = remainder when dividing by (x - c). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polyn5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Long division of polynomials**: divide step by step
- **Synthetic division**: shortcut when dividing by (x - c)
- **Remainder Theorem**: f(c) = remainder when dividing by (x - c)
- **Factor Theorem**: (x - c) is a factor if and only if f(c) = 0
      `
    },
    {
      id: 'polyn5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polynomial division?',
            options: [
              '(x - c) is a factor if and only if f(c) = 0',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Factor Theorem: (x - c) is a factor if and only if f(c) = 0'
          }
        ]
      }
    },
    {
      id: 'polyn5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Long division of polynomials',
            options: ['shortcut when dividing by (x - c)', 'divide step by step', 'f(c) = remainder when dividing by (x - c)', '(x - c) is a factor if and only if f(c) = 0']
          },
          {
            label: 'Synthetic division',
            options: ['shortcut when dividing by (x - c)', 'f(c) = remainder when dividing by (x - c)', 'divide step by step', '(x - c) is a factor if and only if f(c) = 0']
          },
          {
            label: 'Remainder Theorem',
            options: ['f(c) = remainder when dividing by (x - c)', '(x - c) is a factor if and only if f(c) = 0', 'shortcut when dividing by (x - c)', 'divide step by step']
          }
        ],
        correctAnswers: ['divide step by step', 'shortcut when dividing by (x - c)', 'f(c) = remainder when dividing by (x - c)'],
        hint1: 'Think about what each concept specifically describes in Polynomial Division.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polynomial Division describes a specific idea. Long division of polynomials: divide step by step. Synthetic division: shortcut when dividing by (x - c). Remainder Theorem: f(c) = remainder when dividing by (x - c).'
      }
    }
  ]
}
