export const psychMotivationPart2Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv2-intro',
      type: 'text' as const,
      content: `
# ## Drive Theory & Homeostasis

**Part 2 of 7 — Drive Theory & Homeostasis**

### 1. Drive-reduction theory

physiological needs create drives

### 2. Homeostasis

body maintains internal balance

### 3. Primary drives

hunger, thirst, sleep (biological)

### 4. Secondary drives

learned (money, achievement)
      `
    },
    {
      id: 'motiv2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Drive-reduction theory" refer to in psychology?',
            options: [
              'learned (money, achievement)',
              'physiological needs create drives',
              'body maintains internal balance',
              'hunger, thirst, sleep (biological)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Drive-reduction theory: physiological needs create drives. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Drive Theory & Homeostasis, which explains Primary drives?',
            options: [
              'hunger, thirst, sleep (biological)',
              'physiological needs create drives',
              'body maintains internal balance',
              'learned (money, achievement)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Primary drives: hunger, thirst, sleep (biological). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'motiv2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Drive-reduction theory**: physiological needs create drives
- **Homeostasis**: body maintains internal balance
- **Primary drives**: hunger, thirst, sleep (biological)
- **Secondary drives**: learned (money, achievement)
      `
    },
    {
      id: 'motiv2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to drive theory & homeostasis?',
            options: [
              'learned (money, achievement)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Secondary drives: learned (money, achievement)'
          }
        ]
      }
    },
    {
      id: 'motiv2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drive-reduction theory',
            options: ['physiological needs create drives', 'body maintains internal balance', 'learned (money, achievement)', 'hunger, thirst, sleep (biological)']
          },
          {
            label: 'Homeostasis',
            options: ['hunger, thirst, sleep (biological)', 'body maintains internal balance', 'learned (money, achievement)', 'physiological needs create drives']
          },
          {
            label: 'Primary drives',
            options: ['physiological needs create drives', 'body maintains internal balance', 'hunger, thirst, sleep (biological)', 'learned (money, achievement)']
          }
        ],
        correctAnswers: ['physiological needs create drives', 'body maintains internal balance', 'hunger, thirst, sleep (biological)'],
        hint1: 'Think about what each concept specifically describes in Drive Theory & Homeostasis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Drive Theory & Homeostasis describes a specific idea. Drive-reduction theory: physiological needs create drives. Homeostasis: body maintains internal balance. Primary drives: hunger, thirst, sleep (biological).'
      }
    }
  ]
}
