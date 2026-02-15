export const mcatCellBioPart5Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Apoptosis & Regulation

**Part 5 of 7 — Apoptosis & Regulation**

Apoptosis: programmed cell death — caspase cascade leads to orderly cell dismantling.

Intrinsic pathway: mitochondrial stress releases cytochrome c, activating caspase-9.
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
            question: 'Which of the following best describes a key concept in apoptosis & regulation?',
            options: [
              'Apoptosis: programmed cell death — caspase cascade leads to orderly cell dismantling',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Apoptosis: programmed cell death — caspase cascade leads to orderly cell dismantling'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.

**MCAT Tip:** Cancer: loss of apoptosis regulation + gain of proliferation signals = uncontrolled growth.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to apoptosis & regulation?',
            options: [
              'Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8'
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
            label: 'Core concept for Apoptosis & Regulation:',
            options: ['Apoptosis: programmed cell death — caspase cascade leads to ', 'Intrinsic pathway: mitochondrial stress releases cytochrome ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Extrinsic pathway: death ligands (FasL, TNF) bind death rece', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Apoptosis: programmed cell death — caspase cascade leads to ', 'Extrinsic pathway: death ligands (FasL, TNF) bind death rece'],
        hint1: 'Think about apoptosis & regulation',
        hint2: 'Consider the MCAT application',
        explanation: 'Apoptosis: programmed cell death — caspase cascade leads to orderly cell dismantling. Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.'
      }
    }
  ]
}
