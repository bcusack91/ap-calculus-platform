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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Mass spectrometry?',
            options: [
              'measures mass-to-charge ratio (m/z)',
              '¹³C isotope',
              'gives molecular weight',
              'Cl (35/37) or Br (79/81) isotope pattern'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Mass spectrometry: measures mass-to-charge ratio (m/z). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Mass Spectrometry, which explains M+1 peak?',
            options: [
              'gives molecular weight',
              'measures mass-to-charge ratio (m/z)',
              '¹³C isotope',
              'Cl (35/37) or Br (79/81) isotope pattern'
            ],
            correctAnswer: 2,
            explanation: 'Correct — M+1 peak: ¹³C isotope. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mass spectrometry',
            options: ['Cl (35/37) or Br (79/81) isotope pattern', 'gives molecular weight', 'measures mass-to-charge ratio (m/z)', '¹³C isotope']
          },
          {
            label: 'Molecular ion peak (M⁺)',
            options: ['Cl (35/37) or Br (79/81) isotope pattern', '¹³C isotope', 'gives molecular weight', 'measures mass-to-charge ratio (m/z)']
          },
          {
            label: 'M+1 peak',
            options: ['Cl (35/37) or Br (79/81) isotope pattern', 'measures mass-to-charge ratio (m/z)', 'gives molecular weight', '¹³C isotope']
          }
        ],
        correctAnswers: ['measures mass-to-charge ratio (m/z)', 'gives molecular weight', '¹³C isotope'],
        hint1: 'Think about what each concept specifically describes in Mass Spectrometry.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mass Spectrometry describes a specific idea. Mass spectrometry: measures mass-to-charge ratio (m/z). Molecular ion peak (M⁺): gives molecular weight. M+1 peak: ¹³C isotope.'
      }
    }
  ]
}
