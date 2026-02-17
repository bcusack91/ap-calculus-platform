export const bioEnergyFlowPart5Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener5-intro-p5',
      type: 'text' as const,
      content: `
# ## Human Impact on Cycles

**Part 5 of 7 — Human Impact on Cycles**

1. Burning fossil fuels increases atmospheric CO₂
2. Fertilizer runoff causes eutrophication
3. Deforestation reduces carbon fixation
4. Climate change disrupts all biogeochemical cycles
      `
    },
    {
      id: 'ener5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Burning fossil fuels increases…" refer to in biology?',
            options: [
              'Climate change disrupts all biogeochemical cycles',
              'Deforestation reduces carbon fixation',
              'Burning fossil fuels increases atmospheric CO₂',
              'Fertilizer runoff causes eutrophication'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Burning fossil fuels increases atmospheric CO₂. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Human Impact on Cycles, which explains Deforestation reduces carbon fixation?',
            options: [
              'Deforestation reduces carbon fixation',
              'Fertilizer runoff causes eutrophication',
              'Climate change disrupts all biogeochemical cycles',
              'Burning fossil fuels increases atmospheric CO₂'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Deforestation reduces carbon fixation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ener5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Burning fossil fuels increases atmospheric CO₂**
- **Fertilizer runoff causes eutrophication**
- **Deforestation reduces carbon fixation**
- **Climate change disrupts all biogeochemical cycles**
      `
    },
    {
      id: 'ener5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Climate change disrupts all…?',
            options: [
              'Burning fossil fuels increases atmospheric CO₂',
              'Fertilizer runoff causes eutrophication',
              'Deforestation reduces carbon fixation',
              'Climate change disrupts all biogeochemical cycles'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Climate change disrupts all biogeochemical cycles. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Burning fossil fuels increases…',
            options: ['Burning fossil fuels increases atmospheric CO₂', 'Climate change disrupts all biogeochemical cycles', 'Deforestation reduces carbon fixation', 'Fertilizer runoff causes eutrophication']
          },
          {
            label: 'Fertilizer runoff causes eutrophication',
            options: ['Fertilizer runoff causes eutrophication', 'Climate change disrupts all biogeochemical cycles', 'Burning fossil fuels increases atmospheric CO₂', 'Deforestation reduces carbon fixation']
          },
          {
            label: 'Deforestation reduces carbon fixation',
            options: ['Deforestation reduces carbon fixation', 'Fertilizer runoff causes eutrophication', 'Climate change disrupts all biogeochemical cycles', 'Burning fossil fuels increases atmospheric CO₂']
          }
        ],
        correctAnswers: ['Burning fossil fuels increases atmospheric CO₂', 'Fertilizer runoff causes eutrophication', 'Deforestation reduces carbon fixation'],
        hint1: 'Think about what each concept specifically describes in Human Impact on Cycles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Human Impact on Cycles describes a specific idea. Burning fossil fuels increases atmospheric CO₂. Fertilizer runoff causes eutrophication. Deforestation reduces carbon fixation.'
      }
    }
  ]
}
