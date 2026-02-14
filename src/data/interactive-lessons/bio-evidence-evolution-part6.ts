export const bioEvidencePart6Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid6-intro-p6',
      type: 'text' as const,
      content: `
# ## Evidence for Evolution: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Analyzing phylogenetic trees
2. Interpreting molecular data for relatedness
3. Evaluating evidence for common descent
4. Distinguishing homology from analogy
      `
    },
    {
      id: 'evid6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes analyzing phylogenetic trees?',
            options: [
              'Analyzing phylogenetic trees',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing phylogenetic trees'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Evaluating evidence for common descent',
              'seert citenegolyhp gnizylanA',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Evaluating evidence for common descent'
          }
        ]
      }
    },
    {
      id: 'evid6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Analyzing phylogenetic trees**
- **Interpreting molecular data for relatedness**
- **Evaluating evidence for common descent**
- **Distinguishing homology from analogy**
      `
    },
    {
      id: 'evid6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Distinguishing homology from analogy',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Distinguishing homology from analogy'
          }
        ]
      }
    },
    {
      id: 'evid6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing phylogenetic trees is important in problem-solving because',
            options: ['Analyzing phylogenetic trees', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Interpreting molecular data for relatedness is important in problem-solving because',
            options: ['Interpreting molecular data for relatedness', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Evaluating evidence for common descent is important in problem-solving because',
            options: ['Evaluating evidence for common descent', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Analyzing phylogenetic trees', 'Interpreting molecular data for relatedness', 'Evaluating evidence for common descent'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
