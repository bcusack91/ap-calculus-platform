export const oChemElimPart6Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting elimination products

Predicting elimination products

### 2. Distinguishing E1 from E2

Distinguishing E1 from E2

### 3. Choosing between substitution and elimination

Choosing between substitution and elimination

### 4. Drawing mechanisms and predicting stereochemistry

Drawing mechanisms and predicting stereochemistry
      `
    },
    {
      id: 'elimi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Predicting elimination products" refer to in this topic?',
            options: [
              'Choosing between substitution and elimination',
              'Predicting elimination products',
              'Drawing mechanisms and predicting stereochemistry',
              'Distinguishing E1 from E2'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Predicting elimination products. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Choosing between substitution and…:',
            options: [
              'Distinguishing E1 from E2',
              'Choosing between substitution and elimination',
              'Drawing mechanisms and predicting stereochemistry',
              'Predicting elimination products'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Choosing between substitution and elimination. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'elimi6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting elimination products**
- **Distinguishing E1 from E2**
- **Choosing between substitution and elimination**
- **Drawing mechanisms and predicting stereochemistry**
      `
    },
    {
      id: 'elimi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Drawing mechanisms and predicting stereochemistry',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Drawing mechanisms and predicting stereochemistry'
          }
        ]
      }
    },
    {
      id: 'elimi6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting elimination products',
            options: ['Predicting elimination products', 'Drawing mechanisms and predicting stereochemistry', 'Distinguishing E1 from E2', 'Choosing between substitution and elimination']
          },
          {
            label: 'Distinguishing E1 from E2',
            options: ['Choosing between substitution and elimination', 'Distinguishing E1 from E2', 'Drawing mechanisms and predicting stereochemistry', 'Predicting elimination products']
          },
          {
            label: 'Choosing between substitution and…',
            options: ['Drawing mechanisms and predicting stereochemistry', 'Predicting elimination products', 'Choosing between substitution and elimination', 'Distinguishing E1 from E2']
          }
        ],
        correctAnswers: ['Predicting elimination products', 'Distinguishing E1 from E2', 'Choosing between substitution and elimination'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Predicting elimination products. Distinguishing E1 from E2. Choosing between substitution and elimination.'
      }
    }
  ]
}
