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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Complex number?',
            options: [
              'z = r(cos θ + i sin θ) where r = |z|',
              'zⁿ = rⁿ(cos(nθ) + i sin(nθ))',
              'n equally spaced roots on a circle of radius r^(1/n)',
              'z = a + bi plotted as (a, b) in complex plane'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Complex number: z = a + bi plotted as (a, b) in complex plane. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about De Moivre\'s Theorem?',
            options: [
              'zⁿ = rⁿ(cos(nθ) + i sin(nθ))',
              'z = a + bi plotted as (a, b) in complex plane',
              'z = r(cos θ + i sin θ) where r = |z|',
              'n equally spaced roots on a circle of radius r^(1/n)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — De Moivre\'s Theorem: zⁿ = rⁿ(cos(nθ) + i sin(nθ)). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Complex number',
            options: ['n equally spaced roots on a circle of radius r^(1/n)', 'z = r(cos θ + i sin θ) where r = |z|', 'z = a + bi plotted as (a, b) in complex plane', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))']
          },
          {
            label: 'Polar (trigonometric) form',
            options: ['n equally spaced roots on a circle of radius r^(1/n)', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))', 'z = a + bi plotted as (a, b) in complex plane', 'z = r(cos θ + i sin θ) where r = |z|']
          },
          {
            label: 'De Moivre\'s Theorem',
            options: ['z = r(cos θ + i sin θ) where r = |z|', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))', 'z = a + bi plotted as (a, b) in complex plane', 'n equally spaced roots on a circle of radius r^(1/n)']
          }
        ],
        correctAnswers: ['z = a + bi plotted as (a, b) in complex plane', 'z = r(cos θ + i sin θ) where r = |z|', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Complex number: z = a + bi plotted as (a, b) in complex plane. Polar (trigonometric) form: z = r(cos θ + i sin θ) where r = |z|. De Moivre\'s Theorem: zⁿ = rⁿ(cos(nθ) + i sin(nθ)).'
      }
    }
  ]
}
