export const satGeometryPart4Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g4-intro',
      type: 'text' as const,
      content: `
# Coordinate Geometry

**Part 4 of 7 — Coordinate Geometry**

Distance: d = √((x₂-x₁)² + (y₂-y₁)²).

Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2).
      `
    },
    {
      id: 'sat-g4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Distance?',
            options: [
              'd = √((x₂-x₁)² + (y₂-y₁)²).',
              '((x₁+x₂)/2, (y₁+y₂)/2).',
              'Slope: m = (y₂-y₁)/(x₂-x₁).',
              'Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Distance: d = √((x₂-x₁)² + (y₂-y₁)²). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Coordinate Geometry, which explains Key Insight?',
            options: [
              '((x₁+x₂)/2, (y₁+y₂)/2).',
              'Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.',
              'Slope: m = (y₂-y₁)/(x₂-x₁).',
              'd = √((x₂-x₁)² + (y₂-y₁)²).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Slope: m = (y₂-y₁)/(x₂-x₁). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Slope: m = (y₂-y₁)/(x₂-x₁).

**SAT Tip:** Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.
      `
    },
    {
      id: 'sat-g4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              '((x₁+x₂)/2, (y₁+y₂)/2).',
              'Slope: m = (y₂-y₁)/(x₂-x₁).',
              'd = √((x₂-x₁)² + (y₂-y₁)²).',
              'Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Distance',
            options: ['Slope: m = (y₂-y₁)/(x₂-x₁).', 'Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.', '((x₁+x₂)/2, (y₁+y₂)/2).', 'd = √((x₂-x₁)² + (y₂-y₁)²).']
          },
          {
            label: 'Midpoint',
            options: ['Slope: m = (y₂-y₁)/(x₂-x₁).', 'Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.', '((x₁+x₂)/2, (y₁+y₂)/2).', 'd = √((x₂-x₁)² + (y₂-y₁)²).']
          },
          {
            label: 'Key Insight',
            options: ['d = √((x₂-x₁)² + (y₂-y₁)²).', '((x₁+x₂)/2, (y₁+y₂)/2).', 'Slope: m = (y₂-y₁)/(x₂-x₁).', 'Parallel lines: same slope; Perpendicular lines: slopes are negative reciprocals.']
          }
        ],
        correctAnswers: ['d = √((x₂-x₁)² + (y₂-y₁)²).', '((x₁+x₂)/2, (y₁+y₂)/2).', 'Slope: m = (y₂-y₁)/(x₂-x₁).'],
        hint1: 'Think about what each concept specifically describes in Coordinate Geometry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Coordinate Geometry describes a specific idea. Distance: d = √((x₂-x₁)² + (y₂-y₁)²). Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2). Key Insight: Slope: m = (y₂-y₁)/(x₂-x₁).'
      }
    }
  ]
}
