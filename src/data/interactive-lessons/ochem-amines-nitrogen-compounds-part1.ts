export const oChemAminesPart1Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Amines Nitrogen Compounds

**Part 1 of 7 — Amine Classification & Properties**

### 1. Amines

nitrogen with lone pair and up to 3 R groups

### 2. Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)

Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)

### 3. Quaternary ammonium (R₄N⁺)

positively charged

### 4. Amines are bases and nucleophiles

Amines are bases and nucleophiles
      `
    },
    {
      id: 'amine1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amine classification & properties?',
            options: [
              'Amines',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Amines: nitrogen with lone pair and up to 3 R groups'
          },
          {
            question: 'In the context of amine classification & properties, which is accurate?',
            options: [
              'positively charged',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Quaternary ammonium (R₄N⁺): positively charged'
          }
        ]
      }
    },
    {
      id: 'amine1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Amines**: nitrogen with lone pair and up to 3 R groups
- **Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)**
- **Quaternary ammonium (R₄N⁺)**: positively charged
- **Amines are bases and nucleophiles**
      `
    },
    {
      id: 'amine1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amine classification & properties?',
            options: [
              'Amines are bases and nucleophiles',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Amines are bases and nucleophiles'
          }
        ]
      }
    },
    {
      id: 'amine1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amines',
            options: ['nitrogen with lone pair and up to 3 R groups', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)',
            options: ['Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Quaternary ammonium (R₄N⁺)',
            options: ['positively charged', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['nitrogen with lone pair and up to 3 R groups', 'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)', 'positively charged'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amine Classification & Properties.'
      }
    }
  ]
}
