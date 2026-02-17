export const mcatSociologyPart7Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death).

Urbanization: movement to cities; impacts health, social networks, and resource distribution.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.

**MCAT Tip:** Fertility rate, mortality rate, and migration determine population growth.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Demographic transition',
            options: ['Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.', 'movement to cities; impacts health, social networks, and resource distribution.', 'pre-industrial (high birth/death), transitional, industrial (low birth/death).', 'Fertility rate, mortality rate, and migration determine population growth.']
          },
          {
            label: 'Urbanization',
            options: ['Fertility rate, mortality rate, and migration determine population growth.', 'pre-industrial (high birth/death), transitional, industrial (low birth/death).', 'Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.', 'movement to cities; impacts health, social networks, and resource distribution.']
          },
          {
            label: 'Key Insight',
            options: ['Fertility rate, mortality rate, and migration determine population growth.', 'movement to cities; impacts health, social networks, and resource distribution.', 'Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.', 'pre-industrial (high birth/death), transitional, industrial (low birth/death).']
          }
        ],
        correctAnswers: ['pre-industrial (high birth/death), transitional, industrial (low birth/death).', 'movement to cities; impacts health, social networks, and resource distribution.', 'Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Demographic transition: pre-industrial (high birth/death), transitional, industrial (low birth/death). Urbanization: movement to cities; impacts health, social networks, and resource distribution. Key Insight: Globalization: increased interconnection affects disease spread, economic opportunity, and cultural change.'
      }
    }
  ]
}
