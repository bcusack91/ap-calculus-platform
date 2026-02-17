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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Power Rule for integration?',
            options: [
              '∫dx = x + C; ∫k dx = kx + C',
              '∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1',
              '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx',
              '∫1/x dx = ln|x| + C (the case n = -1)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Power Rule for integration: ∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Basic Integration Rules, which explains ∫dx = x + C; ∫k dx = kx + C?',
            options: [
              '∫1/x dx = ln|x| + C (the case n = -1)',
              '∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1',
              '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx',
              '∫dx = x + C; ∫k dx = kx + C'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫dx = x + C; ∫k dx = kx + C. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Basic Integration Rules, which correctly describes Sum/Difference rule?',
            options: [
              '∫1/x dx = ln|x| + C (the case n = -1)',
              '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx',
              '∫dx = x + C; ∫k dx = kx + C',
              '∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Sum/Difference rule: ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'antid2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Power Rule for integration',
            options: ['∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1', '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx', '∫1/x dx = ln|x| + C (the case n = -1)', '∫dx = x + C; ∫k dx = kx + C']
          },
          {
            label: 'Sum/Difference rule',
            options: ['∫dx = x + C; ∫k dx = kx + C', '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx', '∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1', '∫1/x dx = ln|x| + C (the case n = -1)']
          }
        ],
        correctAnswers: ['∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1', '∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx'],
        hint1: 'Think about what each concept specifically describes in Basic Integration Rules.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Basic Integration Rules describes a specific idea. Power Rule for integration: ∫xⁿ dx = x^(n+1)/(n+1) + C, n ≠ -1. Sum/Difference rule: ∫[f(x) ± g(x)]dx = ∫f(x)dx ± ∫g(x)dx.'
      }
    }
  ]
}
