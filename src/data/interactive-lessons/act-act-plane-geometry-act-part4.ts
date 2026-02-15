export const actPlaneGeomPart4Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p4-intro',
      type: 'text' as const,
      content: `
# Circles

**Part 4 of 7 — Circles**

Area = πr²; Circumference = 2πr = πd.

Arc length = (central angle/360°) × circumference.
      `
    },
    {
      id: 'act-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes area = πr²; circumference = 2πr = πd?',
            options: [
              'Area = πr²; Circumference = 2πr = πd is a key concept for ACT Math',
              'Arc length = (central angle/360°) × circumference',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Area = πr²; Circumference = 2πr = πd'
          }
        ]
      }
    },
    {
      id: 'act-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sector area = (central angle/360°) × πr².

**ACT Tip:** Inscribed angle = half the central angle (same arc).
      `
    },
    {
      id: 'act-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for circles?',
            options: [
              'Sector area = (central angle/360°) × πr²',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Sector area = (central angle/360°) × πr²'
          }
        ]
      }
    },
    {
      id: 'act-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Circles:',
            options: ['Area = πr²; Circumference = 2πr = πd', 'Arc length = (central angle/360°) × circumference', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Sector area = (central angle/360°) × πr²', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Area = πr²; Circumference = 2πr = πd', 'Sector area = (central angle/360°) × πr²'],
        hint1: 'Think about circles',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Area = πr²; Circumference = 2πr = πd. Sector area = (central angle/360°) × πr².'
      }
    }
  ]
}
