export const satComplexPart7Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Conjugate of a + bi is a - bi.

(a + bi)(a - bi) = a² + b² (always real and positive).
      `
    },
    {
      id: 'sat-c7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Conjugate of a + bi is a - bi." refer to in SAT prep?',
            options: [
              'Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).',
              'Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.',
              '(a + bi)(a - bi) = a² + b² (always real and positive).',
              'Conjugate of a + bi is a - bi.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Conjugate of a + bi is a - bi. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.',
              'Conjugate of a + bi is a - bi.',
              '(a + bi)(a - bi) = a² + b² (always real and positive).',
              'Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.

**SAT Tip:** Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).
      `
    },
    {
      id: 'sat-c7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).',
              'Conjugate of a + bi is a - bi.',
              'Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.',
              '(a + bi)(a - bi) = a² + b² (always real and positive).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.', 'Conjugate of a + bi is a - bi.', 'Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).', '(a + bi)(a - bi) = a² + b² (always real and positive).']
          },
          {
            label: 'SAT Tip',
            options: ['Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).', '(a + bi)(a - bi) = a² + b² (always real and positive).', 'Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.', 'Conjugate of a + bi is a - bi.']
          }
        ],
        correctAnswers: ['Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator.', 'Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Use conjugates to divide complex numbers: multiply numerator and denominator by the conjugate of the denominator. SAT Tip: Rationalizing: (3 + 2i)/(1 - i) × (1 + i)/(1 + i).'
      }
    }
  ]
}
