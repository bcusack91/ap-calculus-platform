export const actPreAlgebraPart3Data = {
  topicSlug: 'act-pre-algebra-basics-act',
  sections: [
    {
      id: 'act-p3-intro',
      type: 'text' as const,
      content: `
# Ratios & Proportions

**Part 3 of 7 — Ratios & Proportions**

Ratio a:b means for every a of one thing, there are b of another.

Proportion: a/b = c/d — cross multiply to solve.
      `
    },
    {
      id: 'act-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes ratio a?',
            options: [
              'Ratio a is a key concept for ACT Math',
              'Proportion: a/b = c/d — cross multiply to solve',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Ratio a:b means for every a of one thing, there are b of another'
          }
        ]
      }
    },
    {
      id: 'act-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Scale factors: if a model is 1:50, multiply model measurements by 50.

**ACT Tip:** Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).
      `
    },
    {
      id: 'act-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for ratios & proportions?',
            options: [
              'Scale factors: if a model is 1:50, multiply model measurements by 50',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Scale factors: if a model is 1:50, multiply model measurements by 50'
          }
        ]
      }
    },
    {
      id: 'act-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Ratios & Proportions:',
            options: ['Ratio a:b means for every a of one thing, there ar', 'Proportion: a/b = c/d — cross multiply to solve', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Scale factors: if a model is 1:50, multiply model ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Ratio a:b means for every a of one thing, there ar', 'Scale factors: if a model is 1:50, multiply model '],
        hint1: 'Think about ratios & proportions',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Ratio a:b means for every a of one thing, there are b of another. Scale factors: if a model is 1:50, multiply model measurements by 50.'
      }
    }
  ]
}
