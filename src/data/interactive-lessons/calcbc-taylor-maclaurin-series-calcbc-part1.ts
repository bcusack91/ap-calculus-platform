export const calcBCTaylorMaclaurinPart1Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'taylo1-intro',
      type: 'text' as const,
      content: `
# ∮ Taylor Maclaurin Series

**Part 1 of 7 — Taylor Series Formula**

### 1. Taylor series of f about x = a

Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ

### 2. f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a

f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a

### 3. The series "encodes" all information about f near x = a

The series "encodes" all information about f near x = a

### 4. If the series converges to f(x), then f equals its Taylor series

If the series converges to f(x), then f equals its Taylor series
      `
    },
    {
      id: 'taylo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of taylor series formula?',
            options: [
              'Taylor series of f about x = a',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Taylor series of f about x = a: Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ'
          },
          {
            question: 'In the context of taylor series formula, which is accurate?',
            options: [
              'The series "encodes" all information about f near x = a',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The series "encodes" all information about f near x = a'
          }
        ]
      }
    },
    {
      id: 'taylo1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Taylor series of f about x = a**: Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ
- **f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a**
- **The series "encodes" all information about f near x = a**
- **If the series converges to f(x), then f equals its Taylor series**
      `
    },
    {
      id: 'taylo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to taylor series formula?',
            options: [
              'If the series converges to f(x), then f equals its Taylor series',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'If the series converges to f(x), then f equals its Taylor series'
          }
        ]
      }
    },
    {
      id: 'taylo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taylor series of f about x = a',
            options: ['Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a',
            options: ['f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The series "encodes" all information about f near x = a',
            options: ['The series "encodes" all information about f near ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ', 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a', 'The series "encodes" all information about f near '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Taylor Series Formula.'
      }
    }
  ]
}
