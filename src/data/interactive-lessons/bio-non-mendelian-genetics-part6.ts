export const bioNonMendelianPart6Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-6-intro-p6',
      type: 'text' as const,
      content: `
# ## Non-Mendelian Genetics: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Identifying inheritance patterns from crosses
2. Solving X-linked inheritance problems
3. Distinguishing codominance from incomplete dominance
4. Analyzing polygenic trait distributions
      `
    },
    {
      id: 'non-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes identifying inheritance patterns from crosses?',
            options: [
              'Identifying inheritance patterns from crosses',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Identifying inheritance patterns from crosses'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Distinguishing codominance from incomplete dominance',
              'sessorc morf snrettap ecnatirehni gniyfitnedI',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Distinguishing codominance from incomplete dominance'
          }
        ]
      }
    },
    {
      id: 'non-6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Identifying inheritance patterns from crosses**
- **Solving X-linked inheritance problems**
- **Distinguishing codominance from incomplete dominance**
- **Analyzing polygenic trait distributions**
      `
    },
    {
      id: 'non-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Analyzing polygenic trait distributions',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing polygenic trait distributions'
          }
        ]
      }
    },
    {
      id: 'non-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying inheritance patterns from crosses is important in problem-solving because',
            options: ['Identifying inheritance patterns from crosses', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Solving X-linked inheritance problems is important in problem-solving because',
            options: ['Solving X-linked inheritance problems', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Distinguishing codominance from incomplete dominance is important in problem-solving because',
            options: ['Distinguishing codominance from incomplete dominan', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Identifying inheritance patterns from crosses', 'Solving X-linked inheritance problems', 'Distinguishing codominance from incomplete dominan'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
