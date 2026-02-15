export const actTestDayPart1Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t1-intro',
      type: 'text' as const,
      content: `
# 📋 Test Day Strategy

**Part 1 of 7 — Test Format & Registration**

4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).

Total: ~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).
      `
    },
    {
      id: 'act-t1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 4 sections?',
            options: [
              '4 sections is a key concept for ACT Math',
              'Total: ~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min)'
          }
        ]
      }
    },
    {
      id: 'act-t1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** 10-minute break between Math and Reading; 5-minute break between Reading and Science.

**ACT Tip:** Register at act.org — check deadlines for your preferred test date.
      `
    },
    {
      id: 'act-t1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for test format & registration?',
            options: [
              '10-minute break between Math and Reading; 5-minute break between Reading and Science',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: '10-minute break between Math and Reading; 5-minute break between Reading and Science'
          }
        ]
      }
    },
    {
      id: 'act-t1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Test Format & Registration:',
            options: ['4 sections: English (45 min), Math (60 min), Readi', 'Total: ~2 hours 55 minutes (without Writing) or ~3', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['10-minute break between Math and Reading; 5-minute', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['4 sections: English (45 min), Math (60 min), Readi', '10-minute break between Math and Reading; 5-minute'],
        hint1: 'Think about test format & registration',
        hint2: 'Consider the best ACT strategy',
        explanation: '4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min). 10-minute break between Math and Reading; 5-minute break between Reading and Science.'
      }
    }
  ]
}
