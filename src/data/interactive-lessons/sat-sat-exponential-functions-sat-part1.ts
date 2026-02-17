export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e1-intro',
      type: 'text' as const,
      content: `
# 📝 Exponential Functions

**Part 1 of 7 — Exponential Growth & Decay**

Growth: f(x) = a · bˣ where b > 1.

Decay: f(x) = a · bˣ where 0 < b < 1.
      `
    },
    {
      id: 'sat-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Growth?',
            options: [
              'Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.',
              'f(x) = a · bˣ where b > 1.',
              'f(x) = a · bˣ where 0 < b < 1.',
              'a = initial value (when x = 0).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Growth: f(x) = a · bˣ where b > 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Exponential Functions, which explains Key Insight?',
            options: [
              'Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.',
              'a = initial value (when x = 0).',
              'f(x) = a · bˣ where 0 < b < 1.',
              'f(x) = a · bˣ where b > 1.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: a = initial value (when x = 0). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** a = initial value (when x = 0).

**SAT Tip:** Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.
      `
    },
    {
      id: 'sat-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'f(x) = a · bˣ where b > 1.',
              'a = initial value (when x = 0).',
              'Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.',
              'f(x) = a · bˣ where 0 < b < 1.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Growth rate r: b = 1 + r; Decay rate r: b = 1 - r. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Growth',
            options: ['f(x) = a · bˣ where b > 1.', 'Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.', 'f(x) = a · bˣ where 0 < b < 1.', 'a = initial value (when x = 0).']
          },
          {
            label: 'Decay',
            options: ['Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.', 'f(x) = a · bˣ where 0 < b < 1.', 'a = initial value (when x = 0).', 'f(x) = a · bˣ where b > 1.']
          },
          {
            label: 'Key Insight',
            options: ['a = initial value (when x = 0).', 'f(x) = a · bˣ where b > 1.', 'f(x) = a · bˣ where 0 < b < 1.', 'Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.']
          }
        ],
        correctAnswers: ['f(x) = a · bˣ where b > 1.', 'f(x) = a · bˣ where 0 < b < 1.', 'a = initial value (when x = 0).'],
        hint1: 'Think about what each concept specifically describes in Exponential Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Functions describes a specific idea. Growth: f(x) = a · bˣ where b > 1. Decay: f(x) = a · bˣ where 0 < b < 1. Key Insight: a = initial value (when x = 0).'
      }
    }
  ]
}
