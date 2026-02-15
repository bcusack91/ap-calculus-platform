export const satRWStrategyPart1Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r1-intro',
      type: 'text' as const,
      content: `
# 📝 Reading Writing Strategy

**Part 1 of 7 — Reading Section Overview**

65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set).

Passage types: literature, history/social studies (2), science (2).
      `
    },
    {
      id: 'sat-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set)?',
            options: [
              '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set) is a fundamental concept in SAT Reading & Writing',
              'Passage types: literature, history/social studies (2), science (2)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set)'
          }
        ]
      }
    },
    {
      id: 'sat-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Skim-then-answer or read-carefully approaches — find what works for you.

**SAT Tip:** Questions roughly follow passage order — use this to your advantage.
      `
    },
    {
      id: 'sat-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for reading section overview?',
            options: [
              'Skim-then-answer or read-carefully approaches — find what works for you',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Skim-then-answer or read-carefully approaches — find what works for you'
          }
        ]
      }
    },
    {
      id: 'sat-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Reading Section Overview:',
            options: ['65 minutes, 52 questions across 5 passages (or 4 p', 'Passage types: literature, history/social studies ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Skim-then-answer or read-carefully approaches — fi', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['65 minutes, 52 questions across 5 passages (or 4 p', 'Skim-then-answer or read-carefully approaches — fi'],
        hint1: 'Think about reading section overview',
        hint2: 'Consider the best SAT strategy',
        explanation: '65 minutes, 52 questions across 5 passages (or 4 passages + 1 paired set). Skim-then-answer or read-carefully approaches — find what works for you.'
      }
    }
  ]
}
