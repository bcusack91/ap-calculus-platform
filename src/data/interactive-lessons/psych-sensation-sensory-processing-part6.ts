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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Applying Weber\'s Law to problems?',
            options: [
              'Identifying sensory structures',
              'Applying Weber\'s Law to problems',
              'Connecting sensation disorders to mechanisms',
              'Analyzing signal detection scenarios'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Applying Weber\'s Law to problems. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Analyzing signal detection scenarios?',
            options: [
              'Identifying sensory structures',
              'Analyzing signal detection scenarios',
              'Applying Weber\'s Law to problems',
              'Connecting sensation disorders to mechanisms'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing signal detection scenarios. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Applying Weber\'s Law to problems',
            options: ['Applying Weber\'s Law to problems', 'Identifying sensory structures', 'Analyzing signal detection scenarios', 'Connecting sensation disorders to mechanisms']
          },
          {
            label: 'Identifying sensory structures',
            options: ['Analyzing signal detection scenarios', 'Applying Weber\'s Law to problems', 'Identifying sensory structures', 'Connecting sensation disorders to mechanisms']
          },
          {
            label: 'Analyzing signal detection scenarios',
            options: ['Applying Weber\'s Law to problems', 'Identifying sensory structures', 'Connecting sensation disorders to mechanisms', 'Analyzing signal detection scenarios']
          }
        ],
        correctAnswers: ['Applying Weber\'s Law to problems', 'Identifying sensory structures', 'Analyzing signal detection scenarios'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Applying Weber\'s Law to problems. Identifying sensory structures. Analyzing signal detection scenarios.'
      }
    }
  ]
}
