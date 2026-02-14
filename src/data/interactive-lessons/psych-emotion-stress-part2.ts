export const psychEmotionPart2Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti2-intro',
      type: 'text' as const,
      content: `
# ## Components of Emotion

**Part 2 of 7 — Components of Emotion**

### 1. Physiological

autonomic nervous system activation

### 2. Behavioral

facial expressions, body language

### 3. Cognitive

interpretation and appraisal

### 4. Universal emotions (Ekman)

happiness, sadness, fear, anger, disgust, surprise
      `
    },
    {
      id: 'emoti2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of components of emotion?',
            options: [
              'Physiological',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Physiological: autonomic nervous system activation'
          },
          {
            question: 'In the context of components of emotion, which is accurate?',
            options: [
              'interpretation and appraisal',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive: interpretation and appraisal'
          }
        ]
      }
    },
    {
      id: 'emoti2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Physiological**: autonomic nervous system activation
- **Behavioral**: facial expressions, body language
- **Cognitive**: interpretation and appraisal
- **Universal emotions (Ekman)**: happiness, sadness, fear, anger, disgust, surprise
      `
    },
    {
      id: 'emoti2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to components of emotion?',
            options: [
              'happiness, sadness, fear, anger, disgust, surprise',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Universal emotions (Ekman): happiness, sadness, fear, anger, disgust, surprise'
          }
        ]
      }
    },
    {
      id: 'emoti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Physiological',
            options: ['autonomic nervous system activation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Behavioral',
            options: ['facial expressions, body language', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cognitive',
            options: ['interpretation and appraisal', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['autonomic nervous system activation', 'facial expressions, body language', 'interpretation and appraisal'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Components of Emotion.'
      }
    }
  ]
}
