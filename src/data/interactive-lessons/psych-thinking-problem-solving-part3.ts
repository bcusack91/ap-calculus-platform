export const psychThinkingPart3Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think3-intro',
      type: 'text' as const,
      content: `
# ## Decision Making

**Part 3 of 7 — Decision Making**

### 1. Framing effect

how a question is presented affects decisions

### 2. Loss aversion

losses loom larger than equivalent gains

### 3. Sunk cost fallacy

continuing because of past investment

### 4. Overconfidence

overestimating accuracy of our judgments
      `
    },
    {
      id: 'think3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of decision making?',
            options: [
              'Framing effect',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Framing effect: how a question is presented affects decisions'
          },
          {
            question: 'In the context of decision making, which is accurate?',
            options: [
              'continuing because of past investment',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sunk cost fallacy: continuing because of past investment'
          }
        ]
      }
    },
    {
      id: 'think3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Framing effect**: how a question is presented affects decisions
- **Loss aversion**: losses loom larger than equivalent gains
- **Sunk cost fallacy**: continuing because of past investment
- **Overconfidence**: overestimating accuracy of our judgments
      `
    },
    {
      id: 'think3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to decision making?',
            options: [
              'overestimating accuracy of our judgments',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Overconfidence: overestimating accuracy of our judgments'
          }
        ]
      }
    },
    {
      id: 'think3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Framing effect',
            options: ['how a question is presented affects decisions', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Loss aversion',
            options: ['losses loom larger than equivalent gains', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Sunk cost fallacy',
            options: ['continuing because of past investment', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['how a question is presented affects decisions', 'losses loom larger than equivalent gains', 'continuing because of past investment'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Decision Making.'
      }
    }
  ]
}
