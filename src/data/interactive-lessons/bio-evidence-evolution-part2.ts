export const bioEvidencePart2Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid2-intro-p2',
      type: 'text' as const,
      content: `
# ## Comparative Anatomy

**Part 2 of 7 — Comparative Anatomy**

1. Homologous structures: same origin, different function (arm, wing, flipper)
2. Analogous structures: different origin, same function (bird wing vs insect wing)
3. Vestigial structures: reduced or nonfunctional (appendix, whale pelvis)
4. Homology indicates common ancestry
      `
    },
    {
      id: 'evid2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes homologous structures?',
            options: [
              'same origin, different function (arm, wing, flipper)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Homologous structures: same origin, different function (arm, wing, flipper)'
          },
          {
            question: 'In the context of comparative anatomy, which statement is accurate?',
            options: [
              'Vestigial structures: reduced or nonfunctional (appendix, whale pelvis)',
              ')reppilf ,gniw ,mra( noitcnuf tnereffid ,nigiro emas :serutcurts suogolomoH',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Vestigial structures: reduced or nonfunctional (appendix, whale pelvis)'
          }
        ]
      }
    },
    {
      id: 'evid2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Homologous structures**: same origin, different function (arm, wing, flipper)
- **Analogous structures**: different origin, same function (bird wing vs insect wing)
- **Vestigial structures**: reduced or nonfunctional (appendix, whale pelvis)
- **Homology indicates common ancestry**
      `
    },
    {
      id: 'evid2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to comparative anatomy?',
            options: [
              'Homology indicates common ancestry',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Homology indicates common ancestry'
          }
        ]
      }
    },
    {
      id: 'evid2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Homologous structures is important in comparative anatomy because',
            options: ['same origin, different function (arm, wing, flippe', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Analogous structures is important in comparative anatomy because',
            options: ['different origin, same function (bird wing vs inse', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Vestigial structures is important in comparative anatomy because',
            options: ['reduced or nonfunctional (appendix, whale pelvis)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['same origin, different function (arm, wing, flippe', 'different origin, same function (bird wing vs inse', 'reduced or nonfunctional (appendix, whale pelvis)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Comparative Anatomy.'
      }
    }
  ]
}
