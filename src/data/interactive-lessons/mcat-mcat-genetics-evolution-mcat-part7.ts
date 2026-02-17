export const mcatGeneticsPart7Data = {
  topicSlug: 'mcat-genetics-evolution-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

Innate immunity: skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific.

Adaptive immunity: B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory.
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
              'Innate immunity: skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Innate immunity: skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.

**MCAT Tip:** MHC II: on antigen-presenting cells (macrophages, dendritic cells, B cells), presents to CD4+ helper T cells.
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
              'MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells'
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
            label: 'Innate immunity',
            options: ['MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.', 'B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory.', 'MHC II: on antigen-presenting cells (macrophages, dendritic cells, B cells), presents to CD4+ helper T cells.', 'skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific.']
          },
          {
            label: 'Adaptive immunity',
            options: ['B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory.', 'skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific.', 'MHC II: on antigen-presenting cells (macrophages, dendritic cells, B cells), presents to CD4+ helper T cells.', 'MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.']
          },
          {
            label: 'Key Insight',
            options: ['MHC II: on antigen-presenting cells (macrophages, dendritic cells, B cells), presents to CD4+ helper T cells.', 'skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific.', 'MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.', 'B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory.']
          }
        ],
        correctAnswers: ['skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific.', 'B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory.', 'MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Innate immunity: skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific. Adaptive immunity: B cells (antibodies, humoral) and T cells (cell-mediated) — slow, specific, memory. Key Insight: MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.'
      }
    }
  ]
}
