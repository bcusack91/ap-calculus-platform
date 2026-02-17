export const precalcCompositionPart2Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'funct2-intro',
      type: 'text' as const,
      content: `
# Domain of Composed Functions

**Part 2 of 7 — Domain of Composed Functions**

### 1. Domain of f ∘ g

x must be in domain of g AND g(x) must be in domain of f

### 2. Always check inner function's range against outer function's domain

Always check inner function's range against outer function's domain

### 3. Restrict domain when square roots or logarithms are involved

Restrict domain when square roots or logarithms are involved

### 4. Write domain in interval notation

Write domain in interval notation
      `
    },
    {
      id: 'funct2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Domain of f ∘ g?',
            options: [
              'Restrict domain when square roots or logarithms are involved',
              'x must be in domain of g AND g(x) must be in domain of f',
              'Write domain in interval notation',
              'Always check inner function\'s range against outer function\'s domain'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Domain of f ∘ g: x must be in domain of g AND g(x) must be in domain of f. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Domain of Composed Functions, which explains Restrict domain when square roots or…?',
            options: [
              'Always check inner function\'s range against outer function\'s domain',
              'Write domain in interval notation',
              'Restrict domain when square roots or logarithms are involved',
              'x must be in domain of g AND g(x) must be in domain of f'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Restrict domain when square roots or logarithms are involved. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'funct2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Domain of f ∘ g**: x must be in domain of g AND g(x) must be in domain of f
- **Always check inner function's range against outer function's domain**
- **Restrict domain when square roots or logarithms are involved**
- **Write domain in interval notation**
      `
    },
    {
      id: 'funct2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to domain of composed functions?',
            options: [
              'Write domain in interval notation',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Write domain in interval notation'
          }
        ]
      }
    },
    {
      id: 'funct2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Domain of f ∘ g',
            options: ['Restrict domain when square roots or logarithms are involved', 'x must be in domain of g AND g(x) must be in domain of f', 'Write domain in interval notation', 'Always check inner function\'s range against outer function\'s domain']
          },
          {
            label: 'Always check inner function\'s range…',
            options: ['Always check inner function\'s range against outer function\'s domain', 'Restrict domain when square roots or logarithms are involved', 'Write domain in interval notation', 'x must be in domain of g AND g(x) must be in domain of f']
          },
          {
            label: 'Restrict domain when square roots or…',
            options: ['Always check inner function\'s range against outer function\'s domain', 'Restrict domain when square roots or logarithms are involved', 'x must be in domain of g AND g(x) must be in domain of f', 'Write domain in interval notation']
          }
        ],
        correctAnswers: ['x must be in domain of g AND g(x) must be in domain of f', 'Always check inner function\'s range against outer function\'s domain', 'Restrict domain when square roots or logarithms are involved'],
        hint1: 'Think about what each concept specifically describes in Domain of Composed Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Domain of Composed Functions describes a specific idea. Domain of f ∘ g: x must be in domain of g AND g(x) must be in domain of f. Always check inner function\'s range against outer function\'s domain. Restrict domain when square roots or logarithms are involved.'
      }
    }
  ]
}
