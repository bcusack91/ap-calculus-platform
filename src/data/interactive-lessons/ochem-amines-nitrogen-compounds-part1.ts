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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Amines" refer to in this topic?',
            options: [
              'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)',
              'positively charged',
              'Amines are bases and nucleophiles',
              'nitrogen with lone pair and up to 3 R groups'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Amines: nitrogen with lone pair and up to 3 R groups. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ️ Amines Nitrogen Compounds, which explains Quaternary ammonium (R₄N⁺)?',
            options: [
              'positively charged',
              'Amines are bases and nucleophiles',
              'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)',
              'nitrogen with lone pair and up to 3 R groups'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Quaternary ammonium (R₄N⁺): positively charged. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amines',
            options: ['positively charged', 'Amines are bases and nucleophiles', 'nitrogen with lone pair and up to 3 R groups', 'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)']
          },
          {
            label: 'Quaternary ammonium (R₄N⁺)',
            options: ['Amines are bases and nucleophiles', 'nitrogen with lone pair and up to 3 R groups', 'Primary (RNH₂), secondary (R₂NH), tertiary (R₃N)', 'positively charged']
          }
        ],
        correctAnswers: ['nitrogen with lone pair and up to 3 R groups', 'positively charged'],
        hint1: 'Think about what each concept specifically describes in ️ Amines Nitrogen Compounds.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Amines Nitrogen Compounds describes a specific idea. Amines: nitrogen with lone pair and up to 3 R groups. Quaternary ammonium (R₄N⁺): positively charged.'
      }
    }
  ]
}
