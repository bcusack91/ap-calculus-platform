export const bioNatSelectionPart2Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu2-intro-p2',
      type: 'text' as const,
      content: `
# ## Mechanisms of Natural Selection

**Part 2 of 7 — Mechanisms of Natural Selection**

1. Differential reproductive success
2. Selection acts on phenotypes, not genotypes
3. Environment determines which traits are favorable
4. Natural selection is the only mechanism that leads to adaptation
      `
    },
    {
      id: 'natu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Differential reproductive success?',
            options: [
              'Environment determines which traits are favorable',
              'Natural selection is the only mechanism that leads to adaptation',
              'Selection acts on phenotypes, not genotypes',
              'Differential reproductive success'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Differential reproductive success. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Mechanisms of Natural Selection, which explains Environment determines which traits are…?',
            options: [
              'Differential reproductive success',
              'Selection acts on phenotypes, not genotypes',
              'Environment determines which traits are favorable',
              'Natural selection is the only mechanism that leads to adaptation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Environment determines which traits are favorable. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'natu2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Differential reproductive success**
- **Selection acts on phenotypes, not genotypes**
- **Environment determines which traits are favorable**
- **Natural selection is the only mechanism that leads to adaptation**
      `
    },
    {
      id: 'natu2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Mechanisms of Natural Selection, which correctly describes Natural selection is the only mechanism…?',
            options: [
              'Differential reproductive success',
              'Selection acts on phenotypes, not genotypes',
              'Natural selection is the only mechanism that leads to adaptation',
              'Environment determines which traits are favorable'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Natural selection is the only mechanism that leads to adaptation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'natu2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differential reproductive success',
            options: ['Selection acts on phenotypes, not genotypes', 'Natural selection is the only mechanism that leads to adaptation', 'Differential reproductive success', 'Environment determines which traits are favorable']
          },
          {
            label: 'Selection acts on phenotypes, not…',
            options: ['Environment determines which traits are favorable', 'Differential reproductive success', 'Natural selection is the only mechanism that leads to adaptation', 'Selection acts on phenotypes, not genotypes']
          },
          {
            label: 'Environment determines which traits are…',
            options: ['Environment determines which traits are favorable', 'Selection acts on phenotypes, not genotypes', 'Differential reproductive success', 'Natural selection is the only mechanism that leads to adaptation']
          }
        ],
        correctAnswers: ['Differential reproductive success', 'Selection acts on phenotypes, not genotypes', 'Environment determines which traits are favorable'],
        hint1: 'Think about what each concept specifically describes in Mechanisms of Natural Selection.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mechanisms of Natural Selection describes a specific idea. Differential reproductive success. Selection acts on phenotypes, not genotypes. Environment determines which traits are favorable.'
      }
    }
  ]
}
