export const oChemAminoAcidsPart5Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino5-intro',
      type: 'text' as const,
      content: `
# Amino Acid Reactions

**Part 5 of 7 — Amino Acid Reactions**

### 1. Strecker synthesis

aldehyde + NH₃ + HCN → amino acid

### 2. Gabriel malonic ester synthesis

phthalimide route

### 3. Ninhydrin test

detects amino acids (purple color)

### 4. Edman degradation

sequencing from N-terminus
      `
    },
    {
      id: 'amino5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Strecker synthesis?',
            options: [
              'phthalimide route',
              'detects amino acids (purple color)',
              'aldehyde + NH₃ + HCN → amino acid',
              'sequencing from N-terminus'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Strecker synthesis: aldehyde + NH₃ + HCN → amino acid. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Amino Acid Reactions, which explains Ninhydrin test?',
            options: [
              'phthalimide route',
              'detects amino acids (purple color)',
              'sequencing from N-terminus',
              'aldehyde + NH₃ + HCN → amino acid'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ninhydrin test: detects amino acids (purple color). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'amino5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Strecker synthesis**: aldehyde + NH₃ + HCN → amino acid
- **Gabriel malonic ester synthesis**: phthalimide route
- **Ninhydrin test**: detects amino acids (purple color)
- **Edman degradation**: sequencing from N-terminus
      `
    },
    {
      id: 'amino5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amino acid reactions?',
            options: [
              'sequencing from N-terminus',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Edman degradation: sequencing from N-terminus'
          }
        ]
      }
    },
    {
      id: 'amino5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Strecker synthesis',
            options: ['sequencing from N-terminus', 'aldehyde + NH₃ + HCN → amino acid', 'detects amino acids (purple color)', 'phthalimide route']
          },
          {
            label: 'Gabriel malonic ester synthesis',
            options: ['detects amino acids (purple color)', 'aldehyde + NH₃ + HCN → amino acid', 'phthalimide route', 'sequencing from N-terminus']
          },
          {
            label: 'Ninhydrin test',
            options: ['sequencing from N-terminus', 'phthalimide route', 'aldehyde + NH₃ + HCN → amino acid', 'detects amino acids (purple color)']
          }
        ],
        correctAnswers: ['aldehyde + NH₃ + HCN → amino acid', 'phthalimide route', 'detects amino acids (purple color)'],
        hint1: 'Think about what each concept specifically describes in Amino Acid Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Amino Acid Reactions describes a specific idea. Strecker synthesis: aldehyde + NH₃ + HCN → amino acid. Gabriel malonic ester synthesis: phthalimide route. Ninhydrin test: detects amino acids (purple color).'
      }
    }
  ]
}
