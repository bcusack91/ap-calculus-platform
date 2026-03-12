export const actMathStrategyPart3Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m3-intro',
      type: 'text' as const,
      content: `
# Backsolving

**Part 3 of 7 — Backsolving**

Plug answer choices into the question to see which works.

Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.
      `
    },
    {
      id: 'act-m3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Plug answer choices into the question…?',
            options: [
              'Works great for "what value of x" questions.',
              'Plug answer choices into the question to see which works.',
              'Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.',
              'Saves time on complex algebra.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Plug answer choices into the question to see which works. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Saves time on complex algebra.',
              'Works great for "what value of x" questions.',
              'Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.',
              'Plug answer choices into the question to see which works.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Works great for "what value of x" questions. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-m3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Works great for "what value of x" questions.

**ACT Tip:** Saves time on complex algebra.
      `
    },
    {
      id: 'act-m3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Works great for "what value of x" questions.',
              'Plug answer choices into the question to see which works.',
              'Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.',
              'Saves time on complex algebra.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Saves time on complex algebra. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-m3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.', 'Saves time on complex algebra.', 'Works great for "what value of x" questions.', 'Plug answer choices into the question to see which works.']
          },
          {
            label: 'ACT Tip',
            options: ['Works great for "what value of x" questions.', 'Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.', 'Plug answer choices into the question to see which works.', 'Saves time on complex algebra.']
          }
        ],
        correctAnswers: ['Works great for "what value of x" questions.', 'Saves time on complex algebra.'],
        hint1: 'Think about what each concept specifically describes in Backsolving.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Backsolving describes a specific idea. Key Insight: Works great for "what value of x" questions. ACT Tip: Saves time on complex algebra.'
      }
    }
  ]
}
