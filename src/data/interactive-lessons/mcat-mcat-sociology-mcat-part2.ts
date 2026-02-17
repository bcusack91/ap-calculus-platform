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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Culture',
            options: ['process of learning norms and values; agents: family, peers, media, school, religion.', 'Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.', 'Material culture: physical objects (technology, buildings); Non-material: ideas, beliefs, values.', 'shared beliefs, values, norms, and material objects of a group.']
          },
          {
            label: 'Socialization',
            options: ['shared beliefs, values, norms, and material objects of a group.', 'Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.', 'process of learning norms and values; agents: family, peers, media, school, religion.', 'Material culture: physical objects (technology, buildings); Non-material: ideas, beliefs, values.']
          },
          {
            label: 'Key Insight',
            options: ['process of learning norms and values; agents: family, peers, media, school, religion.', 'shared beliefs, values, norms, and material objects of a group.', 'Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.', 'Material culture: physical objects (technology, buildings); Non-material: ideas, beliefs, values.']
          }
        ],
        correctAnswers: ['shared beliefs, values, norms, and material objects of a group.', 'process of learning norms and values; agents: family, peers, media, school, religion.', 'Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.'],
        hint1: 'Think about what each concept specifically describes in Culture & Socialization.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Culture & Socialization describes a specific idea. Culture: shared beliefs, values, norms, and material objects of a group. Socialization: process of learning norms and values; agents: family, peers, media, school, religion. Key Insight: Ethnocentrism: judging other cultures by your own standards; Cultural relativism: understanding in context.'
      }
    }
  ]
}
