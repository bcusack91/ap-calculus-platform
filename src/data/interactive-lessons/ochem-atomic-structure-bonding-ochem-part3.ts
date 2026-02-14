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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of hybridization?',
            options: [
              'sp³ hybridization',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'sp³ hybridization: 4 bonds, tetrahedral (109.5°)'
          },
          {
            question: 'In the context of hybridization, which is accurate?',
            options: [
              '2 bonds, linear (180°)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'sp hybridization: 2 bonds, linear (180°)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sp³ hybridization',
            options: ['4 bonds, tetrahedral (109.5°)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'sp² hybridization',
            options: ['3 bonds, trigonal planar (120°)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'sp hybridization',
            options: ['2 bonds, linear (180°)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['4 bonds, tetrahedral (109.5°)', '3 bonds, trigonal planar (120°)', '2 bonds, linear (180°)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Hybridization.'
      }
    }
  ]
}
