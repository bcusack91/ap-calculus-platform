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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "DSM-5" refer to in psychology?',
            options: [
              'labeling effects, cultural bias, comorbidity',
              'Diagnostic and Statistical Manual of Mental Disorders',
              'Provides diagnostic criteria for each disorder',
              'you either have the disorder or don\'t'
            ],
            correctAnswer: 1,
            explanation: 'Correct — DSM-5: Diagnostic and Statistical Manual of Mental Disorders. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Categorical system:',
            options: [
              'labeling effects, cultural bias, comorbidity',
              'Provides diagnostic criteria for each disorder',
              'you either have the disorder or don\'t',
              'Diagnostic and Statistical Manual of Mental Disorders'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Categorical system: you either have the disorder or don\'t. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DSM-5',
            options: ['Diagnostic and Statistical Manual of Mental Disorders', 'Provides diagnostic criteria for each disorder', 'labeling effects, cultural bias, comorbidity', 'you either have the disorder or don\'t']
          },
          {
            label: 'Categorical system',
            options: ['Provides diagnostic criteria for each disorder', 'labeling effects, cultural bias, comorbidity', 'Diagnostic and Statistical Manual of Mental Disorders', 'you either have the disorder or don\'t']
          },
          {
            label: 'Criticisms',
            options: ['Diagnostic and Statistical Manual of Mental Disorders', 'Provides diagnostic criteria for each disorder', 'labeling effects, cultural bias, comorbidity', 'you either have the disorder or don\'t']
          }
        ],
        correctAnswers: ['Diagnostic and Statistical Manual of Mental Disorders', 'you either have the disorder or don\'t', 'labeling effects, cultural bias, comorbidity'],
        hint1: 'Think about what each concept specifically describes in Classification (DSM-5).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Classification (DSM-5) describes a specific idea. DSM-5: Diagnostic and Statistical Manual of Mental Disorders. Categorical system: you either have the disorder or don\'t. Criticisms: labeling effects, cultural bias, comorbidity.'
      }
    }
  ]
}
