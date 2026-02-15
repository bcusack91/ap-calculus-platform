export const precalcPolarPart7Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'polar7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Complex number

z = a + bi plotted as (a, b) in complex plane

### 2. Polar (trigonometric) form

z = r(cos θ + i sin θ) where r = |z|

### 3. De Moivre's Theorem

zⁿ = rⁿ(cos(nθ) + i sin(nθ))

### 4. nth roots

n equally spaced roots on a circle of radius r^(1/n)
      `
    },
    {
      id: 'polar7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Complex number',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Complex number: z = a + bi plotted as (a, b) in complex plane'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'zⁿ = rⁿ(cos(nθ) + i sin(nθ))',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'De Moivre\'s Theorem: zⁿ = rⁿ(cos(nθ) + i sin(nθ))'
          }
        ]
      }
    },
    {
      id: 'polar7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Complex number**: z = a + bi plotted as (a, b) in complex plane
- **Polar (trigonometric) form**: z = r(cos θ + i sin θ) where r = |z|
- **De Moivre's Theorem**: zⁿ = rⁿ(cos(nθ) + i sin(nθ))
- **nth roots**: n equally spaced roots on a circle of radius r^(1/n)
      `
    },
    {
      id: 'polar7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'n equally spaced roots on a circle of radius r^(1/n)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'nth roots: n equally spaced roots on a circle of radius r^(1/n)'
          }
        ]
      }
    },
    {
      id: 'polar7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Complex number',
            options: ['z = a + bi plotted as (a, b) in complex plane', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Polar (trigonometric) form',
            options: ['z = r(cos θ + i sin θ) where r = |z|', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'De Moivre\'s Theorem',
            options: ['zⁿ = rⁿ(cos(nθ) + i sin(nθ))', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['z = a + bi plotted as (a, b) in complex plane', 'z = r(cos θ + i sin θ) where r = |z|', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
