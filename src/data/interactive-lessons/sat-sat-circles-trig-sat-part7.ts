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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains SAT trig is straightforward — mostly…?',
            options: [
              'Know radian/degree conversion.',
              'SAT trig is straightforward — mostly right triangle and basic identities.',
              'Understand sin/cos graphs: period, amplitude.',
              'Most SAT trig = setting up the right ratio from a diagram.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT trig is straightforward — mostly right triangle and basic identities. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'SAT trig is straightforward — mostly right triangle and basic identities.',
              'Most SAT trig = setting up the right ratio from a diagram.',
              'Understand sin/cos graphs: period, amplitude.',
              'Know radian/degree conversion.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Understand sin/cos graphs: period, amplitude. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Most SAT trig = setting up the right ratio from a diagram.',
              'Know radian/degree conversion.',
              'SAT trig is straightforward — mostly right triangle and basic identities.',
              'Understand sin/cos graphs: period, amplitude.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Most SAT trig = setting up the right ratio from a diagram. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Understand sin/cos graphs: period, amplitude.', 'Know radian/degree conversion.', 'SAT trig is straightforward — mostly right triangle and basic identities.', 'Most SAT trig = setting up the right ratio from a diagram.']
          },
          {
            label: 'SAT Tip',
            options: ['Most SAT trig = setting up the right ratio from a diagram.', 'SAT trig is straightforward — mostly right triangle and basic identities.', 'Know radian/degree conversion.', 'Understand sin/cos graphs: period, amplitude.']
          }
        ],
        correctAnswers: ['Understand sin/cos graphs: period, amplitude.', 'Most SAT trig = setting up the right ratio from a diagram.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Understand sin/cos graphs: period, amplitude. SAT Tip: Most SAT trig = setting up the right ratio from a diagram.'
      }
    }
  ]
}
