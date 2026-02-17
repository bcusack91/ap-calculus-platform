export const oChemAminoAcidsPart2Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino2-intro',
      type: 'text' as const,
      content: `
# Acid-Base Properties

**Part 2 of 7 — Acid-Base Properties**

### 1. Amino acids are zwitterions at physiological pH

Amino acids are zwitterions at physiological pH

### 2. Isoelectric point (pI)

pH at which net charge = 0

### 3. Below pI

amino acid is cationic (+1)

### 4. Above pI

amino acid is anionic (-1)
      `
    },
    {
      id: 'amino2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Amino acids are zwitterions at…?',
            options: [
              'amino acid is cationic (+1)',
              'pH at which net charge = 0',
              'amino acid is anionic (-1)',
              'Amino acids are zwitterions at physiological pH'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Amino acids are zwitterions at physiological pH. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Below pI?',
            options: [
              'amino acid is anionic (-1)',
              'pH at which net charge = 0',
              'amino acid is cationic (+1)',
              'Amino acids are zwitterions at physiological pH'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Below pI: amino acid is cationic (+1). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'amino2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Amino acids are zwitterions at physiological pH**
- **Isoelectric point (pI)**: pH at which net charge = 0
- **Below pI**: amino acid is cationic (+1)
- **Above pI**: amino acid is anionic (-1)
      `
    },
    {
      id: 'amino2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to acid-base properties?',
            options: [
              'amino acid is anionic (-1)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Above pI: amino acid is anionic (-1)'
          }
        ]
      }
    },
    {
      id: 'amino2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Isoelectric point (pI)',
            options: ['pH at which net charge = 0', 'Amino acids are zwitterions at physiological pH', 'amino acid is cationic (+1)', 'amino acid is anionic (-1)']
          },
          {
            label: 'Below pI',
            options: ['pH at which net charge = 0', 'Amino acids are zwitterions at physiological pH', 'amino acid is cationic (+1)', 'amino acid is anionic (-1)']
          },
          {
            label: 'Above pI',
            options: ['pH at which net charge = 0', 'amino acid is anionic (-1)', 'amino acid is cationic (+1)', 'Amino acids are zwitterions at physiological pH']
          }
        ],
        correctAnswers: ['pH at which net charge = 0', 'amino acid is cationic (+1)', 'amino acid is anionic (-1)'],
        hint1: 'Think about what each concept specifically describes in Acid-Base Properties.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Acid-Base Properties describes a specific idea. Isoelectric point (pI): pH at which net charge = 0. Below pI: amino acid is cationic (+1). Above pI: amino acid is anionic (-1).'
      }
    }
  ]
}
