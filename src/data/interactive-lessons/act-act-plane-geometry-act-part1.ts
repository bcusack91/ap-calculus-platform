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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes supplementary angles sum to 180°; complementary sum to 90°?',
            options: [
              'Supplementary angles sum to 180°; complementary sum to 90° is a key concept for ACT Math',
              'Vertical angles are equal',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Supplementary angles sum to 180°; complementary sum to 90°'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for angles and lines?',
            options: [
              'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Parallel lines + transversal: alternate interior angles equal, corresponding angles equal'
          }
        ]
      }
    },
    {
      id: 'act-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Angles and Lines:',
            options: ['Supplementary angles sum to 180°; complementary su', 'Vertical angles are equal', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Parallel lines + transversal: alternate interior a', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Supplementary angles sum to 180°; complementary su', 'Parallel lines + transversal: alternate interior a'],
        hint1: 'Think about angles and lines',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Supplementary angles sum to 180°; complementary sum to 90°. Parallel lines + transversal: alternate interior angles equal, corresponding angles equal.'
      }
    }
  ]
}
