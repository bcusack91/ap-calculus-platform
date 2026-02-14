export const oChemIRMSPart2Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra2-intro',
      type: 'text' as const,
      content: `
# Infrared (IR) Spectroscopy

**Part 2 of 7 — Infrared (IR) Spectroscopy**

### 1. IR measures bond vibrations (stretching and bending)

IR measures bond vibrations (stretching and bending)

### 2. Frequency measured in wavenumbers (cm⁻¹)

Frequency measured in wavenumbers (cm⁻¹)

### 3. Fingerprint region

below 1500 cm⁻¹ (complex, unique)

### 4. Diagnostic region

above 1500 cm⁻¹ (functional groups)
      `
    },
    {
      id: 'infra2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of infrared (ir) spectroscopy?',
            options: [
              'IR measures bond vibrations (stretching and bending)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'IR measures bond vibrations (stretching and bending)'
          },
          {
            question: 'In the context of infrared (ir) spectroscopy, which is accurate?',
            options: [
              'below 1500 cm⁻¹ (complex, unique)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Fingerprint region: below 1500 cm⁻¹ (complex, unique)'
          }
        ]
      }
    },
    {
      id: 'infra2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **IR measures bond vibrations (stretching and bending)**
- **Frequency measured in wavenumbers (cm⁻¹)**
- **Fingerprint region**: below 1500 cm⁻¹ (complex, unique)
- **Diagnostic region**: above 1500 cm⁻¹ (functional groups)
      `
    },
    {
      id: 'infra2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to infrared (ir) spectroscopy?',
            options: [
              'above 1500 cm⁻¹ (functional groups)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Diagnostic region: above 1500 cm⁻¹ (functional groups)'
          }
        ]
      }
    },
    {
      id: 'infra2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IR measures bond vibrations (stretching and bending)',
            options: ['IR measures bond vibrations (stretching and bendin', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Frequency measured in wavenumbers (cm⁻¹)',
            options: ['Frequency measured in wavenumbers (cm⁻¹)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Fingerprint region',
            options: ['below 1500 cm⁻¹ (complex, unique)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['IR measures bond vibrations (stretching and bendin', 'Frequency measured in wavenumbers (cm⁻¹)', 'below 1500 cm⁻¹ (complex, unique)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Infrared (IR) Spectroscopy.'
      }
    }
  ]
}
