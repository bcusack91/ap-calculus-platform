export const oChemNMRPart6Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Predicting NMR spectra from structures

Predicting NMR spectra from structures

### 2. Determining structures from NMR data

Determining structures from NMR data

### 3. Combining IR, MS, and NMR data

Combining IR, MS, and NMR data

### 4. Practice problems with unknown identification

Practice problems with unknown identification
      `
    },
    {
      id: 'nmr-s6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Predicting NMR spectra from structures?',
            options: [
              'Combining IR, MS, and NMR data',
              'Determining structures from NMR data',
              'Predicting NMR spectra from structures',
              'Practice problems with unknown identification'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predicting NMR spectra from structures. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Combining IR, MS, and NMR data?',
            options: [
              'Determining structures from NMR data',
              'Practice problems with unknown identification',
              'Predicting NMR spectra from structures',
              'Combining IR, MS, and NMR data'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Combining IR, MS, and NMR data. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nmr-s6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Predicting NMR spectra from structures**
- **Determining structures from NMR data**
- **Combining IR, MS, and NMR data**
- **Practice problems with unknown identification**
      `
    },
    {
      id: 'nmr-s6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Practice problems with unknown identification',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Practice problems with unknown identification'
          }
        ]
      }
    },
    {
      id: 'nmr-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting NMR spectra from structures',
            options: ['Determining structures from NMR data', 'Practice problems with unknown identification', 'Combining IR, MS, and NMR data', 'Predicting NMR spectra from structures']
          },
          {
            label: 'Determining structures from NMR data',
            options: ['Combining IR, MS, and NMR data', 'Determining structures from NMR data', 'Practice problems with unknown identification', 'Predicting NMR spectra from structures']
          },
          {
            label: 'Combining IR, MS, and NMR data',
            options: ['Determining structures from NMR data', 'Predicting NMR spectra from structures', 'Practice problems with unknown identification', 'Combining IR, MS, and NMR data']
          }
        ],
        correctAnswers: ['Predicting NMR spectra from structures', 'Determining structures from NMR data', 'Combining IR, MS, and NMR data'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Predicting NMR spectra from structures. Determining structures from NMR data. Combining IR, MS, and NMR data.'
      }
    }
  ]
}
