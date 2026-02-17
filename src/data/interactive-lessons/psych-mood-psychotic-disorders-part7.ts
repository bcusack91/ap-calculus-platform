export const psychMoodPsychPart7Data = {
  topicSlug: 'mood-psychotic-disorders',
  sections: [
    {
      id: 'mood-7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Depression is the leading cause of disability worldwide

Depression is the leading cause of disability worldwide

### 2. Schizophrenia affects ~1% of population

Schizophrenia affects ~1% of population

### 3. Biological and psychological treatments both effective

Biological and psychological treatments both effective

### 4. AP exam

disorder comparison questions
      `
    },
    {
      id: 'mood-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Depression is the leading cause of…" refer to in psychology?',
            options: [
              'Schizophrenia affects ~1% of population',
              'Depression is the leading cause of disability worldwide',
              'disorder comparison questions',
              'Biological and psychological treatments both effective'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Depression is the leading cause of disability worldwide. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Biological and psychological treatments…:',
            options: [
              'disorder comparison questions',
              'Biological and psychological treatments both effective',
              'Depression is the leading cause of disability worldwide',
              'Schizophrenia affects ~1% of population'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Biological and psychological treatments both effective. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mood-7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Depression is the leading cause of disability worldwide**
- **Schizophrenia affects ~1% of population**
- **Biological and psychological treatments both effective**
- **AP exam**: disorder comparison questions
      `
    },
    {
      id: 'mood-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'disorder comparison questions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: disorder comparison questions'
          }
        ]
      }
    },
    {
      id: 'mood-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Depression is the leading cause of…',
            options: ['disorder comparison questions', 'Schizophrenia affects ~1% of population', 'Biological and psychological treatments both effective', 'Depression is the leading cause of disability worldwide']
          },
          {
            label: 'Schizophrenia affects ~1% of population',
            options: ['Biological and psychological treatments both effective', 'Schizophrenia affects ~1% of population', 'Depression is the leading cause of disability worldwide', 'disorder comparison questions']
          },
          {
            label: 'Biological and psychological treatments…',
            options: ['Biological and psychological treatments both effective', 'disorder comparison questions', 'Depression is the leading cause of disability worldwide', 'Schizophrenia affects ~1% of population']
          }
        ],
        correctAnswers: ['Depression is the leading cause of disability worldwide', 'Schizophrenia affects ~1% of population', 'Biological and psychological treatments both effective'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Depression is the leading cause of disability worldwide. Schizophrenia affects ~1% of population. Biological and psychological treatments both effective.'
      }
    }
  ]
}
