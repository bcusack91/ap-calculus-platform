export const actAlgebraPart1Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a1-intro',
      type: 'text' as const,
      content: `
# 📋 Algebra Equations

**Part 1 of 7 — Linear Equations**

Isolate the variable using inverse operations.

Multi-step: distribute, combine like terms, then isolate.
      `
    },
    {
      id: 'act-a1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Isolate the variable using inverse…" refer to in ACT prep?',
            options: [
              'distribute, combine like terms, then isolate.',
              'Isolate the variable using inverse operations.',
              'Variables on both sides: move all variable terms to one side.',
              'Check your answer by substituting back into the original equation.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Isolate the variable using inverse operations. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Check your answer by substituting back into the original equation.',
              'distribute, combine like terms, then isolate.',
              'Isolate the variable using inverse operations.',
              'Variables on both sides: move all variable terms to one side.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Variables on both sides: move all variable terms to one side. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-a1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Variables on both sides: move all variable terms to one side.

**ACT Tip:** Check your answer by substituting back into the original equation.
      `
    },
    {
      id: 'act-a1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Algebra Equations, which correctly describes ACT Tip?',
            options: [
              'Isolate the variable using inverse operations.',
              'distribute, combine like terms, then isolate.',
              'Variables on both sides: move all variable terms to one side.',
              'Check your answer by substituting back into the original equation.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Check your answer by substituting back into the original equation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-a1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multi-step',
            options: ['Check your answer by substituting back into the original equation.', 'Variables on both sides: move all variable terms to one side.', 'Isolate the variable using inverse operations.', 'distribute, combine like terms, then isolate.']
          },
          {
            label: 'Key Insight',
            options: ['Variables on both sides: move all variable terms to one side.', 'Isolate the variable using inverse operations.', 'distribute, combine like terms, then isolate.', 'Check your answer by substituting back into the original equation.']
          },
          {
            label: 'ACT Tip',
            options: ['Check your answer by substituting back into the original equation.', 'distribute, combine like terms, then isolate.', 'Isolate the variable using inverse operations.', 'Variables on both sides: move all variable terms to one side.']
          }
        ],
        correctAnswers: ['distribute, combine like terms, then isolate.', 'Variables on both sides: move all variable terms to one side.', 'Check your answer by substituting back into the original equation.'],
        hint1: 'Think about what each concept specifically describes in Algebra Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Algebra Equations describes a specific idea. Multi-step: distribute, combine like terms, then isolate. Key Insight: Variables on both sides: move all variable terms to one side. ACT Tip: Check your answer by substituting back into the original equation.'
      }
    }
  ]
}
