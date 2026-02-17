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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Individualist cultures?',
            options: [
              'Cultural differences in conformity, attribution, self-concept',
              'emphasis on group goals and interdependence',
              'studying behavior across cultures',
              'emphasis on personal goals and independence'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Individualist cultures: emphasis on personal goals and independence. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Cultural differences in conformity,…?',
            options: [
              'emphasis on personal goals and independence',
              'Cultural differences in conformity, attribution, self-concept',
              'studying behavior across cultures',
              'emphasis on group goals and interdependence'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cultural differences in conformity, attribution, self-concept. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Individualist cultures',
            options: ['studying behavior across cultures', 'emphasis on personal goals and independence', 'emphasis on group goals and interdependence', 'Cultural differences in conformity, attribution, self-concept']
          },
          {
            label: 'Collectivist cultures',
            options: ['studying behavior across cultures', 'emphasis on personal goals and independence', 'Cultural differences in conformity, attribution, self-concept', 'emphasis on group goals and interdependence']
          },
          {
            label: 'Cross-cultural psychology',
            options: ['Cultural differences in conformity, attribution, self-concept', 'studying behavior across cultures', 'emphasis on group goals and interdependence', 'emphasis on personal goals and independence']
          }
        ],
        correctAnswers: ['emphasis on personal goals and independence', 'emphasis on group goals and interdependence', 'studying behavior across cultures'],
        hint1: 'Think about what each concept specifically describes in Cultural Influences.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cultural Influences describes a specific idea. Individualist cultures: emphasis on personal goals and independence. Collectivist cultures: emphasis on group goals and interdependence. Cross-cultural psychology: studying behavior across cultures.'
      }
    }
  ]
}
