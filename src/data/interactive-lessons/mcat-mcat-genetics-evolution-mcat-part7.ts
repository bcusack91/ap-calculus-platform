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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Review & MCAT Practice:',
            options: ['Innate immunity: skin, mucous membranes, phagocytes, complem', 'Adaptive immunity: B cells (antibodies, humoral) and T cells', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['MHC I: on all nucleated cells, presents to CD8+ cytotoxic T ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Innate immunity: skin, mucous membranes, phagocytes, complem', 'MHC I: on all nucleated cells, presents to CD8+ cytotoxic T '],
        hint1: 'Think about review & mcat practice',
        hint2: 'Consider the MCAT application',
        explanation: 'Innate immunity: skin, mucous membranes, phagocytes, complement, inflammation — fast, nonspecific. MHC I: on all nucleated cells, presents to CD8+ cytotoxic T cells.'
      }
    }
  ]
}
