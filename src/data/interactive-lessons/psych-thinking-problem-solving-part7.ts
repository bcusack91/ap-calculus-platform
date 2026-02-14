export const psychThinkingPart7Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Heuristics are efficient but can lead to errors

Heuristics are efficient but can lead to errors

### 2. Cognitive biases affect everyday decisions

Cognitive biases affect everyday decisions

### 3. Creativity involves both knowledge and flexibility

Creativity involves both knowledge and flexibility

### 4. AP exam

identifying biases and heuristics
      `
    },
    {
      id: 'think7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Heuristics are efficient but can lead to errors',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Heuristics are efficient but can lead to errors'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Creativity involves both knowledge and flexibility',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Creativity involves both knowledge and flexibility'
          }
        ]
      }
    },
    {
      id: 'think7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Heuristics are efficient but can lead to errors**
- **Cognitive biases affect everyday decisions**
- **Creativity involves both knowledge and flexibility**
- **AP exam**: identifying biases and heuristics
      `
    },
    {
      id: 'think7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'identifying biases and heuristics',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: identifying biases and heuristics'
          }
        ]
      }
    },
    {
      id: 'think7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Heuristics are efficient but can lead to errors',
            options: ['Heuristics are efficient but can lead to errors', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cognitive biases affect everyday decisions',
            options: ['Cognitive biases affect everyday decisions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Creativity involves both knowledge and flexibility',
            options: ['Creativity involves both knowledge and flexibility', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Heuristics are efficient but can lead to errors', 'Cognitive biases affect everyday decisions', 'Creativity involves both knowledge and flexibility'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
