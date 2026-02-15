export const mcatSociologyPart2Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Culture & Socialization

**Part 2 of 7 — Culture & Socialization**

Culture: shared beliefs, values, norms, and material objects of a group.

Socialization: process of learning norms and values; agents: family, peers, media, school, religion.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in culture & socialization?',
            options: [
              'Culture: shared beliefs, values, norms, and material objects of a group',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Culture: shared beliefs, values, norms, and material objects of a group'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.

**MCAT Tip:** Material culture: physical objects (technology, buildings); Non-material: ideas, beliefs, values.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to culture & socialization?',
            options: [
              'Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Culture & Socialization:',
            options: ['Culture: shared beliefs, values, norms, and material objects', 'Socialization: process of learning norms and values; agents:', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Ethnocentrism: judging other cultures by your own standards;', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Culture: shared beliefs, values, norms, and material objects', 'Ethnocentrism: judging other cultures by your own standards;'],
        hint1: 'Think about culture & socialization',
        hint2: 'Consider the MCAT application',
        explanation: 'Culture: shared beliefs, values, norms, and material objects of a group. Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.'
      }
    }
  ]
}
