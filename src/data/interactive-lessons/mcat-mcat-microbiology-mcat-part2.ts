export const mcatMicroPart2Data = {
  topicSlug: 'mcat-microbiology-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Viruses & Prions

**Part 2 of 7 — Viruses & Prions**

Viruses: obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope.

Lytic cycle: virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in viruses & prions?',
            options: [
              'Viruses: obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Viruses: obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.

**MCAT Tip:** Prions: misfolded proteins that cause other proteins to misfold — no nucleic acid (e.g., CJD, mad cow).
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to viruses & prions?',
            options: [
              'Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Viruses',
            options: ['obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope.', 'Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.', 'virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome.', 'Prions: misfolded proteins that cause other proteins to misfold — no nucleic acid (e.g., CJD, mad cow).']
          },
          {
            label: 'Lytic cycle',
            options: ['Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.', 'obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope.', 'Prions: misfolded proteins that cause other proteins to misfold — no nucleic acid (e.g., CJD, mad cow).', 'virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome.']
          },
          {
            label: 'Key Insight',
            options: ['virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome.', 'obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope.', 'Prions: misfolded proteins that cause other proteins to misfold — no nucleic acid (e.g., CJD, mad cow).', 'Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.']
          }
        ],
        correctAnswers: ['obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope.', 'virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome.', 'Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.'],
        hint1: 'Think about what each concept specifically describes in Viruses & Prions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Viruses & Prions describes a specific idea. Viruses: obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope. Lytic cycle: virus replicates immediately, lyses host cell; Lysogenic: integrates into host genome. Key Insight: Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.'
      }
    }
  ]
}
