export const mcatCarsStratPart5Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Tone & Author Perspective

**Part 5 of 7 — Tone & Author Perspective**

Author attitude: positive, negative, neutral, mixed, or ironic.

Word choice reveals tone: clinical vs. passionate, dismissive vs. respectful.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in tone & author perspective?',
            options: [
              'Author attitude: positive, negative, neutral, mixed, or ironic',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Author attitude: positive, negative, neutral, mixed, or ironic'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Distinguish the authors view from views they are describing or critiquing.

**MCAT Tip:** Rhetorical purpose: why did the author include this example or argument?.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to tone & author perspective?',
            options: [
              'Distinguish the authors view from views they are describing or critiquing',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Distinguish the authors view from views they are describing or critiquing'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Tone & Author Perspective:',
            options: ['Author attitude: positive, negative, neutral, mixed, or iron', 'Word choice reveals tone: clinical vs. passionate, dismissiv', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Distinguish the authors view from views they are describing ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Author attitude: positive, negative, neutral, mixed, or iron', 'Distinguish the authors view from views they are describing '],
        hint1: 'Think about tone & author perspective',
        hint2: 'Consider the MCAT application',
        explanation: 'Author attitude: positive, negative, neutral, mixed, or ironic. Distinguish the authors view from views they are describing or critiquing.'
      }
    }
  ]
}
