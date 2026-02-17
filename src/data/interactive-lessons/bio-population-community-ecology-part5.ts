export const bioPopulationPart5Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu5-intro-p5',
      type: 'text' as const,
      content: `
# ## Ecological Succession

**Part 5 of 7 — Ecological Succession**

1. Primary succession: starts on bare rock/new land
2. Secondary succession: starts after disturbance (fire, flood)
3. Pioneer species colonize first (lichens, mosses)
4. Climax community: stable, mature ecosystem
      `
    },
    {
      id: 'popu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Primary succession?',
            options: [
              'stable, mature ecosystem',
              'starts after disturbance (fire, flood)',
              'Pioneer species colonize first (lichens, mosses)',
              'starts on bare rock/new land'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Primary succession: starts on bare rock/new land. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ecological Succession, which explains Pioneer species colonize first…?',
            options: [
              'starts after disturbance (fire, flood)',
              'Pioneer species colonize first (lichens, mosses)',
              'stable, mature ecosystem',
              'starts on bare rock/new land'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Pioneer species colonize first (lichens, mosses). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Primary succession**: starts on bare rock/new land
- **Secondary succession**: starts after disturbance (fire, flood)
- **Pioneer species colonize first (lichens, mosses)**
- **Climax community**: stable, mature ecosystem
      `
    },
    {
      id: 'popu5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Climax community?',
            options: [
              'Pioneer species colonize first (lichens, mosses)',
              'starts on bare rock/new land',
              'starts after disturbance (fire, flood)',
              'stable, mature ecosystem'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Climax community: stable, mature ecosystem. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Primary succession',
            options: ['Pioneer species colonize first (lichens, mosses)', 'starts on bare rock/new land', 'stable, mature ecosystem', 'starts after disturbance (fire, flood)']
          },
          {
            label: 'Secondary succession',
            options: ['stable, mature ecosystem', 'starts on bare rock/new land', 'Pioneer species colonize first (lichens, mosses)', 'starts after disturbance (fire, flood)']
          },
          {
            label: 'Climax community',
            options: ['Pioneer species colonize first (lichens, mosses)', 'stable, mature ecosystem', 'starts on bare rock/new land', 'starts after disturbance (fire, flood)']
          }
        ],
        correctAnswers: ['starts on bare rock/new land', 'starts after disturbance (fire, flood)', 'stable, mature ecosystem'],
        hint1: 'Think about what each concept specifically describes in Ecological Succession.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ecological Succession describes a specific idea. Primary succession: starts on bare rock/new land. Secondary succession: starts after disturbance (fire, flood). Climax community: stable, mature ecosystem.'
      }
    }
  ]
}
