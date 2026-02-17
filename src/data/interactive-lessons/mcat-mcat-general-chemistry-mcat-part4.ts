export const mcatGenChemPart4Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Acids, Bases & Buffers

**Part 4 of 7 — Acids, Bases & Buffers**

Bronsted-Lowry: acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them.

pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14 at 25C.
      `
    },
    {
      id: 'mcat-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in acids, bases & buffers?',
            options: [
              'Bronsted-Lowry: acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Bronsted-Lowry: acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change.

**MCAT Tip:** Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations.
      `
    },
    {
      id: 'mcat-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to acids, bases & buffers?',
            options: [
              'Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bronsted-Lowry',
            options: ['Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change.', 'Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations.', 'acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them.', 'pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14 at 25C.']
          },
          {
            label: 'Key Insight',
            options: ['acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them.', 'pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14 at 25C.', 'Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change.', 'Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations.']
          },
          {
            label: 'MCAT Tip',
            options: ['Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations.', 'acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them.', 'pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14 at 25C.', 'Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change.']
          }
        ],
        correctAnswers: ['acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them.', 'Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change.', 'Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations.'],
        hint1: 'Think about what each concept specifically describes in Acids, Bases & Buffers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Acids, Bases & Buffers describes a specific idea. Bronsted-Lowry: acids donate H+, bases accept H+; Lewis: acids accept electron pairs, bases donate them. Key Insight: Buffer = weak acid + conjugate base (or weak base + conjugate acid) — resists pH change. MCAT Tip: Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]) — critical for MCAT buffer calculations.'
      }
    }
  ]
}
