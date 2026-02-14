export const oChemAminoAcidsPart7Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Amino acids are the building blocks of proteins

Amino acids are the building blocks of proteins

### 2. Acid-base chemistry determines amino acid behavior

Acid-base chemistry determines amino acid behavior

### 3. Protein structure determines function

Protein structure determines function

### 4. Review

amino acid chemistry and protein structure
      `
    },
    {
      id: 'amino7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Amino acids are the building blocks of proteins',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Amino acids are the building blocks of proteins'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Protein structure determines function',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Protein structure determines function'
          }
        ]
      }
    },
    {
      id: 'amino7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Amino acids are the building blocks of proteins**
- **Acid-base chemistry determines amino acid behavior**
- **Protein structure determines function**
- **Review**: amino acid chemistry and protein structure
      `
    },
    {
      id: 'amino7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'amino acid chemistry and protein structure',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: amino acid chemistry and protein structure'
          }
        ]
      }
    },
    {
      id: 'amino7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amino acids are the building blocks of proteins',
            options: ['Amino acids are the building blocks of proteins', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acid-base chemistry determines amino acid behavior',
            options: ['Acid-base chemistry determines amino acid behavior', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Protein structure determines function',
            options: ['Protein structure determines function', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Amino acids are the building blocks of proteins', 'Acid-base chemistry determines amino acid behavior', 'Protein structure determines function'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
