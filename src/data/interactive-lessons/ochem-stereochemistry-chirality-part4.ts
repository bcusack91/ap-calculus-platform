export const oChemStereoPart4Data = {
  topicSlug: 'stereochemistry-chirality',
  sections: [
    {
      id: 'stere4-intro',
      type: 'text' as const,
      content: `
# Stereoisomer Types

**Part 4 of 7 — Stereoisomer Types**

### 1. Enantiomers

mirror images, not superimposable

### 2. Diastereomers

stereoisomers that are NOT mirror images

### 3. Meso compounds

contain stereocenters but have internal plane of symmetry

### 4. n stereocenters → max 2ⁿ stereoisomers

n stereocenters → max 2ⁿ stereoisomers
      `
    },
    {
      id: 'stere4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of stereoisomer types?',
            options: [
              'Enantiomers',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Enantiomers: mirror images, not superimposable'
          },
          {
            question: 'In the context of stereoisomer types, which is accurate?',
            options: [
              'contain stereocenters but have internal plane of symmetry',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Meso compounds: contain stereocenters but have internal plane of symmetry'
          }
        ]
      }
    },
    {
      id: 'stere4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Enantiomers**: mirror images, not superimposable
- **Diastereomers**: stereoisomers that are NOT mirror images
- **Meso compounds**: contain stereocenters but have internal plane of symmetry
- **n stereocenters → max 2ⁿ stereoisomers**
      `
    },
    {
      id: 'stere4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to stereoisomer types?',
            options: [
              'n stereocenters → max 2ⁿ stereoisomers',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'n stereocenters → max 2ⁿ stereoisomers'
          }
        ]
      }
    },
    {
      id: 'stere4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enantiomers',
            options: ['mirror images, not superimposable', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Diastereomers',
            options: ['stereoisomers that are NOT mirror images', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Meso compounds',
            options: ['contain stereocenters but have internal plane of s', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['mirror images, not superimposable', 'stereoisomers that are NOT mirror images', 'contain stereocenters but have internal plane of s'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Stereoisomer Types.'
      }
    }
  ]
}
