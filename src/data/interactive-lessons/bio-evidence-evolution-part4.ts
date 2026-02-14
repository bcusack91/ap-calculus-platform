export const bioEvidencePart4Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid4-intro-p4',
      type: 'text' as const,
      content: `
# ## Biogeography

**Part 4 of 7 — Biogeography**

1. Geographic distribution of species supports evolution
2. Island species resemble nearby mainland species
3. Continental drift explains distribution patterns
4. Endemic species: found only in one location
      `
    },
    {
      id: 'evid4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes geographic distribution of species supports evolution?',
            options: [
              'Geographic distribution of species supports evolution',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Geographic distribution of species supports evolution'
          },
          {
            question: 'In the context of biogeography, which statement is accurate?',
            options: [
              'Continental drift explains distribution patterns',
              'noitulove stroppus seiceps fo noitubirtsid cihpargoeG',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Continental drift explains distribution patterns'
          }
        ]
      }
    },
    {
      id: 'evid4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Geographic distribution of species supports evolution**
- **Island species resemble nearby mainland species**
- **Continental drift explains distribution patterns**
- **Endemic species**: found only in one location
      `
    },
    {
      id: 'evid4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to biogeography?',
            options: [
              'Endemic species: found only in one location',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Endemic species: found only in one location'
          }
        ]
      }
    },
    {
      id: 'evid4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Geographic distribution of species supports evolution is important in biogeography because',
            options: ['Geographic distribution of species supports evolut', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Island species resemble nearby mainland species is important in biogeography because',
            options: ['Island species resemble nearby mainland species', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Continental drift explains distribution patterns is important in biogeography because',
            options: ['Continental drift explains distribution patterns', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Geographic distribution of species supports evolut', 'Island species resemble nearby mainland species', 'Continental drift explains distribution patterns'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Biogeography.'
      }
    }
  ]
}
