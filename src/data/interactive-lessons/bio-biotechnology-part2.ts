export const bioBiotechPart2Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot2-intro-p2',
      type: 'text' as const,
      content: `
# ## PCR & DNA Sequencing

**Part 2 of 7 — PCR & DNA Sequencing**

1. PCR amplifies specific DNA segments
2. Steps: denature (95°C), anneal primers (55°C), extend (72°C)
3. Taq polymerase: heat-stable DNA polymerase
4. Sanger sequencing uses ddNTPs to determine sequence
      `
    },
    {
      id: 'biot2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes pcr amplifies specific dna segments?',
            options: [
              'PCR amplifies specific DNA segments',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'PCR amplifies specific DNA segments'
          },
          {
            question: 'In the context of pcr & dna sequencing, which statement is accurate?',
            options: [
              'Taq polymerase: heat-stable DNA polymerase',
              'stnemges AND cificeps seifilpma RCP',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Taq polymerase: heat-stable DNA polymerase'
          }
        ]
      }
    },
    {
      id: 'biot2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **PCR amplifies specific DNA segments**
- **Steps**: denature (95°C), anneal primers (55°C), extend (72°C)
- **Taq polymerase**: heat-stable DNA polymerase
- **Sanger sequencing uses ddNTPs to determine sequence**
      `
    },
    {
      id: 'biot2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to pcr & dna sequencing?',
            options: [
              'Sanger sequencing uses ddNTPs to determine sequence',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Sanger sequencing uses ddNTPs to determine sequence'
          }
        ]
      }
    },
    {
      id: 'biot2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'PCR amplifies specific DNA segments is important in pcr & dna sequencing because',
            options: ['PCR amplifies specific DNA segments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Steps is important in pcr & dna sequencing because',
            options: ['denature (95°C), anneal primers (55°C), extend (72', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Taq polymerase is important in pcr & dna sequencing because',
            options: ['heat-stable DNA polymerase', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['PCR amplifies specific DNA segments', 'denature (95°C), anneal primers (55°C), extend (72', 'heat-stable DNA polymerase'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding PCR & DNA Sequencing.'
      }
    }
  ]
}
