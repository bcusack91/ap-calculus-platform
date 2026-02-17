export const bioFitnessPart4Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn4-intro-p4',
      type: 'text' as const,
      content: `
# ## Trade-offs in Energy Use

**Part 4 of 7 — Trade-offs in Energy Use**

1. Limited energy budget: reproduction vs growth vs survival
2. r-selected: many offspring, little parental care
3. K-selected: few offspring, high parental investment
4. Life history trade-offs shaped by natural selection
      `
    },
    {
      id: 'fitn4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Limited energy budget?',
            options: [
              'many offspring, little parental care',
              'reproduction vs growth vs survival',
              'few offspring, high parental investment',
              'Life history trade-offs shaped by natural selection'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Limited energy budget: reproduction vs growth vs survival. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about K-selected?',
            options: [
              'Life history trade-offs shaped by natural selection',
              'reproduction vs growth vs survival',
              'many offspring, little parental care',
              'few offspring, high parental investment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — K-selected: few offspring, high parental investment. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'fitn4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Limited energy budget**: reproduction vs growth vs survival
- **r-selected**: many offspring, little parental care
- **K-selected**: few offspring, high parental investment
- **Life history trade-offs shaped by natural selection**
      `
    },
    {
      id: 'fitn4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Trade-offs in Energy Use, which correctly describes Life history trade-offs shaped by…?',
            options: [
              'Life history trade-offs shaped by natural selection',
              'reproduction vs growth vs survival',
              'few offspring, high parental investment',
              'many offspring, little parental care'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Life history trade-offs shaped by natural selection. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limited energy budget',
            options: ['few offspring, high parental investment', 'Life history trade-offs shaped by natural selection', 'reproduction vs growth vs survival', 'many offspring, little parental care']
          },
          {
            label: 'r-selected',
            options: ['reproduction vs growth vs survival', 'few offspring, high parental investment', 'many offspring, little parental care', 'Life history trade-offs shaped by natural selection']
          },
          {
            label: 'K-selected',
            options: ['reproduction vs growth vs survival', 'few offspring, high parental investment', 'Life history trade-offs shaped by natural selection', 'many offspring, little parental care']
          }
        ],
        correctAnswers: ['reproduction vs growth vs survival', 'many offspring, little parental care', 'few offspring, high parental investment'],
        hint1: 'Think about what each concept specifically describes in Trade-offs in Energy Use.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trade-offs in Energy Use describes a specific idea. Limited energy budget: reproduction vs growth vs survival. r-selected: many offspring, little parental care. K-selected: few offspring, high parental investment.'
      }
    }
  ]
}
