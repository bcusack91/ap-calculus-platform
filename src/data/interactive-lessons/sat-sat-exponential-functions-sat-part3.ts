export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e3-intro',
      type: 'text' as const,
      content: `
# Exponential vs. Linear

**Part 3 of 7 — Exponential vs. Linear**

Linear: constant rate of change (adding the same amount).

Exponential: constant percent change (multiplying by the same factor).
      `
    },
    {
      id: 'sat-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Linear?',
            options: [
              'Exponential eventually overtakes linear growth.',
              'Linear grows by addition; exponential grows by multiplication.',
              'constant percent change (multiplying by the same factor).',
              'constant rate of change (adding the same amount).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Linear: constant rate of change (adding the same amount). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Exponential vs. Linear, which explains Key Insight?',
            options: [
              'Linear grows by addition; exponential grows by multiplication.',
              'constant rate of change (adding the same amount).',
              'constant percent change (multiplying by the same factor).',
              'Exponential eventually overtakes linear growth.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Linear grows by addition; exponential grows by multiplication. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Linear grows by addition; exponential grows by multiplication.

**SAT Tip:** Exponential eventually overtakes linear growth.
      `
    },
    {
      id: 'sat-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Exponential vs. Linear, which correctly describes SAT Tip?',
            options: [
              'constant percent change (multiplying by the same factor).',
              'Exponential eventually overtakes linear growth.',
              'Linear grows by addition; exponential grows by multiplication.',
              'constant rate of change (adding the same amount).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Exponential eventually overtakes linear growth. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Linear',
            options: ['Linear grows by addition; exponential grows by multiplication.', 'constant rate of change (adding the same amount).', 'Exponential eventually overtakes linear growth.', 'constant percent change (multiplying by the same factor).']
          },
          {
            label: 'Exponential',
            options: ['constant rate of change (adding the same amount).', 'Exponential eventually overtakes linear growth.', 'Linear grows by addition; exponential grows by multiplication.', 'constant percent change (multiplying by the same factor).']
          },
          {
            label: 'Key Insight',
            options: ['Exponential eventually overtakes linear growth.', 'constant percent change (multiplying by the same factor).', 'Linear grows by addition; exponential grows by multiplication.', 'constant rate of change (adding the same amount).']
          }
        ],
        correctAnswers: ['constant rate of change (adding the same amount).', 'constant percent change (multiplying by the same factor).', 'Linear grows by addition; exponential grows by multiplication.'],
        hint1: 'Think about what each concept specifically describes in Exponential vs. Linear.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential vs. Linear describes a specific idea. Linear: constant rate of change (adding the same amount). Exponential: constant percent change (multiplying by the same factor). Key Insight: Linear grows by addition; exponential grows by multiplication.'
      }
    }
  ]
}
