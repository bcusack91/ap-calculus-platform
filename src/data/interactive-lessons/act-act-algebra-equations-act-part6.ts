export const actAlgebraPart6Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Assign variables to unknowns.

"Is" = equals, "more than" = addition, "less than" = subtraction.
      `
    },
    {
      id: 'act-a6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Assign variables to unknowns.?',
            options: [
              'Assign variables to unknowns.',
              '"Is" = equals, "more than" = addition, "less than" = subtraction.',
              'Set up the equation, solve, then verify your answer makes sense in context.',
              '"Of" = multiplication, "per" = division.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Assign variables to unknowns. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              '"Is" = equals, "more than" = addition, "less than" = subtraction.',
              'Set up the equation, solve, then verify your answer makes sense in context.',
              '"Of" = multiplication, "per" = division.',
              'Assign variables to unknowns.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: "Of" = multiplication, "per" = division. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-a6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Of" = multiplication, "per" = division.

**ACT Tip:** Set up the equation, solve, then verify your answer makes sense in context.
      `
    },
    {
      id: 'act-a6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Set up the equation, solve, then verify your answer makes sense in context.',
              'Assign variables to unknowns.',
              '"Of" = multiplication, "per" = division.',
              '"Is" = equals, "more than" = addition, "less than" = subtraction.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Set up the equation, solve, then verify your answer makes sense in context. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-a6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Set up the equation, solve, then verify your answer makes sense in context.', '"Of" = multiplication, "per" = division.', '"Is" = equals, "more than" = addition, "less than" = subtraction.', 'Assign variables to unknowns.']
          },
          {
            label: 'ACT Tip',
            options: ['"Of" = multiplication, "per" = division.', 'Set up the equation, solve, then verify your answer makes sense in context.', '"Is" = equals, "more than" = addition, "less than" = subtraction.', 'Assign variables to unknowns.']
          }
        ],
        correctAnswers: ['"Of" = multiplication, "per" = division.', 'Set up the equation, solve, then verify your answer makes sense in context.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: "Of" = multiplication, "per" = division. ACT Tip: Set up the equation, solve, then verify your answer makes sense in context.'
      }
    }
  ]
}
