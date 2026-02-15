export const satTestDayPart1Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t1-intro',
      type: 'text' as const,
      content: `
# 📝 Test Day Strategy

**Part 1 of 7 — Test Format & Timing**

Total: ~3 hours + breaks.

Reading: 65 min, 52 questions; Writing: 35 min, 44 questions.
      `
    },
    {
      id: 'sat-t1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes total?',
            options: [
              'Total is a fundamental concept in SAT Math',
              'Reading: 65 min, 52 questions; Writing: 35 min, 44 questions',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Total: ~3 hours + breaks'
          }
        ]
      }
    },
    {
      id: 'sat-t1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.

**SAT Tip:** Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.
      `
    },
    {
      id: 'sat-t1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for test format & timing?',
            options: [
              'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions'
          }
        ]
      }
    },
    {
      id: 'sat-t1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Test Format & Timing:',
            options: ['Total: ~3 hours + breaks', 'Reading: 65 min, 52 questions; Writing: 35 min, 44', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Math No-Calc: 25 min, 20 questions; Math Calculato', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Total: ~3 hours + breaks', 'Math No-Calc: 25 min, 20 questions; Math Calculato'],
        hint1: 'Think about test format & timing',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Total: ~3 hours + breaks. Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.'
      }
    }
  ]
}
