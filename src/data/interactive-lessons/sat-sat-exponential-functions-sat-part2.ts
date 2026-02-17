export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e2-intro',
      type: 'text' as const,
      content: `
# Exponential Equations

**Part 2 of 7 — Exponential Equations**

If bases are equal: aˣ = aʸ implies x = y.

Take log of both sides when bases differ.
      `
    },
    {
      id: 'sat-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains If bases are equal?',
            options: [
              'Take log of both sides when bases differ.',
              'Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.',
              'aˣ = aʸ implies x = y.',
              'ln(aˣ) = x · ln(a).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If bases are equal: aˣ = aʸ implies x = y. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Exponential Equations, which explains Key Insight?',
            options: [
              'Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.',
              'Take log of both sides when bases differ.',
              'ln(aˣ) = x · ln(a).',
              'aˣ = aʸ implies x = y.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: ln(aˣ) = x · ln(a). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** ln(aˣ) = x · ln(a).

**SAT Tip:** Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.
      `
    },
    {
      id: 'sat-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'ln(aˣ) = x · ln(a).',
              'aˣ = aʸ implies x = y.',
              'Take log of both sides when bases differ.',
              'Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If bases are equal',
            options: ['Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.', 'ln(aˣ) = x · ln(a).', 'Take log of both sides when bases differ.', 'aˣ = aʸ implies x = y.']
          },
          {
            label: 'Key Insight',
            options: ['Take log of both sides when bases differ.', 'ln(aˣ) = x · ln(a).', 'Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.', 'aˣ = aʸ implies x = y.']
          },
          {
            label: 'SAT Tip',
            options: ['aˣ = aʸ implies x = y.', 'Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.', 'Take log of both sides when bases differ.', 'ln(aˣ) = x · ln(a).']
          }
        ],
        correctAnswers: ['aˣ = aʸ implies x = y.', 'ln(aˣ) = x · ln(a).', 'Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.'],
        hint1: 'Think about what each concept specifically describes in Exponential Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Equations describes a specific idea. If bases are equal: aˣ = aʸ implies x = y. Key Insight: ln(aˣ) = x · ln(a). SAT Tip: Solve: 2ˣ = 32 → 2ˣ = 2⁵ → x = 5.'
      }
    }
  ]
}
