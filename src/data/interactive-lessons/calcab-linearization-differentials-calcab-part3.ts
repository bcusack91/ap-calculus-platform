export const calcABLinearizationPart3Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea3-intro',
      type: 'text' as const,
      content: `
# Error Estimation

**Part 3 of 7 — Error Estimation**

### 1. Relative error = |dy/y| or |Δy/y|

Relative error = |dy/y| or |Δy/y|

### 2. Percentage error = relative error × 100%

Percentage error = relative error × 100%

### 3. Propagated error

error in output due to error in input

### 4. Use differentials to estimate maximum error in computed quantities

Use differentials to estimate maximum error in computed quantities
      `
    },
    {
      id: 'linea3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of error estimation?',
            options: [
              'Relative error = |dy/y| or |Δy/y|',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Relative error = |dy/y| or |Δy/y|'
          },
          {
            question: 'In the context of error estimation, which is accurate?',
            options: [
              'error in output due to error in input',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Propagated error: error in output due to error in input'
          }
        ]
      }
    },
    {
      id: 'linea3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Relative error = |dy/y| or |Δy/y|**
- **Percentage error = relative error × 100%**
- **Propagated error**: error in output due to error in input
- **Use differentials to estimate maximum error in computed quantities**
      `
    },
    {
      id: 'linea3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to error estimation?',
            options: [
              'Use differentials to estimate maximum error in computed quantities',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use differentials to estimate maximum error in computed quantities'
          }
        ]
      }
    },
    {
      id: 'linea3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Relative error = |dy/y| or |Δy/y|',
            options: ['Relative error = |dy/y| or |Δy/y|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Percentage error = relative error × 100%',
            options: ['Percentage error = relative error × 100%', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Propagated error',
            options: ['error in output due to error in input', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Relative error = |dy/y| or |Δy/y|', 'Percentage error = relative error × 100%', 'error in output due to error in input'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Error Estimation.'
      }
    }
  ]
}
