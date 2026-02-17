export const bioEnergyFlowPart1Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener1-intro-p1',
      type: 'text' as const,
      content: `
# ## Food Chains & Webs

**Part 1 of 7 — Food Chains & Webs**

1. Food chain: linear path of energy transfer
2. Food web: interconnected food chains
3. Energy flows one direction (producers → consumers)
4. Matter cycles (recycled through ecosystem)
      `
    },
    {
      id: 'ener1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Food chain" refer to in biology?',
            options: [
              'Energy flows one direction (producers → consumers)',
              'interconnected food chains',
              'Matter cycles (recycled through ecosystem)',
              'linear path of energy transfer'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Food chain: linear path of energy transfer. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Food Chains & Webs, which explains Energy flows one direction (producers →…?',
            options: [
              'Matter cycles (recycled through ecosystem)',
              'linear path of energy transfer',
              'interconnected food chains',
              'Energy flows one direction (producers → consumers)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Energy flows one direction (producers → consumers). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ener1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Food chain**: linear path of energy transfer
- **Food web**: interconnected food chains
- **Energy flows one direction (producers → consumers)**
- **Matter cycles (recycled through ecosystem)**
      `
    },
    {
      id: 'ener1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Food Chains & Webs, which correctly describes Matter cycles (recycled through…?',
            options: [
              'Matter cycles (recycled through ecosystem)',
              'Energy flows one direction (producers → consumers)',
              'linear path of energy transfer',
              'interconnected food chains'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Matter cycles (recycled through ecosystem). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Food chain',
            options: ['Matter cycles (recycled through ecosystem)', 'interconnected food chains', 'Energy flows one direction (producers → consumers)', 'linear path of energy transfer']
          },
          {
            label: 'Food web',
            options: ['linear path of energy transfer', 'Matter cycles (recycled through ecosystem)', 'Energy flows one direction (producers → consumers)', 'interconnected food chains']
          }
        ],
        correctAnswers: ['linear path of energy transfer', 'interconnected food chains'],
        hint1: 'Think about what each concept specifically describes in Food Chains & Webs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Food Chains & Webs describes a specific idea. Food chain: linear path of energy transfer. Food web: interconnected food chains.'
      }
    }
  ]
}
