export const bioCellStructurePart4Data = {
  topicSlug: 'cell-structure-organelles',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Energy Organelles

**Part 4 of 7 — Energy Organelles**

1. Mitochondria: cellular respiration, double membrane
2. Chloroplasts: photosynthesis, thylakoids + stroma
3. Endosymbiotic theory: evolved from bacteria
4. Both have their own DNA and ribosomes
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Mitochondria?',
            options: [
              'cellular respiration, double membrane',
              'Both have their own DNA and ribosomes',
              'photosynthesis, thylakoids + stroma',
              'evolved from bacteria'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Mitochondria: cellular respiration, double membrane. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Energy Organelles, which explains Endosymbiotic theory?',
            options: [
              'cellular respiration, double membrane',
              'Both have their own DNA and ribosomes',
              'photosynthesis, thylakoids + stroma',
              'evolved from bacteria'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Endosymbiotic theory: evolved from bacteria. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Mitochondria**: cellular respiration, double membrane
- **Chloroplasts**: photosynthesis, thylakoids + stroma
- **Endosymbiotic theory**: evolved from bacteria
- **Both have their own DNA and ribosomes**
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Both have their own DNA and ribosomes is correct?',
            options: [
              'evolved from bacteria',
              'Both have their own DNA and ribosomes',
              'cellular respiration, double membrane',
              'photosynthesis, thylakoids + stroma'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Both have their own DNA and ribosomes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mitochondria',
            options: ['photosynthesis, thylakoids + stroma', 'Both have their own DNA and ribosomes', 'evolved from bacteria', 'cellular respiration, double membrane']
          },
          {
            label: 'Chloroplasts',
            options: ['photosynthesis, thylakoids + stroma', 'cellular respiration, double membrane', 'evolved from bacteria', 'Both have their own DNA and ribosomes']
          },
          {
            label: 'Endosymbiotic theory',
            options: ['photosynthesis, thylakoids + stroma', 'cellular respiration, double membrane', 'evolved from bacteria', 'Both have their own DNA and ribosomes']
          }
        ],
        correctAnswers: ['cellular respiration, double membrane', 'photosynthesis, thylakoids + stroma', 'evolved from bacteria'],
        hint1: 'Think about what each concept specifically describes in Energy Organelles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Energy Organelles describes a specific idea. Mitochondria: cellular respiration, double membrane. Chloroplasts: photosynthesis, thylakoids + stroma. Endosymbiotic theory: evolved from bacteria.'
      }
    }
  ]
}
