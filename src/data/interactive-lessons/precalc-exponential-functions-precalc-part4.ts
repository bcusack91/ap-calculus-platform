export const precalcExponentialPart4Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon4-intro',
      type: 'text' as const,
      content: `
# Exponential Equations

**Part 4 of 7 — Exponential Equations**

### 1. If bˣ = bʸ, then x = y (one-to-one property)

If bˣ = bʸ, then x = y (one-to-one property)

### 2. Rewrite both sides with the same base when possible

Rewrite both sides with the same base when possible

### 3. Use logarithms when bases cannot be matched

Use logarithms when bases cannot be matched

### 4. Check solutions in the original equation

Check solutions in the original equation
      `
    },
    {
      id: 'expon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of exponential equations?',
            options: [
              'If bˣ = bʸ, then x = y (one-to-one property)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'If bˣ = bʸ, then x = y (one-to-one property)'
          },
          {
            question: 'In the context of exponential equations, which is accurate?',
            options: [
              'Use logarithms when bases cannot be matched',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use logarithms when bases cannot be matched'
          }
        ]
      }
    },
    {
      id: 'expon4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If bˣ = bʸ, then x = y (one-to-one property)**
- **Rewrite both sides with the same base when possible**
- **Use logarithms when bases cannot be matched**
- **Check solutions in the original equation**
      `
    },
    {
      id: 'expon4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential equations?',
            options: [
              'Check solutions in the original equation',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Check solutions in the original equation'
          }
        ]
      }
    },
    {
      id: 'expon4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If bˣ = bʸ, then x = y (one-to-one property)',
            options: ['If bˣ = bʸ, then x = y (one-to-one property)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Rewrite both sides with the same base when possible',
            options: ['Rewrite both sides with the same base when possibl', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Use logarithms when bases cannot be matched',
            options: ['Use logarithms when bases cannot be matched', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['If bˣ = bʸ, then x = y (one-to-one property)', 'Rewrite both sides with the same base when possibl', 'Use logarithms when bases cannot be matched'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Exponential Equations.'
      }
    }
  ]
}
