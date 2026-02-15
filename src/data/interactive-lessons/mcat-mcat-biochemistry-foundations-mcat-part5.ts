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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Nucleic Acids & DNA:',
            options: ['DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), an', 'Replication: semiconservative, 5-to-3 direction, DNA polymer', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Transcription: DNA to mRNA by RNA polymerase; processing inc', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), an', 'Transcription: DNA to mRNA by RNA polymerase; processing inc'],
        hint1: 'Think about nucleic acids & dna',
        hint2: 'Consider the MCAT application',
        explanation: 'DNA: deoxyribose sugar, A-T (2 H-bonds), G-C (3 H-bonds), antiparallel double helix. Transcription: DNA to mRNA by RNA polymerase; processing includes 5-cap, poly-A tail, splicing.'
      }
    }
  ]
}
