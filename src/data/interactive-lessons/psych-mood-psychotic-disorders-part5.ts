export const psychMoodPsychPart5Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-5-intro',
      type: 'text' as const,
      content: `
# ## Dissociative & Somatic Disorders

**Part 5 of 7 — Dissociative & Somatic Disorders**

### 1. Dissociative identity disorder (DID)

multiple distinct identities

### 2. Dissociative amnesia

memory gaps for personal information

### 3. Somatic symptom disorder

excessive focus on physical symptoms

### 4. Illness anxiety disorder (hypochondriasis)

fear of having serious illness
      `
    },
    {
      id: 'mood-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of dissociative & somatic disorders?',
            options: [
              'Dissociative identity disorder (DID)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Dissociative identity disorder (DID): multiple distinct identities'
          },
          {
            question: 'In the context of dissociative & somatic disorders, which is accurate?',
            options: [
              'excessive focus on physical symptoms',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Somatic symptom disorder: excessive focus on physical symptoms'
          }
        ]
      }
    },
    {
      id: 'mood-5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Dissociative identity disorder (DID)**: multiple distinct identities
- **Dissociative amnesia**: memory gaps for personal information
- **Somatic symptom disorder**: excessive focus on physical symptoms
- **Illness anxiety disorder (hypochondriasis)**: fear of having serious illness
      `
    },
    {
      id: 'mood-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to dissociative & somatic disorders?',
            options: [
              'fear of having serious illness',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Illness anxiety disorder (hypochondriasis): fear of having serious illness'
          }
        ]
      }
    },
    {
      id: 'mood-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dissociative identity disorder (DID)',
            options: ['multiple distinct identities', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Dissociative amnesia',
            options: ['memory gaps for personal information', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Somatic symptom disorder',
            options: ['excessive focus on physical symptoms', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['multiple distinct identities', 'memory gaps for personal information', 'excessive focus on physical symptoms'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Dissociative & Somatic Disorders.'
      }
    }
  ]
}
