export const actReadingStratPart1Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r1-intro',
      type: 'text' as const,
      content: `
# 📋 Reading Strategy

**Part 1 of 7 — Time Management**

35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage.

Allocate ~3-4 minutes reading, ~4-5 minutes answering questions.
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
            question: 'Which statement best describes 35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage?',
            options: [
              '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage is a key concept for ACT English/Reading',
              'Allocate ~3-4 minutes reading, ~4-5 minutes answering questions',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage'
          }
        ]
      }
    },
    {
      id: 'act-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Don't spend too long on one question — mark and move on.

**ACT Tip:** Wear a watch to track time (digital watches without alarms are allowed).
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
            question: 'What is a key strategy for time management?',
            options: [
              'Don\'t spend too long on one question — mark and move on',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Don\'t spend too long on one question — mark and move on'
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
            label: 'Key concept for Time Management:',
            options: ['35 minutes for 4 passages × 10 questions = ~8.75 m', 'Allocate ~3-4 minutes reading, ~4-5 minutes answer', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Don\'t spend too long on one question — mark and mo', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['35 minutes for 4 passages × 10 questions = ~8.75 m', 'Don\'t spend too long on one question — mark and mo'],
        hint1: 'Think about time management',
        hint2: 'Consider the best ACT strategy',
        explanation: '35 minutes for 4 passages × 10 questions = ~8.75 minutes per passage. Don\'t spend too long on one question — mark and move on.'
      }
    }
  ]
}
