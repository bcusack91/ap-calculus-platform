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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ohms law',
            options: ['resistances add (Rtotal = R1+R2+...); current is same through all.', 'Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.', 'V = IR; Power P = IV = I2R = V2/R.', 'Kirchhoffs laws: junction rule (currents in = currents out); loop rule (voltage drops sum to zero).']
          },
          {
            label: 'Series',
            options: ['Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.', 'V = IR; Power P = IV = I2R = V2/R.', 'Kirchhoffs laws: junction rule (currents in = currents out); loop rule (voltage drops sum to zero).', 'resistances add (Rtotal = R1+R2+...); current is same through all.']
          },
          {
            label: 'Key Insight',
            options: ['Kirchhoffs laws: junction rule (currents in = currents out); loop rule (voltage drops sum to zero).', 'V = IR; Power P = IV = I2R = V2/R.', 'Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.', 'resistances add (Rtotal = R1+R2+...); current is same through all.']
          }
        ],
        correctAnswers: ['V = IR; Power P = IV = I2R = V2/R.', 'resistances add (Rtotal = R1+R2+...); current is same through all.', 'Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.'],
        hint1: 'Think about what each concept specifically describes in Electric Circuits.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Electric Circuits describes a specific idea. Ohms law: V = IR; Power P = IV = I2R = V2/R. Series: resistances add (Rtotal = R1+R2+...); current is same through all. Key Insight: Parallel: 1/Rtotal = 1/R1 + 1/R2 + ...; voltage is same across all branches.'
      }
    }
  ]
}
