export const satPassportAdvPart4Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p4-intro',
      type: 'text' as const,
      content: `
# Isolating Variables

**Part 4 of 7 — Isolating Variables**

Rearrange formulas to solve for any variable.

Treat all other variables as constants.
      `
    },
    {
      id: 'sat-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Rearrange formulas to solve for any…?',
            options: [
              'Apply the same algebraic steps as solving equations.',
              'Treat all other variables as constants.',
              'Example: A = πr²h, solve for h → h = A/(πr²).',
              'Rearrange formulas to solve for any variable.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Rearrange formulas to solve for any variable. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Apply the same algebraic steps as solving equations.',
              'Treat all other variables as constants.',
              'Rearrange formulas to solve for any variable.',
              'Example: A = πr²h, solve for h → h = A/(πr²).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Apply the same algebraic steps as solving equations. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Apply the same algebraic steps as solving equations.

**SAT Tip:** Example: A = πr²h, solve for h → h = A/(πr²).
      `
    },
    {
      id: 'sat-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Isolating Variables, which correctly describes SAT Tip?',
            options: [
              'Treat all other variables as constants.',
              'Example: A = πr²h, solve for h → h = A/(πr²).',
              'Rearrange formulas to solve for any variable.',
              'Apply the same algebraic steps as solving equations.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Example: A = πr²h, solve for h → h = A/(πr²). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Example: A = πr²h, solve for h → h = A/(πr²).', 'Rearrange formulas to solve for any variable.', 'Apply the same algebraic steps as solving equations.', 'Treat all other variables as constants.']
          },
          {
            label: 'SAT Tip',
            options: ['Rearrange formulas to solve for any variable.', 'Apply the same algebraic steps as solving equations.', 'Treat all other variables as constants.', 'Example: A = πr²h, solve for h → h = A/(πr²).']
          }
        ],
        correctAnswers: ['Apply the same algebraic steps as solving equations.', 'Example: A = πr²h, solve for h → h = A/(πr²).'],
        hint1: 'Think about what each concept specifically describes in Isolating Variables.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Isolating Variables describes a specific idea. Key Insight: Apply the same algebraic steps as solving equations. SAT Tip: Example: A = πr²h, solve for h → h = A/(πr²).'
      }
    }
  ]
}
