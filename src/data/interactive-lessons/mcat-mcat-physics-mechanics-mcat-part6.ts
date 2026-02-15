export const mcatPhysMechPart6Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Waves & Sound

**Part 6 of 7 — Waves & Sound**

Wave speed v = f*lambda; frequency f = 1/T where T is the period.

Sound is a longitudinal wave; light is a transverse electromagnetic wave.
      `
    },
    {
      id: 'mcat-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in waves & sound?',
            options: [
              'Wave speed v = f*lambda; frequency f = 1/T where T is the period',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Wave speed v = f*lambda; frequency f = 1/T where T is the period'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Doppler effect: frequency increases when source and observer approach each other.

**MCAT Tip:** Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).
      `
    },
    {
      id: 'mcat-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to waves & sound?',
            options: [
              'Doppler effect: frequency increases when source and observer approach each other',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Doppler effect: frequency increases when source and observer approach each other'
          }
        ]
      }
    },
    {
      id: 'mcat-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Waves & Sound:',
            options: ['Wave speed v = f*lambda; frequency f = 1/T where T is the pe', 'Sound is a longitudinal wave; light is a transverse electrom', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Doppler effect: frequency increases when source and observer', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Wave speed v = f*lambda; frequency f = 1/T where T is the pe', 'Doppler effect: frequency increases when source and observer'],
        hint1: 'Think about waves & sound',
        hint2: 'Consider the MCAT application',
        explanation: 'Wave speed v = f*lambda; frequency f = 1/T where T is the period. Doppler effect: frequency increases when source and observer approach each other.'
      }
    }
  ]
}
