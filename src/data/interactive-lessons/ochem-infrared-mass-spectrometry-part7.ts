export const oChemIRMSPart7Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Spectroscopy is essential for structure determination

Spectroscopy is essential for structure determination

### 2. IR identifies functional groups

IR identifies functional groups

### 3. MS gives molecular weight and formula clues

MS gives molecular weight and formula clues

### 4. Review

interpreting spectra systematically
      `
    },
    {
      id: 'infra7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Spectroscopy is essential for structure determination',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Spectroscopy is essential for structure determination'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'MS gives molecular weight and formula clues',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'MS gives molecular weight and formula clues'
          }
        ]
      }
    },
    {
      id: 'infra7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Spectroscopy is essential for structure determination**
- **IR identifies functional groups**
- **MS gives molecular weight and formula clues**
- **Review**: interpreting spectra systematically
      `
    },
    {
      id: 'infra7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'interpreting spectra systematically',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: interpreting spectra systematically'
          }
        ]
      }
    },
    {
      id: 'infra7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spectroscopy is essential for structure determination',
            options: ['Spectroscopy is essential for structure determinat', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'IR identifies functional groups',
            options: ['IR identifies functional groups', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'MS gives molecular weight and formula clues',
            options: ['MS gives molecular weight and formula clues', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Spectroscopy is essential for structure determinat', 'IR identifies functional groups', 'MS gives molecular weight and formula clues'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
