export const satCirclesTrigPart1Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c1-intro',
      type: 'text' as const,
      content: `
# 📝 Circles Trig

**Part 1 of 7 — Circle Equations**

Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r.

General form: x² + y² + Dx + Ey + F = 0 — complete the square to convert.
      `
    },
    {
      id: 'sat-c1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes standard form?',
            options: [
              'Standard form is a fundamental concept in SAT Math',
              'General form: x² + y² + Dx + Ey + F = 0 — complete the square to convert',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r'
          }
        ]
      }
    },
    {
      id: 'sat-c1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** SAT may give general form and ask for center or radius.

**SAT Tip:** Two circles: compare centers and radii to determine relationship.
      `
    },
    {
      id: 'sat-c1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for circle equations?',
            options: [
              'SAT may give general form and ask for center or radius',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'SAT may give general form and ask for center or radius'
          }
        ]
      }
    },
    {
      id: 'sat-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Circle Equations:',
            options: ['Standard form: (x - h)² + (y - k)² = r², center (h', 'General form: x² + y² + Dx + Ey + F = 0 — complete', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['SAT may give general form and ask for center or ra', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Standard form: (x - h)² + (y - k)² = r², center (h', 'SAT may give general form and ask for center or ra'],
        hint1: 'Think about circle equations',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Standard form: (x - h)² + (y - k)² = r², center (h, k), radius r. SAT may give general form and ask for center or radius.'
      }
    }
  ]
}
