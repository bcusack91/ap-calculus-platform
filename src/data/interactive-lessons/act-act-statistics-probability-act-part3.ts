export const actStatProbPart3Data = {
  topicSlug: 'act-statistics-probability-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Counting Principles

**Part 3 of 7 — Counting Principles**

Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes.

Tree diagrams help visualize sequential events.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Fundamental counting principle" refer to in ACT prep?',
            options: [
              'Without replacement: probabilities change (dependent events).',
              'With replacement: probabilities stay the same.',
              'if event A has m outcomes and B has n outcomes, together they have m × n outcomes.',
              'Tree diagrams help visualize sequential events.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'With replacement: probabilities stay the same.',
              'Tree diagrams help visualize sequential events.',
              'Without replacement: probabilities change (dependent events).',
              'if event A has m outcomes and B has n outcomes, together they have m × n outcomes.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: With replacement: probabilities stay the same. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** With replacement: probabilities stay the same.

**ACT Tip:** Without replacement: probabilities change (dependent events).
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'With replacement: probabilities stay the same.',
              'Without replacement: probabilities change (dependent events).',
              'Tree diagrams help visualize sequential events.',
              'if event A has m outcomes and B has n outcomes, together they have m × n outcomes.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Without replacement: probabilities change (dependent events). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fundamental counting principle',
            options: ['Without replacement: probabilities change (dependent events).', 'Tree diagrams help visualize sequential events.', 'With replacement: probabilities stay the same.', 'if event A has m outcomes and B has n outcomes, together they have m × n outcomes.']
          },
          {
            label: 'Key Insight',
            options: ['Without replacement: probabilities change (dependent events).', 'With replacement: probabilities stay the same.', 'Tree diagrams help visualize sequential events.', 'if event A has m outcomes and B has n outcomes, together they have m × n outcomes.']
          },
          {
            label: 'ACT Tip',
            options: ['if event A has m outcomes and B has n outcomes, together they have m × n outcomes.', 'Without replacement: probabilities change (dependent events).', 'With replacement: probabilities stay the same.', 'Tree diagrams help visualize sequential events.']
          }
        ],
        correctAnswers: ['if event A has m outcomes and B has n outcomes, together they have m × n outcomes.', 'With replacement: probabilities stay the same.', 'Without replacement: probabilities change (dependent events).'],
        hint1: 'Think about what each concept specifically describes in Counting Principles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Counting Principles describes a specific idea. Fundamental counting principle: if event A has m outcomes and B has n outcomes, together they have m × n outcomes. Key Insight: With replacement: probabilities stay the same. ACT Tip: Without replacement: probabilities change (dependent events).'
      }
    }
  ]
}
