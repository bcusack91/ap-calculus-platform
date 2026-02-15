export const calcBCPowerSeriesPart4Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'power4-intro',
      type: 'text' as const,
      content: `
# Operations on Power Series

**Part 4 of 7 — Operations on Power Series**

### 1. Addition

Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)

### 2. Multiplication

Cauchy product (not tested explicitly on AP exam)

### 3. Substitution

replace x with a function of x in a known series

### 4. Example

e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)
      `
    },
    {
      id: 'power4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of operations on power series?',
            options: [
              'Addition',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Addition: Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)'
          },
          {
            question: 'In the context of operations on power series, which is accurate?',
            options: [
              'replace x with a function of x in a known series',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Substitution: replace x with a function of x in a known series'
          }
        ]
      }
    },
    {
      id: 'power4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Addition**: Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)
- **Multiplication**: Cauchy product (not tested explicitly on AP exam)
- **Substitution**: replace x with a function of x in a known series
- **Example**: e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)
      `
    },
    {
      id: 'power4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to operations on power series?',
            options: [
              'e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Example: e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)'
          }
        ]
      }
    },
    {
      id: 'power4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Addition',
            options: ['Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Multiplication',
            options: ['Cauchy product (not tested explicitly on AP exam)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Substitution',
            options: ['replace x with a function of x in a known series', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval', 'Cauchy product (not tested explicitly on AP exam)', 'replace x with a function of x in a known series'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Operations on Power Series.'
      }
    }
  ]
}
