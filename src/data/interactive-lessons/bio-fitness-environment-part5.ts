export const bioFitnessPart5Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn5-intro-p5',
      type: 'text' as const,
      content: `
# ## Environmental Variation

**Part 5 of 7 — Environmental Variation**

1. Spatial variation: different habitats
2. Temporal variation: seasonal changes
3. Predictable vs unpredictable environments
4. Bet-hedging strategies in variable environments
      `
    },
    {
      id: 'fitn5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Spatial variation?',
            options: [
              'different habitats',
              'Predictable vs unpredictable environments',
              'seasonal changes',
              'Bet-hedging strategies in variable environments'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Spatial variation: different habitats. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Predictable vs unpredictable…?',
            options: [
              'Bet-hedging strategies in variable environments',
              'different habitats',
              'Predictable vs unpredictable environments',
              'seasonal changes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Predictable vs unpredictable environments. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'fitn5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Spatial variation**: different habitats
- **Temporal variation**: seasonal changes
- **Predictable vs unpredictable environments**
- **Bet-hedging strategies in variable environments**
      `
    },
    {
      id: 'fitn5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Bet-hedging strategies in variable…?',
            options: [
              'seasonal changes',
              'Bet-hedging strategies in variable environments',
              'Predictable vs unpredictable environments',
              'different habitats'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Bet-hedging strategies in variable environments. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'fitn5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spatial variation',
            options: ['seasonal changes', 'Predictable vs unpredictable environments', 'Bet-hedging strategies in variable environments', 'different habitats']
          },
          {
            label: 'Temporal variation',
            options: ['Predictable vs unpredictable environments', 'Bet-hedging strategies in variable environments', 'different habitats', 'seasonal changes']
          }
        ],
        correctAnswers: ['different habitats', 'seasonal changes'],
        hint1: 'Think about what each concept specifically describes in Environmental Variation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Environmental Variation describes a specific idea. Spatial variation: different habitats. Temporal variation: seasonal changes.'
      }
    }
  ]
}
