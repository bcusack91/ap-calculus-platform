export const psychMoodPsychPart7Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Depression is the leading cause of disability worldwide

Depression is the leading cause of disability worldwide

### 2. Schizophrenia affects ~1% of population

Schizophrenia affects ~1% of population

### 3. Biological and psychological treatments both effective

Biological and psychological treatments both effective

### 4. AP exam

disorder comparison questions
      `
    },
    {
      id: 'mood-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Depression is the leading cause of disability worldwide',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Depression is the leading cause of disability worldwide'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Biological and psychological treatments both effective',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Biological and psychological treatments both effective'
          }
        ]
      }
    },
    {
      id: 'mood-7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Depression is the leading cause of disability worldwide**
- **Schizophrenia affects ~1% of population**
- **Biological and psychological treatments both effective**
- **AP exam**: disorder comparison questions
      `
    },
    {
      id: 'mood-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'disorder comparison questions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: disorder comparison questions'
          }
        ]
      }
    },
    {
      id: 'mood-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Depression is the leading cause of disability worldwide',
            options: ['Depression is the leading cause of disability worl', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Schizophrenia affects ~1% of population',
            options: ['Schizophrenia affects ~1% of population', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Biological and psychological treatments both effective',
            options: ['Biological and psychological treatments both effec', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Depression is the leading cause of disability worl', 'Schizophrenia affects ~1% of population', 'Biological and psychological treatments both effec'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
