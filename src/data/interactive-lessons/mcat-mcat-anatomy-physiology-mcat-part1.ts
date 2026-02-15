export const mcatAnatPhysPart1Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Anatomy Physiology

**Part 1 of 7 — Musculoskeletal System**

Skeletal muscle: voluntary, striated, multinucleated; Smooth muscle: involuntary, non-striated; Cardiac: involuntary, striated, intercalated discs.

Sarcomere: functional unit of muscle; actin (thin) + myosin (thick); sliding filament theory.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in musculoskeletal system?',
            options: [
              'Skeletal muscle: voluntary, striated, multinucleated; Smooth muscle: involuntary, non-striated; Cardiac: involuntary, st',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Skeletal muscle: voluntary, striated, multinucleated; Smooth muscle: involuntary, non-striated; Cardiac: involuntary, striated, intercalated discs'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Muscle contraction: Ca2+ released from SR, binds troponin, exposes binding sites, myosin pulls actin.

**MCAT Tip:** Bone: osteoblasts build, osteoclasts break down; regulated by PTH (resorption) and calcitonin (deposition).
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to musculoskeletal system?',
            options: [
              'Muscle contraction: Ca2+ released from SR, binds troponin, exposes binding sites, myosin pulls actin',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Muscle contraction: Ca2+ released from SR, binds troponin, exposes binding sites, myosin pulls actin'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Musculoskeletal System:',
            options: ['Skeletal muscle: voluntary, striated, multinucleated; Smooth', 'Sarcomere: functional unit of muscle; actin (thin) + myosin ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Muscle contraction: Ca2+ released from SR, binds troponin, e', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Skeletal muscle: voluntary, striated, multinucleated; Smooth', 'Muscle contraction: Ca2+ released from SR, binds troponin, e'],
        hint1: 'Think about musculoskeletal system',
        hint2: 'Consider the MCAT application',
        explanation: 'Skeletal muscle: voluntary, striated, multinucleated; Smooth muscle: involuntary, non-striated; Cardiac: involuntary, striated, intercalated discs. Muscle contraction: Ca2+ released from SR, binds troponin, exposes binding sites, myosin pulls actin.'
      }
    }
  ]
}
