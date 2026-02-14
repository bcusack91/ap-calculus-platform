export const psychDisordersPart3Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych3-intro',
      type: 'text' as const,
      content: `
# ## Perspectives on Disorders

**Part 3 of 7 — Perspectives on Disorders**

### 1. Biological

genetics, neurotransmitters, brain structure

### 2. Psychological

learning, cognition, personality

### 3. Sociocultural

culture, poverty, discrimination

### 4. Diathesis-stress model

vulnerability + stress → disorder
      `
    },
    {
      id: 'psych3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of perspectives on disorders?',
            options: [
              'Biological',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Biological: genetics, neurotransmitters, brain structure'
          },
          {
            question: 'In the context of perspectives on disorders, which is accurate?',
            options: [
              'culture, poverty, discrimination',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sociocultural: culture, poverty, discrimination'
          }
        ]
      }
    },
    {
      id: 'psych3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Biological**: genetics, neurotransmitters, brain structure
- **Psychological**: learning, cognition, personality
- **Sociocultural**: culture, poverty, discrimination
- **Diathesis-stress model**: vulnerability + stress → disorder
      `
    },
    {
      id: 'psych3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to perspectives on disorders?',
            options: [
              'vulnerability + stress → disorder',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Diathesis-stress model: vulnerability + stress → disorder'
          }
        ]
      }
    },
    {
      id: 'psych3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological',
            options: ['genetics, neurotransmitters, brain structure', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Psychological',
            options: ['learning, cognition, personality', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Sociocultural',
            options: ['culture, poverty, discrimination', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['genetics, neurotransmitters, brain structure', 'learning, cognition, personality', 'culture, poverty, discrimination'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Perspectives on Disorders.'
      }
    }
  ]
}
