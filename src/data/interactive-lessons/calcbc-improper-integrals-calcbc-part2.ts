export const calcBCImproperPart2Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'impro2-intro',
      type: 'text' as const,
      content: `
# Type II: Discontinuous Integrands

**Part 2 of 7 — Type II: Discontinuous Integrands**

### 1. Type II

integrand has a discontinuity in [a,b]

### 2. Discontinuity at a

lim(c→a⁺) ∫_c^b f(x)dx

### 3. Discontinuity at b

lim(c→b⁻) ∫ₐ^c f(x)dx

### 4. Interior discontinuity at d

split into two integrals at d
      `
    },
    {
      id: 'impro2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Type II?',
            options: [
              'lim(c→a⁺) ∫_c^b f(x)dx',
              'lim(c→b⁻) ∫ₐ^c f(x)dx',
              'integrand has a discontinuity in [a,b]',
              'split into two integrals at d'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Type II: integrand has a discontinuity in [a,b]. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Type II: Discontinuous Integrands, which explains Discontinuity at b?',
            options: [
              'lim(c→a⁺) ∫_c^b f(x)dx',
              'integrand has a discontinuity in [a,b]',
              'split into two integrals at d',
              'lim(c→b⁻) ∫ₐ^c f(x)dx'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Discontinuity at b: lim(c→b⁻) ∫ₐ^c f(x)dx. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'impro2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Type II**: integrand has a discontinuity in [a,b]
- **Discontinuity at a**: lim(c→a⁺) ∫_c^b f(x)dx
- **Discontinuity at b**: lim(c→b⁻) ∫ₐ^c f(x)dx
- **Interior discontinuity at d**: split into two integrals at d
      `
    },
    {
      id: 'impro2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Interior discontinuity at d?',
            options: [
              'lim(c→a⁺) ∫_c^b f(x)dx',
              'split into two integrals at d',
              'integrand has a discontinuity in [a,b]',
              'lim(c→b⁻) ∫ₐ^c f(x)dx'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Interior discontinuity at d: split into two integrals at d. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'impro2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Type II',
            options: ['lim(c→b⁻) ∫ₐ^c f(x)dx', 'split into two integrals at d', 'integrand has a discontinuity in [a,b]', 'lim(c→a⁺) ∫_c^b f(x)dx']
          },
          {
            label: 'Discontinuity at a',
            options: ['integrand has a discontinuity in [a,b]', 'split into two integrals at d', 'lim(c→b⁻) ∫ₐ^c f(x)dx', 'lim(c→a⁺) ∫_c^b f(x)dx']
          },
          {
            label: 'Discontinuity at b',
            options: ['lim(c→b⁻) ∫ₐ^c f(x)dx', 'integrand has a discontinuity in [a,b]', 'split into two integrals at d', 'lim(c→a⁺) ∫_c^b f(x)dx']
          }
        ],
        correctAnswers: ['integrand has a discontinuity in [a,b]', 'lim(c→a⁺) ∫_c^b f(x)dx', 'lim(c→b⁻) ∫ₐ^c f(x)dx'],
        hint1: 'Think about what each concept specifically describes in Type II: Discontinuous Integrands.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Type II: Discontinuous Integrands describes a specific idea. Type II: integrand has a discontinuity in [a,b]. Discontinuity at a: lim(c→a⁺) ∫_c^b f(x)dx. Discontinuity at b: lim(c→b⁻) ∫ₐ^c f(x)dx.'
      }
    }
  ]
}
