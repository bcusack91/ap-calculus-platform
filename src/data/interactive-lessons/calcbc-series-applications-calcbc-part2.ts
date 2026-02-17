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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes If f(x) has no elementary…?',
            options: [
              'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C',
              'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy',
              'If f(x) has no elementary antiderivative, integrate its Taylor series term by term',
              'Use alternating series error bound to determine how many terms suffice'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If f(x) has no elementary antiderivative, integrate its Taylor series term by term. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Evaluate ∫₀^1 e^(-x²)dx by summing…?',
            options: [
              'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C',
              'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy',
              'If f(x) has no elementary antiderivative, integrate its Taylor series term by term',
              'Use alternating series error bound to determine how many terms suffice'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Use alternating series error bound to…?',
            options: [
              'Use alternating series error bound to determine how many terms suffice',
              'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C',
              'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy',
              'If f(x) has no elementary antiderivative, integrate its Taylor series term by term'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Use alternating series error bound to determine how many terms suffice. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'serie2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If f(x) has no elementary…',
            options: ['Use alternating series error bound to determine how many terms suffice', 'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C', 'If f(x) has no elementary antiderivative, integrate its Taylor series term by term', 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy']
          },
          {
            label: '∫e^(-x²)dx',
            options: ['integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C', 'Use alternating series error bound to determine how many terms suffice', 'If f(x) has no elementary antiderivative, integrate its Taylor series term by term', 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy']
          },
          {
            label: 'Evaluate ∫₀^1 e^(-x²)dx by summing…',
            options: ['Use alternating series error bound to determine how many terms suffice', 'If f(x) has no elementary antiderivative, integrate its Taylor series term by term', 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy', 'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C']
          }
        ],
        correctAnswers: ['If f(x) has no elementary antiderivative, integrate its Taylor series term by term', 'integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C', 'Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy'],
        hint1: 'Think about what each concept specifically describes in Computing Integrals with Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Computing Integrals with Series describes a specific idea. If f(x) has no elementary antiderivative, integrate its Taylor series term by term. ∫e^(-x²)dx: integrate Σ(-1)ⁿx²ⁿ/n! → Σ(-1)ⁿx²ⁿ⁺¹/[n!(2n+1)] + C. Evaluate ∫₀^1 e^(-x²)dx by summing enough terms for desired accuracy.'
      }
    }
  ]
}
