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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Taylor series of f about x = a?',
            options: [
              'If the series converges to f(x), then f equals its Taylor series',
              'The series "encodes" all information about f near x = a',
              'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a',
              'Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Taylor series of f about x = a: Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes The series "encodes" all information…:',
            options: [
              'The series "encodes" all information about f near x = a',
              'Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ',
              'If the series converges to f(x), then f equals its Taylor series',
              'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The series "encodes" all information about f near x = a. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about If the series converges to f(x), then f… is correct?',
            options: [
              'Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ',
              'If the series converges to f(x), then f equals its Taylor series',
              'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a',
              'The series "encodes" all information about f near x = a'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If the series converges to f(x), then f equals its Taylor series. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'taylo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taylor series of f about x = a',
            options: ['The series "encodes" all information about f near x = a', 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a', 'If the series converges to f(x), then f equals its Taylor series', 'Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ']
          },
          {
            label: 'f⁽ⁿ⁾(a) is the nth derivative of f…',
            options: ['Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ', 'If the series converges to f(x), then f equals its Taylor series', 'The series "encodes" all information about f near x = a', 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a']
          },
          {
            label: 'The series "encodes" all information…',
            options: ['The series "encodes" all information about f near x = a', 'If the series converges to f(x), then f equals its Taylor series', 'Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ', 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a']
          }
        ],
        correctAnswers: ['Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ', 'f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a', 'The series "encodes" all information about f near x = a'],
        hint1: 'Think about what each concept specifically describes in ∮ Taylor Maclaurin Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Taylor Maclaurin Series describes a specific idea. Taylor series of f about x = a: Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ. f⁽ⁿ⁾(a) is the nth derivative of f evaluated at a. The series "encodes" all information about f near x = a.'
      }
    }
  ]
}
