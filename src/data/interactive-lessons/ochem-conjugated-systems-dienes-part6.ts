export const oChemConjugatedPart6Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'conju6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Drawing Diels-Alder products

Drawing Diels-Alder products

### 2. Predicting kinetic vs thermodynamic products

Predicting kinetic vs thermodynamic products

### 3. Retrosynthetic analysis using Diels-Alder

Retrosynthetic analysis using Diels-Alder

### 4. Interpreting UV-Vis spectra

Interpreting UV-Vis spectra
      `
    },
    {
      id: 'conju6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Drawing Diels-Alder products?',
            options: [
              'Retrosynthetic analysis using Diels-Alder',
              'Predicting kinetic vs thermodynamic products',
              'Drawing Diels-Alder products',
              'Interpreting UV-Vis spectra'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Drawing Diels-Alder products. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Retrosynthetic analysis using…?',
            options: [
              'Interpreting UV-Vis spectra',
              'Predicting kinetic vs thermodynamic products',
              'Drawing Diels-Alder products',
              'Retrosynthetic analysis using Diels-Alder'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Retrosynthetic analysis using Diels-Alder. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conju6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Drawing Diels-Alder products**
- **Predicting kinetic vs thermodynamic products**
- **Retrosynthetic analysis using Diels-Alder**
- **Interpreting UV-Vis spectra**
      `
    },
    {
      id: 'conju6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Interpreting UV-Vis spectra',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Interpreting UV-Vis spectra'
          }
        ]
      }
    },
    {
      id: 'conju6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drawing Diels-Alder products',
            options: ['Predicting kinetic vs thermodynamic products', 'Interpreting UV-Vis spectra', 'Retrosynthetic analysis using Diels-Alder', 'Drawing Diels-Alder products']
          },
          {
            label: 'Predicting kinetic vs thermodynamic…',
            options: ['Retrosynthetic analysis using Diels-Alder', 'Predicting kinetic vs thermodynamic products', 'Interpreting UV-Vis spectra', 'Drawing Diels-Alder products']
          },
          {
            label: 'Retrosynthetic analysis using…',
            options: ['Retrosynthetic analysis using Diels-Alder', 'Interpreting UV-Vis spectra', 'Drawing Diels-Alder products', 'Predicting kinetic vs thermodynamic products']
          }
        ],
        correctAnswers: ['Drawing Diels-Alder products', 'Predicting kinetic vs thermodynamic products', 'Retrosynthetic analysis using Diels-Alder'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Drawing Diels-Alder products. Predicting kinetic vs thermodynamic products. Retrosynthetic analysis using Diels-Alder.'
      }
    }
  ]
}
