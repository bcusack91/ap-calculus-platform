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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Cyclopropane?',
            options: [
              'nearly strain-free',
              'no angle strain (chair conformation)',
              'still significant strain',
              'highest ring strain (angle strain 60° vs 109.5°)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Cyclopropane: highest ring strain (angle strain 60° vs 109.5°). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Cyclopentane?',
            options: [
              'still significant strain',
              'nearly strain-free',
              'no angle strain (chair conformation)',
              'highest ring strain (angle strain 60° vs 109.5°)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cyclopentane: nearly strain-free. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cyclopropane',
            options: ['highest ring strain (angle strain 60° vs 109.5°)', 'still significant strain', 'no angle strain (chair conformation)', 'nearly strain-free']
          },
          {
            label: 'Cyclobutane',
            options: ['no angle strain (chair conformation)', 'still significant strain', 'nearly strain-free', 'highest ring strain (angle strain 60° vs 109.5°)']
          },
          {
            label: 'Cyclopentane',
            options: ['highest ring strain (angle strain 60° vs 109.5°)', 'still significant strain', 'nearly strain-free', 'no angle strain (chair conformation)']
          }
        ],
        correctAnswers: ['highest ring strain (angle strain 60° vs 109.5°)', 'still significant strain', 'nearly strain-free'],
        hint1: 'Think about what each concept specifically describes in Ring Strain.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ring Strain describes a specific idea. Cyclopropane: highest ring strain (angle strain 60° vs 109.5°). Cyclobutane: still significant strain. Cyclopentane: nearly strain-free.'
      }
    }
  ]
}
