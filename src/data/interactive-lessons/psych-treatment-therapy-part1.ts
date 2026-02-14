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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of history of treatment?',
            options: [
              'Historical',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Historical: asylums, moral treatment, deinstitutionalization'
          },
          {
            question: 'In the context of history of treatment, which is accurate?',
            options: [
              'combining techniques from different perspectives',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Eclectic approach: combining techniques from different perspectives'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Historical',
            options: ['asylums, moral treatment, deinstitutionalization', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Modern',
            options: ['outpatient therapy, community mental health', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Eclectic approach',
            options: ['combining techniques from different perspectives', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['asylums, moral treatment, deinstitutionalization', 'outpatient therapy, community mental health', 'combining techniques from different perspectives'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding History of Treatment.'
      }
    }
  ]
}
