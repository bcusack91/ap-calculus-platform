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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of properties of aromatic compounds?',
            options: [
              'Aromatic compounds undergo substitution, not addition',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Aromatic compounds undergo substitution, not addition'
          },
          {
            question: 'In the context of properties of aromatic compounds, which is accurate?',
            options: [
              'Higher melting/boiling points due to planarity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Higher melting/boiling points due to planarity'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aromatic compounds undergo substitution, not addition',
            options: ['Aromatic compounds undergo substitution, not addit', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Preserves aromaticity (stable π system)',
            options: ['Preserves aromaticity (stable π system)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Higher melting/boiling points due to planarity',
            options: ['Higher melting/boiling points due to planarity', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Aromatic compounds undergo substitution, not addit', 'Preserves aromaticity (stable π system)', 'Higher melting/boiling points due to planarity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Properties of Aromatic Compounds.'
      }
    }
  ]
}
