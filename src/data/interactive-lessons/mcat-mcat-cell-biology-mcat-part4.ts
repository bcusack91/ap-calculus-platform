export const mcatCellBioPart4Data = {
  topicSlug: 'mcat-cell-biology-mcat',
  sections: [
    {
      id: 'mcat-4-intro',
      type: 'text' as const,
      content: `
# Cell Cycle & Division

**Part 4 of 7 — Cell Cycle & Division**

Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis).

Mitosis: prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells.
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
            question: 'Which of the following best describes a key concept in cell cycle & division?',
            options: [
              'Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis)'
          }
        ]
      }
    },
    {
      id: 'mcat-4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.

**MCAT Tip:** Checkpoints: G1/S (DNA damage?), G2/M (replication complete?), metaphase (all chromosomes attached?).
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
            question: 'What is an important principle for MCAT Bio/Biochem related to cell cycle & division?',
            options: [
              'Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity'
          }
        ]
      }
    },
    {
      id: 'mcat-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Cell Cycle & Division:',
            options: ['Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for div', 'Mitosis: prophase, metaphase, anaphase, telophase — produces', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Meiosis: two divisions producing 4 haploid gametes; crossing', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for div', 'Meiosis: two divisions producing 4 haploid gametes; crossing'],
        hint1: 'Think about cell cycle & division',
        hint2: 'Consider the MCAT application',
        explanation: 'Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis). Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.'
      }
    }
  ]
}
