export const oChemAminoAcidsPart4Data = {
  topicSlug: 'amino-acids-proteins',
  sections: [
    {
      id: 'amino4-intro',
      type: 'text' as const,
      content: `
# Protein Structure Levels

**Part 4 of 7 — Protein Structure Levels**

### 1. Primary

amino acid sequence

### 2. Secondary

α-helix and β-pleated sheet (H-bonds)

### 3. Tertiary

3D folding (R-group interactions)

### 4. Quaternary

multiple polypeptide chains together
      `
    },
    {
      id: 'amino4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of protein structure levels?',
            options: [
              'Primary',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Primary: amino acid sequence'
          },
          {
            question: 'In the context of protein structure levels, which is accurate?',
            options: [
              '3D folding (R-group interactions)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Tertiary: 3D folding (R-group interactions)'
          }
        ]
      }
    },
    {
      id: 'amino4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Primary**: amino acid sequence
- **Secondary**: α-helix and β-pleated sheet (H-bonds)
- **Tertiary**: 3D folding (R-group interactions)
- **Quaternary**: multiple polypeptide chains together
      `
    },
    {
      id: 'amino4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to protein structure levels?',
            options: [
              'multiple polypeptide chains together',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Quaternary: multiple polypeptide chains together'
          }
        ]
      }
    },
    {
      id: 'amino4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Primary',
            options: ['amino acid sequence', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Secondary',
            options: ['α-helix and β-pleated sheet (H-bonds)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Tertiary',
            options: ['3D folding (R-group interactions)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['amino acid sequence', 'α-helix and β-pleated sheet (H-bonds)', '3D folding (R-group interactions)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Protein Structure Levels.'
      }
    }
  ]
}
