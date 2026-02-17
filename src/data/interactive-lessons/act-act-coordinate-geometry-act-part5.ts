export const actCoordGeomPart5Data = {
  topicSlug: 'act-coordinate-geometry-act',
  sections: [
    {
      id: 'act-c5-intro',
      type: 'text' as const,
      content: `
# Transformations

**Part 5 of 7 — Transformations**

Translation: shift graph horizontally or vertically.

Reflection: flip over x-axis (negate y) or y-axis (negate x).
      `
    },
    {
      id: 'act-c5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Translation" refer to in ACT prep?',
            options: [
              'f(x) + k: up k; f(x-h): right h.',
              '|f(x)|: reflects negative y-values above x-axis.',
              'flip over x-axis (negate y) or y-axis (negate x).',
              'shift graph horizontally or vertically.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Translation: shift graph horizontally or vertically. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '|f(x)|: reflects negative y-values above x-axis.',
              'shift graph horizontally or vertically.',
              'f(x) + k: up k; f(x-h): right h.',
              'flip over x-axis (negate y) or y-axis (negate x).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: f(x) + k: up k; f(x-h): right h. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-c5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** f(x) + k: up k; f(x-h): right h.

**ACT Tip:** |f(x)|: reflects negative y-values above x-axis.
      `
    },
    {
      id: 'act-c5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'f(x) + k: up k; f(x-h): right h.',
              'flip over x-axis (negate y) or y-axis (negate x).',
              'shift graph horizontally or vertically.',
              '|f(x)|: reflects negative y-values above x-axis.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: |f(x)|: reflects negative y-values above x-axis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-c5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Translation',
            options: ['f(x) + k: up k; f(x-h): right h.', 'flip over x-axis (negate y) or y-axis (negate x).', 'shift graph horizontally or vertically.', '|f(x)|: reflects negative y-values above x-axis.']
          },
          {
            label: 'Reflection',
            options: ['f(x) + k: up k; f(x-h): right h.', 'flip over x-axis (negate y) or y-axis (negate x).', 'shift graph horizontally or vertically.', '|f(x)|: reflects negative y-values above x-axis.']
          },
          {
            label: 'Key Insight',
            options: ['|f(x)|: reflects negative y-values above x-axis.', 'shift graph horizontally or vertically.', 'f(x) + k: up k; f(x-h): right h.', 'flip over x-axis (negate y) or y-axis (negate x).']
          }
        ],
        correctAnswers: ['shift graph horizontally or vertically.', 'flip over x-axis (negate y) or y-axis (negate x).', 'f(x) + k: up k; f(x-h): right h.'],
        hint1: 'Think about what each concept specifically describes in Transformations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transformations describes a specific idea. Translation: shift graph horizontally or vertically. Reflection: flip over x-axis (negate y) or y-axis (negate x). Key Insight: f(x) + k: up k; f(x-h): right h.'
      }
    }
  ]
}
