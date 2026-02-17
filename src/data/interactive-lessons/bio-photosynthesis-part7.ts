export const bioPhotosynthesisPart7Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot7-intro-p7',
      type: 'text' as const,
      content: `
# ## Photosynthesis: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Connection between light reactions and Calvin cycle
2. Energy transformations: light → chemical → ATP
3. Environmental factors affecting photosynthesis rate
4. Comparing C3, C4, and CAM strategies
      `
    },
    {
      id: 'phot7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Connection between light reactions and…?',
            options: [
              'Comparing C3, C4, and CAM strategies',
              'Connection between light reactions and Calvin cycle',
              'Environmental factors affecting photosynthesis rate',
              'light → chemical → ATP'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Connection between light reactions and Calvin cycle. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Photosynthesis: Synthesis & AP Review, which explains Environmental factors affecting…?',
            options: [
              'light → chemical → ATP',
              'Connection between light reactions and Calvin cycle',
              'Environmental factors affecting photosynthesis rate',
              'Comparing C3, C4, and CAM strategies'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Environmental factors affecting photosynthesis rate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'phot7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Connection between light reactions and Calvin cycle**
- **Energy transformations**: light → chemical → ATP
- **Environmental factors affecting photosynthesis rate**
- **Comparing C3, C4, and CAM strategies**
      `
    },
    {
      id: 'phot7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Photosynthesis: Synthesis & AP Review, which correctly describes Comparing C3, C4, and CAM strategies?',
            options: [
              'light → chemical → ATP',
              'Comparing C3, C4, and CAM strategies',
              'Connection between light reactions and Calvin cycle',
              'Environmental factors affecting photosynthesis rate'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Comparing C3, C4, and CAM strategies. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Connection between light reactions and…',
            options: ['light → chemical → ATP', 'Comparing C3, C4, and CAM strategies', 'Connection between light reactions and Calvin cycle', 'Environmental factors affecting photosynthesis rate']
          },
          {
            label: 'Energy transformations',
            options: ['Environmental factors affecting photosynthesis rate', 'Comparing C3, C4, and CAM strategies', 'Connection between light reactions and Calvin cycle', 'light → chemical → ATP']
          },
          {
            label: 'Environmental factors affecting…',
            options: ['Comparing C3, C4, and CAM strategies', 'Connection between light reactions and Calvin cycle', 'Environmental factors affecting photosynthesis rate', 'light → chemical → ATP']
          }
        ],
        correctAnswers: ['Connection between light reactions and Calvin cycle', 'light → chemical → ATP', 'Environmental factors affecting photosynthesis rate'],
        hint1: 'Think about what each concept specifically describes in Photosynthesis: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Photosynthesis: Synthesis & AP Review describes a specific idea. Connection between light reactions and Calvin cycle. Energy transformations: light → chemical → ATP. Environmental factors affecting photosynthesis rate.'
      }
    }
  ]
}
