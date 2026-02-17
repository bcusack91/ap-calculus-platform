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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "MDD" refer to in psychology?',
            options: [
              'negative thinking patterns (Beck\'s cognitive triad)',
              'persistent depressed mood, loss of interest, ≥2 weeks',
              'sleep changes, appetite changes, fatigue, worthlessness',
              'low serotonin/norepinephrine, genetics'
            ],
            correctAnswer: 1,
            explanation: 'Correct — MDD: persistent depressed mood, loss of interest, ≥2 weeks. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Mood & Psychotic Disorders, which explains Biological?',
            options: [
              'low serotonin/norepinephrine, genetics',
              'sleep changes, appetite changes, fatigue, worthlessness',
              'persistent depressed mood, loss of interest, ≥2 weeks',
              'negative thinking patterns (Beck\'s cognitive triad)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Biological: low serotonin/norepinephrine, genetics. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'MDD',
            options: ['negative thinking patterns (Beck\'s cognitive triad)', 'low serotonin/norepinephrine, genetics', 'sleep changes, appetite changes, fatigue, worthlessness', 'persistent depressed mood, loss of interest, ≥2 weeks']
          },
          {
            label: 'Symptoms',
            options: ['persistent depressed mood, loss of interest, ≥2 weeks', 'sleep changes, appetite changes, fatigue, worthlessness', 'low serotonin/norepinephrine, genetics', 'negative thinking patterns (Beck\'s cognitive triad)']
          },
          {
            label: 'Biological',
            options: ['sleep changes, appetite changes, fatigue, worthlessness', 'negative thinking patterns (Beck\'s cognitive triad)', 'persistent depressed mood, loss of interest, ≥2 weeks', 'low serotonin/norepinephrine, genetics']
          }
        ],
        correctAnswers: ['persistent depressed mood, loss of interest, ≥2 weeks', 'sleep changes, appetite changes, fatigue, worthlessness', 'low serotonin/norepinephrine, genetics'],
        hint1: 'Think about what each concept specifically describes in Mood & Psychotic Disorders.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Mood & Psychotic Disorders describes a specific idea. MDD: persistent depressed mood, loss of interest, ≥2 weeks. Symptoms: sleep changes, appetite changes, fatigue, worthlessness. Biological: low serotonin/norepinephrine, genetics.'
      }
    }
  ]
}
