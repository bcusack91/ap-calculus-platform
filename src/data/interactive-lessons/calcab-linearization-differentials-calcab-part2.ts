export const calcABLinearizationPart2Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea2-intro',
      type: 'text' as const,
      content: `
# Differentials

**Part 2 of 7 — Differentials**

### 1. Differential

dy = f'(x)dx represents the change along the tangent line

### 2. Δy is the actual change in f; dy is the approximate change

Δy is the actual change in f; dy is the approximate change

### 3. dy ≈ Δy for small dx

dy ≈ Δy for small dx

### 4. dx is an independent variable; dy depends on both x and dx

dx is an independent variable; dy depends on both x and dx
      `
    },
    {
      id: 'linea2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Differential?',
            options: [
              'Δy is the actual change in f; dy is the approximate change',
              'dy ≈ Δy for small dx',
              'dx is an independent variable; dy depends on both x and dx',
              'dy = f\'(x)dx represents the change along the tangent line'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Differential: dy = f\'(x)dx represents the change along the tangent line. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Differentials, which explains dy ≈ Δy for small dx?',
            options: [
              'dy ≈ Δy for small dx',
              'dy = f\'(x)dx represents the change along the tangent line',
              'Δy is the actual change in f; dy is the approximate change',
              'dx is an independent variable; dy depends on both x and dx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — dy ≈ Δy for small dx. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'linea2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Differential**: dy = f'(x)dx represents the change along the tangent line
- **Δy is the actual change in f; dy is the approximate change**
- **dy ≈ Δy for small dx**
- **dx is an independent variable; dy depends on both x and dx**
      `
    },
    {
      id: 'linea2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Differentials, which correctly describes dx is an independent variable; dy…?',
            options: [
              'dx is an independent variable; dy depends on both x and dx',
              'dy = f\'(x)dx represents the change along the tangent line',
              'Δy is the actual change in f; dy is the approximate change',
              'dy ≈ Δy for small dx'
            ],
            correctAnswer: 0,
            explanation: 'Correct — dx is an independent variable; dy depends on both x and dx. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'linea2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differential',
            options: ['dy ≈ Δy for small dx', 'dy = f\'(x)dx represents the change along the tangent line', 'Δy is the actual change in f; dy is the approximate change', 'dx is an independent variable; dy depends on both x and dx']
          },
          {
            label: 'Δy is the actual change in f; dy is the…',
            options: ['dy = f\'(x)dx represents the change along the tangent line', 'Δy is the actual change in f; dy is the approximate change', 'dy ≈ Δy for small dx', 'dx is an independent variable; dy depends on both x and dx']
          },
          {
            label: 'dy ≈ Δy for small dx',
            options: ['dy ≈ Δy for small dx', 'Δy is the actual change in f; dy is the approximate change', 'dx is an independent variable; dy depends on both x and dx', 'dy = f\'(x)dx represents the change along the tangent line']
          }
        ],
        correctAnswers: ['dy = f\'(x)dx represents the change along the tangent line', 'Δy is the actual change in f; dy is the approximate change', 'dy ≈ Δy for small dx'],
        hint1: 'Think about what each concept specifically describes in Differentials.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Differentials describes a specific idea. Differential: dy = f\'(x)dx represents the change along the tangent line. Δy is the actual change in f; dy is the approximate change. dy ≈ Δy for small dx.'
      }
    }
  ]
}
