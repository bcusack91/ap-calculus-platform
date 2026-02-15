export const actTestDayPart3Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t3-intro',
      type: 'text' as const,
      content: `
# Section-by-Section Timing

**Part 3 of 7 — Section-by-Section Timing**

English: 36 sec/question — move fast, trust your instincts on grammar.

Math: 60 sec/question — do easy ones first, skip and return for hard ones.
      `
    },
    {
      id: 'act-t3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes english?',
            options: [
              'English is a key concept for ACT Math',
              'Math: 60 sec/question — do easy ones first, skip and return for hard ones',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'English: 36 sec/question — move fast, trust your instincts on grammar'
          }
        ]
      }
    },
    {
      id: 'act-t3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Reading: 52 sec/question — read efficiently, don't over-analyze.

**ACT Tip:** Science: 52 sec/question — focus on data, not background info.
      `
    },
    {
      id: 'act-t3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for section-by-section timing?',
            options: [
              'Reading: 52 sec/question — read efficiently, don\'t over-analyze',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Reading: 52 sec/question — read efficiently, don\'t over-analyze'
          }
        ]
      }
    },
    {
      id: 'act-t3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Section-by-Section Timing:',
            options: ['English: 36 sec/question — move fast, trust your i', 'Math: 60 sec/question — do easy ones first, skip a', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Reading: 52 sec/question — read efficiently, don\'t', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['English: 36 sec/question — move fast, trust your i', 'Reading: 52 sec/question — read efficiently, don\'t'],
        hint1: 'Think about section-by-section timing',
        hint2: 'Consider the best ACT strategy',
        explanation: 'English: 36 sec/question — move fast, trust your instincts on grammar. Reading: 52 sec/question — read efficiently, don\'t over-analyze.'
      }
    }
  ]
}
