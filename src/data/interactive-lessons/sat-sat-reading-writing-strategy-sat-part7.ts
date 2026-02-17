export const satRWStrategyPart7Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Grammar questions: one answer is objectively correct (rules-based).

Rhetoric questions: "most effectively" — subjective but still have a best answer.
      `
    },
    {
      id: 'sat-r7-quiz1',
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
              'For rhetoric: consider purpose, audience, and what the question is asking.',
              'one answer is objectively correct (rules-based).',
              'If the question asks "which best accomplishes [goal]," match the goal precisely.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Grammar questions: one answer is objectively correct (rules-based). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'If the question asks "which best accomplishes [goal]," match the goal precisely.',
              'one answer is objectively correct (rules-based).',
              '"most effectively" — subjective but still have a best answer.',
              'For rhetoric: consider purpose, audience, and what the question is asking.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: For rhetoric: consider purpose, audience, and what the question is asking. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** For rhetoric: consider purpose, audience, and what the question is asking.

**SAT Tip:** If the question asks "which best accomplishes [goal]," match the goal precisely.
      `
    },
    {
      id: 'sat-r7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              '"most effectively" — subjective but still have a best answer.',
              'If the question asks "which best accomplishes [goal]," match the goal precisely.',
              'For rhetoric: consider purpose, audience, and what the question is asking.',
              'one answer is objectively correct (rules-based).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: If the question asks "which best accomplishes [goal]," match the goal precisely. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Grammar questions',
            options: ['For rhetoric: consider purpose, audience, and what the question is asking.', 'one answer is objectively correct (rules-based).', '"most effectively" — subjective but still have a best answer.', 'If the question asks "which best accomplishes [goal]," match the goal precisely.']
          },
          {
            label: 'Rhetoric questions',
            options: ['If the question asks "which best accomplishes [goal]," match the goal precisely.', 'one answer is objectively correct (rules-based).', '"most effectively" — subjective but still have a best answer.', 'For rhetoric: consider purpose, audience, and what the question is asking.']
          },
          {
            label: 'Key Insight',
            options: ['If the question asks "which best accomplishes [goal]," match the goal precisely.', 'one answer is objectively correct (rules-based).', '"most effectively" — subjective but still have a best answer.', 'For rhetoric: consider purpose, audience, and what the question is asking.']
          }
        ],
        correctAnswers: ['one answer is objectively correct (rules-based).', '"most effectively" — subjective but still have a best answer.', 'For rhetoric: consider purpose, audience, and what the question is asking.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Grammar questions: one answer is objectively correct (rules-based). Rhetoric questions: "most effectively" — subjective but still have a best answer. Key Insight: For rhetoric: consider purpose, audience, and what the question is asking.'
      }
    }
  ]
}
