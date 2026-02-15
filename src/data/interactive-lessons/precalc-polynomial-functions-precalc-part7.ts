export const precalcPolynomialPart7Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'polyn7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Long division of polynomials',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Long division of polynomials: divide step by step'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'f(c) = remainder when dividing by (x - c)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Remainder Theorem: f(c) = remainder when dividing by (x - c)'
          }
        ]
      }
    },
    {
      id: 'polyn7-detail',
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
      id: 'polyn7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'polyn7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Long division of polynomials',
            options: ['divide step by step', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Synthetic division',
            options: ['shortcut when dividing by (x - c)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Remainder Theorem',
            options: ['f(c) = remainder when dividing by (x - c)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['divide step by step', 'shortcut when dividing by (x - c)', 'f(c) = remainder when dividing by (x - c)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
