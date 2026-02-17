export const psychAttitudesPart6Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attit6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Analyzing cognitive dissonance scenarios

Analyzing cognitive dissonance scenarios

### 2. Identifying prejudice, discrimination, and stereotypes

Identifying prejudice, discrimination, and stereotypes

### 3. Evaluating aggression theories

Evaluating aggression theories

### 4. Predicting prosocial behavior

Predicting prosocial behavior
      `
    },
    {
      id: 'attit6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Analyzing cognitive dissonance scenarios" refer to in psychology?',
            options: [
              'Predicting prosocial behavior',
              'Evaluating aggression theories',
              'Analyzing cognitive dissonance scenarios',
              'Identifying prejudice, discrimination, and stereotypes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Analyzing cognitive dissonance scenarios. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Evaluating aggression theories?',
            options: [
              'Predicting prosocial behavior',
              'Evaluating aggression theories',
              'Analyzing cognitive dissonance scenarios',
              'Identifying prejudice, discrimination, and stereotypes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Evaluating aggression theories. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'attit6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Analyzing cognitive dissonance scenarios**
- **Identifying prejudice, discrimination, and stereotypes**
- **Evaluating aggression theories**
- **Predicting prosocial behavior**
      `
    },
    {
      id: 'attit6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Predicting prosocial behavior',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Predicting prosocial behavior'
          }
        ]
      }
    },
    {
      id: 'attit6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing cognitive dissonance scenarios',
            options: ['Evaluating aggression theories', 'Predicting prosocial behavior', 'Identifying prejudice, discrimination, and stereotypes', 'Analyzing cognitive dissonance scenarios']
          },
          {
            label: 'Identifying prejudice, discrimination,…',
            options: ['Identifying prejudice, discrimination, and stereotypes', 'Evaluating aggression theories', 'Predicting prosocial behavior', 'Analyzing cognitive dissonance scenarios']
          },
          {
            label: 'Evaluating aggression theories',
            options: ['Analyzing cognitive dissonance scenarios', 'Predicting prosocial behavior', 'Identifying prejudice, discrimination, and stereotypes', 'Evaluating aggression theories']
          }
        ],
        correctAnswers: ['Analyzing cognitive dissonance scenarios', 'Identifying prejudice, discrimination, and stereotypes', 'Evaluating aggression theories'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Analyzing cognitive dissonance scenarios. Identifying prejudice, discrimination, and stereotypes. Evaluating aggression theories.'
      }
    }
  ]
}
