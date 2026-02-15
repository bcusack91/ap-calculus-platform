export const satCirclesTrigPart7Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

SAT trig is straightforward — mostly right triangle and basic identities.

Know radian/degree conversion.
      `
    },
    {
      id: 'sat-c7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes sat trig is straightforward — mostly right triangle and basic identities?',
            options: [
              'SAT trig is straightforward — mostly right triangle and basic identities is a fundamental concept in SAT Math',
              'Know radian/degree conversion',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'SAT trig is straightforward — mostly right triangle and basic identities'
          }
        ]
      }
    },
    {
      id: 'sat-c7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Understand sin/cos graphs: period, amplitude.

**SAT Tip:** Most SAT trig = setting up the right ratio from a diagram.
      `
    },
    {
      id: 'sat-c7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Understand sin/cos graphs: period, amplitude',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Understand sin/cos graphs: period, amplitude'
          }
        ]
      }
    },
    {
      id: 'sat-c7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['SAT trig is straightforward — mostly right triangl', 'Know radian/degree conversion', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Understand sin/cos graphs: period, amplitude', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['SAT trig is straightforward — mostly right triangl', 'Understand sin/cos graphs: period, amplitude'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'SAT trig is straightforward — mostly right triangle and basic identities. Understand sin/cos graphs: period, amplitude.'
      }
    }
  ]
}
