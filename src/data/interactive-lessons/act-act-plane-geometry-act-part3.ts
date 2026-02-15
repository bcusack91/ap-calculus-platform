export const actPlaneGeomPart3Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p3-intro',
      type: 'text' as const,
      content: `
# Quadrilaterals & Polygons

**Part 3 of 7 — Quadrilaterals & Polygons**

Parallelogram: opposite sides equal and parallel, opposite angles equal.

Rectangle: all angles 90°; Rhombus: all sides equal; Square: both.
      `
    },
    {
      id: 'act-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes parallelogram?',
            options: [
              'Parallelogram is a key concept for ACT Math',
              'Rectangle: all angles 90°; Rhombus: all sides equal; Square: both',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Parallelogram: opposite sides equal and parallel, opposite angles equal'
          }
        ]
      }
    },
    {
      id: 'act-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Trapezoid area: ½(b₁ + b₂)h.

**ACT Tip:** Regular polygon: all sides and angles equal.
      `
    },
    {
      id: 'act-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for quadrilaterals & polygons?',
            options: [
              'Trapezoid area: ½(b₁ + b₂)h',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Trapezoid area: ½(b₁ + b₂)h'
          }
        ]
      }
    },
    {
      id: 'act-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Quadrilaterals & Polygons:',
            options: ['Parallelogram: opposite sides equal and parallel, ', 'Rectangle: all angles 90°; Rhombus: all sides equa', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Trapezoid area: ½(b₁ + b₂)h', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Parallelogram: opposite sides equal and parallel, ', 'Trapezoid area: ½(b₁ + b₂)h'],
        hint1: 'Think about quadrilaterals & polygons',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Parallelogram: opposite sides equal and parallel, opposite angles equal. Trapezoid area: ½(b₁ + b₂)h.'
      }
    }
  ]
}
