export const calcBCSeriesAppsPart2Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'serie2-intro',
      type: 'text' as const,
      content: `
# Computing Integrals with Series

**Part 2 of 7 — Computing Integrals with Series**

### 1. If f(x) has no elementary antiderivative, integrate its Taylor series term by term

If f(x) has no elementary antiderivative, integrate its Taylor series term by term

### 2. ∫e^(-x²)dx

integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C

### 3. Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy

Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy

### 4. Use alternating series error bound to determine how many terms suffice

Use alternating series error bound to determine how many terms suffice
      `
    },
    {
      id: 'serie2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of computing integrals with series?',
            options: [
              'If f(x) has no elementary antiderivative, integrate its Taylor series term by term',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'If f(x) has no elementary antiderivative, integrate its Taylor series term by term'
          },
          {
            question: 'In the context of computing integrals with series, which is accurate?',
            options: [
              'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy'
          }
        ]
      }
    },
    {
      id: 'serie2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If f(x) has no elementary antiderivative, integrate its Taylor series term by term**
- **∫e^(-x²)dx**: integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C
- **Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy**
- **Use alternating series error bound to determine how many terms suffice**
      `
    },
    {
      id: 'serie2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to computing integrals with series?',
            options: [
              'Use alternating series error bound to determine how many terms suffice',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use alternating series error bound to determine how many terms suffice'
          }
        ]
      }
    },
    {
      id: 'serie2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If f(x) has no elementary antiderivative, integrate its Taylor series term by term',
            options: ['If f(x) has no elementary antiderivative, integrat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫e^(-x²)dx',
            options: ['integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy',
            options: ['Evaluate ∫₀^1 e^(-x²)dx by summing enough terms fo', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['If f(x) has no elementary antiderivative, integrat', 'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + ', 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms fo'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Computing Integrals with Series.'
      }
    }
  ]
}
