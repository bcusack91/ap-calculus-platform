export const psychClassicalPart4Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class4-intro',
      type: 'text' as const,
      content: `
# ## Generalization & Discrimination

**Part 4 of 7 — Generalization & Discrimination**

### 1. Generalization

responding to similar stimuli

### 2. Discrimination

responding only to the specific CS

### 3. Little Albert experiment

Watson conditioned fear of white rat

### 4. Fear generalized to other furry objects

Fear generalized to other furry objects
      `
    },
    {
      id: 'class4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Generalization?',
            options: [
              'responding to similar stimuli',
              'responding only to the specific CS',
              'Fear generalized to other furry objects',
              'Watson conditioned fear of white rat'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Generalization: responding to similar stimuli. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Little Albert experiment:',
            options: [
              'Fear generalized to other furry objects',
              'Watson conditioned fear of white rat',
              'responding only to the specific CS',
              'responding to similar stimuli'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Little Albert experiment: Watson conditioned fear of white rat. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'class4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Generalization**: responding to similar stimuli
- **Discrimination**: responding only to the specific CS
- **Little Albert experiment**: Watson conditioned fear of white rat
- **Fear generalized to other furry objects**
      `
    },
    {
      id: 'class4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to generalization & discrimination?',
            options: [
              'Fear generalized to other furry objects',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Fear generalized to other furry objects'
          }
        ]
      }
    },
    {
      id: 'class4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Generalization',
            options: ['Watson conditioned fear of white rat', 'responding only to the specific CS', 'Fear generalized to other furry objects', 'responding to similar stimuli']
          },
          {
            label: 'Discrimination',
            options: ['Watson conditioned fear of white rat', 'Fear generalized to other furry objects', 'responding only to the specific CS', 'responding to similar stimuli']
          },
          {
            label: 'Little Albert experiment',
            options: ['responding only to the specific CS', 'Fear generalized to other furry objects', 'responding to similar stimuli', 'Watson conditioned fear of white rat']
          }
        ],
        correctAnswers: ['responding to similar stimuli', 'responding only to the specific CS', 'Watson conditioned fear of white rat'],
        hint1: 'Think about what each concept specifically describes in Generalization & Discrimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Generalization & Discrimination describes a specific idea. Generalization: responding to similar stimuli. Discrimination: responding only to the specific CS. Little Albert experiment: Watson conditioned fear of white rat.'
      }
    }
  ]
}
