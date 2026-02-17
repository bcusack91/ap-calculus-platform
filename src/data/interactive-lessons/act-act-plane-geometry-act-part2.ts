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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Triangle angle sum = 180°.?',
            options: [
              'any side < sum of the other two.',
              'Triangle angle sum = 180°.',
              'Pythagorean theorem: a² + b² = c² (right triangles only).',
              'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Triangle angle sum = 180°. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Pythagorean theorem: a² + b² = c² (right triangles only).',
              'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).',
              'Triangle angle sum = 180°.',
              'any side < sum of the other two.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Pythagorean theorem: a² + b² = c² (right triangles only). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).',
              'Triangle angle sum = 180°.',
              'any side < sum of the other two.',
              'Pythagorean theorem: a² + b² = c² (right triangles only).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Triangle inequality',
            options: ['any side < sum of the other two.', 'Triangle angle sum = 180°.', 'Pythagorean theorem: a² + b² = c² (right triangles only).', 'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).']
          },
          {
            label: 'Key Insight',
            options: ['Pythagorean theorem: a² + b² = c² (right triangles only).', 'Triangle angle sum = 180°.', 'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).', 'any side < sum of the other two.']
          },
          {
            label: 'ACT Tip',
            options: ['any side < sum of the other two.', 'Pythagorean theorem: a² + b² = c² (right triangles only).', 'Triangle angle sum = 180°.', 'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).']
          }
        ],
        correctAnswers: ['any side < sum of the other two.', 'Pythagorean theorem: a² + b² = c² (right triangles only).', 'Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).'],
        hint1: 'Think about what each concept specifically describes in Triangle Properties.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Triangle Properties describes a specific idea. Triangle inequality: any side < sum of the other two. Key Insight: Pythagorean theorem: a² + b² = c² (right triangles only). ACT Tip: Special right triangles: 30-60-90 (1, √3, 2) and 45-45-90 (1, 1, √2).'
      }
    }
  ]
}
