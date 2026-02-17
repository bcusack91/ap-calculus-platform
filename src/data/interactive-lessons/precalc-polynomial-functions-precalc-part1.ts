export const precalcPolynomialPart1Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn1-intro',
      type: 'text' as const,
      content: `
# 📈 Polynomial Functions

**Part 1 of 7 — Polynomial Basics**

### 1. Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀

### 2. Degree

highest power of x determines the polynomial's behavior

### 3. Leading coefficient

the coefficient of the highest-degree term

### 4. Standard form lists terms from highest to lowest degree

Standard form lists terms from highest to lowest degree
      `
    },
    {
      id: 'polyn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Polynomials are expressions of the form…?',
            options: [
              'Standard form lists terms from highest to lowest degree',
              'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
              'the coefficient of the highest-degree term',
              'highest power of x determines the polynomial\'s behavior'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Leading coefficient?',
            options: [
              'the coefficient of the highest-degree term',
              'Standard form lists terms from highest to lowest degree',
              'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
              'highest power of x determines the polynomial\'s behavior'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Leading coefficient: the coefficient of the highest-degree term. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polyn1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀**
- **Degree**: highest power of x determines the polynomial's behavior
- **Leading coefficient**: the coefficient of the highest-degree term
- **Standard form lists terms from highest to lowest degree**
      `
    },
    {
      id: 'polyn1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polynomial basics?',
            options: [
              'Standard form lists terms from highest to lowest degree',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Standard form lists terms from highest to lowest degree'
          }
        ]
      }
    },
    {
      id: 'polyn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Degree',
            options: ['the coefficient of the highest-degree term', 'highest power of x determines the polynomial\'s behavior', 'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀', 'Standard form lists terms from highest to lowest degree']
          },
          {
            label: 'Leading coefficient',
            options: ['highest power of x determines the polynomial\'s behavior', 'Standard form lists terms from highest to lowest degree', 'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀', 'the coefficient of the highest-degree term']
          }
        ],
        correctAnswers: ['highest power of x determines the polynomial\'s behavior', 'the coefficient of the highest-degree term'],
        hint1: 'Think about what each concept specifically describes in Polynomial Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polynomial Functions describes a specific idea. Degree: highest power of x determines the polynomial\'s behavior. Leading coefficient: the coefficient of the highest-degree term.'
      }
    }
  ]
}
