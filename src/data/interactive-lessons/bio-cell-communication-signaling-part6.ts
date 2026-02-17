export const bioCellCommPart6Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
# ## Cell Communication: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Tracing a signal from reception to response
2. Predicting effects of pathway mutations
3. Analyzing signal amplification
4. Connecting signaling to disease (cancer)
      `
    },
    {
      id: 'cell6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Tracing a signal from reception to…?',
            options: [
              'Tracing a signal from reception to response',
              'Analyzing signal amplification',
              'Predicting effects of pathway mutations',
              'Connecting signaling to disease (cancer)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Tracing a signal from reception to response. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Analyzing signal amplification:',
            options: [
              'Tracing a signal from reception to response',
              'Predicting effects of pathway mutations',
              'Connecting signaling to disease (cancer)',
              'Analyzing signal amplification'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Analyzing signal amplification. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Tracing a signal from reception to response**
- **Predicting effects of pathway mutations**
- **Analyzing signal amplification**
- **Connecting signaling to disease (cancer)**
      `
    },
    {
      id: 'cell6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Connecting signaling to disease (cancer) is correct?',
            options: [
              'Connecting signaling to disease (cancer)',
              'Predicting effects of pathway mutations',
              'Tracing a signal from reception to response',
              'Analyzing signal amplification'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Connecting signaling to disease (cancer). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Tracing a signal from reception to…',
            options: ['Tracing a signal from reception to response', 'Connecting signaling to disease (cancer)', 'Analyzing signal amplification', 'Predicting effects of pathway mutations']
          },
          {
            label: 'Predicting effects of pathway mutations',
            options: ['Predicting effects of pathway mutations', 'Tracing a signal from reception to response', 'Connecting signaling to disease (cancer)', 'Analyzing signal amplification']
          },
          {
            label: 'Analyzing signal amplification',
            options: ['Predicting effects of pathway mutations', 'Tracing a signal from reception to response', 'Analyzing signal amplification', 'Connecting signaling to disease (cancer)']
          }
        ],
        correctAnswers: ['Tracing a signal from reception to response', 'Predicting effects of pathway mutations', 'Analyzing signal amplification'],
        hint1: 'Think about what each concept specifically describes in Cell Communication: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Communication: Problem-Solving Workshop describes a specific idea. Tracing a signal from reception to response. Predicting effects of pathway mutations. Analyzing signal amplification.'
      }
    }
  ]
}
