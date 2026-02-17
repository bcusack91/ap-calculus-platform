export const calcBCPowerSeriesPart6Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'power6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'power6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term…?',
            options: [
              '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)',
              'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)',
              'Use this to find power series for ln(1+x), arctan(x), etc.',
              'Radius of convergence is preserved (endpoints may change)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Radius of convergence is preserved…:',
            options: [
              '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)',
              'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)',
              'Use this to find power series for ln(1+x), arctan(x), etc.',
              'Radius of convergence is preserved (endpoints may change)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Radius of convergence is preserved (endpoints may change). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'power6-detail',
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
      id: 'power6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Use this to find power series for…?',
            options: [
              'Use this to find power series for ln(1+x), arctan(x), etc.',
              'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)',
              '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)',
              'Radius of convergence is preserved (endpoints may change)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Use this to find power series for ln(1+x), arctan(x), etc. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'power6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term…',
            options: ['Use this to find power series for ln(1+x), arctan(x), etc.', '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)', 'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)', 'Radius of convergence is preserved (endpoints may change)']
          },
          {
            label: '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C…',
            options: ['Use this to find power series for ln(1+x), arctan(x), etc.', '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)', 'd/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)', 'Radius of convergence is preserved (endpoints may change)']
          },
          {
            label: 'Radius of convergence is preserved…',
            options: ['d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)', 'Radius of convergence is preserved (endpoints may change)', '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)', 'Use this to find power series for ln(1+x), arctan(x), etc.']
          }
        ],
        correctAnswers: ['d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation)', '∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration)', 'Radius of convergence is preserved (endpoints may change)'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. d/dx[Σcₙxⁿ] = Σn·cₙxⁿ⁻¹ (term-by-term differentiation). ∫[Σcₙxⁿ]dx = Σcₙxⁿ⁺¹/(n+1) + C (term-by-term integration). Radius of convergence is preserved (endpoints may change).'
      }
    }
  ]
}
