export const psychBrainPart6Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying brain regions from symptoms

Identifying brain regions from symptoms

### 2. Matching neurotransmitters to functions

Matching neurotransmitters to functions

### 3. Analyzing brain imaging results

Analyzing brain imaging results

### 4. Predicting effects of brain damage

Predicting effects of brain damage
      `
    },
    {
      id: 'biolo6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Identifying brain regions from symptoms?',
            options: [
              'Predicting effects of brain damage',
              'Identifying brain regions from symptoms',
              'Matching neurotransmitters to functions',
              'Analyzing brain imaging results'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Identifying brain regions from symptoms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Analyzing brain imaging results:',
            options: [
              'Analyzing brain imaging results',
              'Predicting effects of brain damage',
              'Matching neurotransmitters to functions',
              'Identifying brain regions from symptoms'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Analyzing brain imaging results. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biolo6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying brain regions from symptoms**
- **Matching neurotransmitters to functions**
- **Analyzing brain imaging results**
- **Predicting effects of brain damage**
      `
    },
    {
      id: 'biolo6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting effects of brain damage',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting effects of brain damage'
          }
        ]
      }
    },
    {
      id: 'biolo6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying brain regions from symptoms',
            options: ['Matching neurotransmitters to functions', 'Identifying brain regions from symptoms', 'Predicting effects of brain damage', 'Analyzing brain imaging results']
          },
          {
            label: 'Matching neurotransmitters to functions',
            options: ['Predicting effects of brain damage', 'Analyzing brain imaging results', 'Identifying brain regions from symptoms', 'Matching neurotransmitters to functions']
          },
          {
            label: 'Analyzing brain imaging results',
            options: ['Predicting effects of brain damage', 'Identifying brain regions from symptoms', 'Analyzing brain imaging results', 'Matching neurotransmitters to functions']
          }
        ],
        correctAnswers: ['Identifying brain regions from symptoms', 'Matching neurotransmitters to functions', 'Analyzing brain imaging results'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying brain regions from symptoms. Matching neurotransmitters to functions. Analyzing brain imaging results.'
      }
    }
  ]
}
