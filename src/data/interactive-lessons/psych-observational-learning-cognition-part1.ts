export const psychObservationalPart1Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 1 of 7 — Bandura & Social Learning**

### 1. Albert Bandura

social learning theory

### 2. Bobo doll experiment

children imitated aggressive model

### 3. Observational learning

learning by watching others

### 4. No direct reinforcement needed

No direct reinforcement needed
      `
    },
    {
      id: 'obser1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Albert Bandura?',
            options: [
              'learning by watching others',
              'social learning theory',
              'children imitated aggressive model',
              'No direct reinforcement needed'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Albert Bandura: social learning theory. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Observational learning:',
            options: [
              'No direct reinforcement needed',
              'children imitated aggressive model',
              'social learning theory',
              'learning by watching others'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Observational learning: learning by watching others. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'obser1-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Albert Bandura**: social learning theory
- **Bobo doll experiment**: children imitated aggressive model
- **Observational learning**: learning by watching others
- **No direct reinforcement needed**
      `
    },
    {
      id: 'obser1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to bandura & social learning?',
            options: [
              'No direct reinforcement needed',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'No direct reinforcement needed'
          }
        ]
      }
    },
    {
      id: 'obser1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Albert Bandura',
            options: ['learning by watching others', 'social learning theory', 'No direct reinforcement needed', 'children imitated aggressive model']
          },
          {
            label: 'Bobo doll experiment',
            options: ['social learning theory', 'learning by watching others', 'No direct reinforcement needed', 'children imitated aggressive model']
          },
          {
            label: 'Observational learning',
            options: ['social learning theory', 'learning by watching others', 'children imitated aggressive model', 'No direct reinforcement needed']
          }
        ],
        correctAnswers: ['social learning theory', 'children imitated aggressive model', 'learning by watching others'],
        hint1: 'Think about what each concept specifically describes in Observational & Cognitive Learning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Observational & Cognitive Learning describes a specific idea. Albert Bandura: social learning theory. Bobo doll experiment: children imitated aggressive model. Observational learning: learning by watching others.'
      }
    }
  ]
}
