export const satExponentialFnPart6Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

y-intercept: initial value in context.

Base: growth/decay factor per time period.
      `
    },
    {
      id: 'sat-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains y-intercept?',
            options: [
              'Exponent: often involves time.',
              'initial value in context.',
              'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).',
              'growth/decay factor per time period.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — y-intercept: initial value in context. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).',
              'growth/decay factor per time period.',
              'Exponent: often involves time.',
              'initial value in context.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Exponent: often involves time. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Exponent: often involves time.

**SAT Tip:** Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).
      `
    },
    {
      id: 'sat-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes SAT Tip?',
            options: [
              'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).',
              'Exponent: often involves time.',
              'initial value in context.',
              'growth/decay factor per time period.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'y-intercept',
            options: ['initial value in context.', 'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).', 'Exponent: often involves time.', 'growth/decay factor per time period.']
          },
          {
            label: 'Base',
            options: ['growth/decay factor per time period.', 'initial value in context.', 'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).', 'Exponent: often involves time.']
          },
          {
            label: 'Key Insight',
            options: ['growth/decay factor per time period.', 'Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).', 'Exponent: often involves time.', 'initial value in context.']
          }
        ],
        correctAnswers: ['initial value in context.', 'growth/decay factor per time period.', 'Exponent: often involves time.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. y-intercept: initial value in context. Base: growth/decay factor per time period. Key Insight: Exponent: often involves time.'
      }
    }
  ]
}
