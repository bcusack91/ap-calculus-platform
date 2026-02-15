export const calcBCPowerSeriesPart5Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'power5-intro',
      type: 'text' as const,
      content: `
# Differentiation & Integration of Power Series

**Part 5 of 7 — Differentiation & Integration of Power Series**

### 1. d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)

d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)

### 2. ∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)

∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)

### 3. Radius of convergence is preserved (endpoints may change)

Radius of convergence is preserved (endpoints may change)

### 4. Use this to find power series for ln(1+x), arctan(x), etc.

Use this to find power series for ln(1+x), arctan(x), etc.
      `
    },
    {
      id: 'power5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of differentiation & integration of power series?',
            options: [
              'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)'
          },
          {
            question: 'In the context of differentiation & integration of power series, which is accurate?',
            options: [
              'Radius of convergence is preserved (endpoints may change)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Radius of convergence is preserved (endpoints may change)'
          }
        ]
      }
    },
    {
      id: 'power5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)**
- **∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)**
- **Radius of convergence is preserved (endpoints may change)**
- **Use this to find power series for ln(1+x), arctan(x), etc.**
      `
    },
    {
      id: 'power5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to differentiation & integration of power series?',
            options: [
              'Use this to find power series for ln(1+x), arctan(x), etc.',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use this to find power series for ln(1+x), arctan(x), etc.'
          }
        ]
      }
    },
    {
      id: 'power5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)',
            options: ['d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)',
            options: ['∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Radius of convergence is preserved (endpoints may change)',
            options: ['Radius of convergence is preserved (endpoints may ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiat', '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integ', 'Radius of convergence is preserved (endpoints may '],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Differentiation & Integration of Power Series.'
      }
    }
  ]
}
