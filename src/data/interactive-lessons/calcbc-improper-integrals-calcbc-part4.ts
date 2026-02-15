export const calcBCImproperPart4Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'impro4-intro',
      type: 'text' as const,
      content: `
# Comparison Tests

**Part 4 of 7 — Comparison Tests**

### 1. Direct Comparison

if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges

### 2. If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges

If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges

### 3. Limit Comparison

if lim f(x)/g(x) = L (finite, positive), both converge or both diverge

### 4. Compare with known integrals

1/xᵖ, e⁻ˣ, etc.
      `
    },
    {
      id: 'impro4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of comparison tests?',
            options: [
              'Direct Comparison',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Direct Comparison: if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges'
          },
          {
            question: 'In the context of comparison tests, which is accurate?',
            options: [
              'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Limit Comparison: if lim f(x)/g(x) = L (finite, positive), both converge or both diverge'
          }
        ]
      }
    },
    {
      id: 'impro4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Direct Comparison**: if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges
- **If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges**
- **Limit Comparison**: if lim f(x)/g(x) = L (finite, positive), both converge or both diverge
- **Compare with known integrals**: 1/xᵖ, e⁻ˣ, etc.
      `
    },
    {
      id: 'impro4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to comparison tests?',
            options: [
              '1/xᵖ, e⁻ˣ, etc.',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Compare with known integrals: 1/xᵖ, e⁻ˣ, etc.'
          }
        ]
      }
    },
    {
      id: 'impro4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct Comparison',
            options: ['if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f conve', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges',
            options: ['If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverg', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Limit Comparison',
            options: ['if lim f(x)/g(x) = L (finite, positive), both conv', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f conve', 'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverg', 'if lim f(x)/g(x) = L (finite, positive), both conv'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Comparison Tests.'
      }
    }
  ]
}
