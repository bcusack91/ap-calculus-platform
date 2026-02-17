export const psychDisordersPart7Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Disorders exist on a continuum

Disorders exist on a continuum

### 2. Multiple factors contribute to disorders

Multiple factors contribute to disorders

### 3. Diagnosis requires clinical judgment

Diagnosis requires clinical judgment

### 4. AP exam

disorder identification
      `
    },
    {
      id: 'psych7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Disorders exist on a continuum" refer to in psychology?',
            options: [
              'Disorders exist on a continuum',
              'Diagnosis requires clinical judgment',
              'Multiple factors contribute to disorders',
              'disorder identification'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Disorders exist on a continuum. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Diagnosis requires clinical judgment?',
            options: [
              'Multiple factors contribute to disorders',
              'disorder identification',
              'Disorders exist on a continuum',
              'Diagnosis requires clinical judgment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Diagnosis requires clinical judgment. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'psych7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Disorders exist on a continuum**
- **Multiple factors contribute to disorders**
- **Diagnosis requires clinical judgment**
- **AP exam**: disorder identification
      `
    },
    {
      id: 'psych7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'disorder identification',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: disorder identification'
          }
        ]
      }
    },
    {
      id: 'psych7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Disorders exist on a continuum',
            options: ['Disorders exist on a continuum', 'disorder identification', 'Diagnosis requires clinical judgment', 'Multiple factors contribute to disorders']
          },
          {
            label: 'Multiple factors contribute to disorders',
            options: ['Disorders exist on a continuum', 'Multiple factors contribute to disorders', 'disorder identification', 'Diagnosis requires clinical judgment']
          },
          {
            label: 'Diagnosis requires clinical judgment',
            options: ['Disorders exist on a continuum', 'disorder identification', 'Multiple factors contribute to disorders', 'Diagnosis requires clinical judgment']
          }
        ],
        correctAnswers: ['Disorders exist on a continuum', 'Multiple factors contribute to disorders', 'Diagnosis requires clinical judgment'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Disorders exist on a continuum. Multiple factors contribute to disorders. Diagnosis requires clinical judgment.'
      }
    }
  ]
}
