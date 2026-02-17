export const precalcExponentialPart3Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon3-intro',
      type: 'text' as const,
      content: `
# The Number e

**Part 3 of 7 — The Number e**

### 1. e ≈ 2.71828..., the base of natural exponential functions

e ≈ 2.71828..., the base of natural exponential functions

### 2. Continuous compounding

A = Pe^(rt)

### 3. The function f(x) = eˣ has a slope equal to its value at every point

The function f(x) = eˣ has a slope equal to its value at every point

### 4. e = lim(n→∞) (1 + 1/n)ⁿ

e = lim(n→∞) (1 + 1/n)ⁿ
      `
    },
    {
      id: 'expon3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains e ≈ 2.71828..., the base of natural…?',
            options: [
              'e ≈ 2.71828..., the base of natural exponential functions',
              'The function f(x) = eˣ has a slope equal to its value at every point',
              'e = lim(n→∞) (1 + 1/n)ⁿ',
              'A = Pe^(rt)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — e ≈ 2.71828..., the base of natural exponential functions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes The function f(x) = eˣ has a slope…:',
            options: [
              'The function f(x) = eˣ has a slope equal to its value at every point',
              'e = lim(n→∞) (1 + 1/n)ⁿ',
              'e ≈ 2.71828..., the base of natural exponential functions',
              'A = Pe^(rt)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The function f(x) = eˣ has a slope equal to its value at every point. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **e ≈ 2.71828..., the base of natural exponential functions**
- **Continuous compounding**: A = Pe^(rt)
- **The function f(x) = eˣ has a slope equal to its value at every point**
- **e = lim(n→∞) (1 + 1/n)ⁿ**
      `
    },
    {
      id: 'expon3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to the number e?',
            options: [
              'e = lim(n→∞) (1 + 1/n)ⁿ',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'e = lim(n→∞) (1 + 1/n)ⁿ'
          }
        ]
      }
    },
    {
      id: 'expon3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'e ≈ 2.71828..., the base of natural…',
            options: ['A = Pe^(rt)', 'e ≈ 2.71828..., the base of natural exponential functions', 'The function f(x) = eˣ has a slope equal to its value at every point', 'e = lim(n→∞) (1 + 1/n)ⁿ']
          },
          {
            label: 'Continuous compounding',
            options: ['A = Pe^(rt)', 'e ≈ 2.71828..., the base of natural exponential functions', 'e = lim(n→∞) (1 + 1/n)ⁿ', 'The function f(x) = eˣ has a slope equal to its value at every point']
          },
          {
            label: 'The function f(x) = eˣ has a slope…',
            options: ['e = lim(n→∞) (1 + 1/n)ⁿ', 'e ≈ 2.71828..., the base of natural exponential functions', 'A = Pe^(rt)', 'The function f(x) = eˣ has a slope equal to its value at every point']
          }
        ],
        correctAnswers: ['e ≈ 2.71828..., the base of natural exponential functions', 'A = Pe^(rt)', 'The function f(x) = eˣ has a slope equal to its value at every point'],
        hint1: 'Think about what each concept specifically describes in The Number e.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in The Number e describes a specific idea. e ≈ 2.71828..., the base of natural exponential functions. Continuous compounding: A = Pe^(rt). The function f(x) = eˣ has a slope equal to its value at every point.'
      }
    }
  ]
}
