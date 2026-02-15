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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes best evidence questions?',
            options: [
              'Best evidence questions is a fundamental concept in SAT Reading & Writing',
              'Command of evidence: cite specific text to support a conclusion',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Best evidence questions: which lines support your previous answer?'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for evidence-based questions?',
            options: [
              'Work these in pairs with the preceding question',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Work these in pairs with the preceding question'
          }
        ]
      }
    },
    {
      id: 'sat-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Evidence-Based Questions:',
            options: ['Best evidence questions: which lines support your ', 'Command of evidence: cite specific text to support', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Work these in pairs with the preceding question', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Best evidence questions: which lines support your ', 'Work these in pairs with the preceding question'],
        hint1: 'Think about evidence-based questions',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Best evidence questions: which lines support your previous answer?. Work these in pairs with the preceding question.'
      }
    }
  ]
}
