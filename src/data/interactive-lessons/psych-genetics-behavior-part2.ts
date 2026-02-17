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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Heritability" refer to in psychology?',
            options: [
              'inborn behavioral style',
              '~50-80%',
              'proportion of variation due to genetics',
              'twin, adoption, family studies'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Heritability: proportion of variation due to genetics. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Behavioral genetics methods:',
            options: [
              'twin, adoption, family studies',
              '~50-80%',
              'inborn behavioral style',
              'proportion of variation due to genetics'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Behavioral genetics methods: twin, adoption, family studies. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Heritability',
            options: ['proportion of variation due to genetics', '~50-80%', 'inborn behavioral style', 'twin, adoption, family studies']
          },
          {
            label: 'Temperament',
            options: ['twin, adoption, family studies', 'proportion of variation due to genetics', '~50-80%', 'inborn behavioral style']
          },
          {
            label: 'Behavioral genetics methods',
            options: ['twin, adoption, family studies', 'proportion of variation due to genetics', 'inborn behavioral style', '~50-80%']
          }
        ],
        correctAnswers: ['proportion of variation due to genetics', 'inborn behavioral style', 'twin, adoption, family studies'],
        hint1: 'Think about what each concept specifically describes in Behavioral Genetics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Behavioral Genetics describes a specific idea. Heritability: proportion of variation due to genetics. Temperament: inborn behavioral style. Behavioral genetics methods: twin, adoption, family studies.'
      }
    }
  ]
}
