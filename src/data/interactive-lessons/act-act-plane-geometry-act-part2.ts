export const actPlaneGeomPart2Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p2-intro',
      type: 'text' as const,
      content: `
# Triangle Properties

**Part 2 of 7 — Triangle Properties**

Triangle angle sum = 180°.

Triangle inequality: any side < sum of the other two.
      `
    },
    {
      id: 'act-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes triangle angle sum = 180°?',
            options: [
              'Triangle angle sum = 180° is a key concept for ACT Math',
              'Triangle inequality: any side < sum of the other two',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Triangle angle sum = 180°'
          }
        ]
      }
    },
    {
      id: 'act-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Pythagorean theorem: a² + b² = c² (right triangles only).

**ACT Tip:** Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).
      `
    },
    {
      id: 'act-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for triangle properties?',
            options: [
              'Pythagorean theorem: a² + b² = c² (right triangles only)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Pythagorean theorem: a² + b² = c² (right triangles only)'
          }
        ]
      }
    },
    {
      id: 'act-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Triangle Properties:',
            options: ['Triangle angle sum = 180°', 'Triangle inequality: any side < sum of the other t', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Pythagorean theorem: a² + b² = c² (right triangles', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Triangle angle sum = 180°', 'Pythagorean theorem: a² + b² = c² (right triangles'],
        hint1: 'Think about triangle properties',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Triangle angle sum = 180°. Pythagorean theorem: a² + b² = c² (right triangles only).'
      }
    }
  ]
}
