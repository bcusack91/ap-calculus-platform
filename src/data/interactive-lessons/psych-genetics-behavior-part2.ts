export const psychGeneticsPart2Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet2-intro',
      type: 'text' as const,
      content: `
# ## Behavioral Genetics

**Part 2 of 7 — Behavioral Genetics**

### 1. Heritability

proportion of variation due to genetics

### 2. Temperament

inborn behavioral style

### 3. Behavioral genetics methods

twin, adoption, family studies

### 4. Heritability of intelligence

~50-80%
      `
    },
    {
      id: 'genet2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of behavioral genetics?',
            options: [
              'Heritability',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Heritability: proportion of variation due to genetics'
          },
          {
            question: 'In the context of behavioral genetics, which is accurate?',
            options: [
              'twin, adoption, family studies',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Behavioral genetics methods: twin, adoption, family studies'
          }
        ]
      }
    },
    {
      id: 'genet2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Heritability**: proportion of variation due to genetics
- **Temperament**: inborn behavioral style
- **Behavioral genetics methods**: twin, adoption, family studies
- **Heritability of intelligence**: ~50-80%
      `
    },
    {
      id: 'genet2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to behavioral genetics?',
            options: [
              '~50-80%',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Heritability of intelligence: ~50-80%'
          }
        ]
      }
    },
    {
      id: 'genet2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Heritability',
            options: ['proportion of variation due to genetics', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Temperament',
            options: ['inborn behavioral style', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Behavioral genetics methods',
            options: ['twin, adoption, family studies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['proportion of variation due to genetics', 'inborn behavioral style', 'twin, adoption, family studies'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Behavioral Genetics.'
      }
    }
  ]
}
