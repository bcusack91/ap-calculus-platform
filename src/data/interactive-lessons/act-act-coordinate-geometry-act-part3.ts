export const actCoordGeomPart3Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c3-intro',
      type: 'text' as const,
      content: `
# Slope Applications

**Part 3 of 7 — Slope Applications**

Slope = rise/run = (y₂-y₁)/(x₂-x₁).

Parallel lines: same slope.
      `
    },
    {
      id: 'act-c3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes slope = rise/run = (y₂-y₁)/(x₂-x₁)?',
            options: [
              'Slope = rise/run = (y₂-y₁)/(x₂-x₁) is a key concept for ACT Math',
              'Parallel lines: same slope',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Slope = rise/run = (y₂-y₁)/(x₂-x₁)'
          }
        ]
      }
    },
    {
      id: 'act-c3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).

**ACT Tip:** Zero slope = horizontal line; undefined slope = vertical line.
      `
    },
    {
      id: 'act-c3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for slope applications?',
            options: [
              'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1)'
          }
        ]
      }
    },
    {
      id: 'act-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Slope Applications:',
            options: ['Slope = rise/run = (y₂-y₁)/(x₂-x₁)', 'Parallel lines: same slope', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Perpendicular lines: slopes are negative reciproca', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Slope = rise/run = (y₂-y₁)/(x₂-x₁)', 'Perpendicular lines: slopes are negative reciproca'],
        hint1: 'Think about slope applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Slope = rise/run = (y₂-y₁)/(x₂-x₁). Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).'
      }
    }
  ]
}
