export const actScienceReasonPart7Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes).

Read the intro and scan figures BEFORE reading the questions.
      `
    },
    {
      id: 'act-s7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes)?',
            options: [
              'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes) is a key concept for ACT Science',
              'Read the intro and scan figures BEFORE reading the questions',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes)'
          }
        ]
      }
    },
    {
      id: 'act-s7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Don't get bogged down in technical details — focus on trends and relationships.

**ACT Tip:** You don't need outside science knowledge — everything is in the passage.
      `
    },
    {
      id: 'act-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Don\'t get bogged down in technical details — focus on trends and relationships',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Don\'t get bogged down in technical details — focus on trends and relationships'
          }
        ]
      }
    },
    {
      id: 'act-s7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Spend 5-6 minutes per passage (7 passages total, 4', 'Read the intro and scan figures BEFORE reading the', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Don\'t get bogged down in technical details — focus', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Spend 5-6 minutes per passage (7 passages total, 4', 'Don\'t get bogged down in technical details — focus'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Spend 5-6 minutes per passage (7 passages total, 40 questions, 35 minutes). Don\'t get bogged down in technical details — focus on trends and relationships.'
      }
    }
  ]
}
