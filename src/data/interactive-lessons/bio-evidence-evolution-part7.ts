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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes multiple lines of evidence converge?',
            options: [
              'Multiple lines of evidence converge',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Multiple lines of evidence converge'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Common misconceptions about evolution',
              'egrevnoc ecnedive fo senil elpitluM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Common misconceptions about evolution'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: evidence-based arguments',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: evidence-based arguments'
          }
        ]
      }
    },
    {
      id: 'evid7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiple lines of evidence converge is important in synthesis & ap review because',
            options: ['Multiple lines of evidence converge', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Evolution as the unifying theme of biology is important in synthesis & ap review because',
            options: ['Evolution as the unifying theme of biology', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Common misconceptions about evolution is important in synthesis & ap review because',
            options: ['Common misconceptions about evolution', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Multiple lines of evidence converge', 'Evolution as the unifying theme of biology', 'Common misconceptions about evolution'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
