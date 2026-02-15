export const mcatSociologyPart6Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Demographics & Population

**Part 6 of 7 — Demographics & Population**

Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death).

Urbanization: movement to cities; impacts health, social networks, and resource distribution.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in demographics & population?',
            options: [
              'Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death)'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.

**MCAT Tip:** Fertility rate, mortality rate, and migration determine population growth.
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to demographics & population?',
            options: [
              'Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Demographics & Population:',
            options: ['Demographic transition: pre-industrial (high birth/death), t', 'Urbanization: movement to cities; impacts health, social net', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Globalization: increased interconnection affects disease spr', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Demographic transition: pre-industrial (high birth/death), t', 'Globalization: increased interconnection affects disease spr'],
        hint1: 'Think about demographics & population',
        hint2: 'Consider the MCAT application',
        explanation: 'Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death). Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.'
      }
    }
  ]
}
