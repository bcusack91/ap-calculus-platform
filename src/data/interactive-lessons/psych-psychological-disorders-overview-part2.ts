export const psychDisordersPart2Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych2-intro',
      type: 'text' as const,
      content: `
# ## Classification (DSM-5)

**Part 2 of 7 — Classification (DSM-5)**

### 1. DSM-5

Diagnostic and Statistical Manual of Mental Disorders

### 2. Provides diagnostic criteria for each disorder

Provides diagnostic criteria for each disorder

### 3. Categorical system

you either have the disorder or don't

### 4. Criticisms

labeling effects, cultural bias, comorbidity
      `
    },
    {
      id: 'psych2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of classification (dsm-5)?',
            options: [
              'DSM-5',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'DSM-5: Diagnostic and Statistical Manual of Mental Disorders'
          },
          {
            question: 'In the context of classification (dsm-5), which is accurate?',
            options: [
              'you either have the disorder or don\'t',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Categorical system: you either have the disorder or don\'t'
          }
        ]
      }
    },
    {
      id: 'psych2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **DSM-5**: Diagnostic and Statistical Manual of Mental Disorders
- **Provides diagnostic criteria for each disorder**
- **Categorical system**: you either have the disorder or don't
- **Criticisms**: labeling effects, cultural bias, comorbidity
      `
    },
    {
      id: 'psych2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to classification (dsm-5)?',
            options: [
              'labeling effects, cultural bias, comorbidity',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Criticisms: labeling effects, cultural bias, comorbidity'
          }
        ]
      }
    },
    {
      id: 'psych2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DSM-5',
            options: ['Diagnostic and Statistical Manual of Mental Disord', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Provides diagnostic criteria for each disorder',
            options: ['Provides diagnostic criteria for each disorder', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Categorical system',
            options: ['you either have the disorder or don\'t', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Diagnostic and Statistical Manual of Mental Disord', 'Provides diagnostic criteria for each disorder', 'you either have the disorder or don\'t'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Classification (DSM-5).'
      }
    }
  ]
}
