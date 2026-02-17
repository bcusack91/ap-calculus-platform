export const satLinearEquationsPart1Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l1-intro',
      type: 'text' as const,
      content: `
# 📝 Linear Equations

**Part 1 of 7 — Linear Equations Basics**

A linear equation has the form ax + b = c, where x is the variable.

To solve, isolate x by performing inverse operations on both sides.
      `
    },
    {
      id: 'sat-l1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes A linear equation has the form ax + b =…?',
            options: [
              'Check your answer by substituting back into the original equation.',
              'To solve, isolate x by performing inverse operations on both sides.',
              'The solution is the value that makes the equation true.',
              'A linear equation has the form ax + b = c, where x is the variable.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — A linear equation has the form ax + b = c, where x is the variable. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Linear Equations, which explains Key Insight?',
            options: [
              'Check your answer by substituting back into the original equation.',
              'The solution is the value that makes the equation true.',
              'To solve, isolate x by performing inverse operations on both sides.',
              'A linear equation has the form ax + b = c, where x is the variable.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: The solution is the value that makes the equation true. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-l1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** The solution is the value that makes the equation true.

**SAT Tip:** Check your answer by substituting back into the original equation.
      `
    },
    {
      id: 'sat-l1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'To solve, isolate x by performing inverse operations on both sides.',
              'A linear equation has the form ax + b = c, where x is the variable.',
              'Check your answer by substituting back into the original equation.',
              'The solution is the value that makes the equation true.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Check your answer by substituting back into the original equation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-l1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['To solve, isolate x by performing inverse operations on both sides.', 'A linear equation has the form ax + b = c, where x is the variable.', 'Check your answer by substituting back into the original equation.', 'The solution is the value that makes the equation true.']
          },
          {
            label: 'SAT Tip',
            options: ['To solve, isolate x by performing inverse operations on both sides.', 'Check your answer by substituting back into the original equation.', 'The solution is the value that makes the equation true.', 'A linear equation has the form ax + b = c, where x is the variable.']
          }
        ],
        correctAnswers: ['The solution is the value that makes the equation true.', 'Check your answer by substituting back into the original equation.'],
        hint1: 'Think about what each concept specifically describes in Linear Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Linear Equations describes a specific idea. Key Insight: The solution is the value that makes the equation true. SAT Tip: Check your answer by substituting back into the original equation.'
      }
    }
  ]
}
