export const bioPopulationPart4Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu4-intro-p4',
      type: 'text' as const,
      content: `
# ## Community Interactions

**Part 4 of 7 — Community Interactions**

1. Competition: -/- (both harmed)
2. Predation: +/- (predator benefits, prey harmed)
3. Mutualism: +/+ (both benefit)
4. Parasitism: +/- (parasite benefits, host harmed)
      `
    },
    {
      id: 'popu4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes competition?',
            options: [
              '-/- (both harmed)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Competition: -/- (both harmed)'
          },
          {
            question: 'In the context of community interactions, which statement is accurate?',
            options: [
              'Mutualism: +/+ (both benefit)',
              ')demrah htob( -/- :noititepmoC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Mutualism: +/+ (both benefit)'
          }
        ]
      }
    },
    {
      id: 'popu4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Competition**: -/- (both harmed)
- **Predation**: +/- (predator benefits, prey harmed)
- **Mutualism**: +/+ (both benefit)
- **Parasitism**: +/- (parasite benefits, host harmed)
      `
    },
    {
      id: 'popu4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to community interactions?',
            options: [
              'Parasitism: +/- (parasite benefits, host harmed)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Parasitism: +/- (parasite benefits, host harmed)'
          }
        ]
      }
    },
    {
      id: 'popu4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Competition is important in community interactions because',
            options: ['-/- (both harmed)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predation is important in community interactions because',
            options: ['+/- (predator benefits, prey harmed)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Mutualism is important in community interactions because',
            options: ['+/+ (both benefit)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['-/- (both harmed)', '+/- (predator benefits, prey harmed)', '+/+ (both benefit)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Community Interactions.'
      }
    }
  ]
}
