export const mcatMolBioPart2Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Transcription & RNA Processing

**Part 2 of 7 — Transcription & RNA Processing**

Transcription: RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3.

Promoter: TATA box ~25 bp upstream; transcription factors help RNA pol II bind.
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
            question: 'Which of the following best describes a key concept in transcription & rna processing?',
            options: [
              'Transcription: RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Transcription: RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.

**MCAT Tip:** Alternative splicing: one gene can produce multiple mRNA variants and thus multiple proteins.
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
            question: 'What is an important principle for MCAT Bio/Biochem related to transcription & rna processing?',
            options: [
              'Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing'
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
            label: 'Core concept for Transcription & RNA Processing:',
            options: ['Transcription: RNA polymerase reads template 3-to-5, synthes', 'Promoter: TATA box ~25 bp upstream; transcription factors he', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Post-transcriptional processing: 5-cap (7-methylguanosine), ', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Transcription: RNA polymerase reads template 3-to-5, synthes', 'Post-transcriptional processing: 5-cap (7-methylguanosine), '],
        hint1: 'Think about transcription & rna processing',
        hint2: 'Consider the MCAT application',
        explanation: 'Transcription: RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3. Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.'
      }
    }
  ]
}
