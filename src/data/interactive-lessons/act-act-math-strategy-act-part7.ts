export const actMathStrategyPart7Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

First pass: do all easy questions (1-30) quickly.

Second pass: tackle medium questions (31-50).
      `
    },
    {
      id: 'act-m7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes First pass?',
            options: [
              'tackle medium questions (31-50).',
              'Never leave a question blank — guess if needed (no penalty).',
              'do all easy questions (1-30) quickly.',
              'Final pass: attempt hard questions (51-60) with remaining time.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — First pass: do all easy questions (1-30) quickly. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Final pass: attempt hard questions (51-60) with remaining time.',
              'do all easy questions (1-30) quickly.',
              'Never leave a question blank — guess if needed (no penalty).',
              'tackle medium questions (31-50).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Final pass: attempt hard questions (51-60) with remaining time. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-m7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Final pass: attempt hard questions (51-60) with remaining time.

**ACT Tip:** Never leave a question blank — guess if needed (no penalty).
      `
    },
    {
      id: 'act-m7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Never leave a question blank — guess if needed (no penalty).',
              'do all easy questions (1-30) quickly.',
              'Final pass: attempt hard questions (51-60) with remaining time.',
              'tackle medium questions (31-50).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Never leave a question blank — guess if needed (no penalty). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-m7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'First pass',
            options: ['tackle medium questions (31-50).', 'do all easy questions (1-30) quickly.', 'Never leave a question blank — guess if needed (no penalty).', 'Final pass: attempt hard questions (51-60) with remaining time.']
          },
          {
            label: 'Second pass',
            options: ['Final pass: attempt hard questions (51-60) with remaining time.', 'Never leave a question blank — guess if needed (no penalty).', 'do all easy questions (1-30) quickly.', 'tackle medium questions (31-50).']
          },
          {
            label: 'Key Insight',
            options: ['Final pass: attempt hard questions (51-60) with remaining time.', 'Never leave a question blank — guess if needed (no penalty).', 'do all easy questions (1-30) quickly.', 'tackle medium questions (31-50).']
          }
        ],
        correctAnswers: ['do all easy questions (1-30) quickly.', 'tackle medium questions (31-50).', 'Final pass: attempt hard questions (51-60) with remaining time.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. First pass: do all easy questions (1-30) quickly. Second pass: tackle medium questions (31-50). Key Insight: Final pass: attempt hard questions (51-60) with remaining time.'
      }
    }
  ]
}
