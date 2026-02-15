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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Viruses & Prions:',
            options: ['Viruses: obligate intracellular parasites; DNA or RNA genome', 'Lytic cycle: virus replicates immediately, lyses host cell; ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Retroviruses (HIV): RNA genome, reverse transcriptase makes ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Viruses: obligate intracellular parasites; DNA or RNA genome', 'Retroviruses (HIV): RNA genome, reverse transcriptase makes '],
        hint1: 'Think about viruses & prions',
        hint2: 'Consider the MCAT application',
        explanation: 'Viruses: obligate intracellular parasites; DNA or RNA genome, protein capsid, some have envelope. Retroviruses (HIV): RNA genome, reverse transcriptase makes DNA, integrates as provirus.'
      }
    }
  ]
}
