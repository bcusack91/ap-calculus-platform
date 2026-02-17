export const satQuadraticsPart3Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q3-intro',
      type: 'text' as const,
      content: `
# The Quadratic Formula

**Part 3 of 7 — The Quadratic Formula**

x = (-b ± √(b² - 4ac)) / (2a).

Discriminant b² - 4ac determines the number of real solutions.
      `
    },
    {
      id: 'sat-q3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains x = (-b ± √(b² - 4ac)) / (2a).?',
            options: [
              'x = (-b ± √(b² - 4ac)) / (2a).',
              'Discriminant b² - 4ac determines the number of real solutions.',
              'b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.',
              'SAT Tip: the discriminant alone can answer "how many solutions?" questions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — x = (-b ± √(b² - 4ac)) / (2a). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.',
              'x = (-b ± √(b² - 4ac)) / (2a).',
              'Discriminant b² - 4ac determines the number of real solutions.',
              'SAT Tip: the discriminant alone can answer "how many solutions?" questions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-q3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.

**SAT Tip:** SAT Tip: the discriminant alone can answer "how many solutions?" questions.
      `
    },
    {
      id: 'sat-q3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.',
              'Discriminant b² - 4ac determines the number of real solutions.',
              'x = (-b ± √(b² - 4ac)) / (2a).',
              'SAT Tip: the discriminant alone can answer "how many solutions?" questions.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: SAT Tip: the discriminant alone can answer "how many solutions?" questions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Discriminant b² - 4ac determines the number of real solutions.', 'b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.', 'SAT Tip: the discriminant alone can answer "how many solutions?" questions.', 'x = (-b ± √(b² - 4ac)) / (2a).']
          },
          {
            label: 'SAT Tip',
            options: ['b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.', 'x = (-b ± √(b² - 4ac)) / (2a).', 'SAT Tip: the discriminant alone can answer "how many solutions?" questions.', 'Discriminant b² - 4ac determines the number of real solutions.']
          }
        ],
        correctAnswers: ['b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions.', 'SAT Tip: the discriminant alone can answer "how many solutions?" questions.'],
        hint1: 'Think about what each concept specifically describes in The Quadratic Formula.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in The Quadratic Formula describes a specific idea. Key Insight: b² - 4ac > 0: two real solutions; = 0: one (repeated); < 0: no real solutions. SAT Tip: SAT Tip: the discriminant alone can answer "how many solutions?" questions.'
      }
    }
  ]
}
