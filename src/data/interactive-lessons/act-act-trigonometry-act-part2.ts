export const actTrigPart2Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t2-intro',
      type: 'text' as const,
      content: `
# Trig Ratios & Applications

**Part 2 of 7 — Trig Ratios & Applications**

Elevation/depression angles: draw a right triangle from the scenario.

Law of Sines: a/sin A = b/sin B = c/sin C.
      `
    },
    {
      id: 'act-t2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes elevation/depression angles?',
            options: [
              'Elevation/depression angles is a key concept for ACT Math',
              'Law of Sines: a/sin A = b/sin B = c/sin C',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Elevation/depression angles: draw a right triangle from the scenario'
          }
        ]
      }
    },
    {
      id: 'act-t2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Law of Cosines: c² = a² + b² - 2ab cos C.

**ACT Tip:** Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.
      `
    },
    {
      id: 'act-t2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for trig ratios & applications?',
            options: [
              'Law of Cosines: c² = a² + b² - 2ab cos C',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Law of Cosines: c² = a² + b² - 2ab cos C'
          }
        ]
      }
    },
    {
      id: 'act-t2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Trig Ratios & Applications:',
            options: ['Elevation/depression angles: draw a right triangle', 'Law of Sines: a/sin A = b/sin B = c/sin C', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Law of Cosines: c² = a² + b² - 2ab cos C', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Elevation/depression angles: draw a right triangle', 'Law of Cosines: c² = a² + b² - 2ab cos C'],
        hint1: 'Think about trig ratios & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Elevation/depression angles: draw a right triangle from the scenario. Law of Cosines: c² = a² + b² - 2ab cos C.'
      }
    }
  ]
}
