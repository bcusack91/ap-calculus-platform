export const bioBiotechPart5Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot5-intro-p5',
      type: 'text' as const,
      content: `
# ## Bioethics

**Part 5 of 7 — Bioethics**

1. GMO safety and environmental concerns
2. Gene therapy: somatic vs germline editing
3. Genetic privacy and discrimination
4. Designer babies and enhancement ethics
      `
    },
    {
      id: 'biot5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes gmo safety and environmental concerns?',
            options: [
              'GMO safety and environmental concerns',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'GMO safety and environmental concerns'
          },
          {
            question: 'In the context of bioethics, which statement is accurate?',
            options: [
              'Genetic privacy and discrimination',
              'snrecnoc latnemnorivne dna ytefas OMG',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Genetic privacy and discrimination'
          }
        ]
      }
    },
    {
      id: 'biot5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **GMO safety and environmental concerns**
- **Gene therapy**: somatic vs germline editing
- **Genetic privacy and discrimination**
- **Designer babies and enhancement ethics**
      `
    },
    {
      id: 'biot5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to bioethics?',
            options: [
              'Designer babies and enhancement ethics',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Designer babies and enhancement ethics'
          }
        ]
      }
    },
    {
      id: 'biot5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'GMO safety and environmental concerns is important in bioethics because',
            options: ['GMO safety and environmental concerns', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Gene therapy is important in bioethics because',
            options: ['somatic vs germline editing', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Genetic privacy and discrimination is important in bioethics because',
            options: ['Genetic privacy and discrimination', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['GMO safety and environmental concerns', 'somatic vs germline editing', 'Genetic privacy and discrimination'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Bioethics.'
      }
    }
  ]
}
