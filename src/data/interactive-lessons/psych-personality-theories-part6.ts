export const psychPersonalityPart6Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Comparing personality perspectives

Comparing personality perspectives

### 2. Identifying defense mechanisms in scenarios

Identifying defense mechanisms in scenarios

### 3. Evaluating personality assessments

Evaluating personality assessments

### 4. Applying social-cognitive theory

Applying social-cognitive theory
      `
    },
    {
      id: 'perso6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Comparing personality perspectives" refer to in psychology?',
            options: [
              'Applying social-cognitive theory',
              'Evaluating personality assessments',
              'Comparing personality perspectives',
              'Identifying defense mechanisms in scenarios'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Comparing personality perspectives. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Evaluating personality assessments?',
            options: [
              'Evaluating personality assessments',
              'Applying social-cognitive theory',
              'Identifying defense mechanisms in scenarios',
              'Comparing personality perspectives'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Evaluating personality assessments. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perso6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Comparing personality perspectives**
- **Identifying defense mechanisms in scenarios**
- **Evaluating personality assessments**
- **Applying social-cognitive theory**
      `
    },
    {
      id: 'perso6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Applying social-cognitive theory',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Applying social-cognitive theory'
          }
        ]
      }
    },
    {
      id: 'perso6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comparing personality perspectives',
            options: ['Identifying defense mechanisms in scenarios', 'Applying social-cognitive theory', 'Comparing personality perspectives', 'Evaluating personality assessments']
          },
          {
            label: 'Identifying defense mechanisms in…',
            options: ['Comparing personality perspectives', 'Applying social-cognitive theory', 'Identifying defense mechanisms in scenarios', 'Evaluating personality assessments']
          },
          {
            label: 'Evaluating personality assessments',
            options: ['Comparing personality perspectives', 'Identifying defense mechanisms in scenarios', 'Applying social-cognitive theory', 'Evaluating personality assessments']
          }
        ],
        correctAnswers: ['Comparing personality perspectives', 'Identifying defense mechanisms in scenarios', 'Evaluating personality assessments'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Comparing personality perspectives. Identifying defense mechanisms in scenarios. Evaluating personality assessments.'
      }
    }
  ]
}
