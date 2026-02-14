export const bioSpeciationPart2Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec2-intro-p2',
      type: 'text' as const,
      content: `
# ## Allopatric Speciation

**Part 2 of 7 — Allopatric Speciation**

1. Geographic isolation separates populations
2. Populations evolve independently
3. Examples: Grand Canyon squirrels, Darwin's finches
4. Most common form of speciation
      `
    },
    {
      id: 'spec2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes geographic isolation separates populations?',
            options: [
              'Geographic isolation separates populations',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Geographic isolation separates populations'
          },
          {
            question: 'In the context of allopatric speciation, which statement is accurate?',
            options: [
              'Examples: Grand Canyon squirrels, Darwin\'s finches',
              'snoitalupop setarapes noitalosi cihpargoeG',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Examples: Grand Canyon squirrels, Darwin\'s finches'
          }
        ]
      }
    },
    {
      id: 'spec2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Geographic isolation separates populations**
- **Populations evolve independently**
- **Examples**: Grand Canyon squirrels, Darwin's finches
- **Most common form of speciation**
      `
    },
    {
      id: 'spec2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to allopatric speciation?',
            options: [
              'Most common form of speciation',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Most common form of speciation'
          }
        ]
      }
    },
    {
      id: 'spec2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geographic isolation separates populations is important in allopatric speciation because',
            options: ['Geographic isolation separates populations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Populations evolve independently is important in allopatric speciation because',
            options: ['Populations evolve independently', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Examples is important in allopatric speciation because',
            options: ['Grand Canyon squirrels, Darwin\'s finches', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Geographic isolation separates populations', 'Populations evolve independently', 'Grand Canyon squirrels, Darwin\'s finches'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Allopatric Speciation.'
      }
    }
  ]
}
