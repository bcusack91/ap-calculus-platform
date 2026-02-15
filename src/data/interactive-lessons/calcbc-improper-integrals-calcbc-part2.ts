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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of type ii: discontinuous integrands?',
            options: [
              'Type II',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Type II: integrand has a discontinuity in [a,b]'
          },
          {
            question: 'In the context of type ii: discontinuous integrands, which is accurate?',
            options: [
              'lim(c→b⁻) ∫ₐ^c f(x)dx',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Discontinuity at b: lim(c→b⁻) ∫ₐ^c f(x)dx'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to type ii: discontinuous integrands?',
            options: [
              'split into two integrals at d',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Interior discontinuity at d: split into two integrals at d'
          }
        ]
      }
    },
    {
      id: 'impro2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Type II',
            options: ['integrand has a discontinuity in [a,b]', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Discontinuity at a',
            options: ['lim(c→a⁺) ∫_c^b f(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Discontinuity at b',
            options: ['lim(c→b⁻) ∫ₐ^c f(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['integrand has a discontinuity in [a,b]', 'lim(c→a⁺) ∫_c^b f(x)dx', 'lim(c→b⁻) ∫ₐ^c f(x)dx'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Type II: Discontinuous Integrands.'
      }
    }
  ]
}
