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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Predicting NMR spectra from structures',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting NMR spectra from structures'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Combining IR, MS, and NMR data',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Combining IR, MS, and NMR data'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Predicting NMR spectra from structures',
            options: ['Predicting NMR spectra from structures', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Determining structures from NMR data',
            options: ['Determining structures from NMR data', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Combining IR, MS, and NMR data',
            options: ['Combining IR, MS, and NMR data', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Predicting NMR spectra from structures', 'Determining structures from NMR data', 'Combining IR, MS, and NMR data'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
