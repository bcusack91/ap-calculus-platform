export const psychMotivationPart5Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv5-intro',
      type: 'text' as const,
      content: `
# ## Hunger & Eating

**Part 5 of 7 — Hunger & Eating**

### 1. Hypothalamus

hunger regulation (lateral = hunger, ventromedial = satiety)

### 2. Ghrelin

hunger hormone; Leptin: satiety hormone

### 3. Set point theory

body weight thermostat

### 4. Eating disorders

anorexia, bulimia, binge-eating disorder
      `
    },
    {
      id: 'motiv5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of hunger & eating?',
            options: [
              'Hypothalamus',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Hypothalamus: hunger regulation (lateral = hunger, ventromedial = satiety)'
          },
          {
            question: 'In the context of hunger & eating, which is accurate?',
            options: [
              'body weight thermostat',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Set point theory: body weight thermostat'
          }
        ]
      }
    },
    {
      id: 'motiv5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Hypothalamus**: hunger regulation (lateral = hunger, ventromedial = satiety)
- **Ghrelin**: hunger hormone; Leptin: satiety hormone
- **Set point theory**: body weight thermostat
- **Eating disorders**: anorexia, bulimia, binge-eating disorder
      `
    },
    {
      id: 'motiv5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to hunger & eating?',
            options: [
              'anorexia, bulimia, binge-eating disorder',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Eating disorders: anorexia, bulimia, binge-eating disorder'
          }
        ]
      }
    },
    {
      id: 'motiv5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hypothalamus',
            options: ['hunger regulation (lateral = hunger, ventromedial ', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Ghrelin',
            options: ['hunger hormone; Leptin: satiety hormone', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Set point theory',
            options: ['body weight thermostat', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['hunger regulation (lateral = hunger, ventromedial ', 'hunger hormone; Leptin: satiety hormone', 'body weight thermostat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Hunger & Eating.'
      }
    }
  ]
}
