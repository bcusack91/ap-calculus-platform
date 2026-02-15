export const calcBCEulerAdvPart2Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler2-intro',
      type: 'text' as const,
      content: `
# Improving Accuracy

**Part 2 of 7 — Improving Accuracy**

### 1. Smaller step size Δx reduces error per step

Smaller step size Δx reduces error per step

### 2. Error compounds over many steps

Error compounds over many steps

### 3. Concavity affects accuracy

concave up → Euler underestimates (if increasing)

### 4. Better methods exist (Runge-Kutta) but Euler is what's tested on AP

Better methods exist (Runge-Kutta) but Euler is what's tested on AP
      `
    },
    {
      id: 'euler2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of improving accuracy?',
            options: [
              'Smaller step size Δx reduces error per step',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Smaller step size Δx reduces error per step'
          },
          {
            question: 'In the context of improving accuracy, which is accurate?',
            options: [
              'concave up → Euler underestimates (if increasing)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Concavity affects accuracy: concave up → Euler underestimates (if increasing)'
          }
        ]
      }
    },
    {
      id: 'euler2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Smaller step size Δx reduces error per step**
- **Error compounds over many steps**
- **Concavity affects accuracy**: concave up → Euler underestimates (if increasing)
- **Better methods exist (Runge-Kutta) but Euler is what's tested on AP**
      `
    },
    {
      id: 'euler2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to improving accuracy?',
            options: [
              'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP'
          }
        ]
      }
    },
    {
      id: 'euler2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Smaller step size Δx reduces error per step',
            options: ['Smaller step size Δx reduces error per step', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Error compounds over many steps',
            options: ['Error compounds over many steps', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Concavity affects accuracy',
            options: ['concave up → Euler underestimates (if increasing)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Smaller step size Δx reduces error per step', 'Error compounds over many steps', 'concave up → Euler underestimates (if increasing)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Improving Accuracy.'
      }
    }
  ]
}
