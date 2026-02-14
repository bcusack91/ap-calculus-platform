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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amino acid structure?',
            options: [
              '20 standard amino acids with α-amino and α-carboxyl groups',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: '20 standard amino acids with α-amino and α-carboxyl groups'
          },
          {
            question: 'In the context of amino acid structure, which is accurate?',
            options: [
              'nonpolar, polar, charged',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'R groups determine properties: nonpolar, polar, charged'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '20 standard amino acids with α-amino and α-carboxyl groups',
            options: ['20 standard amino acids with α-amino and α-carboxy', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'All except glycine are chiral (L-configuration in nature)',
            options: ['All except glycine are chiral (L-configuration in ', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'R groups determine properties',
            options: ['nonpolar, polar, charged', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['20 standard amino acids with α-amino and α-carboxy', 'All except glycine are chiral (L-configuration in ', 'nonpolar, polar, charged'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amino Acid Structure.'
      }
    }
  ]
}
