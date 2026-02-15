export const satCirclesTrigPart6Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

SAT trig is straightforward — mostly right triangle and basic identities.

Know radian/degree conversion.
      `
    },
    {
      id: 'sat-c6-quiz1',
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
      id: 'sat-c6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Understand sin/cos graphs: period, amplitude.

**SAT Tip:** Most SAT trig = setting up the right ratio from a diagram.
      `
    },
    {
      id: 'sat-c6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'sat-c6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['SAT trig is straightforward — mostly right triangl', 'Know radian/degree conversion', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Understand sin/cos graphs: period, amplitude', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['SAT trig is straightforward — mostly right triangl', 'Understand sin/cos graphs: period, amplitude'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'SAT trig is straightforward — mostly right triangle and basic identities. Understand sin/cos graphs: period, amplitude.'
      }
    }
  ]
}
