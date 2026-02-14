export const psychBrainPart3Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biolo3-intro',
      type: 'text' as const,
      content: `
# ## The Nervous System

**Part 3 of 7 — The Nervous System**

### 1. Central NS

brain + spinal cord

### 2. Peripheral NS

somatic (voluntary) + autonomic (involuntary)

### 3. Sympathetic

fight-or-flight

### 4. Parasympathetic

rest-and-digest
      `
    },
    {
      id: 'biolo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of the nervous system?',
            options: [
              'Central NS',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Central NS: brain + spinal cord'
          },
          {
            question: 'In the context of the nervous system, which is accurate?',
            options: [
              'fight-or-flight',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sympathetic: fight-or-flight'
          }
        ]
      }
    },
    {
      id: 'biolo3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Central NS**: brain + spinal cord
- **Peripheral NS**: somatic (voluntary) + autonomic (involuntary)
- **Sympathetic**: fight-or-flight
- **Parasympathetic**: rest-and-digest
      `
    },
    {
      id: 'biolo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to the nervous system?',
            options: [
              'rest-and-digest',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Parasympathetic: rest-and-digest'
          }
        ]
      }
    },
    {
      id: 'biolo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central NS',
            options: ['brain + spinal cord', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Peripheral NS',
            options: ['somatic (voluntary) + autonomic (involuntary)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Sympathetic',
            options: ['fight-or-flight', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['brain + spinal cord', 'somatic (voluntary) + autonomic (involuntary)', 'fight-or-flight'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding The Nervous System.'
      }
    }
  ]
}
