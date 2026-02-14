export const oChemNMRPart1Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s1-intro',
      type: 'text' as const,
      content: `
# ⚗️ NMR Spectroscopy

**Part 1 of 7 — ¹H NMR Basics**

### 1. NMR

nuclei in magnetic field absorb radiofrequency energy

### 2. Equivalent protons give one signal

Equivalent protons give one signal

### 3. Number of signals = number of unique proton environments

Number of signals = number of unique proton environments

### 4. Chemical shift (δ)

position of signal in ppm
      `
    },
    {
      id: 'nmr-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ¹h nmr basics?',
            options: [
              'NMR',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'NMR: nuclei in magnetic field absorb radiofrequency energy'
          },
          {
            question: 'In the context of ¹h nmr basics, which is accurate?',
            options: [
              'Number of signals = number of unique proton environments',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Number of signals = number of unique proton environments'
          }
        ]
      }
    },
    {
      id: 'nmr-s1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **NMR**: nuclei in magnetic field absorb radiofrequency energy
- **Equivalent protons give one signal**
- **Number of signals = number of unique proton environments**
- **Chemical shift (δ)**: position of signal in ppm
      `
    },
    {
      id: 'nmr-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ¹h nmr basics?',
            options: [
              'position of signal in ppm',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Chemical shift (δ): position of signal in ppm'
          }
        ]
      }
    },
    {
      id: 'nmr-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NMR',
            options: ['nuclei in magnetic field absorb radiofrequency ene', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Equivalent protons give one signal',
            options: ['Equivalent protons give one signal', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Number of signals = number of unique proton environments',
            options: ['Number of signals = number of unique proton enviro', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['nuclei in magnetic field absorb radiofrequency ene', 'Equivalent protons give one signal', 'Number of signals = number of unique proton enviro'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding ¹H NMR Basics.'
      }
    }
  ]
}
