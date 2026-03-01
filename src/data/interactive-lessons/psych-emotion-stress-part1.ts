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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes James-Lange?',
            options: [
              'arousal + cognitive label = emotion',
              'cognitive appraisal determines emotion',
              'stimulus → physiological arousal → emotion',
              'stimulus → simultaneous arousal AND emotion'
            ],
            correctAnswer: 2,
            explanation: 'Correct — James-Lange: stimulus → physiological arousal → emotion. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Schachter-Singer (two-factor):',
            options: [
              'cognitive appraisal determines emotion',
              'stimulus → physiological arousal → emotion',
              'arousal + cognitive label = emotion',
              'stimulus → simultaneous arousal AND emotion'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Schachter-Singer (two-factor): arousal + cognitive label = emotion. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'emoti1-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'James-Lange',
            options: ['cognitive appraisal determines emotion', 'stimulus → simultaneous arousal AND emotion', 'stimulus → physiological arousal → emotion', 'arousal + cognitive label = emotion']
          },
          {
            label: 'Cannon-Bard',
            options: ['cognitive appraisal determines emotion', 'arousal + cognitive label = emotion', 'stimulus → physiological arousal → emotion', 'stimulus → simultaneous arousal AND emotion']
          },
          {
            label: 'Schachter-Singer (two-factor)',
            options: ['stimulus → physiological arousal → emotion', 'stimulus → simultaneous arousal AND emotion', 'cognitive appraisal determines emotion', 'arousal + cognitive label = emotion']
          }
        ],
        correctAnswers: ['stimulus → physiological arousal → emotion', 'stimulus → simultaneous arousal AND emotion', 'arousal + cognitive label = emotion'],
        hint1: 'Think about what each concept specifically describes in Emotion & Stress.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Emotion & Stress describes a specific idea. James-Lange: stimulus → physiological arousal → emotion. Cannon-Bard: stimulus → simultaneous arousal AND emotion. Schachter-Singer (two-factor): arousal + cognitive label = emotion.'
      }
    }
  ]
}
