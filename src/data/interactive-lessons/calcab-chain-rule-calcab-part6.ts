export const calcABChainRulePart6Data = {
  topicSlug: 'chain-rule-calcab',
  sections: [
    {
      id: 'chain6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'chain6-quiz1',
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
              'Collect dy/dx terms on one side, factor, and solve',
              'Treat y as a function of x; apply chain rule when differentiating y-terms',
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'differentiate both sides with respect to x'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Collect dy/dx terms on one side, factor, and solve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'chain6-detail',
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
      id: 'chain6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Use for equations like x² + y² = 25…?',
            options: [
              'differentiate both sides with respect to x',
              'Collect dy/dx terms on one side, factor, and solve',
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'Treat y as a function of x; apply chain rule when differentiating y-terms'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Use for equations like x² + y² = 25 where y isn\'t isolated. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'chain6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Implicit differentiation',
            options: ['Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve', 'differentiate both sides with respect to x', 'Use for equations like x² + y² = 25 where y isn\'t isolated']
          },
          {
            label: 'Treat y as a function of x; apply chain…',
            options: ['Collect dy/dx terms on one side, factor, and solve', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'differentiate both sides with respect to x', 'Use for equations like x² + y² = 25 where y isn\'t isolated']
          },
          {
            label: 'Collect dy/dx terms on one side,…',
            options: ['Treat y as a function of x; apply chain rule when differentiating y-terms', 'Use for equations like x² + y² = 25 where y isn\'t isolated', 'differentiate both sides with respect to x', 'Collect dy/dx terms on one side, factor, and solve']
          }
        ],
        correctAnswers: ['differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when differentiating y-terms', 'Collect dy/dx terms on one side, factor, and solve'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Implicit differentiation: differentiate both sides with respect to x. Treat y as a function of x; apply chain rule when differentiating y-terms. Collect dy/dx terms on one side, factor, and solve.'
      }
    }
  ]
}
