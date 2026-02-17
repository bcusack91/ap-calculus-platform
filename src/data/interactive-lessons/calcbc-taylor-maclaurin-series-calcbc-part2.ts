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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Maclaurin series?',
            options: [
              'Taylor series centered at a = 0',
              'Many common functions have well-known Maclaurin series',
              'Easier to compute since all derivatives are evaluated at 0',
              'Σ f⁽ⁿ⁾(0)/n! · xⁿ'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Maclaurin series: Taylor series centered at a = 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Many common functions have well-known…:',
            options: [
              'Σ f⁽ⁿ⁾(0)/n! · xⁿ',
              'Taylor series centered at a = 0',
              'Many common functions have well-known Maclaurin series',
              'Easier to compute since all derivatives are evaluated at 0'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Many common functions have well-known Maclaurin series. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Maclaurin Series, which correctly describes Easier to compute since all derivatives…?',
            options: [
              'Many common functions have well-known Maclaurin series',
              'Taylor series centered at a = 0',
              'Easier to compute since all derivatives are evaluated at 0',
              'Σ f⁽ⁿ⁾(0)/n! · xⁿ'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Easier to compute since all derivatives are evaluated at 0. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'taylo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maclaurin series',
            options: ['Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Taylor series centered at a = 0', 'Many common functions have well-known Maclaurin series', 'Easier to compute since all derivatives are evaluated at 0']
          },
          {
            label: 'Σ f⁽ⁿ⁾(0)/n! · xⁿ',
            options: ['Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Easier to compute since all derivatives are evaluated at 0', 'Many common functions have well-known Maclaurin series', 'Taylor series centered at a = 0']
          },
          {
            label: 'Many common functions have well-known…',
            options: ['Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Many common functions have well-known Maclaurin series', 'Easier to compute since all derivatives are evaluated at 0', 'Taylor series centered at a = 0']
          }
        ],
        correctAnswers: ['Taylor series centered at a = 0', 'Σ f⁽ⁿ⁾(0)/n! · xⁿ', 'Many common functions have well-known Maclaurin series'],
        hint1: 'Think about what each concept specifically describes in Maclaurin Series.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Maclaurin Series describes a specific idea. Maclaurin series: Taylor series centered at a = 0. Σ f⁽ⁿ⁾(0)/n! · xⁿ. Many common functions have well-known Maclaurin series.'
      }
    }
  ]
}
