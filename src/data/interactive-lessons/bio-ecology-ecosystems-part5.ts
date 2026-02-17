export const bioEcologyPart5Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol5-intro-p5',
      type: 'text' as const,
      content: `
# ## Ecological Niche

**Part 5 of 7 — Ecological Niche**

1. Fundamental niche: full range of conditions an organism can use
2. Realized niche: actual conditions used (limited by competition)
3. Competitive exclusion: two species cannot occupy same niche
4. Niche partitioning: dividing resources to coexist
      `
    },
    {
      id: 'ecol5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Fundamental niche" refer to in biology?',
            options: [
              'actual conditions used (limited by competition)',
              'full range of conditions an organism can use',
              'two species cannot occupy same niche',
              'dividing resources to coexist'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Fundamental niche: full range of conditions an organism can use. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ecological Niche, which explains Competitive exclusion?',
            options: [
              'actual conditions used (limited by competition)',
              'dividing resources to coexist',
              'two species cannot occupy same niche',
              'full range of conditions an organism can use'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Competitive exclusion: two species cannot occupy same niche. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fundamental niche**: full range of conditions an organism can use
- **Realized niche**: actual conditions used (limited by competition)
- **Competitive exclusion**: two species cannot occupy same niche
- **Niche partitioning**: dividing resources to coexist
      `
    },
    {
      id: 'ecol5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Niche partitioning?',
            options: [
              'full range of conditions an organism can use',
              'two species cannot occupy same niche',
              'dividing resources to coexist',
              'actual conditions used (limited by competition)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Niche partitioning: dividing resources to coexist. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fundamental niche',
            options: ['dividing resources to coexist', 'full range of conditions an organism can use', 'two species cannot occupy same niche', 'actual conditions used (limited by competition)']
          },
          {
            label: 'Realized niche',
            options: ['dividing resources to coexist', 'two species cannot occupy same niche', 'actual conditions used (limited by competition)', 'full range of conditions an organism can use']
          },
          {
            label: 'Competitive exclusion',
            options: ['dividing resources to coexist', 'actual conditions used (limited by competition)', 'two species cannot occupy same niche', 'full range of conditions an organism can use']
          }
        ],
        correctAnswers: ['full range of conditions an organism can use', 'actual conditions used (limited by competition)', 'two species cannot occupy same niche'],
        hint1: 'Think about what each concept specifically describes in Ecological Niche.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ecological Niche describes a specific idea. Fundamental niche: full range of conditions an organism can use. Realized niche: actual conditions used (limited by competition). Competitive exclusion: two species cannot occupy same niche.'
      }
    }
  ]
}
