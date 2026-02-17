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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Identifying heuristics and biases in…?',
            options: [
              'Identifying heuristics and biases in scenarios',
              'Applying problem-solving strategies',
              'Evaluating framing effects',
              'Analyzing decision-making errors'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Identifying heuristics and biases in scenarios. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Applying problem-solving strategies?',
            options: [
              'Identifying heuristics and biases in scenarios',
              'Analyzing decision-making errors',
              'Evaluating framing effects',
              'Applying problem-solving strategies'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Applying problem-solving strategies. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying heuristics and biases in…',
            options: ['Identifying heuristics and biases in scenarios', 'Analyzing decision-making errors', 'Applying problem-solving strategies', 'Evaluating framing effects']
          },
          {
            label: 'Analyzing decision-making errors',
            options: ['Applying problem-solving strategies', 'Analyzing decision-making errors', 'Evaluating framing effects', 'Identifying heuristics and biases in scenarios']
          },
          {
            label: 'Applying problem-solving strategies',
            options: ['Evaluating framing effects', 'Applying problem-solving strategies', 'Identifying heuristics and biases in scenarios', 'Analyzing decision-making errors']
          }
        ],
        correctAnswers: ['Identifying heuristics and biases in scenarios', 'Analyzing decision-making errors', 'Applying problem-solving strategies'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying heuristics and biases in scenarios. Analyzing decision-making errors. Applying problem-solving strategies.'
      }
    }
  ]
}
