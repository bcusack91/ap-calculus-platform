export const psychDisordersPart1Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych1-intro',
      type: 'text' as const,
      content: `
# 🧠 Psychological Disorders Overview

**Part 1 of 7 — Defining Disorders**

### 1. Psychological disorder

dysfunctional, distressing, deviant, dangerous (4 D's)

### 2. Medical model

disorders are illnesses with biological causes

### 3. Biopsychosocial model

biological + psychological + social factors

### 4. Stigma

negative attitudes toward people with mental illness
      `
    },
    {
      id: 'psych1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of defining disorders?',
            options: [
              'Psychological disorder',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Psychological disorder: dysfunctional, distressing, deviant, dangerous (4 D\'s)'
          },
          {
            question: 'In the context of defining disorders, which is accurate?',
            options: [
              'biological + psychological + social factors',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Biopsychosocial model: biological + psychological + social factors'
          }
        ]
      }
    },
    {
      id: 'psych1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Psychological disorder**: dysfunctional, distressing, deviant, dangerous (4 D's)
- **Medical model**: disorders are illnesses with biological causes
- **Biopsychosocial model**: biological + psychological + social factors
- **Stigma**: negative attitudes toward people with mental illness
      `
    },
    {
      id: 'psych1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to defining disorders?',
            options: [
              'negative attitudes toward people with mental illness',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Stigma: negative attitudes toward people with mental illness'
          }
        ]
      }
    },
    {
      id: 'psych1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Psychological disorder',
            options: ['dysfunctional, distressing, deviant, dangerous (4 ', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Medical model',
            options: ['disorders are illnesses with biological causes', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Biopsychosocial model',
            options: ['biological + psychological + social factors', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['dysfunctional, distressing, deviant, dangerous (4 ', 'disorders are illnesses with biological causes', 'biological + psychological + social factors'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Defining Disorders.'
      }
    }
  ]
}
