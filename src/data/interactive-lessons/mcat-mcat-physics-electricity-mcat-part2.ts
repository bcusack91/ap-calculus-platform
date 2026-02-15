export const mcatPhysElecPart2Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Electric Circuits

**Part 2 of 7 — Electric Circuits**

Ohms law: V = IR; Power P = IV = I2R = V2/R.

Series: resistances add (Rtotal = R1+R2+...); current is same through all.
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
            question: 'Which of the following best describes a key concept in electric circuits?',
            options: [
              'Ohms law: V = IR; Power P = IV = I2R = V2/R',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Ohms law: V = IR; Power P = IV = I2R = V2/R'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.

**MCAT Tip:** Kirchhoffs laws: junction rule (currents in = currents out); loop rule (voltage drops sum to zero).
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
            question: 'What is an important principle for MCAT Chem/Phys related to electric circuits?',
            options: [
              'Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches'
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
            label: 'Core concept for Electric Circuits:',
            options: ['Ohms law: V = IR; Power P = IV = I2R = V2/R', 'Series: resistances add (Rtotal = R1+R2+...); current is sam', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same acro', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Ohms law: V = IR; Power P = IV = I2R = V2/R', 'Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same acro'],
        hint1: 'Think about electric circuits',
        hint2: 'Consider the MCAT application',
        explanation: 'Ohms law: V = IR; Power P = IV = I2R = V2/R. Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.'
      }
    }
  ]
}
