export const satGeometryPart1Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g1-intro',
      type: 'text' as const,
      content: `
# 📝 Geometry Angles

**Part 1 of 7 — Lines and Angles**

Vertical angles are equal; linear pair = 180°.

Parallel lines cut by a transversal: corresponding angles equal, alternate interior angles equal.
      `
    },
    {
      id: 'sat-g1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes vertical angles are equal; linear pair = 180°?',
            options: [
              'Vertical angles are equal; linear pair = 180° is a fundamental concept in SAT Math',
              'Parallel lines cut by a transversal: corresponding angles equal, alternate interior angles equal',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Vertical angles are equal; linear pair = 180°'
          }
        ]
      }
    },
    {
      id: 'sat-g1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sum of angles in a triangle = 180°.

**SAT Tip:** Exterior angle = sum of two remote interior angles.
      `
    },
    {
      id: 'sat-g1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for lines and angles?',
            options: [
              'Sum of angles in a triangle = 180°',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Sum of angles in a triangle = 180°'
          }
        ]
      }
    },
    {
      id: 'sat-g1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Lines and Angles:',
            options: ['Vertical angles are equal; linear pair = 180°', 'Parallel lines cut by a transversal: corresponding', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Sum of angles in a triangle = 180°', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Vertical angles are equal; linear pair = 180°', 'Sum of angles in a triangle = 180°'],
        hint1: 'Think about lines and angles',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Vertical angles are equal; linear pair = 180°. Sum of angles in a triangle = 180°.'
      }
    }
  ]
}
