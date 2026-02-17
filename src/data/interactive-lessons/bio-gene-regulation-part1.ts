export const bioGeneRegPart1Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene1-intro-p1',
      type: 'text' as const,
      content: `
# ## Why Regulate Genes?

**Part 1 of 7 — Why Regulate Genes?**

1. All cells have same DNA but different functions
2. Gene regulation determines cell specialization
3. Saves energy by producing only needed proteins
4. Responds to environmental signals
      `
    },
    {
      id: 'gene1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "All cells have same DNA but different…" refer to in biology?',
            options: [
              'All cells have same DNA but different functions',
              'Responds to environmental signals',
              'Gene regulation determines cell specialization',
              'Saves energy by producing only needed proteins'
            ],
            correctAnswer: 0,
            explanation: 'Correct — All cells have same DNA but different functions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Why Regulate Genes?, which explains Saves energy by producing only needed…?',
            options: [
              'All cells have same DNA but different functions',
              'Responds to environmental signals',
              'Saves energy by producing only needed proteins',
              'Gene regulation determines cell specialization'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Saves energy by producing only needed proteins. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'gene1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **All cells have same DNA but different functions**
- **Gene regulation determines cell specialization**
- **Saves energy by producing only needed proteins**
- **Responds to environmental signals**
      `
    },
    {
      id: 'gene1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Why Regulate Genes?, which correctly describes Responds to environmental signals?',
            options: [
              'Gene regulation determines cell specialization',
              'Responds to environmental signals',
              'All cells have same DNA but different functions',
              'Saves energy by producing only needed proteins'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Responds to environmental signals. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All cells have same DNA but different…',
            options: ['Saves energy by producing only needed proteins', 'All cells have same DNA but different functions', 'Gene regulation determines cell specialization', 'Responds to environmental signals']
          },
          {
            label: 'Gene regulation determines cell…',
            options: ['Gene regulation determines cell specialization', 'Saves energy by producing only needed proteins', 'Responds to environmental signals', 'All cells have same DNA but different functions']
          },
          {
            label: 'Saves energy by producing only needed…',
            options: ['Gene regulation determines cell specialization', 'All cells have same DNA but different functions', 'Saves energy by producing only needed proteins', 'Responds to environmental signals']
          }
        ],
        correctAnswers: ['All cells have same DNA but different functions', 'Gene regulation determines cell specialization', 'Saves energy by producing only needed proteins'],
        hint1: 'Think about what each concept specifically describes in Why Regulate Genes?.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Why Regulate Genes? describes a specific idea. All cells have same DNA but different functions. Gene regulation determines cell specialization. Saves energy by producing only needed proteins.'
      }
    }
  ]
}
