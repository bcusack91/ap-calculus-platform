export const mcatCellBioPart7Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Stem cells: self-renewing, can differentiate into specialized cell types.

Totipotent: can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells).
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
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Multipotent: limited range (hematopoietic stem cells make blood cells).

**MCAT Tip:** Differentiation is controlled by gene expression — same DNA, different genes active.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to review & mcat practice?',
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
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Stem cells',
            options: ['Differentiation is controlled by gene expression — same DNA, different genes active.', 'Multipotent: limited range (hematopoietic stem cells make blood cells).', 'can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells).', 'self-renewing, can differentiate into specialized cell types.']
          },
          {
            label: 'Totipotent',
            options: ['Multipotent: limited range (hematopoietic stem cells make blood cells).', 'Differentiation is controlled by gene expression — same DNA, different genes active.', 'self-renewing, can differentiate into specialized cell types.', 'can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells).']
          },
          {
            label: 'Key Insight',
            options: ['can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells).', 'self-renewing, can differentiate into specialized cell types.', 'Multipotent: limited range (hematopoietic stem cells make blood cells).', 'Differentiation is controlled by gene expression — same DNA, different genes active.']
          }
        ],
        correctAnswers: ['self-renewing, can differentiate into specialized cell types.', 'can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells).', 'Multipotent: limited range (hematopoietic stem cells make blood cells).'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Stem cells: self-renewing, can differentiate into specialized cell types. Totipotent: can become any cell (zygote); Pluripotent: any cell except placenta (embryonic stem cells). Key Insight: Multipotent: limited range (hematopoietic stem cells make blood cells).'
      }
    }
  ]
}
