export const satFunctionsPart4Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f4-intro',
      type: 'text' as const,
      content: `
# Transformations of Functions

**Part 4 of 7 — Transformations of Functions**

f(x) + k: shifts up k units; f(x) - k: shifts down k.

f(x - h): shifts right h units; f(x + h): shifts left h.
      `
    },
    {
      id: 'sat-f4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains f(x) + k?',
            options: [
              'shifts up k units; f(x) - k: shifts down k.',
              'af(x): vertical stretch (a > 1) or compression (0 < a < 1).',
              'f(-x): reflects over y-axis; -f(x): reflects over x-axis.',
              'shifts right h units; f(x + h): shifts left h.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — f(x) + k: shifts up k units; f(x) - k: shifts down k. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'af(x): vertical stretch (a > 1) or compression (0 < a < 1).',
              'shifts right h units; f(x + h): shifts left h.',
              'f(-x): reflects over y-axis; -f(x): reflects over x-axis.',
              'shifts up k units; f(x) - k: shifts down k.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: af(x): vertical stretch (a > 1) or compression (0 < a < 1). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-f4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** af(x): vertical stretch (a > 1) or compression (0 < a < 1).

**SAT Tip:** f(-x): reflects over y-axis; -f(x): reflects over x-axis.
      `
    },
    {
      id: 'sat-f4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'shifts right h units; f(x + h): shifts left h.',
              'f(-x): reflects over y-axis; -f(x): reflects over x-axis.',
              'shifts up k units; f(x) - k: shifts down k.',
              'af(x): vertical stretch (a > 1) or compression (0 < a < 1).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: f(-x): reflects over y-axis; -f(x): reflects over x-axis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-f4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f(x) + k',
            options: ['shifts up k units; f(x) - k: shifts down k.', 'shifts right h units; f(x + h): shifts left h.', 'af(x): vertical stretch (a > 1) or compression (0 < a < 1).', 'f(-x): reflects over y-axis; -f(x): reflects over x-axis.']
          },
          {
            label: 'f(x - h)',
            options: ['shifts up k units; f(x) - k: shifts down k.', 'af(x): vertical stretch (a > 1) or compression (0 < a < 1).', 'f(-x): reflects over y-axis; -f(x): reflects over x-axis.', 'shifts right h units; f(x + h): shifts left h.']
          },
          {
            label: 'Key Insight',
            options: ['af(x): vertical stretch (a > 1) or compression (0 < a < 1).', 'shifts right h units; f(x + h): shifts left h.', 'f(-x): reflects over y-axis; -f(x): reflects over x-axis.', 'shifts up k units; f(x) - k: shifts down k.']
          }
        ],
        correctAnswers: ['shifts up k units; f(x) - k: shifts down k.', 'shifts right h units; f(x + h): shifts left h.', 'af(x): vertical stretch (a > 1) or compression (0 < a < 1).'],
        hint1: 'Think about what each concept specifically describes in Transformations of Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transformations of Functions describes a specific idea. f(x) + k: shifts up k units; f(x) - k: shifts down k. f(x - h): shifts right h units; f(x + h): shifts left h. Key Insight: af(x): vertical stretch (a > 1) or compression (0 < a < 1).'
      }
    }
  ]
}
