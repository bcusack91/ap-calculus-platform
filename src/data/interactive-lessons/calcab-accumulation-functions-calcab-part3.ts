export const calcABAccumulationPart3Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum3-intro',
      type: 'text' as const,
      content: `
# Interpreting Accumulation

**Part 3 of 7 — Interpreting Accumulation**

### 1. If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity

If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity

### 2. F'(x) = f(x) means the rate of accumulation equals the integrand

F'(x) = f(x) means the rate of accumulation equals the integrand

### 3. Extrema of F correspond to zeros of f (where accumulation rate changes sign)

Extrema of F correspond to zeros of f (where accumulation rate changes sign)

### 4. Graph of f determines behavior of F

positive f → F increasing
      `
    },
    {
      id: 'accum3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of interpreting accumulation?',
            options: [
              'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity'
          },
          {
            question: 'In the context of interpreting accumulation, which is accurate?',
            options: [
              'Extrema of F correspond to zeros of f (where accumulation rate changes sign)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Extrema of F correspond to zeros of f (where accumulation rate changes sign)'
          }
        ]
      }
    },
    {
      id: 'accum3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity**
- **F'(x) = f(x) means the rate of accumulation equals the integrand**
- **Extrema of F correspond to zeros of f (where accumulation rate changes sign)**
- **Graph of f determines behavior of F**: positive f → F increasing
      `
    },
    {
      id: 'accum3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to interpreting accumulation?',
            options: [
              'positive f → F increasing',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Graph of f determines behavior of F: positive f → F increasing'
          }
        ]
      }
    },
    {
      id: 'accum3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity',
            options: ['If f(t) represents a rate, ∫ₐˣ f(t)dt gives total ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'F\'(x) = f(x) means the rate of accumulation equals the integrand',
            options: ['F\'(x) = f(x) means the rate of accumulation equals', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Extrema of F correspond to zeros of f (where accumulation rate changes sign)',
            options: ['Extrema of F correspond to zeros of f (where accum', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['If f(t) represents a rate, ∫ₐˣ f(t)dt gives total ', 'F\'(x) = f(x) means the rate of accumulation equals', 'Extrema of F correspond to zeros of f (where accum'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Interpreting Accumulation.'
      }
    }
  ]
}
