export const bioCellRespirationPart4Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Oxidative Phosphorylation

**Part 4 of 7 — Oxidative Phosphorylation**

1. Chemiosmosis: H⁺ gradient drives ATP synthase
2. ETC creates proton gradient across inner membrane
3. ATP synthase: molecular turbine
4. ~30-32 ATP per glucose from oxidative phosphorylation
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes chemiosmosis?',
            options: [
              'H⁺ gradient drives ATP synthase',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Chemiosmosis: H⁺ gradient drives ATP synthase'
          },
          {
            question: 'In the context of oxidative phosphorylation, which statement is accurate?',
            options: [
              'ATP synthase: molecular turbine',
              'esahtnys PTA sevird tneidarg ⁺H :sisomsoimehC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'ATP synthase: molecular turbine'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Chemiosmosis**: H⁺ gradient drives ATP synthase
- **ETC creates proton gradient across inner membrane**
- **ATP synthase**: molecular turbine
- **~30-32 ATP per glucose from oxidative phosphorylation**
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to oxidative phosphorylation?',
            options: [
              '~30-32 ATP per glucose from oxidative phosphorylation',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: '~30-32 ATP per glucose from oxidative phosphorylation'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chemiosmosis is important in oxidative phosphorylation because',
            options: ['H⁺ gradient drives ATP synthase', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'ETC creates proton gradient across inner membrane is important in oxidative phosphorylation because',
            options: ['ETC creates proton gradient across inner membrane', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'ATP synthase is important in oxidative phosphorylation because',
            options: ['molecular turbine', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['H⁺ gradient drives ATP synthase', 'ETC creates proton gradient across inner membrane', 'molecular turbine'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Oxidative Phosphorylation.'
      }
    }
  ]
}
