export const calcBCAdvIntegrationPart7Data = {
  topicSlug: 'advanced-integration-calcbc',
  sections: [
    {
      id: 'advan7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Some functions have no elementary antiderivative

e^(-x²), sin(x)/x, etc.

### 2. Use power series to integrate term by term

Use power series to integrate term by term

### 3. Use numerical methods for definite integrals

Use numerical methods for definite integrals

### 4. These functions are still well-defined — they just can't be written in closed form

These functions are still well-defined — they just can't be written in closed form
      `
    },
    {
      id: 'advan7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Some functions have no elementary antiderivative" refer to in calculus?',
            options: [
              'These functions are still well-defined — they just can\'t be written in closed form',
              'e^(-x²), sin(x)/x, etc.',
              'Use numerical methods for definite integrals',
              'Use power series to integrate term by term'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Some functions have no elementary antiderivative: e^(-x²), sin(x)/x, etc. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Use numerical methods for definite…?',
            options: [
              'Use numerical methods for definite integrals',
              'These functions are still well-defined — they just can\'t be written in closed form',
              'Use power series to integrate term by term',
              'e^(-x²), sin(x)/x, etc.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Use numerical methods for definite integrals. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'advan7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Some functions have no elementary antiderivative**: e^(-x²), sin(x)/x, etc.
- **Use power series to integrate term by term**
- **Use numerical methods for definite integrals**
- **These functions are still well-defined — they just can't be written in closed form**
      `
    },
    {
      id: 'advan7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents These functions are still well-defined…?',
            options: [
              'These functions are still well-defined — they just can\'t be written in closed form',
              'Use numerical methods for definite integrals',
              'Use power series to integrate term by term',
              'e^(-x²), sin(x)/x, etc.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — These functions are still well-defined — they just can\'t be written in closed form. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'advan7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Some functions have no elementary antiderivative',
            options: ['Use power series to integrate term by term', 'These functions are still well-defined — they just can\'t be written in closed form', 'e^(-x²), sin(x)/x, etc.', 'Use numerical methods for definite integrals']
          },
          {
            label: 'Use power series to integrate term by…',
            options: ['Use power series to integrate term by term', 'These functions are still well-defined — they just can\'t be written in closed form', 'e^(-x²), sin(x)/x, etc.', 'Use numerical methods for definite integrals']
          },
          {
            label: 'Use numerical methods for definite…',
            options: ['These functions are still well-defined — they just can\'t be written in closed form', 'Use power series to integrate term by term', 'e^(-x²), sin(x)/x, etc.', 'Use numerical methods for definite integrals']
          }
        ],
        correctAnswers: ['e^(-x²), sin(x)/x, etc.', 'Use power series to integrate term by term', 'Use numerical methods for definite integrals'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Some functions have no elementary antiderivative: e^(-x²), sin(x)/x, etc. Use power series to integrate term by term. Use numerical methods for definite integrals.'
      }
    }
  ]
}
