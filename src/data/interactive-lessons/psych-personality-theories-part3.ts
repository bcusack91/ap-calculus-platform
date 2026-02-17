export const psychPersonalityPart3Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso3-intro',
      type: 'text' as const,
      content: `
# ## Trait Theories

**Part 3 of 7 — Trait Theories**

### 1. Big Five (OCEAN)

Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism

### 2. Traits are relatively stable across time and situations

Traits are relatively stable across time and situations

### 3. Eysenck

extraversion-introversion, neuroticism-stability

### 4. Factor analysis

statistical method for identifying traits
      `
    },
    {
      id: 'perso3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Big Five (OCEAN)" refer to in psychology?',
            options: [
              'Traits are relatively stable across time and situations',
              'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism',
              'statistical method for identifying traits',
              'extraversion-introversion, neuroticism-stability'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Trait Theories, which explains Eysenck?',
            options: [
              'statistical method for identifying traits',
              'Traits are relatively stable across time and situations',
              'extraversion-introversion, neuroticism-stability',
              'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Eysenck: extraversion-introversion, neuroticism-stability. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perso3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Big Five (OCEAN)**: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
- **Traits are relatively stable across time and situations**
- **Eysenck**: extraversion-introversion, neuroticism-stability
- **Factor analysis**: statistical method for identifying traits
      `
    },
    {
      id: 'perso3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to trait theories?',
            options: [
              'statistical method for identifying traits',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Factor analysis: statistical method for identifying traits'
          }
        ]
      }
    },
    {
      id: 'perso3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Big Five (OCEAN)',
            options: ['statistical method for identifying traits', 'Traits are relatively stable across time and situations', 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'extraversion-introversion, neuroticism-stability']
          },
          {
            label: 'Eysenck',
            options: ['Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'statistical method for identifying traits', 'extraversion-introversion, neuroticism-stability', 'Traits are relatively stable across time and situations']
          },
          {
            label: 'Factor analysis',
            options: ['Traits are relatively stable across time and situations', 'statistical method for identifying traits', 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'extraversion-introversion, neuroticism-stability']
          }
        ],
        correctAnswers: ['Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'extraversion-introversion, neuroticism-stability', 'statistical method for identifying traits'],
        hint1: 'Think about what each concept specifically describes in Trait Theories.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trait Theories describes a specific idea. Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism. Eysenck: extraversion-introversion, neuroticism-stability. Factor analysis: statistical method for identifying traits.'
      }
    }
  ]
}
