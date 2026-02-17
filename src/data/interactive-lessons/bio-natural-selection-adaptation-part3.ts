export const bioNatSelectionPart3Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu3-intro-p3',
      type: 'text' as const,
      content: `
# ## Types of Selection

**Part 3 of 7 — Types of Selection**

1. Directional: favors one extreme phenotype
2. Stabilizing: favors intermediate phenotype
3. Disruptive: favors both extremes
4. Sexual selection: traits that increase mating success
      `
    },
    {
      id: 'natu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Directional?',
            options: [
              'favors one extreme phenotype',
              'favors both extremes',
              'traits that increase mating success',
              'favors intermediate phenotype'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Directional: favors one extreme phenotype. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Disruptive:',
            options: [
              'favors both extremes',
              'traits that increase mating success',
              'favors intermediate phenotype',
              'favors one extreme phenotype'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Disruptive: favors both extremes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Directional**: favors one extreme phenotype
- **Stabilizing**: favors intermediate phenotype
- **Disruptive**: favors both extremes
- **Sexual selection**: traits that increase mating success
      `
    },
    {
      id: 'natu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Sexual selection?',
            options: [
              'favors both extremes',
              'favors one extreme phenotype',
              'traits that increase mating success',
              'favors intermediate phenotype'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Sexual selection: traits that increase mating success. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Directional',
            options: ['favors one extreme phenotype', 'traits that increase mating success', 'favors both extremes', 'favors intermediate phenotype']
          },
          {
            label: 'Stabilizing',
            options: ['favors both extremes', 'favors intermediate phenotype', 'favors one extreme phenotype', 'traits that increase mating success']
          },
          {
            label: 'Disruptive',
            options: ['traits that increase mating success', 'favors one extreme phenotype', 'favors both extremes', 'favors intermediate phenotype']
          }
        ],
        correctAnswers: ['favors one extreme phenotype', 'favors intermediate phenotype', 'favors both extremes'],
        hint1: 'Think about what each concept specifically describes in Types of Selection.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Types of Selection describes a specific idea. Directional: favors one extreme phenotype. Stabilizing: favors intermediate phenotype. Disruptive: favors both extremes.'
      }
    }
  ]
}
