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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "4 sections" refer to in ACT prep?',
            options: [
              '10-minute break between Math and Reading; 5-minute break between Reading and Science.',
              'Register at act.org — check deadlines for your preferred test date.',
              '~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).',
              'English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — 4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Register at act.org — check deadlines for your preferred test date.',
              '~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).',
              '10-minute break between Math and Reading; 5-minute break between Reading and Science.',
              'English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: 10-minute break between Math and Reading; 5-minute break between Reading and Science. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).',
              'Register at act.org — check deadlines for your preferred test date.',
              '~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).',
              '10-minute break between Math and Reading; 5-minute break between Reading and Science.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Register at act.org — check deadlines for your preferred test date. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '4 sections',
            options: ['~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).', 'English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).', '10-minute break between Math and Reading; 5-minute break between Reading and Science.', 'Register at act.org — check deadlines for your preferred test date.']
          },
          {
            label: 'Total',
            options: ['10-minute break between Math and Reading; 5-minute break between Reading and Science.', 'Register at act.org — check deadlines for your preferred test date.', '~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).', 'English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).']
          },
          {
            label: 'Key Insight',
            options: ['Register at act.org — check deadlines for your preferred test date.', '~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).', '10-minute break between Math and Reading; 5-minute break between Reading and Science.', 'English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).']
          }
        ],
        correctAnswers: ['English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min).', '~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing).', '10-minute break between Math and Reading; 5-minute break between Reading and Science.'],
        hint1: 'Think about what each concept specifically describes in Test Day Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Test Day Strategy describes a specific idea. 4 sections: English (45 min), Math (60 min), Reading (35 min), Science (35 min) + optional Writing (40 min). Total: ~2 hours 55 minutes (without Writing) or ~3 hours 35 minutes (with Writing). Key Insight: 10-minute break between Math and Reading; 5-minute break between Reading and Science.'
      }
    }
  ]
}
