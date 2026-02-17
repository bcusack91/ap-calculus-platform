export const satCirclesTrigPart5Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c5-intro',
      type: 'text' as const,
      content: `
# Trig on the SAT

**Part 5 of 7 — Trig on the SAT**

SAT trig is straightforward — mostly right triangle and basic identities.

Know radian/degree conversion.
      `
    },
    {
      id: 'sat-c5-quiz1',
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
              'Understand sin/cos graphs: period, amplitude.',
              'SAT trig is straightforward — mostly right triangle and basic identities.',
              'Most SAT trig = setting up the right ratio from a diagram.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT trig is straightforward — mostly right triangle and basic identities. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Understand sin/cos graphs: period, amplitude.',
              'Most SAT trig = setting up the right ratio from a diagram.',
              'SAT trig is straightforward — mostly right triangle and basic identities.',
              'Know radian/degree conversion.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Understand sin/cos graphs: period, amplitude. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Understand sin/cos graphs: period, amplitude.

**SAT Tip:** Most SAT trig = setting up the right ratio from a diagram.
      `
    },
    {
      id: 'sat-c5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Trig on the SAT, which correctly describes SAT Tip?',
            options: [
              'Understand sin/cos graphs: period, amplitude.',
              'Know radian/degree conversion.',
              'Most SAT trig = setting up the right ratio from a diagram.',
              'SAT trig is straightforward — mostly right triangle and basic identities.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Most SAT trig = setting up the right ratio from a diagram. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Know radian/degree conversion.', 'Understand sin/cos graphs: period, amplitude.', 'SAT trig is straightforward — mostly right triangle and basic identities.', 'Most SAT trig = setting up the right ratio from a diagram.']
          },
          {
            label: 'SAT Tip',
            options: ['SAT trig is straightforward — mostly right triangle and basic identities.', 'Know radian/degree conversion.', 'Understand sin/cos graphs: period, amplitude.', 'Most SAT trig = setting up the right ratio from a diagram.']
          }
        ],
        correctAnswers: ['Understand sin/cos graphs: period, amplitude.', 'Most SAT trig = setting up the right ratio from a diagram.'],
        hint1: 'Think about what each concept specifically describes in Trig on the SAT.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trig on the SAT describes a specific idea. Key Insight: Understand sin/cos graphs: period, amplitude. SAT Tip: Most SAT trig = setting up the right ratio from a diagram.'
      }
    }
  ]
}
