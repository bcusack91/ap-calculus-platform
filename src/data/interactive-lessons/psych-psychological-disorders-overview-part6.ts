export const psychDisordersPart6Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying disorders from case descriptions

Identifying disorders from case descriptions

### 2. Distinguishing normal anxiety from disorders

Distinguishing normal anxiety from disorders

### 3. Applying the biopsychosocial model

Applying the biopsychosocial model

### 4. Evaluating diagnostic approaches

Evaluating diagnostic approaches
      `
    },
    {
      id: 'psych6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Identifying disorders from case…" refer to in psychology?',
            options: [
              'Applying the biopsychosocial model',
              'Evaluating diagnostic approaches',
              'Identifying disorders from case descriptions',
              'Distinguishing normal anxiety from disorders'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Identifying disorders from case descriptions. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Applying the biopsychosocial model?',
            options: [
              'Applying the biopsychosocial model',
              'Identifying disorders from case descriptions',
              'Distinguishing normal anxiety from disorders',
              'Evaluating diagnostic approaches'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Applying the biopsychosocial model. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'psych6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying disorders from case descriptions**
- **Distinguishing normal anxiety from disorders**
- **Applying the biopsychosocial model**
- **Evaluating diagnostic approaches**
      `
    },
    {
      id: 'psych6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Evaluating diagnostic approaches',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating diagnostic approaches'
          }
        ]
      }
    },
    {
      id: 'psych6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying disorders from case…',
            options: ['Applying the biopsychosocial model', 'Evaluating diagnostic approaches', 'Distinguishing normal anxiety from disorders', 'Identifying disorders from case descriptions']
          },
          {
            label: 'Distinguishing normal anxiety from…',
            options: ['Evaluating diagnostic approaches', 'Applying the biopsychosocial model', 'Distinguishing normal anxiety from disorders', 'Identifying disorders from case descriptions']
          },
          {
            label: 'Applying the biopsychosocial model',
            options: ['Distinguishing normal anxiety from disorders', 'Identifying disorders from case descriptions', 'Applying the biopsychosocial model', 'Evaluating diagnostic approaches']
          }
        ],
        correctAnswers: ['Identifying disorders from case descriptions', 'Distinguishing normal anxiety from disorders', 'Applying the biopsychosocial model'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying disorders from case descriptions. Distinguishing normal anxiety from disorders. Applying the biopsychosocial model.'
      }
    }
  ]
}
