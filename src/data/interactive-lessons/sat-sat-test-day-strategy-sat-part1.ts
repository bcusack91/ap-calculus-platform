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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Total?',
            options: [
              'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.',
              '~3 hours + breaks.',
              '65 min, 52 questions; Writing: 35 min, 44 questions.',
              'Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Total: ~3 hours + breaks. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              '~3 hours + breaks.',
              '65 min, 52 questions; Writing: 35 min, 44 questions.',
              'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.',
              'Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.',
              '~3 hours + breaks.',
              '65 min, 52 questions; Writing: 35 min, 44 questions.',
              'Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Total',
            options: ['Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.', '65 min, 52 questions; Writing: 35 min, 44 questions.', '~3 hours + breaks.', 'Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.']
          },
          {
            label: 'Reading',
            options: ['65 min, 52 questions; Writing: 35 min, 44 questions.', 'Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.', 'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.', '~3 hours + breaks.']
          },
          {
            label: 'Key Insight',
            options: ['Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.', '~3 hours + breaks.', '65 min, 52 questions; Writing: 35 min, 44 questions.', 'Bring: admission ticket, photo ID, #2 pencils, approved calculator, snacks for breaks.']
          }
        ],
        correctAnswers: ['~3 hours + breaks.', '65 min, 52 questions; Writing: 35 min, 44 questions.', 'Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.'],
        hint1: 'Think about what each concept specifically describes in Test Day Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Test Day Strategy describes a specific idea. Total: ~3 hours + breaks. Reading: 65 min, 52 questions; Writing: 35 min, 44 questions. Key Insight: Math No-Calc: 25 min, 20 questions; Math Calculator: 55 min, 38 questions.'
      }
    }
  ]
}
