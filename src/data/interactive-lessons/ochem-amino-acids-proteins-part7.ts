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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Amino acids are the building blocks of…?',
            options: [
              'Protein structure determines function',
              'amino acid chemistry and protein structure',
              'Acid-base chemistry determines amino acid behavior',
              'Amino acids are the building blocks of proteins'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Amino acids are the building blocks of proteins. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & Review, which explains Protein structure determines function?',
            options: [
              'Acid-base chemistry determines amino acid behavior',
              'Protein structure determines function',
              'amino acid chemistry and protein structure',
              'Amino acids are the building blocks of proteins'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Protein structure determines function. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amino acids are the building blocks of…',
            options: ['Acid-base chemistry determines amino acid behavior', 'amino acid chemistry and protein structure', 'Protein structure determines function', 'Amino acids are the building blocks of proteins']
          },
          {
            label: 'Acid-base chemistry determines amino…',
            options: ['Acid-base chemistry determines amino acid behavior', 'Protein structure determines function', 'Amino acids are the building blocks of proteins', 'amino acid chemistry and protein structure']
          },
          {
            label: 'Protein structure determines function',
            options: ['amino acid chemistry and protein structure', 'Protein structure determines function', 'Acid-base chemistry determines amino acid behavior', 'Amino acids are the building blocks of proteins']
          }
        ],
        correctAnswers: ['Amino acids are the building blocks of proteins', 'Acid-base chemistry determines amino acid behavior', 'Protein structure determines function'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Amino acids are the building blocks of proteins. Acid-base chemistry determines amino acid behavior. Protein structure determines function.'
      }
    }
  ]
}
