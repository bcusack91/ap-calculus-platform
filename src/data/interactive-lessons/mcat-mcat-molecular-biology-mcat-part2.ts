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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transcription',
            options: ['Alternative splicing: one gene can produce multiple mRNA variants and thus multiple proteins.', 'TATA box ~25 bp upstream; transcription factors help RNA pol II bind.', 'Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.', 'RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3.']
          },
          {
            label: 'Promoter',
            options: ['Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.', 'Alternative splicing: one gene can produce multiple mRNA variants and thus multiple proteins.', 'TATA box ~25 bp upstream; transcription factors help RNA pol II bind.', 'RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3.']
          },
          {
            label: 'Key Insight',
            options: ['TATA box ~25 bp upstream; transcription factors help RNA pol II bind.', 'Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.', 'RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3.', 'Alternative splicing: one gene can produce multiple mRNA variants and thus multiple proteins.']
          }
        ],
        correctAnswers: ['RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3.', 'TATA box ~25 bp upstream; transcription factors help RNA pol II bind.', 'Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.'],
        hint1: 'Think about what each concept specifically describes in Transcription & RNA Processing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription & RNA Processing describes a specific idea. Transcription: RNA polymerase reads template 3-to-5, synthesizes mRNA 5-to-3. Promoter: TATA box ~25 bp upstream; transcription factors help RNA pol II bind. Key Insight: Post-transcriptional processing: 5-cap (7-methylguanosine), 3-poly-A tail, intron splicing.'
      }
    }
  ]
}
