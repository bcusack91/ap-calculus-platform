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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of the number e?',
            options: [
              'e ≈ 2.71828..., the base of natural exponential functions',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'e ≈ 2.71828..., the base of natural exponential functions'
          },
          {
            question: 'In the context of the number e, which is accurate?',
            options: [
              'The function f(x) = eˣ has a slope equal to its value at every point',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The function f(x) = eˣ has a slope equal to its value at every point'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'e ≈ 2.71828..., the base of natural exponential functions',
            options: ['e ≈ 2.71828..., the base of natural exponential fu', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Continuous compounding',
            options: ['A = Pe^(rt)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'The function f(x) = eˣ has a slope equal to its value at every point',
            options: ['The function f(x) = eˣ has a slope equal to its va', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['e ≈ 2.71828..., the base of natural exponential fu', 'A = Pe^(rt)', 'The function f(x) = eˣ has a slope equal to its va'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding The Number e.'
      }
    }
  ]
}
