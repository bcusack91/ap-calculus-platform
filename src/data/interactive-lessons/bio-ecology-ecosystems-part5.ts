export const bioEcologyPart5Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol5-intro-p5',
      type: 'text' as const,
      content: `
# ## Ecological Niche

**Part 5 of 7 — Ecological Niche**

1. Fundamental niche: full range of conditions an organism can use
2. Realized niche: actual conditions used (limited by competition)
3. Competitive exclusion: two species cannot occupy same niche
4. Niche partitioning: dividing resources to coexist
      `
    },
    {
      id: 'ecol5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes fundamental niche?',
            options: [
              'full range of conditions an organism can use',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Fundamental niche: full range of conditions an organism can use'
          },
          {
            question: 'In the context of ecological niche, which statement is accurate?',
            options: [
              'Competitive exclusion: two species cannot occupy same niche',
              'esu nac msinagro na snoitidnoc fo egnar lluf :ehcin latnemadnuF',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Competitive exclusion: two species cannot occupy same niche'
          }
        ]
      }
    },
    {
      id: 'ecol5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fundamental niche**: full range of conditions an organism can use
- **Realized niche**: actual conditions used (limited by competition)
- **Competitive exclusion**: two species cannot occupy same niche
- **Niche partitioning**: dividing resources to coexist
      `
    },
    {
      id: 'ecol5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to ecological niche?',
            options: [
              'Niche partitioning: dividing resources to coexist',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Niche partitioning: dividing resources to coexist'
          }
        ]
      }
    },
    {
      id: 'ecol5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fundamental niche is important in ecological niche because',
            options: ['full range of conditions an organism can use', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Realized niche is important in ecological niche because',
            options: ['actual conditions used (limited by competition)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Competitive exclusion is important in ecological niche because',
            options: ['two species cannot occupy same niche', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['full range of conditions an organism can use', 'actual conditions used (limited by competition)', 'two species cannot occupy same niche'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Ecological Niche.'
      }
    }
  ]
}
