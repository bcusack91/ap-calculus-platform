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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes SAT Math?',
            options: [
              'Know your calculator: practice with the same one you\'ll use on test day.',
              'Calculator section: more complex, multi-step, and data problems.',
              'No-calculator section tests mental math and algebraic fluency.',
              'Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Math: Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Know your calculator: practice with the same one you\'ll use on test day.',
              'Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).',
              'Calculator section: more complex, multi-step, and data problems.',
              'No-calculator section tests mental math and algebraic fluency.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Calculator section: more complex, multi-step, and data problems. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Know your calculator: practice with the same one you\'ll use on test day.',
              'Calculator section: more complex, multi-step, and data problems.',
              'Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).',
              'No-calculator section tests mental math and algebraic fluency.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Know your calculator: practice with the same one you\'ll use on test day. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SAT Math',
            options: ['Know your calculator: practice with the same one you\'ll use on test day.', 'Calculator section: more complex, multi-step, and data problems.', 'No-calculator section tests mental math and algebraic fluency.', 'Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).']
          },
          {
            label: 'Key Insight',
            options: ['No-calculator section tests mental math and algebraic fluency.', 'Know your calculator: practice with the same one you\'ll use on test day.', 'Calculator section: more complex, multi-step, and data problems.', 'Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).']
          },
          {
            label: 'SAT Tip',
            options: ['No-calculator section tests mental math and algebraic fluency.', 'Calculator section: more complex, multi-step, and data problems.', 'Know your calculator: practice with the same one you\'ll use on test day.', 'Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).']
          }
        ],
        correctAnswers: ['Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions).', 'Calculator section: more complex, multi-step, and data problems.', 'Know your calculator: practice with the same one you\'ll use on test day.'],
        hint1: 'Think about what each concept specifically describes in Calculator Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Calculator Strategy describes a specific idea. SAT Math: Section 3 (no calculator, 25 min, 20 questions) and Section 4 (calculator, 55 min, 38 questions). Key Insight: Calculator section: more complex, multi-step, and data problems. SAT Tip: Know your calculator: practice with the same one you\'ll use on test day.'
      }
    }
  ]
}
