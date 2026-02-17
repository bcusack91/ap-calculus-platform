export const psychTreatmentPart1Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treat1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment & Therapy

**Part 1 of 7 — History of Treatment**

### 1. Historical

asylums, moral treatment, deinstitutionalization

### 2. Modern

outpatient therapy, community mental health

### 3. Eclectic approach

combining techniques from different perspectives

### 4. Therapy types

individual, group, couples, family
      `
    },
    {
      id: 'treat1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Historical" refer to in psychology?',
            options: [
              'outpatient therapy, community mental health',
              'combining techniques from different perspectives',
              'individual, group, couples, family',
              'asylums, moral treatment, deinstitutionalization'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Historical: asylums, moral treatment, deinstitutionalization. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Eclectic approach:',
            options: [
              'individual, group, couples, family',
              'combining techniques from different perspectives',
              'asylums, moral treatment, deinstitutionalization',
              'outpatient therapy, community mental health'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Eclectic approach: combining techniques from different perspectives. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'treat1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Historical**: asylums, moral treatment, deinstitutionalization
- **Modern**: outpatient therapy, community mental health
- **Eclectic approach**: combining techniques from different perspectives
- **Therapy types**: individual, group, couples, family
      `
    },
    {
      id: 'treat1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to history of treatment?',
            options: [
              'individual, group, couples, family',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Therapy types: individual, group, couples, family'
          }
        ]
      }
    },
    {
      id: 'treat1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Historical',
            options: ['combining techniques from different perspectives', 'individual, group, couples, family', 'asylums, moral treatment, deinstitutionalization', 'outpatient therapy, community mental health']
          },
          {
            label: 'Modern',
            options: ['combining techniques from different perspectives', 'individual, group, couples, family', 'outpatient therapy, community mental health', 'asylums, moral treatment, deinstitutionalization']
          },
          {
            label: 'Eclectic approach',
            options: ['combining techniques from different perspectives', 'asylums, moral treatment, deinstitutionalization', 'outpatient therapy, community mental health', 'individual, group, couples, family']
          }
        ],
        correctAnswers: ['asylums, moral treatment, deinstitutionalization', 'outpatient therapy, community mental health', 'combining techniques from different perspectives'],
        hint1: 'Think about what each concept specifically describes in Treatment & Therapy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Treatment & Therapy describes a specific idea. Historical: asylums, moral treatment, deinstitutionalization. Modern: outpatient therapy, community mental health. Eclectic approach: combining techniques from different perspectives.'
      }
    }
  ]
}
