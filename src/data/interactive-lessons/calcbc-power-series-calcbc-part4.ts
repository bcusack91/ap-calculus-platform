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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Addition?',
            options: [
              'replace x with a function of x in a known series',
              'e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)',
              'Cauchy product (not tested explicitly on AP exam)',
              'Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Addition: Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Substitution?',
            options: [
              'e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)',
              'Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)',
              'Cauchy product (not tested explicitly on AP exam)',
              'replace x with a function of x in a known series'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Substitution: replace x with a function of x in a known series. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Example is correct?',
            options: [
              'Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)',
              'replace x with a function of x in a known series',
              'Cauchy product (not tested explicitly on AP exam)',
              'e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Example: e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'power4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Addition',
            options: ['Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)', 'Cauchy product (not tested explicitly on AP exam)', 'e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)', 'replace x with a function of x in a known series']
          },
          {
            label: 'Multiplication',
            options: ['e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)', 'Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)', 'Cauchy product (not tested explicitly on AP exam)', 'replace x with a function of x in a known series']
          },
          {
            label: 'Substitution',
            options: ['e^(-x²) = Σ(-1)ⁿx²ⁿ/n! (substitute -x² into eˣ series)', 'Cauchy product (not tested explicitly on AP exam)', 'Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)', 'replace x with a function of x in a known series']
          }
        ],
        correctAnswers: ['Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval)', 'Cauchy product (not tested explicitly on AP exam)', 'replace x with a function of x in a known series'],
        hint1: 'Think about what each concept specifically describes in Operations on Power Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Operations on Power Series describes a specific idea. Addition: Σaₙxⁿ + Σbₙxⁿ = Σ(aₙ+bₙ)xⁿ (within shared interval). Multiplication: Cauchy product (not tested explicitly on AP exam). Substitution: replace x with a function of x in a known series.'
      }
    }
  ]
}
