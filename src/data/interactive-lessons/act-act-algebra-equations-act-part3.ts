export const actAlgebraPart3Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a3-intro',
      type: 'text' as const,
      content: `
# Systems of Equations

**Part 3 of 7 — Systems of Equations**

Substitution: solve one equation for a variable, plug into the other.

Elimination: add/subtract equations to cancel a variable.
      `
    },
    {
      id: 'act-a3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes substitution?',
            options: [
              'Substitution is a key concept for ACT Math',
              'Elimination: add/subtract equations to cancel a variable',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Substitution: solve one equation for a variable, plug into the other'
          }
        ]
      }
    },
    {
      id: 'act-a3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Special cases: no solution (parallel lines) or infinite solutions (same line).

**ACT Tip:** ACT tip: if the system looks complex, try elimination first.
      `
    },
    {
      id: 'act-a3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for systems of equations?',
            options: [
              'Special cases: no solution (parallel lines) or infinite solutions (same line)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Special cases: no solution (parallel lines) or infinite solutions (same line)'
          }
        ]
      }
    },
    {
      id: 'act-a3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Systems of Equations:',
            options: ['Substitution: solve one equation for a variable, p', 'Elimination: add/subtract equations to cancel a va', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Special cases: no solution (parallel lines) or inf', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Substitution: solve one equation for a variable, p', 'Special cases: no solution (parallel lines) or inf'],
        hint1: 'Think about systems of equations',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Substitution: solve one equation for a variable, plug into the other. Special cases: no solution (parallel lines) or infinite solutions (same line).'
      }
    }
  ]
}
