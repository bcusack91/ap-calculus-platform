export const psychMoodPsychPart4Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-4-intro',
      type: 'text' as const,
      content: `
# ## Schizophrenia

**Part 4 of 7 — Schizophrenia**

### 1. Schizophrenia

split from reality (NOT split personality)

### 2. Positive symptoms

hallucinations, delusions, disorganized thinking

### 3. Negative symptoms

flat affect, social withdrawal, reduced motivation

### 4. Dopamine hypothesis

excess dopamine activity
      `
    },
    {
      id: 'mood-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of schizophrenia?',
            options: [
              'Schizophrenia',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Schizophrenia: split from reality (NOT split personality)'
          },
          {
            question: 'In the context of schizophrenia, which is accurate?',
            options: [
              'flat affect, social withdrawal, reduced motivation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Negative symptoms: flat affect, social withdrawal, reduced motivation'
          }
        ]
      }
    },
    {
      id: 'mood-4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Schizophrenia**: split from reality (NOT split personality)
- **Positive symptoms**: hallucinations, delusions, disorganized thinking
- **Negative symptoms**: flat affect, social withdrawal, reduced motivation
- **Dopamine hypothesis**: excess dopamine activity
      `
    },
    {
      id: 'mood-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to schizophrenia?',
            options: [
              'excess dopamine activity',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Dopamine hypothesis: excess dopamine activity'
          }
        ]
      }
    },
    {
      id: 'mood-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Schizophrenia',
            options: ['split from reality (NOT split personality)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Positive symptoms',
            options: ['hallucinations, delusions, disorganized thinking', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Negative symptoms',
            options: ['flat affect, social withdrawal, reduced motivation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['split from reality (NOT split personality)', 'hallucinations, delusions, disorganized thinking', 'flat affect, social withdrawal, reduced motivation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Schizophrenia.'
      }
    }
  ]
}
