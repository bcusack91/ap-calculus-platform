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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Motivation & Emotion:',
            options: ['Drive reduction theory: biological needs create drives that ', 'Maslows hierarchy: physiological, safety, belonging, esteem,', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['James-Lange theory: event causes physiological arousal, then', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Drive reduction theory: biological needs create drives that ', 'James-Lange theory: event causes physiological arousal, then'],
        hint1: 'Think about motivation & emotion',
        hint2: 'Consider the MCAT application',
        explanation: 'Drive reduction theory: biological needs create drives that motivate behavior. James-Lange theory: event causes physiological arousal, then emotion; Cannon-Bard: simultaneous.'
      }
    }
  ]
}
