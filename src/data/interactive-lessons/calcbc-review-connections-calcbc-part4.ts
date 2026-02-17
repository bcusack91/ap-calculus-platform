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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes u-substitution reverses the chain rule?',
            options: [
              'Integration by parts reverses the product rule',
              'u-substitution reverses the chain rule',
              'Partial fractions decomposes rational functions',
              'All techniques transform hard integrals into known forms'
            ],
            correctAnswer: 1,
            explanation: 'Correct — u-substitution reverses the chain rule. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Partial fractions decomposes rational…:',
            options: [
              'All techniques transform hard integrals into known forms',
              'Integration by parts reverses the product rule',
              'u-substitution reverses the chain rule',
              'Partial fractions decomposes rational functions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Partial fractions decomposes rational functions. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about All techniques transform hard integrals… is correct?',
            options: [
              'Integration by parts reverses the product rule',
              'All techniques transform hard integrals into known forms',
              'u-substitution reverses the chain rule',
              'Partial fractions decomposes rational functions'
            ],
            correctAnswer: 1,
            explanation: 'Correct — All techniques transform hard integrals into known forms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'revie4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'u-substitution reverses the chain rule',
            options: ['u-substitution reverses the chain rule', 'Partial fractions decomposes rational functions', 'All techniques transform hard integrals into known forms', 'Integration by parts reverses the product rule']
          },
          {
            label: 'Integration by parts reverses the…',
            options: ['Integration by parts reverses the product rule', 'Partial fractions decomposes rational functions', 'u-substitution reverses the chain rule', 'All techniques transform hard integrals into known forms']
          },
          {
            label: 'Partial fractions decomposes rational…',
            options: ['Integration by parts reverses the product rule', 'u-substitution reverses the chain rule', 'Partial fractions decomposes rational functions', 'All techniques transform hard integrals into known forms']
          }
        ],
        correctAnswers: ['u-substitution reverses the chain rule', 'Integration by parts reverses the product rule', 'Partial fractions decomposes rational functions'],
        hint1: 'Think about what each concept specifically describes in Integration Techniques Connected.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integration Techniques Connected describes a specific idea. u-substitution reverses the chain rule. Integration by parts reverses the product rule. Partial fractions decomposes rational functions.'
      }
    }
  ]
}
