export const bioMeiosisPart2Data = {
  topicSlug: 'meiosis-genetic-diversity',
  sections: [
    {
      id: 'meio2-intro-p2',
      type: 'text' as const,
      content: `
# ## Meiosis I

**Part 2 of 7 — Meiosis I**

1. Homologous chromosomes pair up (synapsis)
2. Crossing over occurs during prophase I
3. Homologs align at metaphase plate (random orientation)
4. Homologous pairs separate in anaphase I (reductional division)
      `
    },
    {
      id: 'meio2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes homologous chromosomes pair up (synapsis)?',
            options: [
              'Homologous chromosomes pair up (synapsis)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Homologous chromosomes pair up (synapsis)'
          },
          {
            question: 'In the context of meiosis i, which statement is accurate?',
            options: [
              'Homologs align at metaphase plate (random orientation)',
              ')sispanys( pu riap semosomorhc suogolomoH',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Homologs align at metaphase plate (random orientation)'
          }
        ]
      }
    },
    {
      id: 'meio2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Homologous chromosomes pair up (synapsis)**
- **Crossing over occurs during prophase I**
- **Homologs align at metaphase plate (random orientation)**
- **Homologous pairs separate in anaphase I (reductional division)**
      `
    },
    {
      id: 'meio2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to meiosis i?',
            options: [
              'Homologous pairs separate in anaphase I (reductional division)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Homologous pairs separate in anaphase I (reductional division)'
          }
        ]
      }
    },
    {
      id: 'meio2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Homologous chromosomes pair up (synapsis) is important in meiosis i because',
            options: ['Homologous chromosomes pair up (synapsis)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Crossing over occurs during prophase I is important in meiosis i because',
            options: ['Crossing over occurs during prophase I', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Homologs align at metaphase plate (random orientation) is important in meiosis i because',
            options: ['Homologs align at metaphase plate (random orientat', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Homologous chromosomes pair up (synapsis)', 'Crossing over occurs during prophase I', 'Homologs align at metaphase plate (random orientat'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Meiosis I.'
      }
    }
  ]
}
