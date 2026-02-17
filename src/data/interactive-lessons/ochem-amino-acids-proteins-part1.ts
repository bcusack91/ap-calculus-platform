export const oChemAminoAcidsPart1Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Amino Acids Proteins

**Part 1 of 7 — Amino Acid Structure**

### 1. 20 standard amino acids with α-amino and α-carboxyl groups

20 standard amino acids with α-amino and α-carboxyl groups

### 2. All except glycine are chiral (L-configuration in nature)

All except glycine are chiral (L-configuration in nature)

### 3. R groups determine properties

nonpolar, polar, charged

### 4. Essential amino acids must be obtained from diet

Essential amino acids must be obtained from diet
      `
    },
    {
      id: 'amino1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains 20 standard amino acids with α-amino…?',
            options: [
              '20 standard amino acids with α-amino and α-carboxyl groups',
              'Essential amino acids must be obtained from diet',
              'nonpolar, polar, charged',
              'All except glycine are chiral (L-configuration in nature)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — 20 standard amino acids with α-amino and α-carboxyl groups. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about R groups determine properties?',
            options: [
              'All except glycine are chiral (L-configuration in nature)',
              '20 standard amino acids with α-amino and α-carboxyl groups',
              'Essential amino acids must be obtained from diet',
              'nonpolar, polar, charged'
            ],
            correctAnswer: 3,
            explanation: 'Correct — R groups determine properties: nonpolar, polar, charged. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'amino1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **20 standard amino acids with α-amino and α-carboxyl groups**
- **All except glycine are chiral (L-configuration in nature)**
- **R groups determine properties**: nonpolar, polar, charged
- **Essential amino acids must be obtained from diet**
      `
    },
    {
      id: 'amino1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amino acid structure?',
            options: [
              'Essential amino acids must be obtained from diet',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Essential amino acids must be obtained from diet'
          }
        ]
      }
    },
    {
      id: 'amino1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '20 standard amino acids with α-amino…',
            options: ['20 standard amino acids with α-amino and α-carboxyl groups', 'Essential amino acids must be obtained from diet', 'All except glycine are chiral (L-configuration in nature)', 'nonpolar, polar, charged']
          },
          {
            label: 'All except glycine are chiral…',
            options: ['nonpolar, polar, charged', 'Essential amino acids must be obtained from diet', '20 standard amino acids with α-amino and α-carboxyl groups', 'All except glycine are chiral (L-configuration in nature)']
          },
          {
            label: 'R groups determine properties',
            options: ['All except glycine are chiral (L-configuration in nature)', 'Essential amino acids must be obtained from diet', 'nonpolar, polar, charged', '20 standard amino acids with α-amino and α-carboxyl groups']
          }
        ],
        correctAnswers: ['20 standard amino acids with α-amino and α-carboxyl groups', 'All except glycine are chiral (L-configuration in nature)', 'nonpolar, polar, charged'],
        hint1: 'Think about what each concept specifically describes in ️ Amino Acids Proteins.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Amino Acids Proteins describes a specific idea. 20 standard amino acids with α-amino and α-carboxyl groups. All except glycine are chiral (L-configuration in nature). R groups determine properties: nonpolar, polar, charged.'
      }
    }
  ]
}
