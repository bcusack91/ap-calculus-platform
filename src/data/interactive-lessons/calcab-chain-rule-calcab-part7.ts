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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Implicit differentiation',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Implicit differentiation: differentiate both sides with respect to x'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'Collect dy/dx terms on one side, factor, and solve',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Collect dy/dx terms on one side, factor, and solve'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Use for equations like x² + y² = 25 where y isn\'t isolated',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use for equations like x² + y² = 25 where y isn\'t isolated'
          }
        ]
      }
    },
    {
      id: 'chain7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Implicit differentiation',
            options: ['differentiate both sides with respect to x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Treat y as a function of x; apply chain rule when differentiating y-terms',
            options: ['Treat y as a function of x; apply chain rule when ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Collect dy/dx terms on one side, factor, and solve',
            options: ['Collect dy/dx terms on one side, factor, and solve', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['differentiate both sides with respect to x', 'Treat y as a function of x; apply chain rule when ', 'Collect dy/dx terms on one side, factor, and solve'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
