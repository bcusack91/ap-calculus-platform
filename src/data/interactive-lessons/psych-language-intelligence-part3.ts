export const psychLanguagePart3Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu3-intro',
      type: 'text' as const,
      content: `
# ## Intelligence Theories

**Part 3 of 7 — Intelligence Theories**

### 1. Spearman's g

general intelligence factor

### 2. Gardner's multiple intelligences

8 types (linguistic, musical, spatial, etc.)

### 3. Sternberg's triarchic

analytical, creative, practical

### 4. Emotional intelligence (Goleman)

perceiving, using, managing emotions
      `
    },
    {
      id: 'langu3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of intelligence theories?',
            options: [
              'Spearman\'s g',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Spearman\'s g: general intelligence factor'
          },
          {
            question: 'In the context of intelligence theories, which is accurate?',
            options: [
              'analytical, creative, practical',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sternberg\'s triarchic: analytical, creative, practical'
          }
        ]
      }
    },
    {
      id: 'langu3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Spearman's g**: general intelligence factor
- **Gardner's multiple intelligences**: 8 types (linguistic, musical, spatial, etc.)
- **Sternberg's triarchic**: analytical, creative, practical
- **Emotional intelligence (Goleman)**: perceiving, using, managing emotions
      `
    },
    {
      id: 'langu3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intelligence theories?',
            options: [
              'perceiving, using, managing emotions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Emotional intelligence (Goleman): perceiving, using, managing emotions'
          }
        ]
      }
    },
    {
      id: 'langu3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spearman\'s g',
            options: ['general intelligence factor', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Gardner\'s multiple intelligences',
            options: ['8 types (linguistic, musical, spatial, etc.)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Sternberg\'s triarchic',
            options: ['analytical, creative, practical', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['general intelligence factor', '8 types (linguistic, musical, spatial, etc.)', 'analytical, creative, practical'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Intelligence Theories.'
      }
    }
  ]
}
