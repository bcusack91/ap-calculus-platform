export const satRWStrategyPart3Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r3-intro',
      type: 'text' as const,
      content: `
# Evidence-Based Questions

**Part 3 of 7 — Evidence-Based Questions**

Best evidence questions: which lines support your previous answer?.

Command of evidence: cite specific text to support a conclusion.
      `
    },
    {
      id: 'sat-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Best evidence questions?',
            options: [
              'cite specific text to support a conclusion.',
              'which lines support your previous answer?.',
              'Work these in pairs with the preceding question.',
              'Eliminate choices where the evidence doesn\'t match the claim.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Best evidence questions: which lines support your previous answer?. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'which lines support your previous answer?.',
              'Work these in pairs with the preceding question.',
              'Eliminate choices where the evidence doesn\'t match the claim.',
              'cite specific text to support a conclusion.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Work these in pairs with the preceding question. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Work these in pairs with the preceding question.

**SAT Tip:** Eliminate choices where the evidence doesn't match the claim.
      `
    },
    {
      id: 'sat-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Eliminate choices where the evidence doesn\'t match the claim.',
              'Work these in pairs with the preceding question.',
              'which lines support your previous answer?.',
              'cite specific text to support a conclusion.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Eliminate choices where the evidence doesn\'t match the claim. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best evidence questions',
            options: ['cite specific text to support a conclusion.', 'Eliminate choices where the evidence doesn\'t match the claim.', 'Work these in pairs with the preceding question.', 'which lines support your previous answer?.']
          },
          {
            label: 'Command of evidence',
            options: ['Eliminate choices where the evidence doesn\'t match the claim.', 'Work these in pairs with the preceding question.', 'cite specific text to support a conclusion.', 'which lines support your previous answer?.']
          },
          {
            label: 'Key Insight',
            options: ['cite specific text to support a conclusion.', 'which lines support your previous answer?.', 'Work these in pairs with the preceding question.', 'Eliminate choices where the evidence doesn\'t match the claim.']
          }
        ],
        correctAnswers: ['which lines support your previous answer?.', 'cite specific text to support a conclusion.', 'Work these in pairs with the preceding question.'],
        hint1: 'Think about what each concept specifically describes in Evidence-Based Questions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evidence-Based Questions describes a specific idea. Best evidence questions: which lines support your previous answer?. Command of evidence: cite specific text to support a conclusion. Key Insight: Work these in pairs with the preceding question.'
      }
    }
  ]
}
