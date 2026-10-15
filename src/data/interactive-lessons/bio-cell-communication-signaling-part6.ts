export const bioCellCommPart6Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell6-intro-p6',
      type: 'text' as const,
      content: `
## Cell Communication: Problem-Solving Workshop

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
              'Follow the signal from receptor through transduction to response',
              'Start at the response and assume the receptor plays no role',
              'Track only the second messenger and ignore the receptor',
              'Trace the ligand into the nucleus, where every signal acts'
            ],
            correctAnswer: 0,
            explanation: 'Tracing a pathway means following the three stages in order: reception (ligand binds receptor), transduction (relay molecules, often a phosphorylation cascade), and response (a change in gene expression or enzyme activity).'
          },
          {
            question: 'Select the statement that correctly describes Analyzing signal amplification:',
            options: [
              'Each step passes the signal on to exactly one molecule',
              'Amplification happens only at the receptor, not in the cascade',
              'Amplification means the cell makes copies of the ligand',
              'Each enzyme step activates many molecules of the next one'
            ],
            correctAnswer: 3,
            explanation: 'To analyze amplification, note that each activated enzyme (such as adenylyl cyclase or a kinase) activates many molecules at the next step, so the number of activated molecules multiplies down the pathway.'
          }
        ]
      }
    },
    {
      id: 'cell6-detail-p6',
      type: 'text' as const,
      content: `
### Key Details

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
              'Mutations that leave a pathway stuck on can drive cancer',
              'Cancer arises only when cells stop making signal molecules',
              'Pathway mutations cannot cause disease, as cells have backups',
              'Cancer comes from extra receptors that block growth signals'
            ],
            correctAnswer: 0,
            explanation: 'Mutations that lock a growth pathway in the \'on\' state (for example, a Ras protein that cannot hydrolyze GTP) or disable inhibitory signals can cause uncontrolled division, linking faulty signaling to cancer.'
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
