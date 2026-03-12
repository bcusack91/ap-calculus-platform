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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Spectroscopy is essential for structure…?',
            options: [
              'IR identifies functional groups',
              'interpreting spectra systematically',
              'MS gives molecular weight and formula clues',
              'Spectroscopy is essential for structure determination'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Spectroscopy is essential for structure determination. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes MS gives molecular weight and formula…:',
            options: [
              'IR identifies functional groups',
              'MS gives molecular weight and formula clues',
              'interpreting spectra systematically',
              'Spectroscopy is essential for structure determination'
            ],
            correctAnswer: 1,
            explanation: 'Correct — MS gives molecular weight and formula clues. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spectroscopy is essential for structure…',
            options: ['interpreting spectra systematically', 'IR identifies functional groups', 'Spectroscopy is essential for structure determination', 'MS gives molecular weight and formula clues']
          },
          {
            label: 'IR identifies functional groups',
            options: ['Spectroscopy is essential for structure determination', 'MS gives molecular weight and formula clues', 'IR identifies functional groups', 'interpreting spectra systematically']
          },
          {
            label: 'MS gives molecular weight and formula…',
            options: ['interpreting spectra systematically', 'MS gives molecular weight and formula clues', 'Spectroscopy is essential for structure determination', 'IR identifies functional groups']
          }
        ],
        correctAnswers: ['Spectroscopy is essential for structure determination', 'IR identifies functional groups', 'MS gives molecular weight and formula clues'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Spectroscopy is essential for structure determination. IR identifies functional groups. MS gives molecular weight and formula clues.'
      }
    }
  ]
}
