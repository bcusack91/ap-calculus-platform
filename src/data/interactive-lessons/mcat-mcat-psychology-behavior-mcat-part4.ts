export const mcatPsychBehavPart4Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Motivation & Emotion

**Part 4 of 7 — Motivation & Emotion**

Drive reduction theory: biological needs create drives that motivate behavior.

Maslows hierarchy: physiological, safety, belonging, esteem, self-actualization.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in motivation & emotion?',
            options: [
              'Drive reduction theory: biological needs create drives that motivate behavior',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Drive reduction theory: biological needs create drives that motivate behavior'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.

**MCAT Tip:** Schachter-Singer (two-factor): arousal + cognitive label = emotion.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to motivation & emotion?',
            options: [
              'James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Drive reduction theory',
            options: ['physiological, safety, belonging, esteem, self-actualization.', 'James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.', 'biological needs create drives that motivate behavior.', 'Schachter-Singer (two-factor): arousal + cognitive label = emotion.']
          },
          {
            label: 'Maslows hierarchy',
            options: ['Schachter-Singer (two-factor): arousal + cognitive label = emotion.', 'biological needs create drives that motivate behavior.', 'James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.', 'physiological, safety, belonging, esteem, self-actualization.']
          },
          {
            label: 'Key Insight',
            options: ['physiological, safety, belonging, esteem, self-actualization.', 'James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.', 'biological needs create drives that motivate behavior.', 'Schachter-Singer (two-factor): arousal + cognitive label = emotion.']
          }
        ],
        correctAnswers: ['biological needs create drives that motivate behavior.', 'physiological, safety, belonging, esteem, self-actualization.', 'James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.'],
        hint1: 'Think about what each concept specifically describes in Motivation & Emotion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Motivation & Emotion describes a specific idea. Drive reduction theory: biological needs create drives that motivate behavior. Maslows hierarchy: physiological, safety, belonging, esteem, self-actualization. Key Insight: James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.'
      }
    }
  ]
}
