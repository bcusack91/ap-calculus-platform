export const calcABChainRulePart7Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'chain7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Implicit differentiation" refer to in calculus?',
            options: [
              'Collect dy/dx terms on one side, factor, and solve',
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'differentiate both sides with respect to x',
              'Treat y as a function of x; apply chain rule when differentiating y-terms'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Implicit differentiation: differentiate both sides with respect to x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Collect dy/dx terms on one side,…?',
            options: [
              'Collect dy/dx terms on one side, factor, and solve',
              'differentiate both sides with respect to x',
              'Treat y as a function of x; apply chain rule when differentiating y-terms',
              'Use for equations like x² + y² = 25 where y isn\'t isolated'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Collect dy/dx terms on one side, factor, and solve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'chain7-detail',
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
      id: 'chain7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Use for equations like x² + y² = 25…?',
            options: [
              'Treat y as a function of x; apply chain rule when differentiating y-terms',
              'differentiate both sides with respect to x',
              'Collect dy/dx terms on one side, factor, and solve',
              'Use for equations like x² + y² = 25 where y isn\'t isolated'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use for equations like x² + y² = 25 where y isn\'t isolated. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Implicit differentiation',
            options: ['differentiate both sides with respect to x', 'Use for equations like x² + y² = 25 where y isn\'t isolated', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve']
          },
          {
            label: 'Treat y as a function of x; apply chain…',
            options: ['differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Use for equations like x² + y² = 25 where y isn\'t isolated', 'Collect dy/dx terms on one side, factor, and solve']
          },
          {
            label: 'Collect dy/dx terms on one side,…',
            options: ['Collect dy/dx terms on one side, factor, and solve', 'differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Use for equations like x² + y² = 25 where y isn\'t isolated']
          }
        ],
        correctAnswers: ['differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Implicit differentiation: differentiate both sides with respect to x. Treat y as a function of x; apply chain rule when differentiating y-terms. Collect dy/dx terms on one side, factor, and solve.'
      }
    }
  ]
}
