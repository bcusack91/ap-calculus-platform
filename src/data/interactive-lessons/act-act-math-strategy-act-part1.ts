export const actMathStrategyPart1Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m1-intro',
      type: 'text' as const,
      content: `
# 📋 Math Strategy

**Part 1 of 7 — ACT Math Overview**

60 questions in 60 minutes = 1 minute per question.

Difficulty increases: questions 1-20 easy, 21-40 medium, 41-60 hard.
      `
    },
    {
      id: 'act-m1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 60 questions in 60 minutes = 1 minute per question?',
            options: [
              '60 questions in 60 minutes = 1 minute per question is a key concept for ACT Math',
              'Difficulty increases: questions 1-20 easy, 21-40 medium, 41-60 hard',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '60 questions in 60 minutes = 1 minute per question'
          }
        ]
      }
    },
    {
      id: 'act-m1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.

**ACT Tip:** Calculator allowed for ALL math questions (unlike SAT).
      `
    },
    {
      id: 'act-m1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for act math overview?',
            options: [
              'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry'
          }
        ]
      }
    },
    {
      id: 'act-m1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for ACT Math Overview:',
            options: ['60 questions in 60 minutes = 1 minute per question', 'Difficulty increases: questions 1-20 easy, 21-40 m', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Content: pre-algebra, algebra, geometry, intermedi', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['60 questions in 60 minutes = 1 minute per question', 'Content: pre-algebra, algebra, geometry, intermedi'],
        hint1: 'Think about act math overview',
        hint2: 'Consider the best ACT strategy',
        explanation: '60 questions in 60 minutes = 1 minute per question. Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.'
      }
    }
  ]
}
