export const bioPopulationPart2Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu2-intro-p2',
      type: 'text' as const,
      content: `
# ## Carrying Capacity

**Part 2 of 7 — Carrying Capacity**

1. K = maximum population size the environment can sustain
2. Density-dependent factors: competition, predation, disease
3. Density-independent factors: natural disasters, climate
4. Population oscillates around K
      `
    },
    {
      id: 'popu2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "K = maximum population size the…" refer to in biology?',
            options: [
              'K = maximum population size the environment can sustain',
              'Population oscillates around K',
              'competition, predation, disease',
              'natural disasters, climate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — K = maximum population size the environment can sustain. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Density-independent factors?',
            options: [
              'K = maximum population size the environment can sustain',
              'Population oscillates around K',
              'competition, predation, disease',
              'natural disasters, climate'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Density-independent factors: natural disasters, climate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **K = maximum population size the environment can sustain**
- **Density-dependent factors**: competition, predation, disease
- **Density-independent factors**: natural disasters, climate
- **Population oscillates around K**
      `
    },
    {
      id: 'popu2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Population oscillates around K?',
            options: [
              'natural disasters, climate',
              'competition, predation, disease',
              'K = maximum population size the environment can sustain',
              'Population oscillates around K'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Population oscillates around K. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Density-dependent factors',
            options: ['competition, predation, disease', 'K = maximum population size the environment can sustain', 'Population oscillates around K', 'natural disasters, climate']
          },
          {
            label: 'Density-independent factors',
            options: ['competition, predation, disease', 'Population oscillates around K', 'natural disasters, climate', 'K = maximum population size the environment can sustain']
          }
        ],
        correctAnswers: ['competition, predation, disease', 'natural disasters, climate'],
        hint1: 'Think about what each concept specifically describes in Carrying Capacity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Carrying Capacity describes a specific idea. Density-dependent factors: competition, predation, disease. Density-independent factors: natural disasters, climate.'
      }
    }
  ]
}
