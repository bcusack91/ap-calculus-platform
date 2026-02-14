export const psychMoodPsychPart1Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-1-intro',
      type: 'text' as const,
      content: `
# 🧠 Mood & Psychotic Disorders

**Part 1 of 7 — Major Depressive Disorder**

### 1. MDD

persistent depressed mood, loss of interest, ≥2 weeks

### 2. Symptoms

sleep changes, appetite changes, fatigue, worthlessness

### 3. Biological

low serotonin/norepinephrine, genetics

### 4. Cognitive

negative thinking patterns (Beck's cognitive triad)
      `
    },
    {
      id: 'mood-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of major depressive disorder?',
            options: [
              'MDD',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'MDD: persistent depressed mood, loss of interest, ≥2 weeks'
          },
          {
            question: 'In the context of major depressive disorder, which is accurate?',
            options: [
              'low serotonin/norepinephrine, genetics',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Biological: low serotonin/norepinephrine, genetics'
          }
        ]
      }
    },
    {
      id: 'mood-1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **MDD**: persistent depressed mood, loss of interest, ≥2 weeks
- **Symptoms**: sleep changes, appetite changes, fatigue, worthlessness
- **Biological**: low serotonin/norepinephrine, genetics
- **Cognitive**: negative thinking patterns (Beck's cognitive triad)
      `
    },
    {
      id: 'mood-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to major depressive disorder?',
            options: [
              'negative thinking patterns (Beck\'s cognitive triad)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive: negative thinking patterns (Beck\'s cognitive triad)'
          }
        ]
      }
    },
    {
      id: 'mood-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'MDD',
            options: ['persistent depressed mood, loss of interest, ≥2 we', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Symptoms',
            options: ['sleep changes, appetite changes, fatigue, worthles', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Biological',
            options: ['low serotonin/norepinephrine, genetics', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['persistent depressed mood, loss of interest, ≥2 we', 'sleep changes, appetite changes, fatigue, worthles', 'low serotonin/norepinephrine, genetics'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Major Depressive Disorder.'
      }
    }
  ]
}
