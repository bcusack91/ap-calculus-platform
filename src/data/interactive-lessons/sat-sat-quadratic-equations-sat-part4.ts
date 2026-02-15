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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes parabola opens up if a > 0, down if a < 0?',
            options: [
              'Parabola opens up if a > 0, down if a < 0 is a fundamental concept in SAT Math',
              'Vertex: x = -b/(2a), then find y',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Parabola opens up if a > 0, down if a < 0'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for graphing parabolas?',
            options: [
              'Axis of symmetry: x = -b/(2a)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Axis of symmetry: x = -b/(2a)'
          }
        ]
      }
    },
    {
      id: 'sat-q4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Graphing Parabolas:',
            options: ['Parabola opens up if a > 0, down if a < 0', 'Vertex: x = -b/(2a), then find y', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Axis of symmetry: x = -b/(2a)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Parabola opens up if a > 0, down if a < 0', 'Axis of symmetry: x = -b/(2a)'],
        hint1: 'Think about graphing parabolas',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Parabola opens up if a > 0, down if a < 0. Axis of symmetry: x = -b/(2a).'
      }
    }
  ]
}
