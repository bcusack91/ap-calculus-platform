export const bioTranscriptionPart1Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran1-intro-p1',
      type: 'text' as const,
      content: `
## Central Dogma

**Part 1 of 7 — Central Dogma**

1. DNA → RNA → Protein
2. Transcription: DNA → mRNA
3. Translation: mRNA → protein
4. Exceptions: retroviruses (RNA → DNA via reverse transcriptase)
      `
    },
    {
      id: 'tran1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sequence shows the usual flow of genetic information in a cell?',
            options: [
              'RNA → DNA → Protein',
              'Protein → RNA → DNA',
              'DNA → RNA → Protein',
              'DNA → Protein → RNA'
            ],
            correctAnswer: 2,
            explanation: 'The central dogma: DNA is transcribed into RNA, and mRNA is translated into protein. Information does not flow from protein back to nucleic acid, and DNA is never translated directly into protein.'
          },
          {
            question: 'Which of the following is true about Translation?',
            options: [
              'It copies a DNA sequence into a complementary mRNA strand',
              'It copies an RNA genome into DNA using reverse transcriptase',
              'It removes introns and joins exons in the pre-mRNA',
              'It builds a polypeptide by reading mRNA codons at a ribosome'
            ],
            correctAnswer: 3,
            explanation: 'Translation is the mRNA → protein step: a ribosome reads the mRNA codon by codon and links the amino acids that tRNAs deliver. Copying DNA into mRNA is transcription, copying RNA into DNA is reverse transcription, and intron removal is splicing (RNA processing).'
          }
        ]
      }
    },
    {
      id: 'tran1-detail-p1',
      type: 'text' as const,
      content: `
### Key Details

- **DNA → RNA → Protein**
- **Transcription**: DNA → mRNA
- **Translation**: mRNA → protein
- **Exceptions**: retroviruses (RNA → DNA via reverse transcriptase)
      `
    },
    {
      id: 'tran1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which process is an exception to the usual DNA → RNA → protein flow of information?',
            options: [
              'Retroviruses copying their RNA genome into DNA with reverse transcriptase',
              'Ribosomes translating an mRNA into a polypeptide in the cytoplasm',
              'RNA polymerase transcribing a gene into pre-mRNA inside the nucleus',
              'DNA polymerase copying the genome during S phase before cell division'
            ],
            correctAnswer: 0,
            explanation: 'Retroviruses such as HIV carry an RNA genome and use reverse transcriptase to make DNA from it (RNA → DNA), the reverse of transcription. Replication, transcription and translation all follow the usual direction of information flow.'
          }
        ]
      }
    },
    {
      id: 'tran1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transcription',
            options: ['retroviruses (RNA → DNA via reverse transcriptase)', 'mRNA → protein', 'DNA → RNA → Protein', 'DNA → mRNA']
          },
          {
            label: 'Translation',
            options: ['retroviruses (RNA → DNA via reverse transcriptase)', 'DNA → mRNA', 'DNA → RNA → Protein', 'mRNA → protein']
          },
          {
            label: 'Exceptions',
            options: ['DNA → RNA → Protein', 'retroviruses (RNA → DNA via reverse transcriptase)', 'DNA → mRNA', 'mRNA → protein']
          }
        ],
        correctAnswers: ['DNA → mRNA', 'mRNA → protein', 'retroviruses (RNA → DNA via reverse transcriptase)'],
        hint1: 'Think about what each concept specifically describes in Central Dogma.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Central Dogma describes a specific idea. Transcription: DNA → mRNA. Translation: mRNA → protein. Exceptions: retroviruses (RNA → DNA via reverse transcriptase).'
      }
    }
  ]
}
