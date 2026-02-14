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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of drive theory & homeostasis?',
            options: [
              'Drive-reduction theory',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Drive-reduction theory: physiological needs create drives'
          },
          {
            question: 'In the context of drive theory & homeostasis, which is accurate?',
            options: [
              'hunger, thirst, sleep (biological)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Primary drives: hunger, thirst, sleep (biological)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drive-reduction theory',
            options: ['physiological needs create drives', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Homeostasis',
            options: ['body maintains internal balance', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Primary drives',
            options: ['hunger, thirst, sleep (biological)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['physiological needs create drives', 'body maintains internal balance', 'hunger, thirst, sleep (biological)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Drive Theory & Homeostasis.'
      }
    }
  ]
}
