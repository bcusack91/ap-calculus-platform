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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes 60 questions in 60 minutes = 1 minute…?',
            options: [
              'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.',
              'questions 1-20 easy, 21-40 medium, 41-60 hard.',
              '60 questions in 60 minutes = 1 minute per question.',
              'Calculator allowed for ALL math questions (unlike SAT).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — 60 questions in 60 minutes = 1 minute per question. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Calculator allowed for ALL math questions (unlike SAT).',
              'questions 1-20 easy, 21-40 medium, 41-60 hard.',
              'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.',
              '60 questions in 60 minutes = 1 minute per question.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Calculator allowed for ALL math questions (unlike SAT).',
              'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.',
              '60 questions in 60 minutes = 1 minute per question.',
              'questions 1-20 easy, 21-40 medium, 41-60 hard.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Calculator allowed for ALL math questions (unlike SAT). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-m1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Difficulty increases',
            options: ['questions 1-20 easy, 21-40 medium, 41-60 hard.', '60 questions in 60 minutes = 1 minute per question.', 'Calculator allowed for ALL math questions (unlike SAT).', 'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.']
          },
          {
            label: 'Key Insight',
            options: ['Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.', 'Calculator allowed for ALL math questions (unlike SAT).', 'questions 1-20 easy, 21-40 medium, 41-60 hard.', '60 questions in 60 minutes = 1 minute per question.']
          },
          {
            label: 'ACT Tip',
            options: ['60 questions in 60 minutes = 1 minute per question.', 'Calculator allowed for ALL math questions (unlike SAT).', 'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.', 'questions 1-20 easy, 21-40 medium, 41-60 hard.']
          }
        ],
        correctAnswers: ['questions 1-20 easy, 21-40 medium, 41-60 hard.', 'Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry.', 'Calculator allowed for ALL math questions (unlike SAT).'],
        hint1: 'Think about what each concept specifically describes in Math Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Math Strategy describes a specific idea. Difficulty increases: questions 1-20 easy, 21-40 medium, 41-60 hard. Key Insight: Content: pre-algebra, algebra, geometry, intermediate algebra, coordinate geometry, trigonometry. ACT Tip: Calculator allowed for ALL math questions (unlike SAT).'
      }
    }
  ]
}
