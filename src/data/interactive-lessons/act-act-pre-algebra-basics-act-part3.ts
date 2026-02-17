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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ratio a?',
            options: [
              'Scale factors: if a model is 1:50, multiply model measurements by 50.',
              'b means for every a of one thing, there are b of another.',
              'a/b = c/d — cross multiply to solve.',
              'Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ratio a: b means for every a of one thing, there are b of another. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ratios & Proportions, which explains Key Insight?',
            options: [
              'a/b = c/d — cross multiply to solve.',
              'b means for every a of one thing, there are b of another.',
              'Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).',
              'Scale factors: if a model is 1:50, multiply model measurements by 50.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Scale factors: if a model is 1:50, multiply model measurements by 50. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).',
              'b means for every a of one thing, there are b of another.',
              'a/b = c/d — cross multiply to solve.',
              'Scale factors: if a model is 1:50, multiply model measurements by 50.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Unit rates: simplify to "per one" (e.g., miles per hour, cost per item). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio a',
            options: ['Scale factors: if a model is 1:50, multiply model measurements by 50.', 'Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).', 'b means for every a of one thing, there are b of another.', 'a/b = c/d — cross multiply to solve.']
          },
          {
            label: 'Proportion',
            options: ['Scale factors: if a model is 1:50, multiply model measurements by 50.', 'a/b = c/d — cross multiply to solve.', 'Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).', 'b means for every a of one thing, there are b of another.']
          },
          {
            label: 'Key Insight',
            options: ['a/b = c/d — cross multiply to solve.', 'Scale factors: if a model is 1:50, multiply model measurements by 50.', 'b means for every a of one thing, there are b of another.', 'Unit rates: simplify to "per one" (e.g., miles per hour, cost per item).']
          }
        ],
        correctAnswers: ['b means for every a of one thing, there are b of another.', 'a/b = c/d — cross multiply to solve.', 'Scale factors: if a model is 1:50, multiply model measurements by 50.'],
        hint1: 'Think about what each concept specifically describes in Ratios & Proportions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ratios & Proportions describes a specific idea. Ratio a: b means for every a of one thing, there are b of another. Proportion: a/b = c/d — cross multiply to solve. Key Insight: Scale factors: if a model is 1:50, multiply model measurements by 50.'
      }
    }
  ]
}
