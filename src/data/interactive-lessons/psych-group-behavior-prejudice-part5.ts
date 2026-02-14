export const psychGroupPart5Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group5-intro',
      type: 'text' as const,
      content: `
# ## Cultural Influences

**Part 5 of 7 — Cultural Influences**

### 1. Individualist cultures

emphasis on personal goals and independence

### 2. Collectivist cultures

emphasis on group goals and interdependence

### 3. Cultural differences in conformity, attribution, self-concept

Cultural differences in conformity, attribution, self-concept

### 4. Cross-cultural psychology

studying behavior across cultures
      `
    },
    {
      id: 'group5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of cultural influences?',
            options: [
              'Individualist cultures',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Individualist cultures: emphasis on personal goals and independence'
          },
          {
            question: 'In the context of cultural influences, which is accurate?',
            options: [
              'Cultural differences in conformity, attribution, self-concept',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cultural differences in conformity, attribution, self-concept'
          }
        ]
      }
    },
    {
      id: 'group5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Individualist cultures**: emphasis on personal goals and independence
- **Collectivist cultures**: emphasis on group goals and interdependence
- **Cultural differences in conformity, attribution, self-concept**
- **Cross-cultural psychology**: studying behavior across cultures
      `
    },
    {
      id: 'group5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to cultural influences?',
            options: [
              'studying behavior across cultures',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Cross-cultural psychology: studying behavior across cultures'
          }
        ]
      }
    },
    {
      id: 'group5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Individualist cultures',
            options: ['emphasis on personal goals and independence', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Collectivist cultures',
            options: ['emphasis on group goals and interdependence', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cultural differences in conformity, attribution, self-concept',
            options: ['Cultural differences in conformity, attribution, s', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['emphasis on personal goals and independence', 'emphasis on group goals and interdependence', 'Cultural differences in conformity, attribution, s'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Cultural Influences.'
      }
    }
  ]
}
