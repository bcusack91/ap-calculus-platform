export const actReadSciTipsPart2Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-r2-intro',
      type: 'text' as const,
      content: `
# ACT Science Overview

**Part 2 of 7 — ACT Science Overview**

40 questions in 35 minutes across 7 passages.

Three types: data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%).
      `
    },
    {
      id: 'act-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 40 questions in 35 minutes across 7 passages?',
            options: [
              '40 questions in 35 minutes across 7 passages is a key concept for ACT English/Reading',
              'Three types: data representation (~30%), research summaries (~45%), conflicting viewpoints (~25%)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '40 questions in 35 minutes across 7 passages'
          }
        ]
      }
    },
    {
      id: 'act-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Focus on trends and relationships, not memorizing data.

**ACT Tip:** You do NOT need advanced science knowledge — it is a reading comprehension test.
      `
    },
    {
      id: 'act-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for act science overview?',
            options: [
              'Focus on trends and relationships, not memorizing data',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Focus on trends and relationships, not memorizing data'
          }
        ]
      }
    },
    {
      id: 'act-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for ACT Science Overview:',
            options: ['40 questions in 35 minutes across 7 passages', 'Three types: data representation (~30%), research ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Focus on trends and relationships, not memorizing ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['40 questions in 35 minutes across 7 passages', 'Focus on trends and relationships, not memorizing '],
        hint1: 'Think about act science overview',
        hint2: 'Consider the best ACT strategy',
        explanation: '40 questions in 35 minutes across 7 passages. Focus on trends and relationships, not memorizing data.'
      }
    }
  ]
}
