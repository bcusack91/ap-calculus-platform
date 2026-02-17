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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Dissociative identity disorder (DID)" refer to in psychology?',
            options: [
              'fear of having serious illness',
              'excessive focus on physical symptoms',
              'multiple distinct identities',
              'memory gaps for personal information'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Dissociative identity disorder (DID): multiple distinct identities. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Somatic symptom disorder:',
            options: [
              'multiple distinct identities',
              'memory gaps for personal information',
              'fear of having serious illness',
              'excessive focus on physical symptoms'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Somatic symptom disorder: excessive focus on physical symptoms. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dissociative identity disorder (DID)',
            options: ['excessive focus on physical symptoms', 'memory gaps for personal information', 'multiple distinct identities', 'fear of having serious illness']
          },
          {
            label: 'Dissociative amnesia',
            options: ['fear of having serious illness', 'excessive focus on physical symptoms', 'memory gaps for personal information', 'multiple distinct identities']
          },
          {
            label: 'Somatic symptom disorder',
            options: ['multiple distinct identities', 'excessive focus on physical symptoms', 'memory gaps for personal information', 'fear of having serious illness']
          }
        ],
        correctAnswers: ['multiple distinct identities', 'memory gaps for personal information', 'excessive focus on physical symptoms'],
        hint1: 'Think about what each concept specifically describes in Dissociative & Somatic Disorders.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Dissociative & Somatic Disorders describes a specific idea. Dissociative identity disorder (DID): multiple distinct identities. Dissociative amnesia: memory gaps for personal information. Somatic symptom disorder: excessive focus on physical symptoms.'
      }
    }
  ]
}
