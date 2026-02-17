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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Slope = rise/run = (y₂-y₁)/(x₂-x₁)." refer to in ACT prep?',
            options: [
              'Slope = rise/run = (y₂-y₁)/(x₂-x₁).',
              'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).',
              'Zero slope = horizontal line; undefined slope = vertical line.',
              'same slope.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Slope = rise/run = (y₂-y₁)/(x₂-x₁). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'same slope.',
              'Zero slope = horizontal line; undefined slope = vertical line.',
              'Slope = rise/run = (y₂-y₁)/(x₂-x₁).',
              'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Zero slope = horizontal line; undefined slope = vertical line.',
              'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).',
              'same slope.',
              'Slope = rise/run = (y₂-y₁)/(x₂-x₁).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Zero slope = horizontal line; undefined slope = vertical line. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-c3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parallel lines',
            options: ['Zero slope = horizontal line; undefined slope = vertical line.', 'Slope = rise/run = (y₂-y₁)/(x₂-x₁).', 'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).', 'same slope.']
          },
          {
            label: 'Key Insight',
            options: ['Slope = rise/run = (y₂-y₁)/(x₂-x₁).', 'same slope.', 'Zero slope = horizontal line; undefined slope = vertical line.', 'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).']
          },
          {
            label: 'ACT Tip',
            options: ['Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).', 'same slope.', 'Slope = rise/run = (y₂-y₁)/(x₂-x₁).', 'Zero slope = horizontal line; undefined slope = vertical line.']
          }
        ],
        correctAnswers: ['same slope.', 'Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1).', 'Zero slope = horizontal line; undefined slope = vertical line.'],
        hint1: 'Think about what each concept specifically describes in Slope Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Slope Applications describes a specific idea. Parallel lines: same slope. Key Insight: Perpendicular lines: slopes are negative reciprocals (m₁ · m₂ = -1). ACT Tip: Zero slope = horizontal line; undefined slope = vertical line.'
      }
    }
  ]
}
