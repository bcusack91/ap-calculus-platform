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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of conformational analysis?',
            options: [
              'Newman projections',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Newman projections: view along C-C bond'
          },
          {
            question: 'In the context of conformational analysis, which is accurate?',
            options: [
              '0° dihedral angle (less stable)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Eclipsed: 0° dihedral angle (less stable)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Newman projections',
            options: ['view along C-C bond', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Staggered',
            options: ['60° dihedral angle (more stable)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Eclipsed',
            options: ['0° dihedral angle (less stable)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['view along C-C bond', '60° dihedral angle (more stable)', '0° dihedral angle (less stable)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Conformational Analysis.'
      }
    }
  ]
}
