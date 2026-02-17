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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Direct Comparison?',
            options: [
              'if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges',
              'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges',
              '1/xᵖ, e⁻ˣ, etc.',
              'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Direct Comparison: if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Comparison Tests, which explains Limit Comparison?',
            options: [
              'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges',
              'if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges',
              '1/xᵖ, e⁻ˣ, etc.',
              'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Limit Comparison: if lim f(x)/g(x) = L (finite, positive), both converge or both diverge. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Comparison Tests, which correctly describes Compare with known integrals?',
            options: [
              'if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges',
              'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges',
              '1/xᵖ, e⁻ˣ, etc.',
              'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Compare with known integrals: 1/xᵖ, e⁻ˣ, etc. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'impro4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct Comparison',
            options: ['If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges', 'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge', 'if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges', '1/xᵖ, e⁻ˣ, etc.']
          },
          {
            label: 'Limit Comparison',
            options: ['if lim f(x)/g(x) = L (finite, positive), both converge or both diverge', 'if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges', '1/xᵖ, e⁻ˣ, etc.', 'If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges']
          },
          {
            label: 'Compare with known integrals',
            options: ['If 0 ≤ g(x) ≤ f(x) and ∫g diverges, then ∫f diverges', 'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge', 'if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges', '1/xᵖ, e⁻ˣ, etc.']
          }
        ],
        correctAnswers: ['if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges', 'if lim f(x)/g(x) = L (finite, positive), both converge or both diverge', '1/xᵖ, e⁻ˣ, etc.'],
        hint1: 'Think about what each concept specifically describes in Comparison Tests.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comparison Tests describes a specific idea. Direct Comparison: if 0 ≤ f(x) ≤ g(x) and ∫g converges, then ∫f converges. Limit Comparison: if lim f(x)/g(x) = L (finite, positive), both converge or both diverge. Compare with known integrals: 1/xᵖ, e⁻ˣ, etc.'
      }
    }
  ]
}
