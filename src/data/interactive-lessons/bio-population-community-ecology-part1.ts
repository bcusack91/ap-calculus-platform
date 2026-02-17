export const bioPopulationPart1Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'popu1-intro-p1',
      type: 'text' as const,
      content: `
# ## Population Growth Models

**Part 1 of 7 — Population Growth Models**

1. Exponential growth: J-shaped curve, unlimited resources
2. dN/dt = rN (exponential growth equation)
3. Logistic growth: S-shaped curve, limited resources
4. dN/dt = rN(K-N)/K (logistic growth equation)
      `
    },
    {
      id: 'popu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Exponential growth" refer to in biology?',
            options: [
              'S-shaped curve, limited resources',
              'dN/dt = rN(K-N)/K (logistic growth equation)',
              'dN/dt = rN (exponential growth equation)',
              'J-shaped curve, unlimited resources'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Exponential growth: J-shaped curve, unlimited resources. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Logistic growth?',
            options: [
              'S-shaped curve, limited resources',
              'dN/dt = rN(K-N)/K (logistic growth equation)',
              'J-shaped curve, unlimited resources',
              'dN/dt = rN (exponential growth equation)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Logistic growth: S-shaped curve, limited resources. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'popu1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Exponential growth**: J-shaped curve, unlimited resources
- **dN/dt = rN (exponential growth equation)**
- **Logistic growth**: S-shaped curve, limited resources
- **dN/dt = rN(K-N)/K (logistic growth equation)**
      `
    },
    {
      id: 'popu1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Population Growth Models, which correctly describes dN/dt = rN(K-N)/K (logistic growth…?',
            options: [
              'dN/dt = rN(K-N)/K (logistic growth equation)',
              'S-shaped curve, limited resources',
              'dN/dt = rN (exponential growth equation)',
              'J-shaped curve, unlimited resources'
            ],
            correctAnswer: 0,
            explanation: 'Correct — dN/dt = rN(K-N)/K (logistic growth equation). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'popu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential growth',
            options: ['S-shaped curve, limited resources', 'dN/dt = rN (exponential growth equation)', 'J-shaped curve, unlimited resources', 'dN/dt = rN(K-N)/K (logistic growth equation)']
          },
          {
            label: 'Logistic growth',
            options: ['dN/dt = rN (exponential growth equation)', 'dN/dt = rN(K-N)/K (logistic growth equation)', 'J-shaped curve, unlimited resources', 'S-shaped curve, limited resources']
          }
        ],
        correctAnswers: ['J-shaped curve, unlimited resources', 'S-shaped curve, limited resources'],
        hint1: 'Think about what each concept specifically describes in Population Growth Models.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Population Growth Models describes a specific idea. Exponential growth: J-shaped curve, unlimited resources. Logistic growth: S-shaped curve, limited resources.'
      }
    }
  ]
}
