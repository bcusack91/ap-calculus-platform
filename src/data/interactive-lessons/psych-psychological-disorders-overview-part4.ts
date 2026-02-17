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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Generalized anxiety disorder (GAD)" refer to in psychology?',
            options: [
              'fear of social situations and judgment',
              'sudden, intense fear attacks',
              'intense, irrational fears of specific objects/situations',
              'chronic, excessive worry'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Generalized anxiety disorder (GAD): chronic, excessive worry. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Phobias:',
            options: [
              'chronic, excessive worry',
              'sudden, intense fear attacks',
              'intense, irrational fears of specific objects/situations',
              'fear of social situations and judgment'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phobias: intense, irrational fears of specific objects/situations. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Generalized anxiety disorder (GAD)',
            options: ['fear of social situations and judgment', 'chronic, excessive worry', 'sudden, intense fear attacks', 'intense, irrational fears of specific objects/situations']
          },
          {
            label: 'Panic disorder',
            options: ['fear of social situations and judgment', 'sudden, intense fear attacks', 'intense, irrational fears of specific objects/situations', 'chronic, excessive worry']
          },
          {
            label: 'Phobias',
            options: ['chronic, excessive worry', 'intense, irrational fears of specific objects/situations', 'sudden, intense fear attacks', 'fear of social situations and judgment']
          }
        ],
        correctAnswers: ['chronic, excessive worry', 'sudden, intense fear attacks', 'intense, irrational fears of specific objects/situations'],
        hint1: 'Think about what each concept specifically describes in Anxiety Disorders.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Anxiety Disorders describes a specific idea. Generalized anxiety disorder (GAD): chronic, excessive worry. Panic disorder: sudden, intense fear attacks. Phobias: intense, irrational fears of specific objects/situations.'
      }
    }
  ]
}
