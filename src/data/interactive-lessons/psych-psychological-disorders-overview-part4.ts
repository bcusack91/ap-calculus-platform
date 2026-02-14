export const psychDisordersPart4Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych4-intro',
      type: 'text' as const,
      content: `
# ## Anxiety Disorders

**Part 4 of 7 — Anxiety Disorders**

### 1. Generalized anxiety disorder (GAD)

chronic, excessive worry

### 2. Panic disorder

sudden, intense fear attacks

### 3. Phobias

intense, irrational fears of specific objects/situations

### 4. Social anxiety disorder

fear of social situations and judgment
      `
    },
    {
      id: 'psych4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of anxiety disorders?',
            options: [
              'Generalized anxiety disorder (GAD)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Generalized anxiety disorder (GAD): chronic, excessive worry'
          },
          {
            question: 'In the context of anxiety disorders, which is accurate?',
            options: [
              'intense, irrational fears of specific objects/situations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Phobias: intense, irrational fears of specific objects/situations'
          }
        ]
      }
    },
    {
      id: 'psych4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Generalized anxiety disorder (GAD)**: chronic, excessive worry
- **Panic disorder**: sudden, intense fear attacks
- **Phobias**: intense, irrational fears of specific objects/situations
- **Social anxiety disorder**: fear of social situations and judgment
      `
    },
    {
      id: 'psych4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to anxiety disorders?',
            options: [
              'fear of social situations and judgment',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Social anxiety disorder: fear of social situations and judgment'
          }
        ]
      }
    },
    {
      id: 'psych4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Generalized anxiety disorder (GAD)',
            options: ['chronic, excessive worry', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Panic disorder',
            options: ['sudden, intense fear attacks', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Phobias',
            options: ['intense, irrational fears of specific objects/situ', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['chronic, excessive worry', 'sudden, intense fear attacks', 'intense, irrational fears of specific objects/situ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Anxiety Disorders.'
      }
    }
  ]
}
