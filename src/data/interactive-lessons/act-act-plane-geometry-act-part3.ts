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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Parallelogram?',
            options: [
              'opposite sides equal and parallel, opposite angles equal.',
              'all angles 90°; Rhombus: all sides equal; Square: both.',
              'Trapezoid area: ½(b₁ + b₂)h.',
              'Regular polygon: all sides and angles equal.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Parallelogram: opposite sides equal and parallel, opposite angles equal. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Trapezoid area: ½(b₁ + b₂)h.',
              'all angles 90°; Rhombus: all sides equal; Square: both.',
              'Regular polygon: all sides and angles equal.',
              'opposite sides equal and parallel, opposite angles equal.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Trapezoid area: ½(b₁ + b₂)h. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Quadrilaterals & Polygons, which correctly describes ACT Tip?',
            options: [
              'Trapezoid area: ½(b₁ + b₂)h.',
              'opposite sides equal and parallel, opposite angles equal.',
              'all angles 90°; Rhombus: all sides equal; Square: both.',
              'Regular polygon: all sides and angles equal.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Regular polygon: all sides and angles equal. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parallelogram',
            options: ['Regular polygon: all sides and angles equal.', 'all angles 90°; Rhombus: all sides equal; Square: both.', 'opposite sides equal and parallel, opposite angles equal.', 'Trapezoid area: ½(b₁ + b₂)h.']
          },
          {
            label: 'Rectangle',
            options: ['Trapezoid area: ½(b₁ + b₂)h.', 'Regular polygon: all sides and angles equal.', 'all angles 90°; Rhombus: all sides equal; Square: both.', 'opposite sides equal and parallel, opposite angles equal.']
          },
          {
            label: 'Key Insight',
            options: ['opposite sides equal and parallel, opposite angles equal.', 'all angles 90°; Rhombus: all sides equal; Square: both.', 'Trapezoid area: ½(b₁ + b₂)h.', 'Regular polygon: all sides and angles equal.']
          }
        ],
        correctAnswers: ['opposite sides equal and parallel, opposite angles equal.', 'all angles 90°; Rhombus: all sides equal; Square: both.', 'Trapezoid area: ½(b₁ + b₂)h.'],
        hint1: 'Think about what each concept specifically describes in Quadrilaterals & Polygons.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Quadrilaterals & Polygons describes a specific idea. Parallelogram: opposite sides equal and parallel, opposite angles equal. Rectangle: all angles 90°; Rhombus: all sides equal; Square: both. Key Insight: Trapezoid area: ½(b₁ + b₂)h.'
      }
    }
  ]
}
