export const oChemIRMSPart4Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra4-intro',
      type: 'text' as const,
      content: `
# Mass Spectrometry

**Part 4 of 7 — Mass Spectrometry**

### 1. Mass spectrometry

measures mass-to-charge ratio (m/z)

### 2. Molecular ion peak (M⁺)

gives molecular weight

### 3. M+1 peak

¹³C isotope

### 4. M+2 peak

Cl (35/37) or Br (79/81) isotope pattern
      `
    },
    {
      id: 'infra4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of mass spectrometry?',
            options: [
              'Mass spectrometry',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Mass spectrometry: measures mass-to-charge ratio (m/z)'
          },
          {
            question: 'In the context of mass spectrometry, which is accurate?',
            options: [
              '¹³C isotope',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'M+1 peak: ¹³C isotope'
          }
        ]
      }
    },
    {
      id: 'infra4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Mass spectrometry**: measures mass-to-charge ratio (m/z)
- **Molecular ion peak (M⁺)**: gives molecular weight
- **M+1 peak**: ¹³C isotope
- **M+2 peak**: Cl (35/37) or Br (79/81) isotope pattern
      `
    },
    {
      id: 'infra4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to mass spectrometry?',
            options: [
              'Cl (35/37) or Br (79/81) isotope pattern',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'M+2 peak: Cl (35/37) or Br (79/81) isotope pattern'
          }
        ]
      }
    },
    {
      id: 'infra4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mass spectrometry',
            options: ['measures mass-to-charge ratio (m/z)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Molecular ion peak (M⁺)',
            options: ['gives molecular weight', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'M+1 peak',
            options: ['¹³C isotope', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['measures mass-to-charge ratio (m/z)', 'gives molecular weight', '¹³C isotope'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Mass Spectrometry.'
      }
    }
  ]
}
