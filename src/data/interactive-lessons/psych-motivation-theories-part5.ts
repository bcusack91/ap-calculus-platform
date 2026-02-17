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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Hypothalamus" refer to in psychology?',
            options: [
              'body weight thermostat',
              'anorexia, bulimia, binge-eating disorder',
              'hunger regulation (lateral = hunger, ventromedial = satiety)',
              'hunger hormone; Leptin: satiety hormone'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Hypothalamus: hunger regulation (lateral = hunger, ventromedial = satiety). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Set point theory:',
            options: [
              'hunger regulation (lateral = hunger, ventromedial = satiety)',
              'hunger hormone; Leptin: satiety hormone',
              'anorexia, bulimia, binge-eating disorder',
              'body weight thermostat'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Set point theory: body weight thermostat. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hypothalamus',
            options: ['hunger hormone; Leptin: satiety hormone', 'hunger regulation (lateral = hunger, ventromedial = satiety)', 'body weight thermostat', 'anorexia, bulimia, binge-eating disorder']
          },
          {
            label: 'Ghrelin',
            options: ['anorexia, bulimia, binge-eating disorder', 'hunger hormone; Leptin: satiety hormone', 'body weight thermostat', 'hunger regulation (lateral = hunger, ventromedial = satiety)']
          },
          {
            label: 'Set point theory',
            options: ['hunger hormone; Leptin: satiety hormone', 'hunger regulation (lateral = hunger, ventromedial = satiety)', 'anorexia, bulimia, binge-eating disorder', 'body weight thermostat']
          }
        ],
        correctAnswers: ['hunger regulation (lateral = hunger, ventromedial = satiety)', 'hunger hormone; Leptin: satiety hormone', 'body weight thermostat'],
        hint1: 'Think about what each concept specifically describes in Hunger & Eating.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hunger & Eating describes a specific idea. Hypothalamus: hunger regulation (lateral = hunger, ventromedial = satiety). Ghrelin: hunger hormone; Leptin: satiety hormone. Set point theory: body weight thermostat.'
      }
    }
  ]
}
