export const bioNonMendelianPart2Data = {
  topicSlug: 'non-mendelian-genetics',
  sections: [
    {
      id: 'non-2-intro-p2',
      type: 'text' as const,
      content: `
# ## Multiple Alleles & Polygenic

**Part 2 of 7 — Multiple Alleles & Polygenic**

1. Multiple alleles: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)
2. Polygenic traits: multiple genes affect one trait
3. Examples: skin color, height, eye color
4. Polygenic traits show continuous variation (bell curve)
      `
    },
    {
      id: 'non-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes multiple alleles?',
            options: [
              'more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Multiple alleles: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)'
          },
          {
            question: 'In the context of multiple alleles & polygenic, which statement is accurate?',
            options: [
              'Examples: skin color, height, eye color',
              ')i ,ᴮI ,ᴬI :epyt doolb OBA( noitalupop ni selella 2 naht erom :selella elpitluM',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Examples: skin color, height, eye color'
          }
        ]
      }
    },
    {
      id: 'non-2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Multiple alleles**: more than 2 alleles in population (ABO blood type: Iᴬ, Iᴮ, i)
- **Polygenic traits**: multiple genes affect one trait
- **Examples**: skin color, height, eye color
- **Polygenic traits show continuous variation (bell curve)**
      `
    },
    {
      id: 'non-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to multiple alleles & polygenic?',
            options: [
              'Polygenic traits show continuous variation (bell curve)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Polygenic traits show continuous variation (bell curve)'
          }
        ]
      }
    },
    {
      id: 'non-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Multiple alleles is important in multiple alleles & polygenic because',
            options: ['more than 2 alleles in population (ABO blood type:', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Polygenic traits is important in multiple alleles & polygenic because',
            options: ['multiple genes affect one trait', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Examples is important in multiple alleles & polygenic because',
            options: ['skin color, height, eye color', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['more than 2 alleles in population (ABO blood type:', 'multiple genes affect one trait', 'skin color, height, eye color'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Multiple Alleles & Polygenic.'
      }
    }
  ]
}
