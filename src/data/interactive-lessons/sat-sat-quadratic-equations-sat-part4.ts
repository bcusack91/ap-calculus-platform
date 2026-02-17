export const satQuadraticsPart4Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q4-intro',
      type: 'text' as const,
      content: `
# Graphing Parabolas

**Part 4 of 7 — Graphing Parabolas**

Parabola opens up if a > 0, down if a < 0.

Vertex: x = -b/(2a), then find y.
      `
    },
    {
      id: 'sat-q4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Parabola opens up if a > 0, down if a <…?',
            options: [
              'x = -b/(2a), then find y.',
              'x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.',
              'Axis of symmetry: x = -b/(2a).',
              'Parabola opens up if a > 0, down if a < 0.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Parabola opens up if a > 0, down if a < 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'x = -b/(2a), then find y.',
              'x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.',
              'Parabola opens up if a > 0, down if a < 0.',
              'Axis of symmetry: x = -b/(2a).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Axis of symmetry: x = -b/(2a). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-q4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Axis of symmetry: x = -b/(2a).

**SAT Tip:** x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.
      `
    },
    {
      id: 'sat-q4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Axis of symmetry: x = -b/(2a).',
              'x = -b/(2a), then find y.',
              'x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.',
              'Parabola opens up if a > 0, down if a < 0.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Vertex',
            options: ['x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.', 'x = -b/(2a), then find y.', 'Parabola opens up if a > 0, down if a < 0.', 'Axis of symmetry: x = -b/(2a).']
          },
          {
            label: 'Key Insight',
            options: ['Axis of symmetry: x = -b/(2a).', 'x = -b/(2a), then find y.', 'x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.', 'Parabola opens up if a > 0, down if a < 0.']
          },
          {
            label: 'SAT Tip',
            options: ['Axis of symmetry: x = -b/(2a).', 'x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.', 'Parabola opens up if a > 0, down if a < 0.', 'x = -b/(2a), then find y.']
          }
        ],
        correctAnswers: ['x = -b/(2a), then find y.', 'Axis of symmetry: x = -b/(2a).', 'x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.'],
        hint1: 'Think about what each concept specifically describes in Graphing Parabolas.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Graphing Parabolas describes a specific idea. Vertex: x = -b/(2a), then find y. Key Insight: Axis of symmetry: x = -b/(2a). SAT Tip: x-intercepts (roots): set y = 0 and solve; y-intercept: set x = 0.'
      }
    }
  ]
}
