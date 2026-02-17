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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Enantiomers" refer to in this topic?',
            options: [
              'mirror images, not superimposable',
              'stereoisomers that are NOT mirror images',
              'n stereocenters → max 2ⁿ stereoisomers',
              'contain stereocenters but have internal plane of symmetry'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Enantiomers: mirror images, not superimposable. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Meso compounds:',
            options: [
              'stereoisomers that are NOT mirror images',
              'contain stereocenters but have internal plane of symmetry',
              'mirror images, not superimposable',
              'n stereocenters → max 2ⁿ stereoisomers'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Meso compounds: contain stereocenters but have internal plane of symmetry. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Enantiomers',
            options: ['n stereocenters → max 2ⁿ stereoisomers', 'mirror images, not superimposable', 'stereoisomers that are NOT mirror images', 'contain stereocenters but have internal plane of symmetry']
          },
          {
            label: 'Diastereomers',
            options: ['stereoisomers that are NOT mirror images', 'n stereocenters → max 2ⁿ stereoisomers', 'contain stereocenters but have internal plane of symmetry', 'mirror images, not superimposable']
          },
          {
            label: 'Meso compounds',
            options: ['mirror images, not superimposable', 'stereoisomers that are NOT mirror images', 'contain stereocenters but have internal plane of symmetry', 'n stereocenters → max 2ⁿ stereoisomers']
          }
        ],
        correctAnswers: ['mirror images, not superimposable', 'stereoisomers that are NOT mirror images', 'contain stereocenters but have internal plane of symmetry'],
        hint1: 'Think about what each concept specifically describes in Stereoisomer Types.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Stereoisomer Types describes a specific idea. Enantiomers: mirror images, not superimposable. Diastereomers: stereoisomers that are NOT mirror images. Meso compounds: contain stereocenters but have internal plane of symmetry.'
      }
    }
  ]
}
