export const calcBCImproperPart5Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'impro5-intro',
      type: 'text' as const,
      content: `
# Applications of Improper Integrals

**Part 5 of 7 — Applications of Improper Integrals**

### 1. Probability

∫₋∞^∞ f(x)dx = 1 for probability density functions

### 2. Laplace transforms use improper integrals

Laplace transforms use improper integrals

### 3. Area under curves that extend to infinity

Area under curves that extend to infinity

### 4. Gabriel's Horn

finite volume but infinite surface area
      `
    },
    {
      id: 'impro5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Probability?',
            options: [
              'Laplace transforms use improper integrals',
              'finite volume but infinite surface area',
              'Area under curves that extend to infinity',
              '∫₋∞^∞ f(x)dx = 1 for probability density functions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Probability: ∫₋∞^∞ f(x)dx = 1 for probability density functions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Applications of Improper Integrals, which explains Area under curves that extend to…?',
            options: [
              'Area under curves that extend to infinity',
              '∫₋∞^∞ f(x)dx = 1 for probability density functions',
              'Laplace transforms use improper integrals',
              'finite volume but infinite surface area'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Area under curves that extend to infinity. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'impro5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Probability**: ∫₋∞^∞ f(x)dx = 1 for probability density functions
- **Laplace transforms use improper integrals**
- **Area under curves that extend to infinity**
- **Gabriel's Horn**: finite volume but infinite surface area
      `
    },
    {
      id: 'impro5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Gabriel\'s Horn?',
            options: [
              'finite volume but infinite surface area',
              'Laplace transforms use improper integrals',
              '∫₋∞^∞ f(x)dx = 1 for probability density functions',
              'Area under curves that extend to infinity'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Gabriel\'s Horn: finite volume but infinite surface area. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'impro5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Probability',
            options: ['∫₋∞^∞ f(x)dx = 1 for probability density functions', 'Area under curves that extend to infinity', 'finite volume but infinite surface area', 'Laplace transforms use improper integrals']
          },
          {
            label: 'Gabriel\'s Horn',
            options: ['Laplace transforms use improper integrals', 'Area under curves that extend to infinity', 'finite volume but infinite surface area', '∫₋∞^∞ f(x)dx = 1 for probability density functions']
          }
        ],
        correctAnswers: ['∫₋∞^∞ f(x)dx = 1 for probability density functions', 'finite volume but infinite surface area'],
        hint1: 'Think about what each concept specifically describes in Applications of Improper Integrals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applications of Improper Integrals describes a specific idea. Probability: ∫₋∞^∞ f(x)dx = 1 for probability density functions. Gabriel\'s Horn: finite volume but infinite surface area.'
      }
    }
  ]
}
