export const psychGroupPart2Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group2-intro',
      type: 'text' as const,
      content: `
# ## Ingroup/Outgroup Dynamics

**Part 2 of 7 — Ingroup/Outgroup Dynamics**

### 1. Outgroup homogeneity

"they're all alike"

### 2. Just-world hypothesis

people get what they deserve

### 3. Realistic conflict theory

competition between groups causes prejudice

### 4. Robbers Cave experiment (Sherif)

competition → hostility, cooperation → harmony
      `
    },
    {
      id: 'group2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ingroup/outgroup dynamics?',
            options: [
              'Outgroup homogeneity',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Outgroup homogeneity: "they\'re all alike"'
          },
          {
            question: 'In the context of ingroup/outgroup dynamics, which is accurate?',
            options: [
              'competition between groups causes prejudice',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Realistic conflict theory: competition between groups causes prejudice'
          }
        ]
      }
    },
    {
      id: 'group2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Outgroup homogeneity**: "they're all alike"
- **Just-world hypothesis**: people get what they deserve
- **Realistic conflict theory**: competition between groups causes prejudice
- **Robbers Cave experiment (Sherif)**: competition → hostility, cooperation → harmony
      `
    },
    {
      id: 'group2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ingroup/outgroup dynamics?',
            options: [
              'competition → hostility, cooperation → harmony',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Robbers Cave experiment (Sherif): competition → hostility, cooperation → harmony'
          }
        ]
      }
    },
    {
      id: 'group2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Outgroup homogeneity',
            options: ['"they\'re all alike"', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Just-world hypothesis',
            options: ['people get what they deserve', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Realistic conflict theory',
            options: ['competition between groups causes prejudice', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['"they\'re all alike"', 'people get what they deserve', 'competition between groups causes prejudice'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ingroup/Outgroup Dynamics.'
      }
    }
  ]
}
