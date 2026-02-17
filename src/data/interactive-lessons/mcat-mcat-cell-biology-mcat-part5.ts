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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Apoptosis',
            options: ['programmed cell death — caspase cascade leads to orderly cell dismantling.', 'mitochondrial stress releases cytochrome c, activating caspase-9.', 'Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.', 'Cancer: loss of apoptosis regulation + gain of proliferation signals = uncontrolled growth.']
          },
          {
            label: 'Intrinsic pathway',
            options: ['programmed cell death — caspase cascade leads to orderly cell dismantling.', 'Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.', 'Cancer: loss of apoptosis regulation + gain of proliferation signals = uncontrolled growth.', 'mitochondrial stress releases cytochrome c, activating caspase-9.']
          },
          {
            label: 'Key Insight',
            options: ['mitochondrial stress releases cytochrome c, activating caspase-9.', 'programmed cell death — caspase cascade leads to orderly cell dismantling.', 'Cancer: loss of apoptosis regulation + gain of proliferation signals = uncontrolled growth.', 'Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.']
          }
        ],
        correctAnswers: ['programmed cell death — caspase cascade leads to orderly cell dismantling.', 'mitochondrial stress releases cytochrome c, activating caspase-9.', 'Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.'],
        hint1: 'Think about what each concept specifically describes in Apoptosis & Regulation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Apoptosis & Regulation describes a specific idea. Apoptosis: programmed cell death — caspase cascade leads to orderly cell dismantling. Intrinsic pathway: mitochondrial stress releases cytochrome c, activating caspase-9. Key Insight: Extrinsic pathway: death ligands (FasL, TNF) bind death receptors, activating caspase-8.'
      }
    }
  ]
}
