export const oChemAlkanesPart2Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan2-intro',
      type: 'text' as const,
      content: `
# Conformational Analysis

**Part 2 of 7 — Conformational Analysis**

### 1. Newman projections

view along C-C bond

### 2. Staggered

60° dihedral angle (more stable)

### 3. Eclipsed

0° dihedral angle (less stable)

### 4. Anti conformation

substituents 180° apart (most stable)
      `
    },
    {
      id: 'alkan2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Newman projections?',
            options: [
              '60° dihedral angle (more stable)',
              'view along C-C bond',
              'substituents 180° apart (most stable)',
              '0° dihedral angle (less stable)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Newman projections: view along C-C bond. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Eclipsed?',
            options: [
              '60° dihedral angle (more stable)',
              'view along C-C bond',
              'substituents 180° apart (most stable)',
              '0° dihedral angle (less stable)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Eclipsed: 0° dihedral angle (less stable). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkan2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Newman projections**: view along C-C bond
- **Staggered**: 60° dihedral angle (more stable)
- **Eclipsed**: 0° dihedral angle (less stable)
- **Anti conformation**: substituents 180° apart (most stable)
      `
    },
    {
      id: 'alkan2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to conformational analysis?',
            options: [
              'substituents 180° apart (most stable)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Anti conformation: substituents 180° apart (most stable)'
          }
        ]
      }
    },
    {
      id: 'alkan2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Newman projections',
            options: ['60° dihedral angle (more stable)', '0° dihedral angle (less stable)', 'substituents 180° apart (most stable)', 'view along C-C bond']
          },
          {
            label: 'Staggered',
            options: ['view along C-C bond', 'substituents 180° apart (most stable)', '0° dihedral angle (less stable)', '60° dihedral angle (more stable)']
          },
          {
            label: 'Eclipsed',
            options: ['view along C-C bond', '0° dihedral angle (less stable)', '60° dihedral angle (more stable)', 'substituents 180° apart (most stable)']
          }
        ],
        correctAnswers: ['view along C-C bond', '60° dihedral angle (more stable)', '0° dihedral angle (less stable)'],
        hint1: 'Think about what each concept specifically describes in Conformational Analysis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Conformational Analysis describes a specific idea. Newman projections: view along C-C bond. Staggered: 60° dihedral angle (more stable). Eclipsed: 0° dihedral angle (less stable).'
      }
    }
  ]
}
