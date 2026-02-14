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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of fatty acids & triglycerides?',
            options: [
              'Fatty acids',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Fatty acids: long-chain carboxylic acids (12-20 carbons)'
          },
          {
            question: 'In the context of fatty acids & triglycerides, which is accurate?',
            options: [
              'glycerol + 3 fatty acids (ester bonds)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Triglycerides: glycerol + 3 fatty acids (ester bonds)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fatty acids',
            options: ['long-chain carboxylic acids (12-20 carbons)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Saturated',
            options: ['no double bonds; Unsaturated: cis double bonds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Triglycerides',
            options: ['glycerol + 3 fatty acids (ester bonds)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['long-chain carboxylic acids (12-20 carbons)', 'no double bonds; Unsaturated: cis double bonds', 'glycerol + 3 fatty acids (ester bonds)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Fatty Acids & Triglycerides.'
      }
    }
  ]
}
