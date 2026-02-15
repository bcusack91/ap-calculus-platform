export const actPassageTypesPart1Data = {
  topicSlug: 'act-reading-passage-types-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Reading Passage Types

**Part 1 of 7 — Prose Fiction / Literary Narrative**

Focus on characters, relationships, emotions, and themes.

Track character motivations and how they change.
      `
    },
    {
      id: 'act-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes focus on characters, relationships, emotions, and themes?',
            options: [
              'Focus on characters, relationships, emotions, and themes is a key concept for ACT English/Reading',
              'Track character motivations and how they change',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Focus on characters, relationships, emotions, and themes'
          }
        ]
      }
    },
    {
      id: 'act-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Pay attention to tone and mood.

**ACT Tip:** Questions ask about character traits, relationships, and the narrator's perspective.
      `
    },
    {
      id: 'act-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for prose fiction / literary narrative?',
            options: [
              'Pay attention to tone and mood',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Pay attention to tone and mood'
          }
        ]
      }
    },
    {
      id: 'act-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Prose Fiction / Literary Narrative:',
            options: ['Focus on characters, relationships, emotions, and ', 'Track character motivations and how they change', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Pay attention to tone and mood', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Focus on characters, relationships, emotions, and ', 'Pay attention to tone and mood'],
        hint1: 'Think about prose fiction / literary narrative',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Focus on characters, relationships, emotions, and themes. Pay attention to tone and mood.'
      }
    }
  ]
}
