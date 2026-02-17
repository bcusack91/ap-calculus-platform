export const satGeometryPart2Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g2-intro',
      type: 'text' as const,
      content: `
# Triangles

**Part 2 of 7 — Triangles**

Pythagorean theorem: a² + b² = c² (right triangles).

Special right triangles: 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).
      `
    },
    {
      id: 'sat-g2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Pythagorean theorem?',
            options: [
              '30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).',
              'a² + b² = c² (right triangles).',
              'Similar triangles: corresponding sides proportional, angles equal.',
              'Triangle inequality: sum of any two sides > third side.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Pythagorean theorem: a² + b² = c² (right triangles). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).',
              'Triangle inequality: sum of any two sides > third side.',
              'a² + b² = c² (right triangles).',
              'Similar triangles: corresponding sides proportional, angles equal.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Triangle inequality: sum of any two sides > third side. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Triangle inequality: sum of any two sides > third side.

**SAT Tip:** Similar triangles: corresponding sides proportional, angles equal.
      `
    },
    {
      id: 'sat-g2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Similar triangles: corresponding sides proportional, angles equal.',
              'Triangle inequality: sum of any two sides > third side.',
              'a² + b² = c² (right triangles).',
              '30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Similar triangles: corresponding sides proportional, angles equal. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pythagorean theorem',
            options: ['Triangle inequality: sum of any two sides > third side.', 'Similar triangles: corresponding sides proportional, angles equal.', 'a² + b² = c² (right triangles).', '30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).']
          },
          {
            label: 'Special right triangles',
            options: ['30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).', 'Similar triangles: corresponding sides proportional, angles equal.', 'Triangle inequality: sum of any two sides > third side.', 'a² + b² = c² (right triangles).']
          },
          {
            label: 'Key Insight',
            options: ['30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).', 'Triangle inequality: sum of any two sides > third side.', 'a² + b² = c² (right triangles).', 'Similar triangles: corresponding sides proportional, angles equal.']
          }
        ],
        correctAnswers: ['a² + b² = c² (right triangles).', '30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2).', 'Triangle inequality: sum of any two sides > third side.'],
        hint1: 'Think about what each concept specifically describes in Triangles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Triangles describes a specific idea. Pythagorean theorem: a² + b² = c² (right triangles). Special right triangles: 30-60-90 (x, x√3, 2x) and 45-45-90 (x, x, x√2). Key Insight: Triangle inequality: sum of any two sides > third side.'
      }
    }
  ]
}
