export const bioTranscriptionPart2Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran2-intro-p2',
      type: 'text' as const,
      content: `
## Transcription

**Part 2 of 7 — Transcription**

1. RNA polymerase reads template strand 3'→5'
2. mRNA is synthesized 5'→3'
3. Promoter: TATA box, signals start of transcription
4. Terminator: signals end of transcription
      `
    },
    {
      id: 'tran2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In which direction does RNA polymerase read the DNA template strand?',
            options: [
              'It reads the template strand 3\'→5\'',
              'It reads the template strand 5\'→3\'',
              'It reads both strands at once, in opposite directions',
              'It reads the coding strand 3\'→5\''
            ],
            correctAnswer: 0,
            explanation: 'RNA polymerase reads the template strand 3\'→5\' and builds the RNA antiparallel to it, 5\'→3\', adding each nucleotide to the 3\' end of the growing chain. Only one strand (the template) is read for a given gene; the coding strand has the same sequence as the RNA (with T for U).'
          },
          {
            question: 'Which of the following is true about Promoter?',
            options: [
              'It is the DNA sequence that signals RNA polymerase to stop',
              'It is the mRNA start codon where ribosomes begin translation',
              'It is the strand of DNA that serves as the template for the RNA',
              'It is the DNA region where transcription starts, often at a TATA box'
            ],
            correctAnswer: 3,
            explanation: 'The promoter is a DNA sequence upstream of a gene where RNA polymerase (with transcription factors in eukaryotes) binds to start transcription; many eukaryotic promoters contain a TATA box. The stop signal for transcription is the terminator, and start and stop codons are mRNA features read during translation.'
          }
        ]
      }
    },
    {
      id: 'tran2-detail-p2',
      type: 'text' as const,
      content: `
### Key Details

- **RNA polymerase reads template strand 3'→5'**
- **mRNA is synthesized 5'→3'**
- **Promoter**: TATA box, signals start of transcription
- **Terminator**: signals end of transcription
      `
    },
    {
      id: 'tran2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Terminator is correct?',
            options: [
              'It is the site where RNA polymerase first binds to begin transcription',
              'It is the mRNA codon that tells the ribosome to release the protein',
              'It is a DNA sequence that signals the end of transcription',
              'It is the protein that unwinds DNA just ahead of RNA polymerase'
            ],
            correctAnswer: 2,
            explanation: 'A terminator is a DNA sequence at the end of a gene that signals RNA polymerase to stop transcribing and release the RNA. The binding site at the start is the promoter, and the signal that releases a finished protein from the ribosome is a stop codon in the mRNA.'
          }
        ]
      }
    },
    {
      id: 'tran2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Promoter',
            options: ['TATA box, signals start of transcription', 'RNA polymerase reads template strand 3\'→5\'', 'signals end of transcription', 'mRNA is synthesized 5\'→3\'']
          },
          {
            label: 'Terminator',
            options: ['RNA polymerase reads template strand 3\'→5\'', 'TATA box, signals start of transcription', 'signals end of transcription', 'mRNA is synthesized 5\'→3\'']
          }
        ],
        correctAnswers: ['TATA box, signals start of transcription', 'signals end of transcription'],
        hint1: 'Think about what each concept specifically describes in Transcription.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription describes a specific idea. Promoter: TATA box, signals start of transcription. Terminator: signals end of transcription.'
      }
    }
  ]
}
