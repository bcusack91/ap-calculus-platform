export const mcatCellBioPart6Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-6-intro',
      type: 'text' as const,
      content: `
# Stem Cells & Differentiation

**Part 6 of 7 — Stem Cells & Differentiation**

Stem cells: self-renewing, can differentiate into specialized cell types.

Totipotent: can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells).
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
            question: 'Which of the following best describes a key concept in stem cells & differentiation?',
            options: [
              'Stem cells: self-renewing, can differentiate into specialized cell types',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Stem cells: self-renewing, can differentiate into specialized cell types'
          }
        ]
      }
    },
    {
      id: 'mcat-6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Multipotent: limited range (hematopoietic stem cells make blood cells).

**MCAT Tip:** Differentiation is controlled by gene expression — same DNA, different genes active.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to stem cells & differentiation?',
            options: [
              'Multipotent: limited range (hematopoietic stem cells make blood cells)',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Multipotent: limited range (hematopoietic stem cells make blood cells)'
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
            label: 'Core concept for Stem Cells & Differentiation:',
            options: ['Stem cells: self-renewing, can differentiate into specialize', 'Totipotent: can become any cell (zygote); Pluripotent: any c', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Multipotent: limited range (hematopoietic stem cells make bl', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Stem cells: self-renewing, can differentiate into specialize', 'Multipotent: limited range (hematopoietic stem cells make bl'],
        hint1: 'Think about stem cells & differentiation',
        hint2: 'Consider the MCAT application',
        explanation: 'Stem cells: self-renewing, can differentiate into specialized cell types. Multipotent: limited range (hematopoietic stem cells make blood cells).'
      }
    }
  ]
}
