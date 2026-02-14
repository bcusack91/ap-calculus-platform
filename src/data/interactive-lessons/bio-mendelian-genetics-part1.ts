export const bioMendelianPart1Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend1-intro-p1',
      type: 'text' as const,
      content: `
# ## Mendel's Laws

**Part 1 of 7 — Mendel's Laws**

1. Law of Segregation: two alleles separate during gamete formation
2. Law of Independent Assortment: genes on different chromosomes sort independently
3. Dominant alleles mask recessive alleles
4. Mendel's experimental approach with pea plants
      `
    },
    {
      id: 'mend1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes law of segregation?',
            options: [
              'two alleles separate during gamete formation',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Law of Segregation: two alleles separate during gamete formation'
          },
          {
            question: 'In the context of mendel\'s laws, which statement is accurate?',
            options: [
              'Dominant alleles mask recessive alleles',
              'noitamrof etemag gnirud etarapes selella owt :noitagergeS fo waL',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Dominant alleles mask recessive alleles'
          }
        ]
      }
    },
    {
      id: 'mend1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Law of Segregation**: two alleles separate during gamete formation
- **Law of Independent Assortment**: genes on different chromosomes sort independently
- **Dominant alleles mask recessive alleles**
- **Mendel's experimental approach with pea plants**
      `
    },
    {
      id: 'mend1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to mendel\'s laws?',
            options: [
              'Mendel\'s experimental approach with pea plants',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Mendel\'s experimental approach with pea plants'
          }
        ]
      }
    },
    {
      id: 'mend1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Law of Segregation is important in mendel\'s laws because',
            options: ['two alleles separate during gamete formation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Law of Independent Assortment is important in mendel\'s laws because',
            options: ['genes on different chromosomes sort independently', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Dominant alleles mask recessive alleles is important in mendel\'s laws because',
            options: ['Dominant alleles mask recessive alleles', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['two alleles separate during gamete formation', 'genes on different chromosomes sort independently', 'Dominant alleles mask recessive alleles'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Mendel\'s Laws.'
      }
    }
  ]
}
