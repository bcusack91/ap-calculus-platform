export const bioEnergyFlowPart7Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener7-intro-p7',
      type: 'text' as const,
      content: `
# ## Energy Flow: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Energy flow vs matter cycling
2. 10% rule and its implications
3. Human impacts on global cycles
4. AP exam: quantitative ecology problems
      `
    },
    {
      id: 'ener7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Energy flow vs matter cycling" refer to in biology?',
            options: [
              '10% rule and its implications',
              'Energy flow vs matter cycling',
              'Human impacts on global cycles',
              'quantitative ecology problems'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Energy flow vs matter cycling. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Human impacts on global cycles:',
            options: [
              'Human impacts on global cycles',
              'Energy flow vs matter cycling',
              '10% rule and its implications',
              'quantitative ecology problems'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Human impacts on global cycles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ener7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Energy flow vs matter cycling**
- **10% rule and its implications**
- **Human impacts on global cycles**
- **AP exam**: quantitative ecology problems
      `
    },
    {
      id: 'ener7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Energy Flow: Synthesis & AP Review, which correctly describes AP exam?',
            options: [
              'Human impacts on global cycles',
              'Energy flow vs matter cycling',
              'quantitative ecology problems',
              '10% rule and its implications'
            ],
            correctAnswer: 2,
            explanation: 'Correct — AP exam: quantitative ecology problems. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Energy flow vs matter cycling',
            options: ['Human impacts on global cycles', '10% rule and its implications', 'quantitative ecology problems', 'Energy flow vs matter cycling']
          },
          {
            label: '10% rule and its implications',
            options: ['quantitative ecology problems', 'Human impacts on global cycles', '10% rule and its implications', 'Energy flow vs matter cycling']
          },
          {
            label: 'Human impacts on global cycles',
            options: ['Energy flow vs matter cycling', '10% rule and its implications', 'Human impacts on global cycles', 'quantitative ecology problems']
          }
        ],
        correctAnswers: ['Energy flow vs matter cycling', '10% rule and its implications', 'Human impacts on global cycles'],
        hint1: 'Think about what each concept specifically describes in Energy Flow: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Energy Flow: Synthesis & AP Review describes a specific idea. Energy flow vs matter cycling. 10% rule and its implications. Human impacts on global cycles.'
      }
    }
  ]
}
