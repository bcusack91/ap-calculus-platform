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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Vertical angles are equal; linear pair…?',
            options: [
              'Exterior angle = sum of two remote interior angles.',
              'corresponding angles equal, alternate interior angles equal.',
              'Sum of angles in a triangle = 180°.',
              'Vertical angles are equal; linear pair = 180°.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Vertical angles are equal; linear pair = 180°. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'corresponding angles equal, alternate interior angles equal.',
              'Sum of angles in a triangle = 180°.',
              'Exterior angle = sum of two remote interior angles.',
              'Vertical angles are equal; linear pair = 180°.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Sum of angles in a triangle = 180°. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Vertical angles are equal; linear pair = 180°.',
              'corresponding angles equal, alternate interior angles equal.',
              'Sum of angles in a triangle = 180°.',
              'Exterior angle = sum of two remote interior angles.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Exterior angle = sum of two remote interior angles. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parallel lines cut by a transversal',
            options: ['Exterior angle = sum of two remote interior angles.', 'Sum of angles in a triangle = 180°.', 'Vertical angles are equal; linear pair = 180°.', 'corresponding angles equal, alternate interior angles equal.']
          },
          {
            label: 'Key Insight',
            options: ['Vertical angles are equal; linear pair = 180°.', 'Sum of angles in a triangle = 180°.', 'corresponding angles equal, alternate interior angles equal.', 'Exterior angle = sum of two remote interior angles.']
          },
          {
            label: 'SAT Tip',
            options: ['Exterior angle = sum of two remote interior angles.', 'Vertical angles are equal; linear pair = 180°.', 'Sum of angles in a triangle = 180°.', 'corresponding angles equal, alternate interior angles equal.']
          }
        ],
        correctAnswers: ['corresponding angles equal, alternate interior angles equal.', 'Sum of angles in a triangle = 180°.', 'Exterior angle = sum of two remote interior angles.'],
        hint1: 'Think about what each concept specifically describes in Geometry Angles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Geometry Angles describes a specific idea. Parallel lines cut by a transversal: corresponding angles equal, alternate interior angles equal. Key Insight: Sum of angles in a triangle = 180°. SAT Tip: Exterior angle = sum of two remote interior angles.'
      }
    }
  ]
}
