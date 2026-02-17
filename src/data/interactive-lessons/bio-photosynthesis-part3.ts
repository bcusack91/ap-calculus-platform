export const bioPhotosynthesisPart3Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot3-intro-p3',
      type: 'text' as const,
      content: `
# ## Calvin Cycle

**Part 3 of 7 — Calvin Cycle**

1. Occurs in stroma of chloroplast
2. Carbon fixation: CO₂ + RuBP → 2 G3P (by RuBisCO)
3. 3 CO₂ → 1 G3P → glucose
4. Uses 9 ATP and 6 NADPH per G3P
      `
    },
    {
      id: 'phot3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Occurs in stroma of chloroplast" refer to in biology?',
            options: [
              'CO₂ + RuBP → 2 G3P (by RuBisCO)',
              '3 CO₂ → 1 G3P → glucose',
              'Uses 9 ATP and 6 NADPH per G3P',
              'Occurs in stroma of chloroplast'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Occurs in stroma of chloroplast. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes 3 CO₂ → 1 G3P → glucose:',
            options: [
              'CO₂ + RuBP → 2 G3P (by RuBisCO)',
              '3 CO₂ → 1 G3P → glucose',
              'Uses 9 ATP and 6 NADPH per G3P',
              'Occurs in stroma of chloroplast'
            ],
            correctAnswer: 1,
            explanation: 'Correct — 3 CO₂ → 1 G3P → glucose. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'phot3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Occurs in stroma of chloroplast**
- **Carbon fixation**: CO₂ + RuBP → 2 G3P (by RuBisCO)
- **3 CO₂ → 1 G3P → glucose**
- **Uses 9 ATP and 6 NADPH per G3P**
      `
    },
    {
      id: 'phot3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Uses 9 ATP and 6 NADPH per G3P?',
            options: [
              'Uses 9 ATP and 6 NADPH per G3P',
              'Occurs in stroma of chloroplast',
              'CO₂ + RuBP → 2 G3P (by RuBisCO)',
              '3 CO₂ → 1 G3P → glucose'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Uses 9 ATP and 6 NADPH per G3P. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'phot3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Occurs in stroma of chloroplast',
            options: ['3 CO₂ → 1 G3P → glucose', 'CO₂ + RuBP → 2 G3P (by RuBisCO)', 'Uses 9 ATP and 6 NADPH per G3P', 'Occurs in stroma of chloroplast']
          },
          {
            label: 'Carbon fixation',
            options: ['Occurs in stroma of chloroplast', '3 CO₂ → 1 G3P → glucose', 'Uses 9 ATP and 6 NADPH per G3P', 'CO₂ + RuBP → 2 G3P (by RuBisCO)']
          },
          {
            label: '3 CO₂ → 1 G3P → glucose',
            options: ['CO₂ + RuBP → 2 G3P (by RuBisCO)', 'Occurs in stroma of chloroplast', 'Uses 9 ATP and 6 NADPH per G3P', '3 CO₂ → 1 G3P → glucose']
          }
        ],
        correctAnswers: ['Occurs in stroma of chloroplast', 'CO₂ + RuBP → 2 G3P (by RuBisCO)', '3 CO₂ → 1 G3P → glucose'],
        hint1: 'Think about what each concept specifically describes in Calvin Cycle.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Calvin Cycle describes a specific idea. Occurs in stroma of chloroplast. Carbon fixation: CO₂ + RuBP → 2 G3P (by RuBisCO). 3 CO₂ → 1 G3P → glucose.'
      }
    }
  ]
}
