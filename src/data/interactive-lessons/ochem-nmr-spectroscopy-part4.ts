export const oChemNMRPart4Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s4-intro',
      type: 'text' as const,
      content: `
# ¹³C NMR

**Part 4 of 7 — ¹³C NMR**

### 1. ¹³C NMR

one signal per unique carbon environment

### 2. No splitting in broadband-decoupled ¹³C NMR

No splitting in broadband-decoupled ¹³C NMR

### 3. DEPT

distinguishes CH₃, CH₂, CH, and quaternary C

### 4. Chemical shifts span 0-220 ppm

Chemical shifts span 0-220 ppm
      `
    },
    {
      id: 'nmr-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ¹³c nmr?',
            options: [
              '¹³C NMR',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: '¹³C NMR: one signal per unique carbon environment'
          },
          {
            question: 'In the context of ¹³c nmr, which is accurate?',
            options: [
              'distinguishes CH₃, CH₂, CH, and quaternary C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'DEPT: distinguishes CH₃, CH₂, CH, and quaternary C'
          }
        ]
      }
    },
    {
      id: 'nmr-s4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **¹³C NMR**: one signal per unique carbon environment
- **No splitting in broadband-decoupled ¹³C NMR**
- **DEPT**: distinguishes CH₃, CH₂, CH, and quaternary C
- **Chemical shifts span 0-220 ppm**
      `
    },
    {
      id: 'nmr-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ¹³c nmr?',
            options: [
              'Chemical shifts span 0-220 ppm',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Chemical shifts span 0-220 ppm'
          }
        ]
      }
    },
    {
      id: 'nmr-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '¹³C NMR',
            options: ['one signal per unique carbon environment', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'No splitting in broadband-decoupled ¹³C NMR',
            options: ['No splitting in broadband-decoupled ¹³C NMR', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'DEPT',
            options: ['distinguishes CH₃, CH₂, CH, and quaternary C', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['one signal per unique carbon environment', 'No splitting in broadband-decoupled ¹³C NMR', 'distinguishes CH₃, CH₂, CH, and quaternary C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding ¹³C NMR.'
      }
    }
  ]
}
