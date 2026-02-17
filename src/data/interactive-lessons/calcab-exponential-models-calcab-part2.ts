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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Logarithmic differentiation" refer to in calculus?',
            options: [
              'Useful for products, quotients, and variable exponents like x^x',
              'take ln of both sides, then differentiate',
              'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'',
              'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Logarithmic differentiation: take ln of both sides, then differentiate. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Steps?',
            options: [
              'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation',
              'take ln of both sides, then differentiate',
              'Useful for products, quotients, and variable exponents like x^x',
              'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\''
            ],
            correctAnswer: 3,
            explanation: 'Correct — Steps: y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Logarithmic Differentiation, which correctly describes d/dx[x^x] = x^x(ln x + 1) using…?',
            options: [
              'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation',
              'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'',
              'Useful for products, quotients, and variable exponents like x^x',
              'take ln of both sides, then differentiate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — d/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'expon2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Logarithmic differentiation',
            options: ['d/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation', 'take ln of both sides, then differentiate', 'Useful for products, quotients, and variable exponents like x^x', 'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'']
          },
          {
            label: 'Steps',
            options: ['y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'', 'Useful for products, quotients, and variable exponents like x^x', 'd/dx[x^x] = x^x(ln x + 1) using logarithmic differentiation', 'take ln of both sides, then differentiate']
          }
        ],
        correctAnswers: ['take ln of both sides, then differentiate', 'y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\''],
        hint1: 'Think about what each concept specifically describes in Logarithmic Differentiation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Logarithmic Differentiation describes a specific idea. Logarithmic differentiation: take ln of both sides, then differentiate. Steps: y = f(x) → ln y = ln f(x) → (1/y)y\' = [ln f(x)]\' → y\' = f(x)·[ln f(x)]\'.'
      }
    }
  ]
}
