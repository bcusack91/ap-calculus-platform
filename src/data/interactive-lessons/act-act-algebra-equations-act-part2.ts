export const actAlgebraPart2Data = {
  topicSlug: 'act-algebra-equations-act',
  sections: [
    {
      id: 'act-a2-intro',
      type: 'text' as const,
      content: `
# Inequalities

**Part 2 of 7 — Inequalities**

Solve like equations, but flip the inequality sign when multiplying/dividing by a negative.

Graph solutions on a number line: open circle for < or >, closed for ≤ or ≥.
      `
    },
    {
      id: 'act-a2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes solve like equations, but flip the inequality sign when multiplying/dividing by a negative?',
            options: [
              'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative is a key concept for ACT Math',
              'Graph solutions on a number line: open circle for < or >, closed for ≤ or ≥',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative'
          }
        ]
      }
    },
    {
      id: 'act-a2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Compound inequalities: AND (intersection) vs. OR (union).

**ACT Tip:** ACT may present inequalities in word problem form.
      `
    },
    {
      id: 'act-a2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for inequalities?',
            options: [
              'Compound inequalities: AND (intersection) vs. OR (union)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Compound inequalities: AND (intersection) vs. OR (union)'
          }
        ]
      }
    },
    {
      id: 'act-a2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Inequalities:',
            options: ['Solve like equations, but flip the inequality sign', 'Graph solutions on a number line: open circle for ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Compound inequalities: AND (intersection) vs. OR (', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Solve like equations, but flip the inequality sign', 'Compound inequalities: AND (intersection) vs. OR ('],
        hint1: 'Think about inequalities',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Solve like equations, but flip the inequality sign when multiplying/dividing by a negative. Compound inequalities: AND (intersection) vs. OR (union).'
      }
    }
  ]
}
