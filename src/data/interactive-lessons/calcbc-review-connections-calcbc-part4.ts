export const calcBCReviewConnectionsPart4Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie4-intro',
      type: 'text' as const,
      content: `
# Integration Techniques Connected

**Part 4 of 7 — Integration Techniques Connected**

### 1. u-substitution reverses the chain rule

u-substitution reverses the chain rule

### 2. Integration by parts reverses the product rule

Integration by parts reverses the product rule

### 3. Partial fractions decomposes rational functions

Partial fractions decomposes rational functions

### 4. All techniques transform hard integrals into known forms

All techniques transform hard integrals into known forms
      `
    },
    {
      id: 'revie4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integration techniques connected?',
            options: [
              'u-substitution reverses the chain rule',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'u-substitution reverses the chain rule'
          },
          {
            question: 'In the context of integration techniques connected, which is accurate?',
            options: [
              'Partial fractions decomposes rational functions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Partial fractions decomposes rational functions'
          }
        ]
      }
    },
    {
      id: 'revie4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **u-substitution reverses the chain rule**
- **Integration by parts reverses the product rule**
- **Partial fractions decomposes rational functions**
- **All techniques transform hard integrals into known forms**
      `
    },
    {
      id: 'revie4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integration techniques connected?',
            options: [
              'All techniques transform hard integrals into known forms',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'All techniques transform hard integrals into known forms'
          }
        ]
      }
    },
    {
      id: 'revie4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'u-substitution reverses the chain rule',
            options: ['u-substitution reverses the chain rule', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Integration by parts reverses the product rule',
            options: ['Integration by parts reverses the product rule', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Partial fractions decomposes rational functions',
            options: ['Partial fractions decomposes rational functions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['u-substitution reverses the chain rule', 'Integration by parts reverses the product rule', 'Partial fractions decomposes rational functions'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integration Techniques Connected.'
      }
    }
  ]
}
