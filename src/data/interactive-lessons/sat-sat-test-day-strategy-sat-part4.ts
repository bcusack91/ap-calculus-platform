export const satTestDayPart4Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t4-intro',
      type: 'text' as const,
      content: `
# Common Traps & Pitfalls

**Part 4 of 7 — Common Traps & Pitfalls**

Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true".

Calculation errors: double-check by substituting your answer back in.
      `
    },
    {
      id: 'sat-t4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes misreading the question?',
            options: [
              'Misreading the question is a fundamental concept in SAT Math',
              'Calculation errors: double-check by substituting your answer back in',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true"'
          }
        ]
      }
    },
    {
      id: 'sat-t4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Picking the most tempting wrong answer (designed to catch common mistakes).

**SAT Tip:** Running out of time: pace yourself with a watch, don't get stuck on one question.
      `
    },
    {
      id: 'sat-t4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for common traps & pitfalls?',
            options: [
              'Picking the most tempting wrong answer (designed to catch common mistakes)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Picking the most tempting wrong answer (designed to catch common mistakes)'
          }
        ]
      }
    },
    {
      id: 'sat-t4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Common Traps & Pitfalls:',
            options: ['Misreading the question: "NOT" or "EXCEPT" or "mus', 'Calculation errors: double-check by substituting y', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Picking the most tempting wrong answer (designed t', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Misreading the question: "NOT" or "EXCEPT" or "mus', 'Picking the most tempting wrong answer (designed t'],
        hint1: 'Think about common traps & pitfalls',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Misreading the question: "NOT" or "EXCEPT" or "must be true" vs. "could be true". Picking the most tempting wrong answer (designed to catch common mistakes).'
      }
    }
  ]
}
