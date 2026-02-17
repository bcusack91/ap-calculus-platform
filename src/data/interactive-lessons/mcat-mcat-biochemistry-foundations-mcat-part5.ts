export const mcatBiochemPart5Data = {
  topicSlug: 'mcat-biochemistry-foundations-mcat',
  sections: [
    {
      id: 'mcat-5-intro',
      type: 'text' as const,
      content: `
# Nucleic Acids & DNA

**Part 5 of 7 — Nucleic Acids & DNA**

DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix.

Replication: semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands.
      `
    },
    {
      id: 'mcat-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in nucleic acids & dna?',
            options: [
              'DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix'
          }
        ]
      }
    },
    {
      id: 'mcat-5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.

**MCAT Tip:** Translation: mRNA to protein at ribosome; tRNA brings amino acids; codons read 5-to-3.
      `
    },
    {
      id: 'mcat-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Chem/Phys related to nucleic acids & dna?',
            options: [
              'Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing'
          }
        ]
      }
    },
    {
      id: 'mcat-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA',
            options: ['Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.', 'deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix.', 'semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands.', 'Translation: mRNA to protein at ribosome; tRNA brings amino acids; codons read 5-to-3.']
          },
          {
            label: 'Replication',
            options: ['Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.', 'deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix.', 'semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands.', 'Translation: mRNA to protein at ribosome; tRNA brings amino acids; codons read 5-to-3.']
          },
          {
            label: 'Key Insight',
            options: ['Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.', 'semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands.', 'Translation: mRNA to protein at ribosome; tRNA brings amino acids; codons read 5-to-3.', 'deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix.']
          }
        ],
        correctAnswers: ['deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix.', 'semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands.', 'Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.'],
        hint1: 'Think about what each concept specifically describes in Nucleic Acids & DNA.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nucleic Acids & DNA describes a specific idea. DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix. Replication: semiconservative, 5-to-3 direction, DNA polymerase III, leading/lagging strands. Key Insight: Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.'
      }
    }
  ]
}
