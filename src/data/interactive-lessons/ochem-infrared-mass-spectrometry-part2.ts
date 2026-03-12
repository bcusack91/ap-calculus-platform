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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes IR measures bond vibrations (stretching…?',
            options: [
              'above 1500 cm⁻¹ (functional groups)',
              'IR measures bond vibrations (stretching and bending)',
              'below 1500 cm⁻¹ (complex, unique)',
              'Frequency measured in wavenumbers (cm⁻¹)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — IR measures bond vibrations (stretching and bending). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Infrared (IR) Spectroscopy, which explains Fingerprint region?',
            options: [
              'IR measures bond vibrations (stretching and bending)',
              'Frequency measured in wavenumbers (cm⁻¹)',
              'above 1500 cm⁻¹ (functional groups)',
              'below 1500 cm⁻¹ (complex, unique)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Fingerprint region: below 1500 cm⁻¹ (complex, unique). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fingerprint region',
            options: ['Frequency measured in wavenumbers (cm⁻¹)', 'above 1500 cm⁻¹ (functional groups)', 'IR measures bond vibrations (stretching and bending)', 'below 1500 cm⁻¹ (complex, unique)']
          },
          {
            label: 'Diagnostic region',
            options: ['above 1500 cm⁻¹ (functional groups)', 'IR measures bond vibrations (stretching and bending)', 'Frequency measured in wavenumbers (cm⁻¹)', 'below 1500 cm⁻¹ (complex, unique)']
          }
        ],
        correctAnswers: ['below 1500 cm⁻¹ (complex, unique)', 'above 1500 cm⁻¹ (functional groups)'],
        hint1: 'Think about what each concept specifically describes in Infrared (IR) Spectroscopy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Infrared (IR) Spectroscopy describes a specific idea. Fingerprint region: below 1500 cm⁻¹ (complex, unique). Diagnostic region: above 1500 cm⁻¹ (functional groups).'
      }
    }
  ]
}
