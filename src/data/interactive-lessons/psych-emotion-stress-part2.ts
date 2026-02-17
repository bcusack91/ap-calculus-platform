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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Physiological?',
            options: [
              'autonomic nervous system activation',
              'facial expressions, body language',
              'happiness, sadness, fear, anger, disgust, surprise',
              'interpretation and appraisal'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Physiological: autonomic nervous system activation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cognitive:',
            options: [
              'facial expressions, body language',
              'interpretation and appraisal',
              'autonomic nervous system activation',
              'happiness, sadness, fear, anger, disgust, surprise'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cognitive: interpretation and appraisal. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Physiological',
            options: ['interpretation and appraisal', 'facial expressions, body language', 'happiness, sadness, fear, anger, disgust, surprise', 'autonomic nervous system activation']
          },
          {
            label: 'Behavioral',
            options: ['happiness, sadness, fear, anger, disgust, surprise', 'autonomic nervous system activation', 'facial expressions, body language', 'interpretation and appraisal']
          },
          {
            label: 'Cognitive',
            options: ['autonomic nervous system activation', 'facial expressions, body language', 'happiness, sadness, fear, anger, disgust, surprise', 'interpretation and appraisal']
          }
        ],
        correctAnswers: ['autonomic nervous system activation', 'facial expressions, body language', 'interpretation and appraisal'],
        hint1: 'Think about what each concept specifically describes in Components of Emotion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Components of Emotion describes a specific idea. Physiological: autonomic nervous system activation. Behavioral: facial expressions, body language. Cognitive: interpretation and appraisal.'
      }
    }
  ]
}
