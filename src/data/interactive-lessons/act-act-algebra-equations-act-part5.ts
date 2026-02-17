export const actAlgebraPart5Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a5-intro',
      type: 'text' as const,
      content: `
# Word Problem Translation

**Part 5 of 7 — Word Problem Translation**

Assign variables to unknowns.

"Is" = equals, "more than" = addition, "less than" = subtraction.
      `
    },
    {
      id: 'act-a5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Assign variables to unknowns.?',
            options: [
              '"Of" = multiplication, "per" = division.',
              'Assign variables to unknowns.',
              'Set up the equation, solve, then verify your answer makes sense in context.',
              '"Is" = equals, "more than" = addition, "less than" = subtraction.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Assign variables to unknowns. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Word Problem Translation, which explains Key Insight?',
            options: [
              'Set up the equation, solve, then verify your answer makes sense in context.',
              '"Of" = multiplication, "per" = division.',
              'Assign variables to unknowns.',
              '"Is" = equals, "more than" = addition, "less than" = subtraction.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: "Of" = multiplication, "per" = division. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-a5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** "Of" = multiplication, "per" = division.

**ACT Tip:** Set up the equation, solve, then verify your answer makes sense in context.
      `
    },
    {
      id: 'act-a5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              '"Is" = equals, "more than" = addition, "less than" = subtraction.',
              'Assign variables to unknowns.',
              'Set up the equation, solve, then verify your answer makes sense in context.',
              '"Of" = multiplication, "per" = division.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Set up the equation, solve, then verify your answer makes sense in context. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-a5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['"Is" = equals, "more than" = addition, "less than" = subtraction.', 'Set up the equation, solve, then verify your answer makes sense in context.', '"Of" = multiplication, "per" = division.', 'Assign variables to unknowns.']
          },
          {
            label: 'ACT Tip',
            options: ['"Of" = multiplication, "per" = division.', 'Set up the equation, solve, then verify your answer makes sense in context.', 'Assign variables to unknowns.', '"Is" = equals, "more than" = addition, "less than" = subtraction.']
          }
        ],
        correctAnswers: ['"Of" = multiplication, "per" = division.', 'Set up the equation, solve, then verify your answer makes sense in context.'],
        hint1: 'Think about what each concept specifically describes in Word Problem Translation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Word Problem Translation describes a specific idea. Key Insight: "Of" = multiplication, "per" = division. ACT Tip: Set up the equation, solve, then verify your answer makes sense in context.'
      }
    }
  ]
}
