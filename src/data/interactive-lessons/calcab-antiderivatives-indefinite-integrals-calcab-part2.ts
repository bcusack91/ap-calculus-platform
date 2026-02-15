export const calcABAntiderivativesPart2Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'antid2-intro',
      type: 'text' as const,
      content: `
# Basic Integration Rules

**Part 2 of 7 — Basic Integration Rules**

### 1. Power Rule for integration

∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1

### 2. ∫1/x dx = ln|x| + C (the case n = -1)

∫1/x dx = ln|x| + C (the case n = -1)

### 3. ∫dx = x + C; ∫k dx = kx + C

∫dx = x + C; ∫k dx = kx + C

### 4. Sum/Difference rule

∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx
      `
    },
    {
      id: 'antid2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of basic integration rules?',
            options: [
              'Power Rule for integration',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Power Rule for integration: ∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1'
          },
          {
            question: 'In the context of basic integration rules, which is accurate?',
            options: [
              '∫dx = x + C; ∫k dx = kx + C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫dx = x + C; ∫k dx = kx + C'
          }
        ]
      }
    },
    {
      id: 'antid2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Power Rule for integration**: ∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1
- **∫1/x dx = ln|x| + C (the case n = -1)**
- **∫dx = x + C; ∫k dx = kx + C**
- **Sum/Difference rule**: ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx
      `
    },
    {
      id: 'antid2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to basic integration rules?',
            options: [
              '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Sum/Difference rule: ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx'
          }
        ]
      }
    },
    {
      id: 'antid2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power Rule for integration',
            options: ['∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫1/x dx = ln|x| + C (the case n = -1)',
            options: ['∫1/x dx = ln|x| + C (the case n = -1)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫dx = x + C; ∫k dx = kx + C',
            options: ['∫dx = x + C; ∫k dx = kx + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1', '∫1/x dx = ln|x| + C (the case n = -1)', '∫dx = x + C; ∫k dx = kx + C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Basic Integration Rules.'
      }
    }
  ]
}
