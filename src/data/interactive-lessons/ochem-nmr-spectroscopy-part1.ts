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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes NMR?',
            options: [
              'nuclei in magnetic field absorb radiofrequency energy',
              'Equivalent protons give one signal',
              'Number of signals = number of unique proton environments',
              'position of signal in ppm'
            ],
            correctAnswer: 0,
            explanation: 'Correct — NMR: nuclei in magnetic field absorb radiofrequency energy. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ NMR Spectroscopy, which explains Number of signals = number of unique…?',
            options: [
              'position of signal in ppm',
              'nuclei in magnetic field absorb radiofrequency energy',
              'Number of signals = number of unique proton environments',
              'Equivalent protons give one signal'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Number of signals = number of unique proton environments. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'NMR',
            options: ['Equivalent protons give one signal', 'nuclei in magnetic field absorb radiofrequency energy', 'position of signal in ppm', 'Number of signals = number of unique proton environments']
          },
          {
            label: 'Chemical shift (δ)',
            options: ['position of signal in ppm', 'Equivalent protons give one signal', 'Number of signals = number of unique proton environments', 'nuclei in magnetic field absorb radiofrequency energy']
          }
        ],
        correctAnswers: ['nuclei in magnetic field absorb radiofrequency energy', 'position of signal in ppm'],
        hint1: 'Think about what each concept specifically describes in ️ NMR Spectroscopy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ NMR Spectroscopy describes a specific idea. NMR: nuclei in magnetic field absorb radiofrequency energy. Chemical shift (δ): position of signal in ppm.'
      }
    }
  ]
}
