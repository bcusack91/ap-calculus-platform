export const satRatiosPart4Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r4-intro',
      type: 'text' as const,
      content: `
# Direct & Inverse Variation

**Part 4 of 7 — Direct & Inverse Variation**

Direct variation: y = kx (y increases as x increases proportionally).

Inverse variation: y = k/x (y decreases as x increases).
      `
    },
    {
      id: 'sat-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Direct variation?',
            options: [
              'y = kx (y increases as x increases proportionally).',
              'k is the constant of variation.',
              'Find k from one data point, then use it to find unknowns.',
              'y = k/x (y decreases as x increases).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Direct variation: y = kx (y increases as x increases proportionally). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'k is the constant of variation.',
              'Find k from one data point, then use it to find unknowns.',
              'y = k/x (y decreases as x increases).',
              'y = kx (y increases as x increases proportionally).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: k is the constant of variation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** k is the constant of variation.

**SAT Tip:** Find k from one data point, then use it to find unknowns.
      `
    },
    {
      id: 'sat-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Direct & Inverse Variation, which correctly describes SAT Tip?',
            options: [
              'Find k from one data point, then use it to find unknowns.',
              'y = kx (y increases as x increases proportionally).',
              'y = k/x (y decreases as x increases).',
              'k is the constant of variation.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Find k from one data point, then use it to find unknowns. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct variation',
            options: ['y = k/x (y decreases as x increases).', 'y = kx (y increases as x increases proportionally).', 'Find k from one data point, then use it to find unknowns.', 'k is the constant of variation.']
          },
          {
            label: 'Inverse variation',
            options: ['y = kx (y increases as x increases proportionally).', 'Find k from one data point, then use it to find unknowns.', 'y = k/x (y decreases as x increases).', 'k is the constant of variation.']
          },
          {
            label: 'Key Insight',
            options: ['y = k/x (y decreases as x increases).', 'y = kx (y increases as x increases proportionally).', 'Find k from one data point, then use it to find unknowns.', 'k is the constant of variation.']
          }
        ],
        correctAnswers: ['y = kx (y increases as x increases proportionally).', 'y = k/x (y decreases as x increases).', 'k is the constant of variation.'],
        hint1: 'Think about what each concept specifically describes in Direct & Inverse Variation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Direct & Inverse Variation describes a specific idea. Direct variation: y = kx (y increases as x increases proportionally). Inverse variation: y = k/x (y decreases as x increases). Key Insight: k is the constant of variation.'
      }
    }
  ]
}
