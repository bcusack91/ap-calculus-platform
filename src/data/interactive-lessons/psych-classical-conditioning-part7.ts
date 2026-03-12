export const psychClassicalPart7Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class7-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Classical conditioning = involuntary responses

Classical conditioning = involuntary responses

### 2. Biological preparedness

some associations learned easier

### 3. Conditioning in everyday life

Conditioning in everyday life

### 4. AP exam

scenario analysis
      `
    },
    {
      id: 'class7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Classical conditioning = involuntary…?',
            options: [
              'Classical conditioning = involuntary responses',
              'Conditioning in everyday life',
              'scenario analysis',
              'some associations learned easier'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Classical conditioning = involuntary responses. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Conditioning in everyday life:',
            options: [
              'Classical conditioning = involuntary responses',
              'scenario analysis',
              'Conditioning in everyday life',
              'some associations learned easier'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Conditioning in everyday life. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'class7-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Classical conditioning = involuntary responses**
- **Biological preparedness**: some associations learned easier
- **Conditioning in everyday life**
- **AP exam**: scenario analysis
      `
    },
    {
      id: 'class7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'scenario analysis',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: scenario analysis'
          }
        ]
      }
    },
    {
      id: 'class7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological preparedness',
            options: ['Classical conditioning = involuntary responses', 'scenario analysis', 'Conditioning in everyday life', 'some associations learned easier']
          },
          {
            label: 'AP exam',
            options: ['Conditioning in everyday life', 'some associations learned easier', 'scenario analysis', 'Classical conditioning = involuntary responses']
          }
        ],
        correctAnswers: ['some associations learned easier', 'scenario analysis'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Biological preparedness: some associations learned easier. AP exam: scenario analysis.'
      }
    }
  ]
}
