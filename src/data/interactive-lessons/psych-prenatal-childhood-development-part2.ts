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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Reflexes?',
            options: [
              'easy, difficult, slow-to-warm-up',
              'rooting, sucking, grasping, Moro',
              'head-to-toe (cephalocaudal), center-out (proximodistal)',
              'decreased response to repeated stimuli'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Reflexes: rooting, sucking, grasping, Moro. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Temperament:',
            options: [
              'head-to-toe (cephalocaudal), center-out (proximodistal)',
              'easy, difficult, slow-to-warm-up',
              'rooting, sucking, grasping, Moro',
              'decreased response to repeated stimuli'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Temperament: easy, difficult, slow-to-warm-up. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reflexes',
            options: ['head-to-toe (cephalocaudal), center-out (proximodistal)', 'rooting, sucking, grasping, Moro', 'decreased response to repeated stimuli', 'easy, difficult, slow-to-warm-up']
          },
          {
            label: 'Motor development',
            options: ['easy, difficult, slow-to-warm-up', 'decreased response to repeated stimuli', 'head-to-toe (cephalocaudal), center-out (proximodistal)', 'rooting, sucking, grasping, Moro']
          },
          {
            label: 'Temperament',
            options: ['easy, difficult, slow-to-warm-up', 'decreased response to repeated stimuli', 'head-to-toe (cephalocaudal), center-out (proximodistal)', 'rooting, sucking, grasping, Moro']
          }
        ],
        correctAnswers: ['rooting, sucking, grasping, Moro', 'head-to-toe (cephalocaudal), center-out (proximodistal)', 'easy, difficult, slow-to-warm-up'],
        hint1: 'Think about what each concept specifically describes in Infant Development.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Infant Development describes a specific idea. Reflexes: rooting, sucking, grasping, Moro. Motor development: head-to-toe (cephalocaudal), center-out (proximodistal). Temperament: easy, difficult, slow-to-warm-up.'
      }
    }
  ]
}
