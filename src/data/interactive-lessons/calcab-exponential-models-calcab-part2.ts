export const calcABExpModelsPart2Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'expon2-intro',
      type: 'text' as const,
      content: `
# Logarithmic Differentiation

**Part 2 of 7 — Logarithmic Differentiation**

### 1. Logarithmic differentiation

take ln of both sides, then differentiate

### 2. Useful for products, quotients, and variable exponents like x^x

Useful for products, quotients, and variable exponents like x^x

### 3. Steps

y = f(x) → ln y = ln f(x) → (1/y)y' = [ln f(x)]' → y' = f(x)·[ln f(x)]'

### 4. d/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation

d/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation
      `
    },
    {
      id: 'expon2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of logarithmic differentiation?',
            options: [
              'Logarithmic differentiation',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Logarithmic differentiation: take ln of both sides, then differentiate'
          },
          {
            question: 'In the context of logarithmic differentiation, which is accurate?',
            options: [
              'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Steps: y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\''
          }
        ]
      }
    },
    {
      id: 'expon2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Logarithmic differentiation**: take ln of both sides, then differentiate
- **Useful for products, quotients, and variable exponents like x^x**
- **Steps**: y = f(x) → ln y = ln f(x) → (1/y)y' = [ln f(x)]' → y' = f(x)·[ln f(x)]'
- **d/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation**
      `
    },
    {
      id: 'expon2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to logarithmic differentiation?',
            options: [
              'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation'
          }
        ]
      }
    },
    {
      id: 'expon2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Logarithmic differentiation',
            options: ['take ln of both sides, then differentiate', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Useful for products, quotients, and variable exponents like x^x',
            options: ['Useful for products, quotients, and variable expon', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Steps',
            options: ['y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' →', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['take ln of both sides, then differentiate', 'Useful for products, quotients, and variable expon', 'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' →'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Logarithmic Differentiation.'
      }
    }
  ]
}
