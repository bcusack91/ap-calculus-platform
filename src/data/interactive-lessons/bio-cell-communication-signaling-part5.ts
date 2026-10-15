export const bioCellCommPart5Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
## Cellular Responses

**Part 5 of 7 — Cellular Responses**

1. Gene expression changes: transcription factors activated
2. Enzyme activation/deactivation
3. Cell division stimulation or inhibition
4. Apoptosis: programmed cell death
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Gene expression changes?',
            options: [
              'The signal triggers programmed cell death in every target cell',
              'The pathway activates transcription factors for target genes',
              'The signal rewrites the DNA sequence of the target gene itself',
              'The signal splices the introns out of DNA inside the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'Many pathways end by activating transcription factors, which turn specific genes on or off; the DNA sequence itself is not changed.'
          },
          {
            question: 'Select the statement that correctly describes Cell division stimulation or inhibition:',
            options: [
              'Signals affect division only by destroying chromosomes',
              'Growth factors stop the cell cycle in every cell they reach',
              'Division is set only by internal timers, never by signals',
              'Signals such as growth factors can start or block cell division'
            ],
            correctAnswer: 3,
            explanation: 'Signals can stimulate cell division (growth factors pushing cells past the G1 checkpoint) or inhibit it (contact inhibition, anti-growth signals); faulty division signaling can lead to cancer.'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
### Key Details

- **Gene expression changes**: transcription factors activated
- **Enzyme activation/deactivation**
- **Cell division stimulation or inhibition**
- **Apoptosis**: programmed cell death
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Cellular Responses, which correctly describes Apoptosis?',
            options: [
              'Uncontrolled bursting of a cell caused by injury',
              'Division of a damaged cell into two healthy new cells',
              'Programmed, orderly cell death triggered by signals',
              'Fusion of a damaged cell with a neighboring cell'
            ],
            correctAnswer: 2,
            explanation: 'Apoptosis is programmed cell death: signals activate enzymes (caspases) that dismantle the cell in an orderly way, unlike necrosis, which is uncontrolled death from injury.'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gene expression changes',
            options: ['transcription factors activated', 'Enzyme activation/deactivation', 'Cell division stimulation or inhibition', 'programmed cell death']
          },
          {
            label: 'Apoptosis',
            options: ['programmed cell death', 'transcription factors activated', 'Enzyme activation/deactivation', 'Cell division stimulation or inhibition']
          }
        ],
        correctAnswers: ['transcription factors activated', 'programmed cell death'],
        hint1: 'Think about what each concept specifically describes in Cellular Responses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cellular Responses describes a specific idea. Gene expression changes: transcription factors activated. Apoptosis: programmed cell death.'
      }
    }
  ]
}
