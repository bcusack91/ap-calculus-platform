export const actPlaneGeomPart1Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p1-intro',
      type: 'text' as const,
      content: `
# 📋 Plane Geometry

**Part 1 of 7 — Angles and Lines**

Supplementary angles sum to 180°; complementary sum to 90°.

Vertical angles are equal.
      `
    },
    {
      id: 'act-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Supplementary angles sum to 180°;…?',
            options: [
              'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.',
              'Vertical angles are equal.',
              'Sum of interior angles of an n-gon: (n-2) × 180°.',
              'Supplementary angles sum to 180°; complementary sum to 90°.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Supplementary angles sum to 180°; complementary sum to 90°. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.',
              'Vertical angles are equal.',
              'Supplementary angles sum to 180°; complementary sum to 90°.',
              'Sum of interior angles of an n-gon: (n-2) × 180°.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Parallel lines + transversal: alternate interior angles equal, corresponding angles equal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.

**ACT Tip:** Sum of interior angles of an n-gon: (n-2) × 180°.
      `
    },
    {
      id: 'act-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Sum of interior angles of an n-gon: (n-2) × 180°.',
              'Vertical angles are equal.',
              'Supplementary angles sum to 180°; complementary sum to 90°.',
              'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Sum of interior angles of an n-gon: (n-2) × 180°. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Vertical angles are equal.', 'Sum of interior angles of an n-gon: (n-2) × 180°.', 'Supplementary angles sum to 180°; complementary sum to 90°.', 'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.']
          },
          {
            label: 'ACT Tip',
            options: ['Sum of interior angles of an n-gon: (n-2) × 180°.', 'Vertical angles are equal.', 'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.', 'Supplementary angles sum to 180°; complementary sum to 90°.']
          }
        ],
        correctAnswers: ['Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.', 'Sum of interior angles of an n-gon: (n-2) × 180°.'],
        hint1: 'Think about what each concept specifically describes in Plane Geometry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Plane Geometry describes a specific idea. Key Insight: Parallel lines + transversal: alternate interior angles equal, corresponding angles equal. ACT Tip: Sum of interior angles of an n-gon: (n-2) × 180°.'
      }
    }
  ]
}
