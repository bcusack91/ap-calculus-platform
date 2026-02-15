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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of polynomial basics?',
            options: [
              'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀'
          },
          {
            question: 'In the context of polynomial basics, which is accurate?',
            options: [
              'the coefficient of the highest-degree term',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Leading coefficient: the coefficient of the highest-degree term'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polynomials are expressions of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀',
            options: ['Polynomials are expressions of the form aₙxⁿ + aₙ₋', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Degree',
            options: ['highest power of x determines the polynomial\'s beh', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Leading coefficient',
            options: ['the coefficient of the highest-degree term', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Polynomials are expressions of the form aₙxⁿ + aₙ₋', 'highest power of x determines the polynomial\'s beh', 'the coefficient of the highest-degree term'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Polynomial Basics.'
      }
    }
  ]
}
