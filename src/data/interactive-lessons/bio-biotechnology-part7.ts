export const bioBiotechPart7Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot7-intro-p7',
      type: 'text' as const,
      content: `
# ## Biotechnology: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Biotechnology on the AP exam
2. Connecting techniques to biological concepts
3. Ethical reasoning in biology
4. Experimental design with biotech tools
      `
    },
    {
      id: 'biot7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes biotechnology on the ap exam?',
            options: [
              'Biotechnology on the AP exam',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Biotechnology on the AP exam'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Ethical reasoning in biology',
              'maxe PA eht no ygolonhcetoiB',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Ethical reasoning in biology'
          }
        ]
      }
    },
    {
      id: 'biot7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Biotechnology on the AP exam**
- **Connecting techniques to biological concepts**
- **Ethical reasoning in biology**
- **Experimental design with biotech tools**
      `
    },
    {
      id: 'biot7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'Experimental design with biotech tools',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Experimental design with biotech tools'
          }
        ]
      }
    },
    {
      id: 'biot7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biotechnology on the AP exam is important in synthesis & ap review because',
            options: ['Biotechnology on the AP exam', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Connecting techniques to biological concepts is important in synthesis & ap review because',
            options: ['Connecting techniques to biological concepts', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Ethical reasoning in biology is important in synthesis & ap review because',
            options: ['Ethical reasoning in biology', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Biotechnology on the AP exam', 'Connecting techniques to biological concepts', 'Ethical reasoning in biology'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
