export const bioEvidencePart3Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid3-intro-p3',
      type: 'text' as const,
      content: `
# ## Molecular Evidence

**Part 3 of 7 — Molecular Evidence**

1. DNA sequence similarities indicate relatedness
2. More similar sequences = more recent common ancestor
3. Universal genetic code: all life uses same codons
4. Molecular clocks: mutation rate estimates divergence time
      `
    },
    {
      id: 'evid3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes dna sequence similarities indicate relatedness?',
            options: [
              'DNA sequence similarities indicate relatedness',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'DNA sequence similarities indicate relatedness'
          },
          {
            question: 'In the context of molecular evidence, which statement is accurate?',
            options: [
              'Universal genetic code: all life uses same codons',
              'ssendetaler etacidni seitiralimis ecneuqes AND',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Universal genetic code: all life uses same codons'
          }
        ]
      }
    },
    {
      id: 'evid3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **DNA sequence similarities indicate relatedness**
- **More similar sequences = more recent common ancestor**
- **Universal genetic code**: all life uses same codons
- **Molecular clocks**: mutation rate estimates divergence time
      `
    },
    {
      id: 'evid3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to molecular evidence?',
            options: [
              'Molecular clocks: mutation rate estimates divergence time',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Molecular clocks: mutation rate estimates divergence time'
          }
        ]
      }
    },
    {
      id: 'evid3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA sequence similarities indicate relatedness is important in molecular evidence because',
            options: ['DNA sequence similarities indicate relatedness', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'More similar sequences = more recent common ancestor is important in molecular evidence because',
            options: ['More similar sequences = more recent common ancest', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Universal genetic code is important in molecular evidence because',
            options: ['all life uses same codons', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['DNA sequence similarities indicate relatedness', 'More similar sequences = more recent common ancest', 'all life uses same codons'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Molecular Evidence.'
      }
    }
  ]
}
