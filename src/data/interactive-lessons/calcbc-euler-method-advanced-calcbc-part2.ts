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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Smaller step size Δx reduces error per…?',
            options: [
              'concave up → Euler underestimates (if increasing)',
              'Error compounds over many steps',
              'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP',
              'Smaller step size Δx reduces error per step'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Smaller step size Δx reduces error per step. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Concavity affects accuracy:',
            options: [
              'Error compounds over many steps',
              'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP',
              'concave up → Euler underestimates (if increasing)',
              'Smaller step size Δx reduces error per step'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Concavity affects accuracy: concave up → Euler underestimates (if increasing). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Improving Accuracy, which correctly describes Better methods exist (Runge-Kutta) but…?',
            options: [
              'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP',
              'concave up → Euler underestimates (if increasing)',
              'Smaller step size Δx reduces error per step',
              'Error compounds over many steps'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'euler2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Smaller step size Δx reduces error per…',
            options: ['Smaller step size Δx reduces error per step', 'Error compounds over many steps', 'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP', 'concave up → Euler underestimates (if increasing)']
          },
          {
            label: 'Error compounds over many steps',
            options: ['Error compounds over many steps', 'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP', 'concave up → Euler underestimates (if increasing)', 'Smaller step size Δx reduces error per step']
          },
          {
            label: 'Concavity affects accuracy',
            options: ['Error compounds over many steps', 'Smaller step size Δx reduces error per step', 'Better methods exist (Runge-Kutta) but Euler is what\'s tested on AP', 'concave up → Euler underestimates (if increasing)']
          }
        ],
        correctAnswers: ['Smaller step size Δx reduces error per step', 'Error compounds over many steps', 'concave up → Euler underestimates (if increasing)'],
        hint1: 'Think about what each concept specifically describes in Improving Accuracy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Improving Accuracy describes a specific idea. Smaller step size Δx reduces error per step. Error compounds over many steps. Concavity affects accuracy: concave up → Euler underestimates (if increasing).'
      }
    }
  ]
}
