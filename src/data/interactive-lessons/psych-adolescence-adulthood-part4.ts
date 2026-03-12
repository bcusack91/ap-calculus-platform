export const psychAdolescencePart4Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adole4-intro',
      type: 'text' as const,
      content: `
## Adulthood & Aging

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Erikson\'s adult stages?',
            options: [
              'menopause, declining sensory abilities',
              'intimacy, generativity, integrity',
              'empty nest, retirement',
              'crystallized intelligence maintained, fluid declines'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Erikson\'s adult stages: intimacy, generativity, integrity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cognitive changes:',
            options: [
              'empty nest, retirement',
              'menopause, declining sensory abilities',
              'crystallized intelligence maintained, fluid declines',
              'intimacy, generativity, integrity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Cognitive changes: crystallized intelligence maintained, fluid declines. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'adole4-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Erikson\'s adult stages',
            options: ['empty nest, retirement', 'crystallized intelligence maintained, fluid declines', 'intimacy, generativity, integrity', 'menopause, declining sensory abilities']
          },
          {
            label: 'Physical changes',
            options: ['intimacy, generativity, integrity', 'empty nest, retirement', 'crystallized intelligence maintained, fluid declines', 'menopause, declining sensory abilities']
          },
          {
            label: 'Cognitive changes',
            options: ['intimacy, generativity, integrity', 'empty nest, retirement', 'crystallized intelligence maintained, fluid declines', 'menopause, declining sensory abilities']
          }
        ],
        correctAnswers: ['intimacy, generativity, integrity', 'menopause, declining sensory abilities', 'crystallized intelligence maintained, fluid declines'],
        hint1: 'Think about what each concept specifically describes in Adulthood & Aging.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Adulthood & Aging describes a specific idea. Erikson\'s adult stages: intimacy, generativity, integrity. Physical changes: menopause, declining sensory abilities. Cognitive changes: crystallized intelligence maintained, fluid declines.'
      }
    }
  ]
}
