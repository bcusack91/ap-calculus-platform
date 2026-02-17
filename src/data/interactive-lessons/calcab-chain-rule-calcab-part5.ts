export const calcABChainRulePart5Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain5-intro',
      type: 'text' as const,
      content: `
# Implicit Differentiation

**Part 5 of 7 — Implicit Differentiation**

### 1. Implicit differentiation

differentiate both sides with respect to x

### 2. Treat y as a function of x; apply chain rule when differentiating y-terms

Treat y as a function of x; apply chain rule when differentiating y-terms

### 3. Collect dy/dx terms on one side, factor, and solve

Collect dy/dx terms on one side, factor, and solve

### 4. Use for equations like x² + y² = 25 where y isn't isolated

Use for equations like x² + y² = 25 where y isn't isolated
      `
    },
    {
      id: 'chain5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Implicit differentiation" refer to in calculus?',
            options: [
              'differentiate both sides with respect to x',
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'Treat y as a function of x; apply chain rule when differentiating y-terms',
              'Collect dy/dx terms on one side, factor, and solve'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Implicit differentiation: differentiate both sides with respect to x. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Collect dy/dx terms on one side,…?',
            options: [
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'differentiate both sides with respect to x',
              'Treat y as a function of x; apply chain rule when differentiating y-terms',
              'Collect dy/dx terms on one side, factor, and solve'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Collect dy/dx terms on one side, factor, and solve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'chain5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Implicit differentiation**: differentiate both sides with respect to x
- **Treat y as a function of x; apply chain rule when differentiating y-terms**
- **Collect dy/dx terms on one side, factor, and solve**
- **Use for equations like x² + y² = 25 where y isn't isolated**
      `
    },
    {
      id: 'chain5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Use for equations like x² + y² = 25… is correct?',
            options: [
              'Treat y as a function of x; apply chain rule when differentiating y-terms',
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'Collect dy/dx terms on one side, factor, and solve',
              'differentiate both sides with respect to x'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use for equations like x² + y² = 25 where y isn\'t isolated. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Implicit differentiation',
            options: ['Collect dy/dx terms on one side, factor, and solve', 'Use for equations like x² + y² = 25 where y isn\'t isolated', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'differentiate both sides with respect to x']
          },
          {
            label: 'Treat y as a function of x; apply chain…',
            options: ['differentiate both sides with respect to x', 'Use for equations like x² + y² = 25 where y isn\'t isolated', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve']
          },
          {
            label: 'Collect dy/dx terms on one side,…',
            options: ['Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve', 'Use for equations like x² + y² = 25 where y isn\'t isolated', 'differentiate both sides with respect to x']
          }
        ],
        correctAnswers: ['differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve'],
        hint1: 'Think about what each concept specifically describes in Implicit Differentiation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Implicit Differentiation describes a specific idea. Implicit differentiation: differentiate both sides with respect to x. Treat y as a function of x; apply chain rule when differentiating y-terms. Collect dy/dx terms on one side, factor, and solve.'
      }
    }
  ]
}
