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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of trait theories?',
            options: [
              'Big Five (OCEAN)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism'
          },
          {
            question: 'In the context of trait theories, which is accurate?',
            options: [
              'extraversion-introversion, neuroticism-stability',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Eysenck: extraversion-introversion, neuroticism-stability'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Big Five (OCEAN)',
            options: ['Openness, Conscientiousness, Extraversion, Agreeab', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Traits are relatively stable across time and situations',
            options: ['Traits are relatively stable across time and situa', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Eysenck',
            options: ['extraversion-introversion, neuroticism-stability', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Openness, Conscientiousness, Extraversion, Agreeab', 'Traits are relatively stable across time and situa', 'extraversion-introversion, neuroticism-stability'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Trait Theories.'
      }
    }
  ]
}
