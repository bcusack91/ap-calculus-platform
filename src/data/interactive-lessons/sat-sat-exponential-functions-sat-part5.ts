export const satExponentialFnPart5Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e5-intro',
      type: 'text' as const,
      content: `
# Interpreting Exponential Models

**Part 5 of 7 — Interpreting Exponential Models**

y-intercept: initial value in context.

Base: growth/decay factor per time period.
      `
    },
    {
      id: 'sat-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains y-intercept?',
            options: [
              'growth/decay factor per time period.',
              'Exponent: often involves time.',
              'initial value in context.',
              'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — y-intercept: initial value in context. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Exponent: often involves time.',
              'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).',
              'growth/decay factor per time period.',
              'initial value in context.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Exponent: often involves time. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Exponent: often involves time.

**SAT Tip:** Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).
      `
    },
    {
      id: 'sat-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Exponent: often involves time.',
              'growth/decay factor per time period.',
              'initial value in context.',
              'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'y-intercept',
            options: ['Exponent: often involves time.', 'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).', 'growth/decay factor per time period.', 'initial value in context.']
          },
          {
            label: 'Base',
            options: ['growth/decay factor per time period.', 'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).', 'initial value in context.', 'Exponent: often involves time.']
          },
          {
            label: 'Key Insight',
            options: ['initial value in context.', 'growth/decay factor per time period.', 'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).', 'Exponent: often involves time.']
          }
        ],
        correctAnswers: ['initial value in context.', 'growth/decay factor per time period.', 'Exponent: often involves time.'],
        hint1: 'Think about what each concept specifically describes in Interpreting Exponential Models.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interpreting Exponential Models describes a specific idea. y-intercept: initial value in context. Base: growth/decay factor per time period. Key Insight: Exponent: often involves time.'
      }
    }
  ]
}
