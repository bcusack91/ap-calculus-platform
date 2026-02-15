export const calcABBasicDiffPart2Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic2-intro',
      type: 'text' as const,
      content: `
# Constant & Sum Rules

**Part 2 of 7 — Constant & Sum Rules**

### 1. Constant rule

d/dx[c] = 0 for any constant c

### 2. Sum/Difference rule

d/dx[f ± g] = f' ± g'

### 3. Constant multiple rule

d/dx[c·f(x)] = c·f'(x)

### 4. Differentiate each term independently, then combine

Differentiate each term independently, then combine
      `
    },
    {
      id: 'basic2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of constant & sum rules?',
            options: [
              'Constant rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Constant rule: d/dx[c] = 0 for any constant c'
          },
          {
            question: 'In the context of constant & sum rules, which is accurate?',
            options: [
              'd/dx[c·f(x)] = c·f\'(x)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Constant multiple rule: d/dx[c·f(x)] = c·f\'(x)'
          }
        ]
      }
    },
    {
      id: 'basic2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Constant rule**: d/dx[c] = 0 for any constant c
- **Sum/Difference rule**: d/dx[f ± g] = f' ± g'
- **Constant multiple rule**: d/dx[c·f(x)] = c·f'(x)
- **Differentiate each term independently, then combine**
      `
    },
    {
      id: 'basic2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to constant & sum rules?',
            options: [
              'Differentiate each term independently, then combine',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Differentiate each term independently, then combine'
          }
        ]
      }
    },
    {
      id: 'basic2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Constant rule',
            options: ['d/dx[c] = 0 for any constant c', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Sum/Difference rule',
            options: ['d/dx[f ± g] = f\' ± g\'', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Constant multiple rule',
            options: ['d/dx[c·f(x)] = c·f\'(x)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[c] = 0 for any constant c', 'd/dx[f ± g] = f\' ± g\'', 'd/dx[c·f(x)] = c·f\'(x)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Constant & Sum Rules.'
      }
    }
  ]
}
