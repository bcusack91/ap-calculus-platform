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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of acid-base properties?',
            options: [
              'Amino acids are zwitterions at physiological pH',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Amino acids are zwitterions at physiological pH'
          },
          {
            question: 'In the context of acid-base properties, which is accurate?',
            options: [
              'amino acid is cationic (+1)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Below pI: amino acid is cationic (+1)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amino acids are zwitterions at physiological pH',
            options: ['Amino acids are zwitterions at physiological pH', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Isoelectric point (pI)',
            options: ['pH at which net charge = 0', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Below pI',
            options: ['amino acid is cationic (+1)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Amino acids are zwitterions at physiological pH', 'pH at which net charge = 0', 'amino acid is cationic (+1)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Acid-Base Properties.'
      }
    }
  ]
}
