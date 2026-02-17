export const psychMoodPsychPart6Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Differentiating mood disorders

Differentiating mood disorders

### 2. Identifying schizophrenia symptoms

Identifying schizophrenia symptoms

### 3. Analyzing neurotransmitter involvement

Analyzing neurotransmitter involvement

### 4. Evaluating diagnostic criteria

Evaluating diagnostic criteria
      `
    },
    {
      id: 'mood-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Differentiating mood disorders" refer to in psychology?',
            options: [
              'Evaluating diagnostic criteria',
              'Differentiating mood disorders',
              'Analyzing neurotransmitter involvement',
              'Identifying schizophrenia symptoms'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Differentiating mood disorders. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Analyzing neurotransmitter involvement:',
            options: [
              'Differentiating mood disorders',
              'Identifying schizophrenia symptoms',
              'Analyzing neurotransmitter involvement',
              'Evaluating diagnostic criteria'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Analyzing neurotransmitter involvement. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mood-6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Differentiating mood disorders**
- **Identifying schizophrenia symptoms**
- **Analyzing neurotransmitter involvement**
- **Evaluating diagnostic criteria**
      `
    },
    {
      id: 'mood-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating diagnostic criteria',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating diagnostic criteria'
          }
        ]
      }
    },
    {
      id: 'mood-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Differentiating mood disorders',
            options: ['Differentiating mood disorders', 'Identifying schizophrenia symptoms', 'Analyzing neurotransmitter involvement', 'Evaluating diagnostic criteria']
          },
          {
            label: 'Identifying schizophrenia symptoms',
            options: ['Analyzing neurotransmitter involvement', 'Differentiating mood disorders', 'Evaluating diagnostic criteria', 'Identifying schizophrenia symptoms']
          },
          {
            label: 'Analyzing neurotransmitter involvement',
            options: ['Differentiating mood disorders', 'Evaluating diagnostic criteria', 'Analyzing neurotransmitter involvement', 'Identifying schizophrenia symptoms']
          }
        ],
        correctAnswers: ['Differentiating mood disorders', 'Identifying schizophrenia symptoms', 'Analyzing neurotransmitter involvement'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Differentiating mood disorders. Identifying schizophrenia symptoms. Analyzing neurotransmitter involvement.'
      }
    }
  ]
}
