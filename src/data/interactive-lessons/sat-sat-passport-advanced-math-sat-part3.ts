export const satPassportAdvPart3Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p3-intro',
      type: 'text' as const,
      content: `
# Function Behavior

**Part 3 of 7 — Function Behavior**

Increasing/decreasing behavior from graphs.

End behavior: what happens as x → ∞ or x → -∞.
      `
    },
    {
      id: 'sat-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Increasing/decreasing behavior from…?',
            options: [
              'what happens as x → ∞ or x → -∞.',
              'Increasing/decreasing behavior from graphs.',
              'Zeros: where f(x) = 0 (x-intercepts).',
              'Maximum and minimum values from graphs or vertex form.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Increasing/decreasing behavior from graphs. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Zeros: where f(x) = 0 (x-intercepts).',
              'Increasing/decreasing behavior from graphs.',
              'Maximum and minimum values from graphs or vertex form.',
              'what happens as x → ∞ or x → -∞.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Zeros: where f(x) = 0 (x-intercepts). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Zeros: where f(x) = 0 (x-intercepts).

**SAT Tip:** Maximum and minimum values from graphs or vertex form.
      `
    },
    {
      id: 'sat-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Zeros: where f(x) = 0 (x-intercepts).',
              'Increasing/decreasing behavior from graphs.',
              'Maximum and minimum values from graphs or vertex form.',
              'what happens as x → ∞ or x → -∞.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Maximum and minimum values from graphs or vertex form. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'End behavior',
            options: ['Zeros: where f(x) = 0 (x-intercepts).', 'what happens as x → ∞ or x → -∞.', 'Increasing/decreasing behavior from graphs.', 'Maximum and minimum values from graphs or vertex form.']
          },
          {
            label: 'Key Insight',
            options: ['Zeros: where f(x) = 0 (x-intercepts).', 'Increasing/decreasing behavior from graphs.', 'what happens as x → ∞ or x → -∞.', 'Maximum and minimum values from graphs or vertex form.']
          },
          {
            label: 'SAT Tip',
            options: ['Increasing/decreasing behavior from graphs.', 'Maximum and minimum values from graphs or vertex form.', 'what happens as x → ∞ or x → -∞.', 'Zeros: where f(x) = 0 (x-intercepts).']
          }
        ],
        correctAnswers: ['what happens as x → ∞ or x → -∞.', 'Zeros: where f(x) = 0 (x-intercepts).', 'Maximum and minimum values from graphs or vertex form.'],
        hint1: 'Think about what each concept specifically describes in Function Behavior.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Function Behavior describes a specific idea. End behavior: what happens as x → ∞ or x → -∞. Key Insight: Zeros: where f(x) = 0 (x-intercepts). SAT Tip: Maximum and minimum values from graphs or vertex form.'
      }
    }
  ]
}
