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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Circle" refer to in ACT prep?',
            options: [
              'Ellipse: (x-h)²/a² + (y-k)²/b² = 1.',
              '(x-h)² + (y-k)² = r², center (h,k), radius r.',
              'ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.',
              'y = ax² + bx + c or y = a(x-h)² + k.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Circle: (x-h)² + (y-k)² = r², center (h,k), radius r. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Ellipse: (x-h)²/a² + (y-k)²/b² = 1.',
              'y = ax² + bx + c or y = a(x-h)² + k.',
              'ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.',
              '(x-h)² + (y-k)² = r², center (h,k), radius r.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Ellipse: (x-h)²/a² + (y-k)²/b² = 1. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Conic Sections Basics, which correctly describes ACT Tip?',
            options: [
              'y = ax² + bx + c or y = a(x-h)² + k.',
              'ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.',
              '(x-h)² + (y-k)² = r², center (h,k), radius r.',
              'Ellipse: (x-h)²/a² + (y-k)²/b² = 1.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circle',
            options: ['(x-h)² + (y-k)² = r², center (h,k), radius r.', 'y = ax² + bx + c or y = a(x-h)² + k.', 'ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.', 'Ellipse: (x-h)²/a² + (y-k)²/b² = 1.']
          },
          {
            label: 'Parabola',
            options: ['(x-h)² + (y-k)² = r², center (h,k), radius r.', 'Ellipse: (x-h)²/a² + (y-k)²/b² = 1.', 'y = ax² + bx + c or y = a(x-h)² + k.', 'ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.']
          },
          {
            label: 'Key Insight',
            options: ['Ellipse: (x-h)²/a² + (y-k)²/b² = 1.', 'y = ax² + bx + c or y = a(x-h)² + k.', 'ACT rarely tests ellipses/hyperbolas in depth — focus on circles and parabolas.', '(x-h)² + (y-k)² = r², center (h,k), radius r.']
          }
        ],
        correctAnswers: ['(x-h)² + (y-k)² = r², center (h,k), radius r.', 'y = ax² + bx + c or y = a(x-h)² + k.', 'Ellipse: (x-h)²/a² + (y-k)²/b² = 1.'],
        hint1: 'Think about what each concept specifically describes in Conic Sections Basics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Conic Sections Basics describes a specific idea. Circle: (x-h)² + (y-k)² = r², center (h,k), radius r. Parabola: y = ax² + bx + c or y = a(x-h)² + k. Key Insight: Ellipse: (x-h)²/a² + (y-k)²/b² = 1.'
      }
    }
  ]
}
