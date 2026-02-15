export const satCirclesTrigPart4Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c4-intro',
      type: 'text' as const,
      content: `
# Unit Circle Basics

**Part 4 of 7 — Unit Circle Basics**

Unit circle: radius = 1, x = cos θ, y = sin θ.

Key angles: 0°, 30°, 45°, 60°, 90° and their radian equivalents.
      `
    },
    {
      id: 'sat-c4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes unit circle?',
            options: [
              'Unit circle is a fundamental concept in SAT Math',
              'Key angles: 0°, 30°, 45°, 60°, 90° and their radian equivalents',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Unit circle: radius = 1, x = cos θ, y = sin θ'
          }
        ]
      }
    },
    {
      id: 'sat-c4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.

**SAT Tip:** sin(45°) = cos(45°) = √2/2, tan(45°) = 1.
      `
    },
    {
      id: 'sat-c4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for unit circle basics?',
            options: [
              'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3'
          }
        ]
      }
    },
    {
      id: 'sat-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Unit Circle Basics:',
            options: ['Unit circle: radius = 1, x = cos θ, y = sin θ', 'Key angles: 0°, 30°, 45°, 60°, 90° and their radia', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Unit circle: radius = 1, x = cos θ, y = sin θ', 'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3'],
        hint1: 'Think about unit circle basics',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Unit circle: radius = 1, x = cos θ, y = sin θ. sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.'
      }
    }
  ]
}
