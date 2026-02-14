export const psychObservationalPart7Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Three types of learning compared

Three types of learning compared

### 2. Cognitive revolution in learning theory

Cognitive revolution in learning theory

### 3. Applications to education and therapy

Applications to education and therapy

### 4. AP exam

learning theory identification
      `
    },
    {
      id: 'obser7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Three types of learning compared',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Three types of learning compared'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Applications to education and therapy',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Applications to education and therapy'
          }
        ]
      }
    },
    {
      id: 'obser7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Three types of learning compared**
- **Cognitive revolution in learning theory**
- **Applications to education and therapy**
- **AP exam**: learning theory identification
      `
    },
    {
      id: 'obser7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'learning theory identification',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: learning theory identification'
          }
        ]
      }
    },
    {
      id: 'obser7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three types of learning compared',
            options: ['Three types of learning compared', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cognitive revolution in learning theory',
            options: ['Cognitive revolution in learning theory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Applications to education and therapy',
            options: ['Applications to education and therapy', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Three types of learning compared', 'Cognitive revolution in learning theory', 'Applications to education and therapy'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
