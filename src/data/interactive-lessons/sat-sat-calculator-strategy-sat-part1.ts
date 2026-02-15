export const satCalcStrategyPart1Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c1-intro',
      type: 'text' as const,
      content: `
# 📝 Calculator Strategy

**Part 1 of 7 — Calculator Section Overview**

SAT Math: Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).

No-calculator section tests mental math and algebraic fluency.
      `
    },
    {
      id: 'sat-c1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes sat math?',
            options: [
              'SAT Math is a fundamental concept in SAT Math',
              'No-calculator section tests mental math and algebraic fluency',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'SAT Math: Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions)'
          }
        ]
      }
    },
    {
      id: 'sat-c1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Calculator section: more complex, multi-step, and data problems.

**SAT Tip:** Know your calculator: practice with the same one you'll use on test day.
      `
    },
    {
      id: 'sat-c1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for calculator section overview?',
            options: [
              'Calculator section: more complex, multi-step, and data problems',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Calculator section: more complex, multi-step, and data problems'
          }
        ]
      }
    },
    {
      id: 'sat-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Calculator Section Overview:',
            options: ['SAT Math: Section 3 (no calculator, 25 min, 20 que', 'No-calculator section tests mental math and algebr', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Calculator section: more complex, multi-step, and ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['SAT Math: Section 3 (no calculator, 25 min, 20 que', 'Calculator section: more complex, multi-step, and '],
        hint1: 'Think about calculator section overview',
        hint2: 'Consider the best SAT strategy',
        explanation: 'SAT Math: Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions). Calculator section: more complex, multi-step, and data problems.'
      }
    }
  ]
}
