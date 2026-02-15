export const mcatMolBioPart1Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-1-intro',
      type: 'text' as const,
      content: `
# 🏥 Molecular Biology

**Part 1 of 7 — DNA Replication**

Replication is semiconservative: each new DNA molecule has one old and one new strand.

Helicase unwinds, primase lays RNA primer, DNA pol III extends 5-to-3, ligase seals gaps.
      `
    },
    {
      id: 'mcat-1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in dna replication?',
            options: [
              'Replication is semiconservative: each new DNA molecule has one old and one new strand',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Replication is semiconservative: each new DNA molecule has one old and one new strand'
          }
        ]
      }
    },
    {
      id: 'mcat-1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Leading strand: continuous synthesis; Lagging strand: Okazaki fragments.

**MCAT Tip:** Telomerase extends telomeres in germ cells and stem cells — prevents chromosome shortening.
      `
    },
    {
      id: 'mcat-1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT Bio/Biochem related to dna replication?',
            options: [
              'Leading strand: continuous synthesis; Lagging strand: Okazaki fragments',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Leading strand: continuous synthesis; Lagging strand: Okazaki fragments'
          }
        ]
      }
    },
    {
      id: 'mcat-1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for DNA Replication:',
            options: ['Replication is semiconservative: each new DNA molecule has o', 'Helicase unwinds, primase lays RNA primer, DNA pol III exten', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Leading strand: continuous synthesis; Lagging strand: Okazak', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Replication is semiconservative: each new DNA molecule has o', 'Leading strand: continuous synthesis; Lagging strand: Okazak'],
        hint1: 'Think about dna replication',
        hint2: 'Consider the MCAT application',
        explanation: 'Replication is semiconservative: each new DNA molecule has one old and one new strand. Leading strand: continuous synthesis; Lagging strand: Okazaki fragments.'
      }
    }
  ]
}
