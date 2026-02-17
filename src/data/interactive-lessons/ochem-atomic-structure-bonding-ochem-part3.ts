export const oChemAtomicBondingPart3Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi3-intro',
      type: 'text' as const,
      content: `
# Hybridization

**Part 3 of 7 — Hybridization**

### 1. sp³ hybridization

4 bonds, tetrahedral (109.5°)

### 2. sp² hybridization

3 bonds, trigonal planar (120°)

### 3. sp hybridization

2 bonds, linear (180°)

### 4. Hybridization determines molecular geometry

Hybridization determines molecular geometry
      `
    },
    {
      id: 'atomi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "sp³ hybridization" refer to in this topic?',
            options: [
              '3 bonds, trigonal planar (120°)',
              '4 bonds, tetrahedral (109.5°)',
              'Hybridization determines molecular geometry',
              '2 bonds, linear (180°)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — sp³ hybridization: 4 bonds, tetrahedral (109.5°). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes sp hybridization:',
            options: [
              'Hybridization determines molecular geometry',
              '4 bonds, tetrahedral (109.5°)',
              '2 bonds, linear (180°)',
              '3 bonds, trigonal planar (120°)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — sp hybridization: 2 bonds, linear (180°). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'atomi3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **sp³ hybridization**: 4 bonds, tetrahedral (109.5°)
- **sp² hybridization**: 3 bonds, trigonal planar (120°)
- **sp hybridization**: 2 bonds, linear (180°)
- **Hybridization determines molecular geometry**
      `
    },
    {
      id: 'atomi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to hybridization?',
            options: [
              'Hybridization determines molecular geometry',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Hybridization determines molecular geometry'
          }
        ]
      }
    },
    {
      id: 'atomi3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sp³ hybridization',
            options: ['3 bonds, trigonal planar (120°)', '4 bonds, tetrahedral (109.5°)', '2 bonds, linear (180°)', 'Hybridization determines molecular geometry']
          },
          {
            label: 'sp² hybridization',
            options: ['2 bonds, linear (180°)', '3 bonds, trigonal planar (120°)', 'Hybridization determines molecular geometry', '4 bonds, tetrahedral (109.5°)']
          },
          {
            label: 'sp hybridization',
            options: ['Hybridization determines molecular geometry', '4 bonds, tetrahedral (109.5°)', '2 bonds, linear (180°)', '3 bonds, trigonal planar (120°)']
          }
        ],
        correctAnswers: ['4 bonds, tetrahedral (109.5°)', '3 bonds, trigonal planar (120°)', '2 bonds, linear (180°)'],
        hint1: 'Think about what each concept specifically describes in Hybridization.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hybridization describes a specific idea. sp³ hybridization: 4 bonds, tetrahedral (109.5°). sp² hybridization: 3 bonds, trigonal planar (120°). sp hybridization: 2 bonds, linear (180°).'
      }
    }
  ]
}
