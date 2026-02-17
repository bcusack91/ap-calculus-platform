export const oChemLipidsPart1Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Lipids Nucleic Acids

**Part 1 of 7 — Fatty Acids & Triglycerides**

### 1. Fatty acids

long-chain carboxylic acids (12-20 carbons)

### 2. Saturated

no double bonds; Unsaturated: cis double bonds

### 3. Triglycerides

glycerol + 3 fatty acids (ester bonds)

### 4. Saponification

fat + NaOH → glycerol + soap (sodium carboxylate)
      `
    },
    {
      id: 'lipid1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Fatty acids?',
            options: [
              'fat + NaOH → glycerol + soap (sodium carboxylate)',
              'long-chain carboxylic acids (12-20 carbons)',
              'no double bonds; Unsaturated: cis double bonds',
              'glycerol + 3 fatty acids (ester bonds)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fatty acids: long-chain carboxylic acids (12-20 carbons). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Triglycerides:',
            options: [
              'fat + NaOH → glycerol + soap (sodium carboxylate)',
              'glycerol + 3 fatty acids (ester bonds)',
              'long-chain carboxylic acids (12-20 carbons)',
              'no double bonds; Unsaturated: cis double bonds'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Triglycerides: glycerol + 3 fatty acids (ester bonds). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'lipid1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Fatty acids**: long-chain carboxylic acids (12-20 carbons)
- **Saturated**: no double bonds; Unsaturated: cis double bonds
- **Triglycerides**: glycerol + 3 fatty acids (ester bonds)
- **Saponification**: fat + NaOH → glycerol + soap (sodium carboxylate)
      `
    },
    {
      id: 'lipid1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to fatty acids & triglycerides?',
            options: [
              'fat + NaOH → glycerol + soap (sodium carboxylate)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Saponification: fat + NaOH → glycerol + soap (sodium carboxylate)'
          }
        ]
      }
    },
    {
      id: 'lipid1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fatty acids',
            options: ['no double bonds; Unsaturated: cis double bonds', 'long-chain carboxylic acids (12-20 carbons)', 'fat + NaOH → glycerol + soap (sodium carboxylate)', 'glycerol + 3 fatty acids (ester bonds)']
          },
          {
            label: 'Saturated',
            options: ['long-chain carboxylic acids (12-20 carbons)', 'glycerol + 3 fatty acids (ester bonds)', 'no double bonds; Unsaturated: cis double bonds', 'fat + NaOH → glycerol + soap (sodium carboxylate)']
          },
          {
            label: 'Triglycerides',
            options: ['long-chain carboxylic acids (12-20 carbons)', 'no double bonds; Unsaturated: cis double bonds', 'glycerol + 3 fatty acids (ester bonds)', 'fat + NaOH → glycerol + soap (sodium carboxylate)']
          }
        ],
        correctAnswers: ['long-chain carboxylic acids (12-20 carbons)', 'no double bonds; Unsaturated: cis double bonds', 'glycerol + 3 fatty acids (ester bonds)'],
        hint1: 'Think about what each concept specifically describes in ️ Lipids Nucleic Acids.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Lipids Nucleic Acids describes a specific idea. Fatty acids: long-chain carboxylic acids (12-20 carbons). Saturated: no double bonds; Unsaturated: cis double bonds. Triglycerides: glycerol + 3 fatty acids (ester bonds).'
      }
    }
  ]
}
