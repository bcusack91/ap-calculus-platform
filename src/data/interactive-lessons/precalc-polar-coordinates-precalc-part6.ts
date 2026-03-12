export const precalcPolarPart6Data = {
  topicSlug: 'polar-coordinates-precalc',
  sections: [
    {
      id: 'polar6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'polar6-quiz1',
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
              'n equally spaced roots on a circle of radius r^(1/n)',
              'z = a + bi plotted as (a, b) in complex plane',
              'zⁿ = rⁿ(cos(nθ) + i sin(nθ))'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Complex number: z = a + bi plotted as (a, b) in complex plane. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about De Moivre\'s Theorem?',
            options: [
              'n equally spaced roots on a circle of radius r^(1/n)',
              'z = r(cos θ + i sin θ) where r = |z|',
              'zⁿ = rⁿ(cos(nθ) + i sin(nθ))',
              'z = a + bi plotted as (a, b) in complex plane'
            ],
            correctAnswer: 2,
            explanation: 'Correct — De Moivre\'s Theorem: zⁿ = rⁿ(cos(nθ) + i sin(nθ)). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polar6-detail',
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
      id: 'polar6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
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
      id: 'polar6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Complex number',
            options: ['z = a + bi plotted as (a, b) in complex plane', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))', 'z = r(cos θ + i sin θ) where r = |z|', 'n equally spaced roots on a circle of radius r^(1/n)']
          },
          {
            label: 'Polar (trigonometric) form',
            options: ['z = r(cos θ + i sin θ) where r = |z|', 'z = a + bi plotted as (a, b) in complex plane', 'n equally spaced roots on a circle of radius r^(1/n)', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))']
          },
          {
            label: 'De Moivre\'s Theorem',
            options: ['z = a + bi plotted as (a, b) in complex plane', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))', 'z = r(cos θ + i sin θ) where r = |z|', 'n equally spaced roots on a circle of radius r^(1/n)']
          }
        ],
        correctAnswers: ['z = a + bi plotted as (a, b) in complex plane', 'z = r(cos θ + i sin θ) where r = |z|', 'zⁿ = rⁿ(cos(nθ) + i sin(nθ))'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Complex number: z = a + bi plotted as (a, b) in complex plane. Polar (trigonometric) form: z = r(cos θ + i sin θ) where r = |z|. De Moivre\'s Theorem: zⁿ = rⁿ(cos(nθ) + i sin(nθ)).'
      }
    }
  ]
}
