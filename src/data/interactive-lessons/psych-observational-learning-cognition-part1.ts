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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of bandura & social learning?',
            options: [
              'Albert Bandura',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Albert Bandura: social learning theory'
          },
          {
            question: 'In the context of bandura & social learning, which is accurate?',
            options: [
              'learning by watching others',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Observational learning: learning by watching others'
          }
        ]
      }
    },
    {
      id: 'obser1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Albert Bandura',
            options: ['social learning theory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Bobo doll experiment',
            options: ['children imitated aggressive model', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Observational learning',
            options: ['learning by watching others', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['social learning theory', 'children imitated aggressive model', 'learning by watching others'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Bandura & Social Learning.'
      }
    }
  ]
}
