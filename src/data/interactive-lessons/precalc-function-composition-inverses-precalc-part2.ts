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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of domain of composed functions?',
            options: [
              'Domain of f ∘ g',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Domain of f ∘ g: x must be in domain of g AND g(x) must be in domain of f'
          },
          {
            question: 'In the context of domain of composed functions, which is accurate?',
            options: [
              'Restrict domain when square roots or logarithms are involved',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Restrict domain when square roots or logarithms are involved'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Domain of f ∘ g',
            options: ['x must be in domain of g AND g(x) must be in domai', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Always check inner function\'s range against outer function\'s domain',
            options: ['Always check inner function\'s range against outer ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Restrict domain when square roots or logarithms are involved',
            options: ['Restrict domain when square roots or logarithms ar', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['x must be in domain of g AND g(x) must be in domai', 'Always check inner function\'s range against outer ', 'Restrict domain when square roots or logarithms ar'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Domain of Composed Functions.'
      }
    }
  ]
}
