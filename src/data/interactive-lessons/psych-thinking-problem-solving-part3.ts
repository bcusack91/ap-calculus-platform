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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Framing effect?',
            options: [
              'continuing because of past investment',
              'losses loom larger than equivalent gains',
              'overestimating accuracy of our judgments',
              'how a question is presented affects decisions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Framing effect: how a question is presented affects decisions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sunk cost fallacy?',
            options: [
              'how a question is presented affects decisions',
              'overestimating accuracy of our judgments',
              'continuing because of past investment',
              'losses loom larger than equivalent gains'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Sunk cost fallacy: continuing because of past investment. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Framing effect',
            options: ['continuing because of past investment', 'how a question is presented affects decisions', 'losses loom larger than equivalent gains', 'overestimating accuracy of our judgments']
          },
          {
            label: 'Loss aversion',
            options: ['continuing because of past investment', 'losses loom larger than equivalent gains', 'overestimating accuracy of our judgments', 'how a question is presented affects decisions']
          },
          {
            label: 'Sunk cost fallacy',
            options: ['continuing because of past investment', 'losses loom larger than equivalent gains', 'how a question is presented affects decisions', 'overestimating accuracy of our judgments']
          }
        ],
        correctAnswers: ['how a question is presented affects decisions', 'losses loom larger than equivalent gains', 'continuing because of past investment'],
        hint1: 'Think about what each concept specifically describes in Decision Making.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Decision Making describes a specific idea. Framing effect: how a question is presented affects decisions. Loss aversion: losses loom larger than equivalent gains. Sunk cost fallacy: continuing because of past investment.'
      }
    }
  ]
}
