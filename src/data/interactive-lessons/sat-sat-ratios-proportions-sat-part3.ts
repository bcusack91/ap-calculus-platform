export const satRatiosPart3Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r3-intro',
      type: 'text' as const,
      content: `
# Unit Conversion

**Part 3 of 7 — Unit Conversion**

Multiply by conversion factors as fractions.

Units should cancel: (mi/hr) × (hr/min) → mi/min.
      `
    },
    {
      id: 'sat-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Multiply by conversion factors as…?',
            options: [
              'Dimensional analysis: track units through the calculation.',
              '(mi/hr) × (hr/min) → mi/min.',
              'Multiply by conversion factors as fractions.',
              'SAT often uses unit conversion in multi-step problems.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Multiply by conversion factors as fractions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Multiply by conversion factors as fractions.',
              'SAT often uses unit conversion in multi-step problems.',
              '(mi/hr) × (hr/min) → mi/min.',
              'Dimensional analysis: track units through the calculation.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Dimensional analysis: track units through the calculation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Dimensional analysis: track units through the calculation.

**SAT Tip:** SAT often uses unit conversion in multi-step problems.
      `
    },
    {
      id: 'sat-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              '(mi/hr) × (hr/min) → mi/min.',
              'Multiply by conversion factors as fractions.',
              'Dimensional analysis: track units through the calculation.',
              'SAT often uses unit conversion in multi-step problems.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: SAT often uses unit conversion in multi-step problems. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Units should cancel',
            options: ['Multiply by conversion factors as fractions.', 'Dimensional analysis: track units through the calculation.', '(mi/hr) × (hr/min) → mi/min.', 'SAT often uses unit conversion in multi-step problems.']
          },
          {
            label: 'Key Insight',
            options: ['SAT often uses unit conversion in multi-step problems.', 'Dimensional analysis: track units through the calculation.', 'Multiply by conversion factors as fractions.', '(mi/hr) × (hr/min) → mi/min.']
          },
          {
            label: 'SAT Tip',
            options: ['Multiply by conversion factors as fractions.', 'SAT often uses unit conversion in multi-step problems.', '(mi/hr) × (hr/min) → mi/min.', 'Dimensional analysis: track units through the calculation.']
          }
        ],
        correctAnswers: ['(mi/hr) × (hr/min) → mi/min.', 'Dimensional analysis: track units through the calculation.', 'SAT often uses unit conversion in multi-step problems.'],
        hint1: 'Think about what each concept specifically describes in Unit Conversion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Unit Conversion describes a specific idea. Units should cancel: (mi/hr) × (hr/min) → mi/min. Key Insight: Dimensional analysis: track units through the calculation. SAT Tip: SAT often uses unit conversion in multi-step problems.'
      }
    }
  ]
}
