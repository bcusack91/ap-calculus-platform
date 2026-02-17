export const bioCellCommPart1Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## Signal Transduction Overview

**Part 1 of 7 — Signal Transduction Overview**

1. Cells communicate through chemical signals
2. Three stages: reception, transduction, response
3. Signal molecules: hormones, neurotransmitters, growth factors
4. Specificity: only target cells with correct receptors respond
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Cells communicate through chemical…?',
            options: [
              'reception, transduction, response',
              'hormones, neurotransmitters, growth factors',
              'Cells communicate through chemical signals',
              'only target cells with correct receptors respond'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cells communicate through chemical signals. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Signal molecules?',
            options: [
              'only target cells with correct receptors respond',
              'hormones, neurotransmitters, growth factors',
              'reception, transduction, response',
              'Cells communicate through chemical signals'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Signal molecules: hormones, neurotransmitters, growth factors. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Cells communicate through chemical signals**
- **Three stages**: reception, transduction, response
- **Signal molecules**: hormones, neurotransmitters, growth factors
- **Specificity**: only target cells with correct receptors respond
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Specificity?',
            options: [
              'only target cells with correct receptors respond',
              'hormones, neurotransmitters, growth factors',
              'Cells communicate through chemical signals',
              'reception, transduction, response'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Specificity: only target cells with correct receptors respond. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Three stages',
            options: ['Cells communicate through chemical signals', 'only target cells with correct receptors respond', 'reception, transduction, response', 'hormones, neurotransmitters, growth factors']
          },
          {
            label: 'Signal molecules',
            options: ['reception, transduction, response', 'Cells communicate through chemical signals', 'hormones, neurotransmitters, growth factors', 'only target cells with correct receptors respond']
          },
          {
            label: 'Specificity',
            options: ['Cells communicate through chemical signals', 'reception, transduction, response', 'only target cells with correct receptors respond', 'hormones, neurotransmitters, growth factors']
          }
        ],
        correctAnswers: ['reception, transduction, response', 'hormones, neurotransmitters, growth factors', 'only target cells with correct receptors respond'],
        hint1: 'Think about what each concept specifically describes in Signal Transduction Overview.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Signal Transduction Overview describes a specific idea. Three stages: reception, transduction, response. Signal molecules: hormones, neurotransmitters, growth factors. Specificity: only target cells with correct receptors respond.'
      }
    }
  ]
}
