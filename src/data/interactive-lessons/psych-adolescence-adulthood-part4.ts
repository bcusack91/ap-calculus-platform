export const psychAdolescencePart4Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole4-intro',
      type: 'text' as const,
      content: `
# ## Adulthood & Aging

**Part 4 of 7 — Adulthood & Aging**

### 1. Erikson's adult stages

intimacy, generativity, integrity

### 2. Physical changes

menopause, declining sensory abilities

### 3. Cognitive changes

crystallized intelligence maintained, fluid declines

### 4. Social changes

empty nest, retirement
      `
    },
    {
      id: 'adole4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of adulthood & aging?',
            options: [
              'Erikson\'s adult stages',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Erikson\'s adult stages: intimacy, generativity, integrity'
          },
          {
            question: 'In the context of adulthood & aging, which is accurate?',
            options: [
              'crystallized intelligence maintained, fluid declines',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cognitive changes: crystallized intelligence maintained, fluid declines'
          }
        ]
      }
    },
    {
      id: 'adole4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Erikson's adult stages**: intimacy, generativity, integrity
- **Physical changes**: menopause, declining sensory abilities
- **Cognitive changes**: crystallized intelligence maintained, fluid declines
- **Social changes**: empty nest, retirement
      `
    },
    {
      id: 'adole4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to adulthood & aging?',
            options: [
              'empty nest, retirement',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Social changes: empty nest, retirement'
          }
        ]
      }
    },
    {
      id: 'adole4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Erikson\'s adult stages',
            options: ['intimacy, generativity, integrity', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Physical changes',
            options: ['menopause, declining sensory abilities', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cognitive changes',
            options: ['crystallized intelligence maintained, fluid declin', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['intimacy, generativity, integrity', 'menopause, declining sensory abilities', 'crystallized intelligence maintained, fluid declin'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Adulthood & Aging.'
      }
    }
  ]
}
