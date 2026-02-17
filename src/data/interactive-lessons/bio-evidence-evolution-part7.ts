export const bioEvidencePart7Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid7-intro-p7',
      type: 'text' as const,
      content: `
# ## Evidence for Evolution: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Multiple lines of evidence converge
2. Evolution as the unifying theme of biology
3. Common misconceptions about evolution
4. AP exam: evidence-based arguments
      `
    },
    {
      id: 'evid7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Multiple lines of evidence converge" refer to in biology?',
            options: [
              'Evolution as the unifying theme of biology',
              'Multiple lines of evidence converge',
              'evidence-based arguments',
              'Common misconceptions about evolution'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Multiple lines of evidence converge. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Common misconceptions about evolution:',
            options: [
              'Evolution as the unifying theme of biology',
              'evidence-based arguments',
              'Common misconceptions about evolution',
              'Multiple lines of evidence converge'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Common misconceptions about evolution. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Multiple lines of evidence converge**
- **Evolution as the unifying theme of biology**
- **Common misconceptions about evolution**
- **AP exam**: evidence-based arguments
      `
    },
    {
      id: 'evid7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents AP exam?',
            options: [
              'Evolution as the unifying theme of biology',
              'evidence-based arguments',
              'Multiple lines of evidence converge',
              'Common misconceptions about evolution'
            ],
            correctAnswer: 1,
            explanation: 'Correct — AP exam: evidence-based arguments. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiple lines of evidence converge',
            options: ['evidence-based arguments', 'Evolution as the unifying theme of biology', 'Common misconceptions about evolution', 'Multiple lines of evidence converge']
          },
          {
            label: 'Evolution as the unifying theme of…',
            options: ['evidence-based arguments', 'Evolution as the unifying theme of biology', 'Common misconceptions about evolution', 'Multiple lines of evidence converge']
          },
          {
            label: 'Common misconceptions about evolution',
            options: ['Multiple lines of evidence converge', 'evidence-based arguments', 'Common misconceptions about evolution', 'Evolution as the unifying theme of biology']
          }
        ],
        correctAnswers: ['Multiple lines of evidence converge', 'Evolution as the unifying theme of biology', 'Common misconceptions about evolution'],
        hint1: 'Think about what each concept specifically describes in Evidence for Evolution: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evidence for Evolution: Synthesis & AP Review describes a specific idea. Multiple lines of evidence converge. Evolution as the unifying theme of biology. Common misconceptions about evolution.'
      }
    }
  ]
}
