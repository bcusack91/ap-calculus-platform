export const calcBCTaylorMaclaurinPart2Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'taylo2-intro',
      type: 'text' as const,
      content: `
# Maclaurin Series

**Part 2 of 7 — Maclaurin Series**

### 1. Maclaurin series

Taylor series centered at a = 0

### 2. Σ f⁽ⁿ⁾(0)/n! · xⁿ

Σ f⁽ⁿ⁾(0)/n! · xⁿ

### 3. Many common functions have well-known Maclaurin series

Many common functions have well-known Maclaurin series

### 4. Easier to compute since all derivatives are evaluated at 0

Easier to compute since all derivatives are evaluated at 0
      `
    },
    {
      id: 'taylo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of maclaurin series?',
            options: [
              'Maclaurin series',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Maclaurin series: Taylor series centered at a = 0'
          },
          {
            question: 'In the context of maclaurin series, which is accurate?',
            options: [
              'Many common functions have well-known Maclaurin series',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Many common functions have well-known Maclaurin series'
          }
        ]
      }
    },
    {
      id: 'taylo2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Maclaurin series**: Taylor series centered at a = 0
- **Σ f⁽ⁿ⁾(0)/n! · xⁿ**
- **Many common functions have well-known Maclaurin series**
- **Easier to compute since all derivatives are evaluated at 0**
      `
    },
    {
      id: 'taylo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to maclaurin series?',
            options: [
              'Easier to compute since all derivatives are evaluated at 0',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Easier to compute since all derivatives are evaluated at 0'
          }
        ]
      }
    },
    {
      id: 'taylo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maclaurin series',
            options: ['Taylor series centered at a = 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Σ f⁽ⁿ⁾(0)/n! · xⁿ',
            options: ['Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Many common functions have well-known Maclaurin series',
            options: ['Many common functions have well-known Maclaurin se', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Taylor series centered at a = 0', 'Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Many common functions have well-known Maclaurin se'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Maclaurin Series.'
      }
    }
  ]
}
