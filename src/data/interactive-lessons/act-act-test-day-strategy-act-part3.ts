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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "English" refer to in ACT prep?',
            options: [
              '60 sec/question — do easy ones first, skip and return for hard ones.',
              'Science: 52 sec/question — focus on data, not background info.',
              '36 sec/question — move fast, trust your instincts on grammar.',
              'Reading: 52 sec/question — read efficiently, don\'t over-analyze.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — English: 36 sec/question — move fast, trust your instincts on grammar. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Reading: 52 sec/question — read efficiently, don\'t over-analyze.',
              '60 sec/question — do easy ones first, skip and return for hard ones.',
              '36 sec/question — move fast, trust your instincts on grammar.',
              'Science: 52 sec/question — focus on data, not background info.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Reading: 52 sec/question — read efficiently, don\'t over-analyze. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Science: 52 sec/question — focus on data, not background info.',
              '60 sec/question — do easy ones first, skip and return for hard ones.',
              '36 sec/question — move fast, trust your instincts on grammar.',
              'Reading: 52 sec/question — read efficiently, don\'t over-analyze.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Science: 52 sec/question — focus on data, not background info. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'English',
            options: ['36 sec/question — move fast, trust your instincts on grammar.', 'Reading: 52 sec/question — read efficiently, don\'t over-analyze.', '60 sec/question — do easy ones first, skip and return for hard ones.', 'Science: 52 sec/question — focus on data, not background info.']
          },
          {
            label: 'Math',
            options: ['Science: 52 sec/question — focus on data, not background info.', '60 sec/question — do easy ones first, skip and return for hard ones.', 'Reading: 52 sec/question — read efficiently, don\'t over-analyze.', '36 sec/question — move fast, trust your instincts on grammar.']
          },
          {
            label: 'Key Insight',
            options: ['36 sec/question — move fast, trust your instincts on grammar.', '60 sec/question — do easy ones first, skip and return for hard ones.', 'Science: 52 sec/question — focus on data, not background info.', 'Reading: 52 sec/question — read efficiently, don\'t over-analyze.']
          }
        ],
        correctAnswers: ['36 sec/question — move fast, trust your instincts on grammar.', '60 sec/question — do easy ones first, skip and return for hard ones.', 'Reading: 52 sec/question — read efficiently, don\'t over-analyze.'],
        hint1: 'Think about what each concept specifically describes in Section-by-Section Timing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Section-by-Section Timing describes a specific idea. English: 36 sec/question — move fast, trust your instincts on grammar. Math: 60 sec/question — do easy ones first, skip and return for hard ones. Key Insight: Reading: 52 sec/question — read efficiently, don\'t over-analyze.'
      }
    }
  ]
}
