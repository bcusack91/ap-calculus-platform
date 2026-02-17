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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Outgroup homogeneity?',
            options: [
              'competition between groups causes prejudice',
              '"they\'re all alike"',
              'people get what they deserve',
              'competition → hostility, cooperation → harmony'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Outgroup homogeneity: "they\'re all alike". The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Realistic conflict theory?',
            options: [
              '"they\'re all alike"',
              'competition → hostility, cooperation → harmony',
              'competition between groups causes prejudice',
              'people get what they deserve'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Realistic conflict theory: competition between groups causes prejudice. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Outgroup homogeneity',
            options: ['"they\'re all alike"', 'people get what they deserve', 'competition between groups causes prejudice', 'competition → hostility, cooperation → harmony']
          },
          {
            label: 'Just-world hypothesis',
            options: ['competition → hostility, cooperation → harmony', '"they\'re all alike"', 'competition between groups causes prejudice', 'people get what they deserve']
          },
          {
            label: 'Realistic conflict theory',
            options: ['people get what they deserve', 'competition → hostility, cooperation → harmony', '"they\'re all alike"', 'competition between groups causes prejudice']
          }
        ],
        correctAnswers: ['"they\'re all alike"', 'people get what they deserve', 'competition between groups causes prejudice'],
        hint1: 'Think about what each concept specifically describes in Ingroup/Outgroup Dynamics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ingroup/Outgroup Dynamics describes a specific idea. Outgroup homogeneity: "they\'re all alike". Just-world hypothesis: people get what they deserve. Realistic conflict theory: competition between groups causes prejudice.'
      }
    }
  ]
}
