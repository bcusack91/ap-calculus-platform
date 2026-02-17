export const satRWStrategyPart5Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r5-intro',
      type: 'text' as const,
      content: `
# Grammar vs. Rhetoric

**Part 5 of 7 — Grammar vs. Rhetoric**

Grammar questions: one answer is objectively correct (rules-based).

Rhetoric questions: "most effectively" — subjective but still have a best answer.
      `
    },
    {
      id: 'sat-r5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Grammar questions?',
            options: [
              '"most effectively" — subjective but still have a best answer.',
              'one answer is objectively correct (rules-based).',
              'For rhetoric: consider purpose, audience, and what the question is asking.',
              'If the question asks "which best accomplishes [goal]," match the goal precisely.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Grammar questions: one answer is objectively correct (rules-based). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'one answer is objectively correct (rules-based).',
              'For rhetoric: consider purpose, audience, and what the question is asking.',
              '"most effectively" — subjective but still have a best answer.',
              'If the question asks "which best accomplishes [goal]," match the goal precisely.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: For rhetoric: consider purpose, audience, and what the question is asking. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** For rhetoric: consider purpose, audience, and what the question is asking.

**SAT Tip:** If the question asks "which best accomplishes [goal]," match the goal precisely.
      `
    },
    {
      id: 'sat-r5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Grammar vs. Rhetoric, which correctly describes SAT Tip?',
            options: [
              '"most effectively" — subjective but still have a best answer.',
              'For rhetoric: consider purpose, audience, and what the question is asking.',
              'one answer is objectively correct (rules-based).',
              'If the question asks "which best accomplishes [goal]," match the goal precisely.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: If the question asks "which best accomplishes [goal]," match the goal precisely. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Grammar questions',
            options: ['one answer is objectively correct (rules-based).', 'If the question asks "which best accomplishes [goal]," match the goal precisely.', '"most effectively" — subjective but still have a best answer.', 'For rhetoric: consider purpose, audience, and what the question is asking.']
          },
          {
            label: 'Rhetoric questions',
            options: ['one answer is objectively correct (rules-based).', 'For rhetoric: consider purpose, audience, and what the question is asking.', 'If the question asks "which best accomplishes [goal]," match the goal precisely.', '"most effectively" — subjective but still have a best answer.']
          },
          {
            label: 'Key Insight',
            options: ['For rhetoric: consider purpose, audience, and what the question is asking.', 'If the question asks "which best accomplishes [goal]," match the goal precisely.', '"most effectively" — subjective but still have a best answer.', 'one answer is objectively correct (rules-based).']
          }
        ],
        correctAnswers: ['one answer is objectively correct (rules-based).', '"most effectively" — subjective but still have a best answer.', 'For rhetoric: consider purpose, audience, and what the question is asking.'],
        hint1: 'Think about what each concept specifically describes in Grammar vs. Rhetoric.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Grammar vs. Rhetoric describes a specific idea. Grammar questions: one answer is objectively correct (rules-based). Rhetoric questions: "most effectively" — subjective but still have a best answer. Key Insight: For rhetoric: consider purpose, audience, and what the question is asking.'
      }
    }
  ]
}
