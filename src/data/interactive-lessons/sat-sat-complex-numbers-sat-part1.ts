export const satComplexPart1Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c1-intro',
      type: 'text' as const,
      content: `
# 📝 Complex Numbers

**Part 1 of 7 — Imaginary Numbers**

i = √(-1), so i² = -1.

√(-a) = i√a for a > 0.
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
            question: 'What does "i = √(-1), so i² = -1." refer to in SAT prep?',
            options: [
              'i = √(-1), so i² = -1.',
              'Pure imaginary: bi (when a = 0); real: a (when b = 0).',
              'Complex number: a + bi where a is real part, b is imaginary part.',
              '√(-a) = i√a for a > 0.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — i = √(-1), so i² = -1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Pure imaginary: bi (when a = 0); real: a (when b = 0).',
              'Complex number: a + bi where a is real part, b is imaginary part.',
              '√(-a) = i√a for a > 0.',
              'i = √(-1), so i² = -1.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Complex number: a + bi where a is real part, b is imaginary part. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Complex number: a + bi where a is real part, b is imaginary part.

**SAT Tip:** Pure imaginary: bi (when a = 0); real: a (when b = 0).
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
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Pure imaginary: bi (when a = 0); real: a (when b = 0).',
              'Complex number: a + bi where a is real part, b is imaginary part.',
              '√(-a) = i√a for a > 0.',
              'i = √(-1), so i² = -1.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Pure imaginary: bi (when a = 0); real: a (when b = 0). Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Key Insight',
            options: ['Complex number: a + bi where a is real part, b is imaginary part.', 'i = √(-1), so i² = -1.', 'Pure imaginary: bi (when a = 0); real: a (when b = 0).', '√(-a) = i√a for a > 0.']
          },
          {
            label: 'SAT Tip',
            options: ['√(-a) = i√a for a > 0.', 'i = √(-1), so i² = -1.', 'Complex number: a + bi where a is real part, b is imaginary part.', 'Pure imaginary: bi (when a = 0); real: a (when b = 0).']
          }
        ],
        correctAnswers: ['Complex number: a + bi where a is real part, b is imaginary part.', 'Pure imaginary: bi (when a = 0); real: a (when b = 0).'],
        hint1: 'Think about what each concept specifically describes in Complex Numbers.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Complex Numbers describes a specific idea. Key Insight: Complex number: a + bi where a is real part, b is imaginary part. SAT Tip: Pure imaginary: bi (when a = 0); real: a (when b = 0).'
      }
    }
  ]
}
