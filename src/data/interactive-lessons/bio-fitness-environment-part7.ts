export const bioFitnessPart7Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn7-intro-p7',
      type: 'text' as const,
      content: `
# ## Fitness & Environment: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Fitness connects to evolution and ecology
2. Environment shapes phenotype and selection
3. Adaptation vs acclimation distinction
4. AP free-response strategies for fitness questions
      `
    },
    {
      id: 'fitn7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Fitness connects to evolution and…?',
            options: [
              'Environment shapes phenotype and selection',
              'Fitness connects to evolution and ecology',
              'Adaptation vs acclimation distinction',
              'AP free-response strategies for fitness questions'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fitness connects to evolution and ecology. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Adaptation vs acclimation distinction?',
            options: [
              'AP free-response strategies for fitness questions',
              'Adaptation vs acclimation distinction',
              'Fitness connects to evolution and ecology',
              'Environment shapes phenotype and selection'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Adaptation vs acclimation distinction. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'fitn7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fitness connects to evolution and ecology**
- **Environment shapes phenotype and selection**
- **Adaptation vs acclimation distinction**
- **AP free-response strategies for fitness questions**
      `
    },
    {
      id: 'fitn7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Fitness & Environment: Synthesis & AP Review, which correctly describes AP free-response strategies for fitness…?',
            options: [
              'AP free-response strategies for fitness questions',
              'Environment shapes phenotype and selection',
              'Adaptation vs acclimation distinction',
              'Fitness connects to evolution and ecology'
            ],
            correctAnswer: 0,
            explanation: 'Correct — AP free-response strategies for fitness questions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fitness connects to evolution and…',
            options: ['AP free-response strategies for fitness questions', 'Adaptation vs acclimation distinction', 'Fitness connects to evolution and ecology', 'Environment shapes phenotype and selection']
          },
          {
            label: 'Environment shapes phenotype and…',
            options: ['Fitness connects to evolution and ecology', 'Adaptation vs acclimation distinction', 'Environment shapes phenotype and selection', 'AP free-response strategies for fitness questions']
          },
          {
            label: 'Adaptation vs acclimation distinction',
            options: ['AP free-response strategies for fitness questions', 'Adaptation vs acclimation distinction', 'Fitness connects to evolution and ecology', 'Environment shapes phenotype and selection']
          }
        ],
        correctAnswers: ['Fitness connects to evolution and ecology', 'Environment shapes phenotype and selection', 'Adaptation vs acclimation distinction'],
        hint1: 'Think about what each concept specifically describes in Fitness & Environment: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Fitness & Environment: Synthesis & AP Review describes a specific idea. Fitness connects to evolution and ecology. Environment shapes phenotype and selection. Adaptation vs acclimation distinction.'
      }
    }
  ]
}
