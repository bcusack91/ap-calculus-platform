export const psychPrenatalPart2Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena2-intro',
      type: 'text' as const,
      content: `
# ## Infant Development

**Part 2 of 7 — Infant Development**

### 1. Reflexes

rooting, sucking, grasping, Moro

### 2. Motor development

head-to-toe (cephalocaudal), center-out (proximodistal)

### 3. Temperament

easy, difficult, slow-to-warm-up

### 4. Habituation

decreased response to repeated stimuli
      `
    },
    {
      id: 'prena2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of infant development?',
            options: [
              'Reflexes',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Reflexes: rooting, sucking, grasping, Moro'
          },
          {
            question: 'In the context of infant development, which is accurate?',
            options: [
              'easy, difficult, slow-to-warm-up',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Temperament: easy, difficult, slow-to-warm-up'
          }
        ]
      }
    },
    {
      id: 'prena2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Reflexes**: rooting, sucking, grasping, Moro
- **Motor development**: head-to-toe (cephalocaudal), center-out (proximodistal)
- **Temperament**: easy, difficult, slow-to-warm-up
- **Habituation**: decreased response to repeated stimuli
      `
    },
    {
      id: 'prena2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to infant development?',
            options: [
              'decreased response to repeated stimuli',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Habituation: decreased response to repeated stimuli'
          }
        ]
      }
    },
    {
      id: 'prena2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reflexes',
            options: ['rooting, sucking, grasping, Moro', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Motor development',
            options: ['head-to-toe (cephalocaudal), center-out (proximodi', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Temperament',
            options: ['easy, difficult, slow-to-warm-up', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['rooting, sucking, grasping, Moro', 'head-to-toe (cephalocaudal), center-out (proximodi', 'easy, difficult, slow-to-warm-up'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Infant Development.'
      }
    }
  ]
}
