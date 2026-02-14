export const psychPersonalityPart7Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Multiple perspectives offer different insights

Multiple perspectives offer different insights

### 2. Personality is shaped by biology, cognition, and environment

Personality is shaped by biology, cognition, and environment

### 3. Assessment methods have strengths and limitations

Assessment methods have strengths and limitations

### 4. AP exam

personality theory comparisons
      `
    },
    {
      id: 'perso7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Multiple perspectives offer different insights',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Multiple perspectives offer different insights'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Assessment methods have strengths and limitations',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Assessment methods have strengths and limitations'
          }
        ]
      }
    },
    {
      id: 'perso7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Multiple perspectives offer different insights**
- **Personality is shaped by biology, cognition, and environment**
- **Assessment methods have strengths and limitations**
- **AP exam**: personality theory comparisons
      `
    },
    {
      id: 'perso7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'personality theory comparisons',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: personality theory comparisons'
          }
        ]
      }
    },
    {
      id: 'perso7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiple perspectives offer different insights',
            options: ['Multiple perspectives offer different insights', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Personality is shaped by biology, cognition, and environment',
            options: ['Personality is shaped by biology, cognition, and e', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Assessment methods have strengths and limitations',
            options: ['Assessment methods have strengths and limitations', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Multiple perspectives offer different insights', 'Personality is shaped by biology, cognition, and e', 'Assessment methods have strengths and limitations'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
