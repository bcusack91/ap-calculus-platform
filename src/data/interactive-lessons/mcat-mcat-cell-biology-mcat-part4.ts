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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cell cycle',
            options: ['G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis).', 'Checkpoints: G1/S (DNA damage?), G2/M (replication complete?), metaphase (all chromosomes attached?).', 'prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells.', 'Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.']
          },
          {
            label: 'Mitosis',
            options: ['Checkpoints: G1/S (DNA damage?), G2/M (replication complete?), metaphase (all chromosomes attached?).', 'G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis).', 'Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.', 'prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells.']
          },
          {
            label: 'Key Insight',
            options: ['G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis).', 'prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells.', 'Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.', 'Checkpoints: G1/S (DNA damage?), G2/M (replication complete?), metaphase (all chromosomes attached?).']
          }
        ],
        correctAnswers: ['G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis).', 'prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells.', 'Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.'],
        hint1: 'Think about what each concept specifically describes in Cell Cycle & Division.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Cycle & Division describes a specific idea. Cell cycle: G1 (growth), S (DNA synthesis), G2 (prep for division), M (mitosis). Mitosis: prophase, metaphase, anaphase, telophase — produces 2 identical diploid cells. Key Insight: Meiosis: two divisions producing 4 haploid gametes; crossing over creates genetic diversity.'
      }
    }
  ]
}
