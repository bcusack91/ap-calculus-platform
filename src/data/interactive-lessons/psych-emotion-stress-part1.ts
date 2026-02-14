export const psychEmotionPart1Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emoti1-intro',
      type: 'text' as const,
      content: `
# 🧠 Emotion & Stress

**Part 1 of 7 — Theories of Emotion**

### 1. James-Lange

stimulus → physiological arousal → emotion

### 2. Cannon-Bard

stimulus → simultaneous arousal AND emotion

### 3. Schachter-Singer (two-factor)

arousal + cognitive label = emotion

### 4. Lazarus

cognitive appraisal determines emotion
      `
    },
    {
      id: 'emoti1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of theories of emotion?',
            options: [
              'James-Lange',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'James-Lange: stimulus → physiological arousal → emotion'
          },
          {
            question: 'In the context of theories of emotion, which is accurate?',
            options: [
              'arousal + cognitive label = emotion',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Schachter-Singer (two-factor): arousal + cognitive label = emotion'
          }
        ]
      }
    },
    {
      id: 'emoti1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **James-Lange**: stimulus → physiological arousal → emotion
- **Cannon-Bard**: stimulus → simultaneous arousal AND emotion
- **Schachter-Singer (two-factor)**: arousal + cognitive label = emotion
- **Lazarus**: cognitive appraisal determines emotion
      `
    },
    {
      id: 'emoti1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to theories of emotion?',
            options: [
              'cognitive appraisal determines emotion',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Lazarus: cognitive appraisal determines emotion'
          }
        ]
      }
    },
    {
      id: 'emoti1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'James-Lange',
            options: ['stimulus → physiological arousal → emotion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cannon-Bard',
            options: ['stimulus → simultaneous arousal AND emotion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Schachter-Singer (two-factor)',
            options: ['arousal + cognitive label = emotion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['stimulus → physiological arousal → emotion', 'stimulus → simultaneous arousal AND emotion', 'arousal + cognitive label = emotion'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Theories of Emotion.'
      }
    }
  ]
}
