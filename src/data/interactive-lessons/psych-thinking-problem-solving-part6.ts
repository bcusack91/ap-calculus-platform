export const psychThinkingPart6Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying heuristics and biases in scenarios

Identifying heuristics and biases in scenarios

### 2. Analyzing decision-making errors

Analyzing decision-making errors

### 3. Applying problem-solving strategies

Applying problem-solving strategies

### 4. Evaluating framing effects

Evaluating framing effects
      `
    },
    {
      id: 'think6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying heuristics and biases in scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying heuristics and biases in scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Applying problem-solving strategies',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Applying problem-solving strategies'
          }
        ]
      }
    },
    {
      id: 'think6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying heuristics and biases in scenarios**
- **Analyzing decision-making errors**
- **Applying problem-solving strategies**
- **Evaluating framing effects**
      `
    },
    {
      id: 'think6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating framing effects',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating framing effects'
          }
        ]
      }
    },
    {
      id: 'think6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying heuristics and biases in scenarios',
            options: ['Identifying heuristics and biases in scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing decision-making errors',
            options: ['Analyzing decision-making errors', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Applying problem-solving strategies',
            options: ['Applying problem-solving strategies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying heuristics and biases in scenarios', 'Analyzing decision-making errors', 'Applying problem-solving strategies'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
