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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Primary?',
            options: [
              'amino acid sequence',
              'multiple polypeptide chains together',
              'α-helix and β-pleated sheet (H-bonds)',
              '3D folding (R-group interactions)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Primary: amino acid sequence. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Tertiary?',
            options: [
              'multiple polypeptide chains together',
              'α-helix and β-pleated sheet (H-bonds)',
              '3D folding (R-group interactions)',
              'amino acid sequence'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Tertiary: 3D folding (R-group interactions). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Primary',
            options: ['multiple polypeptide chains together', 'α-helix and β-pleated sheet (H-bonds)', '3D folding (R-group interactions)', 'amino acid sequence']
          },
          {
            label: 'Secondary',
            options: ['α-helix and β-pleated sheet (H-bonds)', '3D folding (R-group interactions)', 'amino acid sequence', 'multiple polypeptide chains together']
          },
          {
            label: 'Tertiary',
            options: ['amino acid sequence', 'multiple polypeptide chains together', 'α-helix and β-pleated sheet (H-bonds)', '3D folding (R-group interactions)']
          }
        ],
        correctAnswers: ['amino acid sequence', 'α-helix and β-pleated sheet (H-bonds)', '3D folding (R-group interactions)'],
        hint1: 'Think about what each concept specifically describes in Protein Structure Levels.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Protein Structure Levels describes a specific idea. Primary: amino acid sequence. Secondary: α-helix and β-pleated sheet (H-bonds). Tertiary: 3D folding (R-group interactions).'
      }
    }
  ]
}
