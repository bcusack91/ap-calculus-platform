export const psychMotivationPart6Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motiv6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Applying motivation theories to scenarios

Applying motivation theories to scenarios

### 2. Analyzing intrinsic vs extrinsic motivation

Analyzing intrinsic vs extrinsic motivation

### 3. Evaluating hunger regulation mechanisms

Evaluating hunger regulation mechanisms

### 4. Designing motivation interventions

Designing motivation interventions
      `
    },
    {
      id: 'motiv6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Applying motivation theories to…" refer to in psychology?',
            options: [
              'Applying motivation theories to scenarios',
              'Designing motivation interventions',
              'Evaluating hunger regulation mechanisms',
              'Analyzing intrinsic vs extrinsic motivation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Applying motivation theories to scenarios. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Evaluating hunger regulation mechanisms:',
            options: [
              'Evaluating hunger regulation mechanisms',
              'Designing motivation interventions',
              'Analyzing intrinsic vs extrinsic motivation',
              'Applying motivation theories to scenarios'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Evaluating hunger regulation mechanisms. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'motiv6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Applying motivation theories to scenarios**
- **Analyzing intrinsic vs extrinsic motivation**
- **Evaluating hunger regulation mechanisms**
- **Designing motivation interventions**
      `
    },
    {
      id: 'motiv6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing motivation interventions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing motivation interventions'
          }
        ]
      }
    },
    {
      id: 'motiv6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Applying motivation theories to…',
            options: ['Evaluating hunger regulation mechanisms', 'Designing motivation interventions', 'Applying motivation theories to scenarios', 'Analyzing intrinsic vs extrinsic motivation']
          },
          {
            label: 'Analyzing intrinsic vs extrinsic…',
            options: ['Applying motivation theories to scenarios', 'Evaluating hunger regulation mechanisms', 'Designing motivation interventions', 'Analyzing intrinsic vs extrinsic motivation']
          },
          {
            label: 'Evaluating hunger regulation mechanisms',
            options: ['Analyzing intrinsic vs extrinsic motivation', 'Applying motivation theories to scenarios', 'Evaluating hunger regulation mechanisms', 'Designing motivation interventions']
          }
        ],
        correctAnswers: ['Applying motivation theories to scenarios', 'Analyzing intrinsic vs extrinsic motivation', 'Evaluating hunger regulation mechanisms'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Applying motivation theories to scenarios. Analyzing intrinsic vs extrinsic motivation. Evaluating hunger regulation mechanisms.'
      }
    }
  ]
}
