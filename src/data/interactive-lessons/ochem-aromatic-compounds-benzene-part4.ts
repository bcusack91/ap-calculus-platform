export const oChemAromaticPart4Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma4-intro',
      type: 'text' as const,
      content: `
# Properties of Aromatic Compounds

**Part 4 of 7 — Properties of Aromatic Compounds**

### 1. Aromatic compounds undergo substitution, not addition

Aromatic compounds undergo substitution, not addition

### 2. Preserves aromaticity (stable π system)

Preserves aromaticity (stable π system)

### 3. Higher melting/boiling points due to planarity

Higher melting/boiling points due to planarity

### 4. Many aromatic compounds have distinctive odors

Many aromatic compounds have distinctive odors
      `
    },
    {
      id: 'aroma4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Aromatic compounds undergo…" refer to in this topic?',
            options: [
              'Many aromatic compounds have distinctive odors',
              'Higher melting/boiling points due to planarity',
              'Aromatic compounds undergo substitution, not addition',
              'Preserves aromaticity (stable π system)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Aromatic compounds undergo substitution, not addition. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Higher melting/boiling points due to…?',
            options: [
              'Higher melting/boiling points due to planarity',
              'Aromatic compounds undergo substitution, not addition',
              'Many aromatic compounds have distinctive odors',
              'Preserves aromaticity (stable π system)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Higher melting/boiling points due to planarity. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aroma4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Aromatic compounds undergo substitution, not addition**
- **Preserves aromaticity (stable π system)**
- **Higher melting/boiling points due to planarity**
- **Many aromatic compounds have distinctive odors**
      `
    },
    {
      id: 'aroma4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to properties of aromatic compounds?',
            options: [
              'Many aromatic compounds have distinctive odors',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Many aromatic compounds have distinctive odors'
          }
        ]
      }
    },
    {
      id: 'aroma4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aromatic compounds undergo…',
            options: ['Preserves aromaticity (stable π system)', 'Higher melting/boiling points due to planarity', 'Many aromatic compounds have distinctive odors', 'Aromatic compounds undergo substitution, not addition']
          },
          {
            label: 'Preserves aromaticity (stable π system)',
            options: ['Higher melting/boiling points due to planarity', 'Preserves aromaticity (stable π system)', 'Many aromatic compounds have distinctive odors', 'Aromatic compounds undergo substitution, not addition']
          },
          {
            label: 'Higher melting/boiling points due to…',
            options: ['Higher melting/boiling points due to planarity', 'Many aromatic compounds have distinctive odors', 'Preserves aromaticity (stable π system)', 'Aromatic compounds undergo substitution, not addition']
          }
        ],
        correctAnswers: ['Aromatic compounds undergo substitution, not addition', 'Preserves aromaticity (stable π system)', 'Higher melting/boiling points due to planarity'],
        hint1: 'Think about what each concept specifically describes in Properties of Aromatic Compounds.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Properties of Aromatic Compounds describes a specific idea. Aromatic compounds undergo substitution, not addition. Preserves aromaticity (stable π system). Higher melting/boiling points due to planarity.'
      }
    }
  ]
}
