export const actTrigPart3Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t3-intro',
      type: 'text' as const,
      content: `
# Unit Circle

**Part 3 of 7 — Unit Circle**

Unit circle: radius 1, centered at origin.

(cos θ, sin θ) are coordinates on the unit circle.
      `
    },
    {
      id: 'act-t3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes unit circle?',
            options: [
              'Unit circle is a key concept for ACT Math',
              '(cos θ, sin θ) are coordinates on the unit circle',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Unit circle: radius 1, centered at origin'
          }
        ]
      }
    },
    {
      id: 'act-t3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Key values: 0°, 30°, 45°, 60°, 90° and multiples.

**ACT Tip:** Radian conversion: degrees × π/180 = radians.
      `
    },
    {
      id: 'act-t3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for unit circle?',
            options: [
              'Key values: 0°, 30°, 45°, 60°, 90° and multiples',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Key values: 0°, 30°, 45°, 60°, 90° and multiples'
          }
        ]
      }
    },
    {
      id: 'act-t3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Unit Circle:',
            options: ['Unit circle: radius 1, centered at origin', '(cos θ, sin θ) are coordinates on the unit circle', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Key values: 0°, 30°, 45°, 60°, 90° and multiples', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Unit circle: radius 1, centered at origin', 'Key values: 0°, 30°, 45°, 60°, 90° and multiples'],
        hint1: 'Think about unit circle',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Unit circle: radius 1, centered at origin. Key values: 0°, 30°, 45°, 60°, 90° and multiples.'
      }
    }
  ]
}
