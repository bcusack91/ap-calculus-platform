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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of generalization & discrimination?',
            options: [
              'Generalization',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Generalization: responding to similar stimuli'
          },
          {
            question: 'In the context of generalization & discrimination, which is accurate?',
            options: [
              'Watson conditioned fear of white rat',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Little Albert experiment: Watson conditioned fear of white rat'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Generalization',
            options: ['responding to similar stimuli', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Discrimination',
            options: ['responding only to the specific CS', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Little Albert experiment',
            options: ['Watson conditioned fear of white rat', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['responding to similar stimuli', 'responding only to the specific CS', 'Watson conditioned fear of white rat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Generalization & Discrimination.'
      }
    }
  ]
}
