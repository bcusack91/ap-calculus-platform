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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Relative error = |dy/y| or |Δy/y|?',
            options: [
              'Relative error = |dy/y| or |Δy/y|',
              'Percentage error = relative error × 100%',
              'Use differentials to estimate maximum error in computed quantities',
              'error in output due to error in input'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Relative error = |dy/y| or |Δy/y|. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Propagated error:',
            options: [
              'Percentage error = relative error × 100%',
              'Use differentials to estimate maximum error in computed quantities',
              'error in output due to error in input',
              'Relative error = |dy/y| or |Δy/y|'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Propagated error: error in output due to error in input. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Use differentials to estimate maximum…?',
            options: [
              'Percentage error = relative error × 100%',
              'Relative error = |dy/y| or |Δy/y|',
              'error in output due to error in input',
              'Use differentials to estimate maximum error in computed quantities'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use differentials to estimate maximum error in computed quantities. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'linea3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Relative error = |dy/y| or |Δy/y|',
            options: ['Use differentials to estimate maximum error in computed quantities', 'Percentage error = relative error × 100%', 'Relative error = |dy/y| or |Δy/y|', 'error in output due to error in input']
          },
          {
            label: 'Percentage error = relative error × 100%',
            options: ['Relative error = |dy/y| or |Δy/y|', 'Percentage error = relative error × 100%', 'error in output due to error in input', 'Use differentials to estimate maximum error in computed quantities']
          },
          {
            label: 'Propagated error',
            options: ['Use differentials to estimate maximum error in computed quantities', 'Relative error = |dy/y| or |Δy/y|', 'Percentage error = relative error × 100%', 'error in output due to error in input']
          }
        ],
        correctAnswers: ['Relative error = |dy/y| or |Δy/y|', 'Percentage error = relative error × 100%', 'error in output due to error in input'],
        hint1: 'Think about what each concept specifically describes in Error Estimation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Error Estimation describes a specific idea. Relative error = |dy/y| or |Δy/y|. Percentage error = relative error × 100%. Propagated error: error in output due to error in input.'
      }
    }
  ]
}
