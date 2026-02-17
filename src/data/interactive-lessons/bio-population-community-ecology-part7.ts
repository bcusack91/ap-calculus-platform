export const bioPopulationPart7Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu7-intro-p7',
      type: 'text' as const,
      content: `
# ## Population Ecology: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Population ecology and conservation
2. Community interactions shape ecosystems
3. Human population growth
4. AP exam: mathematical population analysis
      `
    },
    {
      id: 'popu7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Population ecology and conservation?',
            options: [
              'Human population growth',
              'Population ecology and conservation',
              'Community interactions shape ecosystems',
              'mathematical population analysis'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Population ecology and conservation. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Population Ecology: Synthesis & AP Review, which explains Human population growth?',
            options: [
              'mathematical population analysis',
              'Community interactions shape ecosystems',
              'Human population growth',
              'Population ecology and conservation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Human population growth. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Population ecology and conservation**
- **Community interactions shape ecosystems**
- **Human population growth**
- **AP exam**: mathematical population analysis
      `
    },
    {
      id: 'popu7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Population Ecology: Synthesis & AP Review, which correctly describes AP exam?',
            options: [
              'Population ecology and conservation',
              'mathematical population analysis',
              'Community interactions shape ecosystems',
              'Human population growth'
            ],
            correctAnswer: 1,
            explanation: 'Correct — AP exam: mathematical population analysis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population ecology and conservation',
            options: ['Community interactions shape ecosystems', 'Human population growth', 'Population ecology and conservation', 'mathematical population analysis']
          },
          {
            label: 'Community interactions shape ecosystems',
            options: ['Population ecology and conservation', 'Community interactions shape ecosystems', 'Human population growth', 'mathematical population analysis']
          },
          {
            label: 'Human population growth',
            options: ['Human population growth', 'mathematical population analysis', 'Community interactions shape ecosystems', 'Population ecology and conservation']
          }
        ],
        correctAnswers: ['Population ecology and conservation', 'Community interactions shape ecosystems', 'Human population growth'],
        hint1: 'Think about what each concept specifically describes in Population Ecology: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Population Ecology: Synthesis & AP Review describes a specific idea. Population ecology and conservation. Community interactions shape ecosystems. Human population growth.'
      }
    }
  ]
}
