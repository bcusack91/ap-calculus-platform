export const mcatPhysMechPart7Data = {
  topicSlug: 'mcat-physics-mechanics-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Wave speed v = f*lambda; frequency f = 1/T where T is the period.

Sound is a longitudinal wave; light is a transverse electromagnetic wave.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Doppler effect: frequency increases when source and observer approach each other.

**MCAT Tip:** Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Doppler effect: frequency increases when source and observer approach each other.', 'Sound is a longitudinal wave; light is a transverse electromagnetic wave.', 'Wave speed v = f*lambda; frequency f = 1/T where T is the period.', 'Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).']
          },
          {
            label: 'MCAT Tip',
            options: ['Wave speed v = f*lambda; frequency f = 1/T where T is the period.', 'Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).', 'Sound is a longitudinal wave; light is a transverse electromagnetic wave.', 'Doppler effect: frequency increases when source and observer approach each other.']
          }
        ],
        correctAnswers: ['Doppler effect: frequency increases when source and observer approach each other.', 'Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Key Insight: Doppler effect: frequency increases when source and observer approach each other. MCAT Tip: Intensity follows inverse-square law: I is proportional to 1/r2; decibels: beta = 10*log(I/I0).'
      }
    }
  ]
}
