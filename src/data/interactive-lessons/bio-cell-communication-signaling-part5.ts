export const bioCellCommPart5Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Cellular Responses

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
              'programmed cell death',
              'transcription factors activated',
              'Enzyme activation/deactivation',
              'Cell division stimulation or inhibition'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Gene expression changes: transcription factors activated. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cell division stimulation or inhibition:',
            options: [
              'programmed cell death',
              'transcription factors activated',
              'Enzyme activation/deactivation',
              'Cell division stimulation or inhibition'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Cell division stimulation or inhibition. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

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
              'Enzyme activation/deactivation',
              'transcription factors activated',
              'programmed cell death',
              'Cell division stimulation or inhibition'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Apoptosis: programmed cell death. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
