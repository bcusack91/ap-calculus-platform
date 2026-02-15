export const mcatPsychBehavPart2Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Learning & Memory

**Part 2 of 7 — Learning & Memory**

Classical conditioning (Pavlov): CS + UCS = CR; extinction, spontaneous recovery, generalization.

Operant conditioning (Skinner): reinforcement increases behavior, punishment decreases it.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in learning & memory?',
            options: [
              'Classical conditioning (Pavlov): CS + UCS = CR; extinction, spontaneous recovery, generalization',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Classical conditioning (Pavlov): CS + UCS = CR; extinction, spontaneous recovery, generalization'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Memory encoding: elaborative rehearsal > rote memorization; levels of processing theory.

**MCAT Tip:** Memory types: sensory (brief), short-term/working (7 +/- 2 items), long-term (unlimited capacity).
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Psych/Soc related to learning & memory?',
            options: [
              'Memory encoding: elaborative rehearsal > rote memorization; levels of processing theory',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Memory encoding: elaborative rehearsal > rote memorization; levels of processing theory'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Learning & Memory:',
            options: ['Classical conditioning (Pavlov): CS + UCS = CR; extinction, ', 'Operant conditioning (Skinner): reinforcement increases beha', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Memory encoding: elaborative rehearsal > rote memorization; ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Classical conditioning (Pavlov): CS + UCS = CR; extinction, ', 'Memory encoding: elaborative rehearsal > rote memorization; '],
        hint1: 'Think about learning & memory',
        hint2: 'Consider the MCAT application',
        explanation: 'Classical conditioning (Pavlov): CS + UCS = CR; extinction, spontaneous recovery, generalization. Memory encoding: elaborative rehearsal > rote memorization; levels of processing theory.'
      }
    }
  ]
}
