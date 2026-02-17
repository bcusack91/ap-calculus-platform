export const psychPrenatalPart4Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena4-intro',
      type: 'text' as const,
      content: `
# ## Social & Emotional Development

**Part 4 of 7 — Social & Emotional Development**

### 1. Attachment theory (Bowlby)

innate need for attachment

### 2. Ainsworth's Strange Situation

secure, avoidant, anxious-ambivalent

### 3. Harlow's monkeys

contact comfort > food

### 4. Erikson's stages

trust vs mistrust, autonomy vs shame, initiative vs guilt
      `
    },
    {
      id: 'prena4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Attachment theory (Bowlby)?',
            options: [
              'trust vs mistrust, autonomy vs shame, initiative vs guilt',
              'contact comfort > food',
              'secure, avoidant, anxious-ambivalent',
              'innate need for attachment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Attachment theory (Bowlby): innate need for attachment. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Social & Emotional Development, which explains Harlow\'s monkeys?',
            options: [
              'contact comfort > food',
              'secure, avoidant, anxious-ambivalent',
              'innate need for attachment',
              'trust vs mistrust, autonomy vs shame, initiative vs guilt'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Harlow\'s monkeys: contact comfort > food. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'prena4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Attachment theory (Bowlby)**: innate need for attachment
- **Ainsworth's Strange Situation**: secure, avoidant, anxious-ambivalent
- **Harlow's monkeys**: contact comfort > food
- **Erikson's stages**: trust vs mistrust, autonomy vs shame, initiative vs guilt
      `
    },
    {
      id: 'prena4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to social & emotional development?',
            options: [
              'trust vs mistrust, autonomy vs shame, initiative vs guilt',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Erikson\'s stages: trust vs mistrust, autonomy vs shame, initiative vs guilt'
          }
        ]
      }
    },
    {
      id: 'prena4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attachment theory (Bowlby)',
            options: ['trust vs mistrust, autonomy vs shame, initiative vs guilt', 'contact comfort > food', 'secure, avoidant, anxious-ambivalent', 'innate need for attachment']
          },
          {
            label: 'Ainsworth\'s Strange Situation',
            options: ['secure, avoidant, anxious-ambivalent', 'innate need for attachment', 'contact comfort > food', 'trust vs mistrust, autonomy vs shame, initiative vs guilt']
          },
          {
            label: 'Harlow\'s monkeys',
            options: ['trust vs mistrust, autonomy vs shame, initiative vs guilt', 'secure, avoidant, anxious-ambivalent', 'innate need for attachment', 'contact comfort > food']
          }
        ],
        correctAnswers: ['innate need for attachment', 'secure, avoidant, anxious-ambivalent', 'contact comfort > food'],
        hint1: 'Think about what each concept specifically describes in Social & Emotional Development.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Social & Emotional Development describes a specific idea. Attachment theory (Bowlby): innate need for attachment. Ainsworth\'s Strange Situation: secure, avoidant, anxious-ambivalent. Harlow\'s monkeys: contact comfort > food.'
      }
    }
  ]
}
