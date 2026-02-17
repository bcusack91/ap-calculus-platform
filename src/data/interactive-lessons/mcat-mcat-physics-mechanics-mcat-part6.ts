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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Sound is a longitudinal wave; light is a transverse electromagnetic wave.', 'Wave speed v = f*lambda; frequency f = 1/T where T is the period.', 'Doppler effect: frequency increases when source and observer approach each other.', 'Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).']
          },
          {
            label: 'MCAT Tip',
            options: ['Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).', 'Doppler effect: frequency increases when source and observer approach each other.', 'Sound is a longitudinal wave; light is a transverse electromagnetic wave.', 'Wave speed v = f*lambda; frequency f = 1/T where T is the period.']
          }
        ],
        correctAnswers: ['Doppler effect: frequency increases when source and observer approach each other.', 'Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).'],
        hint1: 'Think about what each concept specifically describes in Waves & Sound.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Waves & Sound describes a specific idea. Key Insight: Doppler effect: frequency increases when source and observer approach each other. MCAT Tip: Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).'
      }
    }
  ]
}
