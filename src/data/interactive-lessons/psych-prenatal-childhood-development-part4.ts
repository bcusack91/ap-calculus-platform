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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of social & emotional development?',
            options: [
              'Attachment theory (Bowlby)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Attachment theory (Bowlby): innate need for attachment'
          },
          {
            question: 'In the context of social & emotional development, which is accurate?',
            options: [
              'contact comfort > food',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Harlow\'s monkeys: contact comfort > food'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Attachment theory (Bowlby)',
            options: ['innate need for attachment', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Ainsworth\'s Strange Situation',
            options: ['secure, avoidant, anxious-ambivalent', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Harlow\'s monkeys',
            options: ['contact comfort > food', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['innate need for attachment', 'secure, avoidant, anxious-ambivalent', 'contact comfort > food'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Social & Emotional Development.'
      }
    }
  ]
}
