export const actCoordGeomPart4Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c4-intro',
      type: 'text' as const,
      content: `
# Conic Sections Basics

**Part 4 of 7 — Conic Sections Basics**

Circle: (x-h)² + (y-k)² = r², center (h,k), radius r.

Parabola: y = ax² + bx + c or y = a(x-h)² + k.
      `
    },
    {
      id: 'act-c4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes circle?',
            options: [
              'Circle is a key concept for ACT Math',
              'Parabola: y = ax² + bx + c or y = a(x-h)² + k',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Circle: (x-h)² + (y-k)² = r², center (h,k), radius r'
          }
        ]
      }
    },
    {
      id: 'act-c4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Ellipse: (x-h)²/a² + (y-k)²/b² = 1.

**ACT Tip:** ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.
      `
    },
    {
      id: 'act-c4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for conic sections basics?',
            options: [
              'Ellipse: (x-h)²/a² + (y-k)²/b² = 1',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Ellipse: (x-h)²/a² + (y-k)²/b² = 1'
          }
        ]
      }
    },
    {
      id: 'act-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Conic Sections Basics:',
            options: ['Circle: (x-h)² + (y-k)² = r², center (h,k), radius', 'Parabola: y = ax² + bx + c or y = a(x-h)² + k', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Ellipse: (x-h)²/a² + (y-k)²/b² = 1', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Circle: (x-h)² + (y-k)² = r², center (h,k), radius', 'Ellipse: (x-h)²/a² + (y-k)²/b² = 1'],
        hint1: 'Think about conic sections basics',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Circle: (x-h)² + (y-k)² = r², center (h,k), radius r. Ellipse: (x-h)²/a² + (y-k)²/b² = 1.'
      }
    }
  ]
}
