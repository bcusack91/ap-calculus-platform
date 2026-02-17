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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Elevation/depression angles?',
            options: [
              'Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.',
              'a/sin A = b/sin B = c/sin C.',
              'draw a right triangle from the scenario.',
              'Law of Cosines: c² = a² + b² - 2ab cos C.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Elevation/depression angles: draw a right triangle from the scenario. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Law of Cosines: c² = a² + b² - 2ab cos C.',
              'draw a right triangle from the scenario.',
              'Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.',
              'a/sin A = b/sin B = c/sin C.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Law of Cosines: c² = a² + b² - 2ab cos C. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'draw a right triangle from the scenario.',
              'a/sin A = b/sin B = c/sin C.',
              'Law of Cosines: c² = a² + b² - 2ab cos C.',
              'Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Elevation/depression angles',
            options: ['Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.', 'Law of Cosines: c² = a² + b² - 2ab cos C.', 'draw a right triangle from the scenario.', 'a/sin A = b/sin B = c/sin C.']
          },
          {
            label: 'Law of Sines',
            options: ['Law of Cosines: c² = a² + b² - 2ab cos C.', 'a/sin A = b/sin B = c/sin C.', 'Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.', 'draw a right triangle from the scenario.']
          },
          {
            label: 'Key Insight',
            options: ['Use Law of Sines for AAS/ASA; Law of Cosines for SAS/SSS.', 'draw a right triangle from the scenario.', 'a/sin A = b/sin B = c/sin C.', 'Law of Cosines: c² = a² + b² - 2ab cos C.']
          }
        ],
        correctAnswers: ['draw a right triangle from the scenario.', 'a/sin A = b/sin B = c/sin C.', 'Law of Cosines: c² = a² + b² - 2ab cos C.'],
        hint1: 'Think about what each concept specifically describes in Trig Ratios & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trig Ratios & Applications describes a specific idea. Elevation/depression angles: draw a right triangle from the scenario. Law of Sines: a/sin A = b/sin B = c/sin C. Key Insight: Law of Cosines: c² = a² + b² - 2ab cos C.'
      }
    }
  ]
}
