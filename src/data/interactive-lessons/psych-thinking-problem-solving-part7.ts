export const psychThinkingPart7Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think7-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Heuristics are efficient but can lead…?',
            options: [
              'Creativity involves both knowledge and flexibility',
              'identifying biases and heuristics',
              'Heuristics are efficient but can lead to errors',
              'Cognitive biases affect everyday decisions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Heuristics are efficient but can lead to errors. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Creativity involves both knowledge and…?',
            options: [
              'Creativity involves both knowledge and flexibility',
              'Heuristics are efficient but can lead to errors',
              'Cognitive biases affect everyday decisions',
              'identifying biases and heuristics'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Creativity involves both knowledge and flexibility. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'think7-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Heuristics are efficient but can lead…',
            options: ['identifying biases and heuristics', 'Cognitive biases affect everyday decisions', 'Creativity involves both knowledge and flexibility', 'Heuristics are efficient but can lead to errors']
          },
          {
            label: 'Cognitive biases affect everyday…',
            options: ['Heuristics are efficient but can lead to errors', 'identifying biases and heuristics', 'Creativity involves both knowledge and flexibility', 'Cognitive biases affect everyday decisions']
          },
          {
            label: 'Creativity involves both knowledge and…',
            options: ['Creativity involves both knowledge and flexibility', 'Heuristics are efficient but can lead to errors', 'identifying biases and heuristics', 'Cognitive biases affect everyday decisions']
          }
        ],
        correctAnswers: ['Heuristics are efficient but can lead to errors', 'Cognitive biases affect everyday decisions', 'Creativity involves both knowledge and flexibility'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Heuristics are efficient but can lead to errors. Cognitive biases affect everyday decisions. Creativity involves both knowledge and flexibility.'
      }
    }
  ]
}
