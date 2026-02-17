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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Slope-intercept form?',
            options: [
              'Standard form: Ax + By = C.',
              'y - y₁ = m(x - x₁).',
              'Convert between forms as needed by the ACT question.',
              'y = mx + b (m = slope, b = y-intercept).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Slope-intercept form: y = mx + b (m = slope, b = y-intercept). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'y = mx + b (m = slope, b = y-intercept).',
              'Convert between forms as needed by the ACT question.',
              'y - y₁ = m(x - x₁).',
              'Standard form: Ax + By = C.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Standard form: Ax + By = C. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Coordinate Geometry, which correctly describes ACT Tip?',
            options: [
              'y - y₁ = m(x - x₁).',
              'y = mx + b (m = slope, b = y-intercept).',
              'Convert between forms as needed by the ACT question.',
              'Standard form: Ax + By = C.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Convert between forms as needed by the ACT question. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Slope-intercept form',
            options: ['y - y₁ = m(x - x₁).', 'y = mx + b (m = slope, b = y-intercept).', 'Convert between forms as needed by the ACT question.', 'Standard form: Ax + By = C.']
          },
          {
            label: 'Point-slope form',
            options: ['y - y₁ = m(x - x₁).', 'y = mx + b (m = slope, b = y-intercept).', 'Standard form: Ax + By = C.', 'Convert between forms as needed by the ACT question.']
          },
          {
            label: 'Key Insight',
            options: ['Standard form: Ax + By = C.', 'y = mx + b (m = slope, b = y-intercept).', 'Convert between forms as needed by the ACT question.', 'y - y₁ = m(x - x₁).']
          }
        ],
        correctAnswers: ['y = mx + b (m = slope, b = y-intercept).', 'y - y₁ = m(x - x₁).', 'Standard form: Ax + By = C.'],
        hint1: 'Think about what each concept specifically describes in Coordinate Geometry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Coordinate Geometry describes a specific idea. Slope-intercept form: y = mx + b (m = slope, b = y-intercept). Point-slope form: y - y₁ = m(x - x₁). Key Insight: Standard form: Ax + By = C.'
      }
    }
  ]
}
