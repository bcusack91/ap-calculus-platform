export const bioSpeciationPart4Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec4-intro-p4',
      type: 'text' as const,
      content: `
# ## Adaptive Radiation

**Part 4 of 7 — Adaptive Radiation**

1. One ancestor diversifies into many species
2. Occurs when new niches become available
3. Examples: Darwin's finches, Hawaiian honeycreepers
4. Triggered by mass extinctions or new environments
      `
    },
    {
      id: 'spec4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes one ancestor diversifies into many species?',
            options: [
              'One ancestor diversifies into many species',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'One ancestor diversifies into many species'
          },
          {
            question: 'In the context of adaptive radiation, which statement is accurate?',
            options: [
              'Examples: Darwin\'s finches, Hawaiian honeycreepers',
              'seiceps ynam otni seifisrevid rotsecna enO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Examples: Darwin\'s finches, Hawaiian honeycreepers'
          }
        ]
      }
    },
    {
      id: 'spec4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **One ancestor diversifies into many species**
- **Occurs when new niches become available**
- **Examples**: Darwin's finches, Hawaiian honeycreepers
- **Triggered by mass extinctions or new environments**
      `
    },
    {
      id: 'spec4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to adaptive radiation?',
            options: [
              'Triggered by mass extinctions or new environments',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Triggered by mass extinctions or new environments'
          }
        ]
      }
    },
    {
      id: 'spec4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'One ancestor diversifies into many species is important in adaptive radiation because',
            options: ['One ancestor diversifies into many species', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Occurs when new niches become available is important in adaptive radiation because',
            options: ['Occurs when new niches become available', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Examples is important in adaptive radiation because',
            options: ['Darwin\'s finches, Hawaiian honeycreepers', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['One ancestor diversifies into many species', 'Occurs when new niches become available', 'Darwin\'s finches, Hawaiian honeycreepers'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Adaptive Radiation.'
      }
    }
  ]
}
