export const bioNonMendelianPart4Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-4-intro-p4',
      type: 'text' as const,
      content: `
# ## Sex-Linked Traits

**Part 4 of 7 — Sex-Linked Traits**

1. X-linked traits: genes on X chromosome
2. Males (XY) express all X-linked alleles (hemizygous)
3. Females (XX) can be carriers of recessive X-linked traits
4. Examples: color blindness, hemophilia, Duchenne muscular dystrophy
      `
    },
    {
      id: 'non-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes x-linked traits?',
            options: [
              'genes on X chromosome',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'X-linked traits: genes on X chromosome'
          },
          {
            question: 'In the context of sex-linked traits, which statement is accurate?',
            options: [
              'Females (XX) can be carriers of recessive X-linked traits',
              'emosomorhc X no seneg :stiart deknil-X',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Females (XX) can be carriers of recessive X-linked traits'
          }
        ]
      }
    },
    {
      id: 'non-4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **X-linked traits**: genes on X chromosome
- **Males (XY) express all X-linked alleles (hemizygous)**
- **Females (XX) can be carriers of recessive X-linked traits**
- **Examples**: color blindness, hemophilia, Duchenne muscular dystrophy
      `
    },
    {
      id: 'non-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to sex-linked traits?',
            options: [
              'Examples: color blindness, hemophilia, Duchenne muscular dystrophy',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Examples: color blindness, hemophilia, Duchenne muscular dystrophy'
          }
        ]
      }
    },
    {
      id: 'non-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'X-linked traits is important in sex-linked traits because',
            options: ['genes on X chromosome', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Males (XY) express all X-linked alleles (hemizygous) is important in sex-linked traits because',
            options: ['Males (XY) express all X-linked alleles (hemizygou', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Females (XX) can be carriers of recessive X-linked traits is important in sex-linked traits because',
            options: ['Females (XX) can be carriers of recessive X-linked', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['genes on X chromosome', 'Males (XY) express all X-linked alleles (hemizygou', 'Females (XX) can be carriers of recessive X-linked'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Sex-Linked Traits.'
      }
    }
  ]
}
