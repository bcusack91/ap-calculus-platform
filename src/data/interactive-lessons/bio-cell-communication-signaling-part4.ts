export const bioCellCommPart4Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Signal Transduction Pathways

**Part 4 of 7 — Signal Transduction Pathways**

1. Phosphorylation cascades: kinases add phosphate groups
2. Second messengers: cAMP, Ca²⁺, IP₃
3. Signal amplification: one signal → many responses
4. G-protein linked: α subunit activates adenylyl cyclase → cAMP
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
            question: 'Which of the following best describes phosphorylation cascades?',
            options: [
              'kinases add phosphate groups',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Phosphorylation cascades: kinases add phosphate groups'
          },
          {
            question: 'In the context of signal transduction pathways, which statement is accurate?',
            options: [
              'Signal amplification: one signal → many responses',
              'spuorg etahpsohp dda sesanik :sedacsac noitalyrohpsohP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Signal amplification: one signal → many responses'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Phosphorylation cascades**: kinases add phosphate groups
- **Second messengers**: cAMP, Ca²⁺, IP₃
- **Signal amplification**: one signal → many responses
- **G-protein linked**: α subunit activates adenylyl cyclase → cAMP
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
            question: 'Which concept is most directly related to signal transduction pathways?',
            options: [
              'G-protein linked: α subunit activates adenylyl cyclase → cAMP',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'G-protein linked: α subunit activates adenylyl cyclase → cAMP'
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
            label: 'Phosphorylation cascades is important in signal transduction pathways because',
            options: ['kinases add phosphate groups', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Second messengers is important in signal transduction pathways because',
            options: ['cAMP, Ca²⁺, IP₃', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Signal amplification is important in signal transduction pathways because',
            options: ['one signal → many responses', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['kinases add phosphate groups', 'cAMP, Ca²⁺, IP₃', 'one signal → many responses'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Signal Transduction Pathways.'
      }
    }
  ]
}
