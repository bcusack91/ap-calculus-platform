export const satLinearEquationsPart4Data = {
  topicSlug: 'sat-linear-equations-sat',
  sections: [
    {
      id: 'sat-l4-intro',
      type: 'text' as const,
      content: `
# Systems of Linear Equations

**Part 4 of 7 — Systems of Linear Equations**

A system has two or more equations with the same variables.

Substitution: solve one equation for a variable, plug into the other.
      `
    },
    {
      id: 'sat-l4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes A system has two or more equations with…?',
            options: [
              'A system has two or more equations with the same variables.',
              'solve one equation for a variable, plug into the other.',
              'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.',
              'Elimination: add/subtract equations to eliminate a variable.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — A system has two or more equations with the same variables. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Systems of Linear Equations, which explains Key Insight?',
            options: [
              'A system has two or more equations with the same variables.',
              'solve one equation for a variable, plug into the other.',
              'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.',
              'Elimination: add/subtract equations to eliminate a variable.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Elimination: add/subtract equations to eliminate a variable. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-l4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Elimination: add/subtract equations to eliminate a variable.

**SAT Tip:** No solution: parallel lines (same slope, different intercept); infinite solutions: same line.
      `
    },
    {
      id: 'sat-l4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.',
              'A system has two or more equations with the same variables.',
              'solve one equation for a variable, plug into the other.',
              'Elimination: add/subtract equations to eliminate a variable.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: No solution: parallel lines (same slope, different intercept); infinite solutions: same line. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-l4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution',
            options: ['A system has two or more equations with the same variables.', 'Elimination: add/subtract equations to eliminate a variable.', 'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.', 'solve one equation for a variable, plug into the other.']
          },
          {
            label: 'Key Insight',
            options: ['Elimination: add/subtract equations to eliminate a variable.', 'A system has two or more equations with the same variables.', 'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.', 'solve one equation for a variable, plug into the other.']
          },
          {
            label: 'SAT Tip',
            options: ['solve one equation for a variable, plug into the other.', 'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.', 'Elimination: add/subtract equations to eliminate a variable.', 'A system has two or more equations with the same variables.']
          }
        ],
        correctAnswers: ['solve one equation for a variable, plug into the other.', 'Elimination: add/subtract equations to eliminate a variable.', 'No solution: parallel lines (same slope, different intercept); infinite solutions: same line.'],
        hint1: 'Think about what each concept specifically describes in Systems of Linear Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Systems of Linear Equations describes a specific idea. Substitution: solve one equation for a variable, plug into the other. Key Insight: Elimination: add/subtract equations to eliminate a variable. SAT Tip: No solution: parallel lines (same slope, different intercept); infinite solutions: same line.'
      }
    }
  ]
}
