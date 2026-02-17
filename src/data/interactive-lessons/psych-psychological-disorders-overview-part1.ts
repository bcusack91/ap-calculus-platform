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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Psychological disorder" refer to in psychology?',
            options: [
              'dysfunctional, distressing, deviant, dangerous (4 D\'s)',
              'disorders are illnesses with biological causes',
              'negative attitudes toward people with mental illness',
              'biological + psychological + social factors'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Psychological disorder: dysfunctional, distressing, deviant, dangerous (4 D\'s). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Biopsychosocial model:',
            options: [
              'disorders are illnesses with biological causes',
              'biological + psychological + social factors',
              'dysfunctional, distressing, deviant, dangerous (4 D\'s)',
              'negative attitudes toward people with mental illness'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Biopsychosocial model: biological + psychological + social factors. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Psychological disorder',
            options: ['dysfunctional, distressing, deviant, dangerous (4 D\'s)', 'disorders are illnesses with biological causes', 'biological + psychological + social factors', 'negative attitudes toward people with mental illness']
          },
          {
            label: 'Medical model',
            options: ['negative attitudes toward people with mental illness', 'disorders are illnesses with biological causes', 'biological + psychological + social factors', 'dysfunctional, distressing, deviant, dangerous (4 D\'s)']
          },
          {
            label: 'Biopsychosocial model',
            options: ['negative attitudes toward people with mental illness', 'dysfunctional, distressing, deviant, dangerous (4 D\'s)', 'disorders are illnesses with biological causes', 'biological + psychological + social factors']
          }
        ],
        correctAnswers: ['dysfunctional, distressing, deviant, dangerous (4 D\'s)', 'disorders are illnesses with biological causes', 'biological + psychological + social factors'],
        hint1: 'Think about what each concept specifically describes in Psychological Disorders Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Psychological Disorders Overview describes a specific idea. Psychological disorder: dysfunctional, distressing, deviant, dangerous (4 D\'s). Medical model: disorders are illnesses with biological causes. Biopsychosocial model: biological + psychological + social factors.'
      }
    }
  ]
}
