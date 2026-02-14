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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amino acid reactions?',
            options: [
              'Strecker synthesis',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Strecker synthesis: aldehyde + NH₃ + HCN → amino acid'
          },
          {
            question: 'In the context of amino acid reactions, which is accurate?',
            options: [
              'detects amino acids (purple color)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Ninhydrin test: detects amino acids (purple color)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Strecker synthesis',
            options: ['aldehyde + NH₃ + HCN → amino acid', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Gabriel malonic ester synthesis',
            options: ['phthalimide route', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Ninhydrin test',
            options: ['detects amino acids (purple color)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['aldehyde + NH₃ + HCN → amino acid', 'phthalimide route', 'detects amino acids (purple color)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amino Acid Reactions.'
      }
    }
  ]
}
