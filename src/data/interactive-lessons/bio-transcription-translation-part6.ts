export const bioTranscriptionPart6Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran6-intro-p6',
      type: 'text' as const,
      content: `
## Transcription & Translation: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Using the genetic code table
2. Predicting effects of mutations on proteins
3. Tracing from DNA to mRNA to protein
4. Identifying frameshift vs point mutations
      `
    },
    {
      id: 'tran6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How is the genetic code table used to find the amino acid for a codon?',
            options: [
              'Read the tRNA anticodon and find its bases in the table\'s rows',
              'Read the mRNA codon 5\'→3\' and find its bases in order',
              'Read the DNA template strand directly as if it were the codon',
              'Read the mRNA codon 3\'→5\' starting from its last base in the table'
            ],
            correctAnswer: 1,
            explanation: 'The genetic code table is organized by mRNA codons read 5\'→3\': locate the first base, then the second, then the third to find the amino acid. Anticodons and the DNA template strand are complementary to the codon, so reading them directly gives the wrong amino acid.'
          },
          {
            question: 'A DNA template strand reads 3\'-TAC-5\'. Which amino acid does the matching mRNA codon specify?',
            options: [
              'Methionine, from the mRNA codon AUG',
              'Tyrosine, reading the template as UAC',
              'Valine, from the codon read as GUA',
              'No amino acid, since AUG is only a start signal'
            ],
            correctAnswer: 0,
            explanation: 'The template 3\'-TAC-5\' is transcribed into the mRNA codon 5\'-AUG-3\', which codes for methionine (and also serves as the start codon). Reading the template bases as the codon gives UAC (tyrosine), and reading the codon backward gives GUA (valine).'
          }
        ]
      }
    },
    {
      id: 'tran6-detail-p6',
      type: 'text' as const,
      content: `
### Key Details

- **Using the genetic code table**
- **Predicting effects of mutations on proteins**
- **Tracing from DNA to mRNA to protein**
- **Identifying frameshift vs point mutations**
      `
    },
    {
      id: 'tran6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which mutation is most likely to change every amino acid after the mutation site?',
            options: [
              'Substituting one base, which can change a single codon',
              'Deleting three adjacent bases, which removes one codon',
              'A silent substitution in the third position of a codon',
              'Deleting one base, which shifts the reading frame'
            ],
            correctAnswer: 3,
            explanation: 'Deleting a single nucleotide shifts the reading frame, so every codon downstream is read differently (a frameshift). A base substitution changes at most one codon, a silent substitution changes none, and deleting three bases removes one amino acid but keeps the frame.'
          }
        ]
      }
    },
    {
      id: 'tran6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Using the genetic code table',
            options: ['Using the genetic code table', 'Predicting effects of mutations on proteins', 'Identifying frameshift vs point mutations', 'Tracing from DNA to mRNA to protein']
          },
          {
            label: 'Predicting effects of mutations on…',
            options: ['Tracing from DNA to mRNA to protein', 'Identifying frameshift vs point mutations', 'Predicting effects of mutations on proteins', 'Using the genetic code table']
          },
          {
            label: 'Tracing from DNA to mRNA to protein',
            options: ['Predicting effects of mutations on proteins', 'Using the genetic code table', 'Tracing from DNA to mRNA to protein', 'Identifying frameshift vs point mutations']
          }
        ],
        correctAnswers: ['Using the genetic code table', 'Predicting effects of mutations on proteins', 'Tracing from DNA to mRNA to protein'],
        hint1: 'Think about what each concept specifically describes in Transcription & Translation: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription & Translation: Problem-Solving Workshop describes a specific idea. Using the genetic code table. Predicting effects of mutations on proteins. Tracing from DNA to mRNA to protein.'
      }
    }
  ]
}
