export const psychLanguagePart3Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu3-intro',
      type: 'text' as const,
      content: `
## Intelligence Theories

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Spearman\'s g?',
            options: [
              'general intelligence factor',
              '8 types (linguistic, musical, spatial, etc.)',
              'analytical, creative, practical',
              'perceiving, using, managing emotions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Spearman\'s g: general intelligence factor. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sternberg\'s triarchic?',
            options: [
              '8 types (linguistic, musical, spatial, etc.)',
              'general intelligence factor',
              'perceiving, using, managing emotions',
              'analytical, creative, practical'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sternberg\'s triarchic: analytical, creative, practical. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'langu3-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spearman\'s g',
            options: ['analytical, creative, practical', 'general intelligence factor', 'perceiving, using, managing emotions', '8 types (linguistic, musical, spatial, etc.)']
          },
          {
            label: 'Gardner\'s multiple intelligences',
            options: ['analytical, creative, practical', '8 types (linguistic, musical, spatial, etc.)', 'general intelligence factor', 'perceiving, using, managing emotions']
          },
          {
            label: 'Sternberg\'s triarchic',
            options: ['perceiving, using, managing emotions', 'analytical, creative, practical', 'general intelligence factor', '8 types (linguistic, musical, spatial, etc.)']
          }
        ],
        correctAnswers: ['general intelligence factor', '8 types (linguistic, musical, spatial, etc.)', 'analytical, creative, practical'],
        hint1: 'Think about what each concept specifically describes in Intelligence Theories.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Intelligence Theories describes a specific idea. Spearman\'s g: general intelligence factor. Gardner\'s multiple intelligences: 8 types (linguistic, musical, spatial, etc.). Sternberg\'s triarchic: analytical, creative, practical.'
      }
    }
  ]
}
