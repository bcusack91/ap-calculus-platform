export const psychLanguagePart6Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Analyzing intelligence test data

Analyzing intelligence test data

### 2. Evaluating multiple intelligence theories

Evaluating multiple intelligence theories

### 3. Identifying language development stages

Identifying language development stages

### 4. Applying linguistic relativity

Applying linguistic relativity
      `
    },
    {
      id: 'langu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Analyzing intelligence test data?',
            options: [
              'Analyzing intelligence test data',
              'Evaluating multiple intelligence theories',
              'Applying linguistic relativity',
              'Identifying language development stages'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Analyzing intelligence test data. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Identifying language development stages?',
            options: [
              'Evaluating multiple intelligence theories',
              'Identifying language development stages',
              'Analyzing intelligence test data',
              'Applying linguistic relativity'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Identifying language development stages. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'langu6-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Analyzing intelligence test data**
- **Evaluating multiple intelligence theories**
- **Identifying language development stages**
- **Applying linguistic relativity**
      `
    },
    {
      id: 'langu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Applying linguistic relativity',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Applying linguistic relativity'
          }
        ]
      }
    },
    {
      id: 'langu6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing intelligence test data',
            options: ['Evaluating multiple intelligence theories', 'Identifying language development stages', 'Applying linguistic relativity', 'Analyzing intelligence test data']
          },
          {
            label: 'Evaluating multiple intelligence…',
            options: ['Identifying language development stages', 'Analyzing intelligence test data', 'Applying linguistic relativity', 'Evaluating multiple intelligence theories']
          },
          {
            label: 'Identifying language development stages',
            options: ['Applying linguistic relativity', 'Identifying language development stages', 'Analyzing intelligence test data', 'Evaluating multiple intelligence theories']
          }
        ],
        correctAnswers: ['Analyzing intelligence test data', 'Evaluating multiple intelligence theories', 'Identifying language development stages'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Analyzing intelligence test data. Evaluating multiple intelligence theories. Identifying language development stages.'
      }
    }
  ]
}
