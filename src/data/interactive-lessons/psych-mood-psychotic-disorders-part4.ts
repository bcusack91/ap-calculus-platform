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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Schizophrenia" refer to in psychology?',
            options: [
              'excess dopamine activity',
              'split from reality (NOT split personality)',
              'flat affect, social withdrawal, reduced motivation',
              'hallucinations, delusions, disorganized thinking'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Schizophrenia: split from reality (NOT split personality). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Negative symptoms:',
            options: [
              'hallucinations, delusions, disorganized thinking',
              'split from reality (NOT split personality)',
              'excess dopamine activity',
              'flat affect, social withdrawal, reduced motivation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Negative symptoms: flat affect, social withdrawal, reduced motivation. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Schizophrenia',
            options: ['flat affect, social withdrawal, reduced motivation', 'excess dopamine activity', 'hallucinations, delusions, disorganized thinking', 'split from reality (NOT split personality)']
          },
          {
            label: 'Positive symptoms',
            options: ['flat affect, social withdrawal, reduced motivation', 'hallucinations, delusions, disorganized thinking', 'excess dopamine activity', 'split from reality (NOT split personality)']
          },
          {
            label: 'Negative symptoms',
            options: ['flat affect, social withdrawal, reduced motivation', 'hallucinations, delusions, disorganized thinking', 'split from reality (NOT split personality)', 'excess dopamine activity']
          }
        ],
        correctAnswers: ['split from reality (NOT split personality)', 'hallucinations, delusions, disorganized thinking', 'flat affect, social withdrawal, reduced motivation'],
        hint1: 'Think about what each concept specifically describes in Schizophrenia.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Schizophrenia describes a specific idea. Schizophrenia: split from reality (NOT split personality). Positive symptoms: hallucinations, delusions, disorganized thinking. Negative symptoms: flat affect, social withdrawal, reduced motivation.'
      }
    }
  ]
}
