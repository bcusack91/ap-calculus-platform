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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Disorders exist on a continuum',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Disorders exist on a continuum'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Diagnosis requires clinical judgment',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Diagnosis requires clinical judgment'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Disorders exist on a continuum',
            options: ['Disorders exist on a continuum', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Multiple factors contribute to disorders',
            options: ['Multiple factors contribute to disorders', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Diagnosis requires clinical judgment',
            options: ['Diagnosis requires clinical judgment', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Disorders exist on a continuum', 'Multiple factors contribute to disorders', 'Diagnosis requires clinical judgment'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
