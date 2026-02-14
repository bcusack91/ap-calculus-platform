export const oChemAlkanesPart4Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan4-intro',
      type: 'text' as const,
      content: `
# Ring Strain

**Part 4 of 7 — Ring Strain**

### 1. Cyclopropane

highest ring strain (angle strain 60° vs 109.5°)

### 2. Cyclobutane

still significant strain

### 3. Cyclopentane

nearly strain-free

### 4. Cyclohexane

no angle strain (chair conformation)
      `
    },
    {
      id: 'alkan4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ring strain?',
            options: [
              'Cyclopropane',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Cyclopropane: highest ring strain (angle strain 60° vs 109.5°)'
          },
          {
            question: 'In the context of ring strain, which is accurate?',
            options: [
              'nearly strain-free',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cyclopentane: nearly strain-free'
          }
        ]
      }
    },
    {
      id: 'alkan4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Cyclopropane**: highest ring strain (angle strain 60° vs 109.5°)
- **Cyclobutane**: still significant strain
- **Cyclopentane**: nearly strain-free
- **Cyclohexane**: no angle strain (chair conformation)
      `
    },
    {
      id: 'alkan4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ring strain?',
            options: [
              'no angle strain (chair conformation)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Cyclohexane: no angle strain (chair conformation)'
          }
        ]
      }
    },
    {
      id: 'alkan4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cyclopropane',
            options: ['highest ring strain (angle strain 60° vs 109.5°)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Cyclobutane',
            options: ['still significant strain', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Cyclopentane',
            options: ['nearly strain-free', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['highest ring strain (angle strain 60° vs 109.5°)', 'still significant strain', 'nearly strain-free'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ring Strain.'
      }
    }
  ]
}
