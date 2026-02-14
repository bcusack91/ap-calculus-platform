export const psychSensationPart6Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Applying Weber's Law to problems

Applying Weber's Law to problems

### 2. Identifying sensory structures

Identifying sensory structures

### 3. Analyzing signal detection scenarios

Analyzing signal detection scenarios

### 4. Connecting sensation disorders to mechanisms

Connecting sensation disorders to mechanisms
      `
    },
    {
      id: 'sensa6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Applying Weber\'s Law to problems',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Applying Weber\'s Law to problems'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing signal detection scenarios',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing signal detection scenarios'
          }
        ]
      }
    },
    {
      id: 'sensa6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Applying Weber's Law to problems**
- **Identifying sensory structures**
- **Analyzing signal detection scenarios**
- **Connecting sensation disorders to mechanisms**
      `
    },
    {
      id: 'sensa6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Connecting sensation disorders to mechanisms',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Connecting sensation disorders to mechanisms'
          }
        ]
      }
    },
    {
      id: 'sensa6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Applying Weber\'s Law to problems',
            options: ['Applying Weber\'s Law to problems', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Identifying sensory structures',
            options: ['Identifying sensory structures', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing signal detection scenarios',
            options: ['Analyzing signal detection scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Applying Weber\'s Law to problems', 'Identifying sensory structures', 'Analyzing signal detection scenarios'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
