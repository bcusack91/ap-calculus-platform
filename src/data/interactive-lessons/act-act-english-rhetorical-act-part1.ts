export const actRhetoricalPart1Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Rhetorical

**Part 1 of 7 — Transitions & Organization**

Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore).

Choose transitions based on the logical relationship between sentences.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes transitions connect ideas?',
            options: [
              'Transitions connect ideas is a key concept for ACT English/Reading',
              'Choose transitions based on the logical relationship between sentences',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore)'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Paragraph transitions: the first sentence should connect to the previous paragraph.

**ACT Tip:** Sequence: first, then, finally, meanwhile, subsequently.
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for transitions & organization?',
            options: [
              'Paragraph transitions: the first sentence should connect to the previous paragraph',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Paragraph transitions: the first sentence should connect to the previous paragraph'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Transitions & Organization:',
            options: ['Transitions connect ideas: addition (furthermore),', 'Choose transitions based on the logical relationsh', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Paragraph transitions: the first sentence should c', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Transitions connect ideas: addition (furthermore),', 'Paragraph transitions: the first sentence should c'],
        hint1: 'Think about transitions & organization',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Transitions connect ideas: addition (furthermore), contrast (however), cause-effect (therefore). Paragraph transitions: the first sentence should connect to the previous paragraph.'
      }
    }
  ]
}
