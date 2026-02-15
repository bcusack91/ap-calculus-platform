export const actCoordGeomPart1Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c1-intro',
      type: 'text' as const,
      content: `
# 📋 Coordinate Geometry

**Part 1 of 7 — Graphing Lines**

Slope-intercept form: y = mx + b (m = slope, b = y-intercept).

Point-slope form: y - y₁ = m(x - x₁).
      `
    },
    {
      id: 'act-c1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes slope-intercept form?',
            options: [
              'Slope-intercept form is a key concept for ACT Math',
              'Point-slope form: y - y₁ = m(x - x₁)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Slope-intercept form: y = mx + b (m = slope, b = y-intercept)'
          }
        ]
      }
    },
    {
      id: 'act-c1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Standard form: Ax + By = C.

**ACT Tip:** Convert between forms as needed by the ACT question.
      `
    },
    {
      id: 'act-c1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for graphing lines?',
            options: [
              'Standard form: Ax + By = C',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Standard form: Ax + By = C'
          }
        ]
      }
    },
    {
      id: 'act-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Graphing Lines:',
            options: ['Slope-intercept form: y = mx + b (m = slope, b = y', 'Point-slope form: y - y₁ = m(x - x₁)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Standard form: Ax + By = C', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Slope-intercept form: y = mx + b (m = slope, b = y', 'Standard form: Ax + By = C'],
        hint1: 'Think about graphing lines',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Slope-intercept form: y = mx + b (m = slope, b = y-intercept). Standard form: Ax + By = C.'
      }
    }
  ]
}
