export const satComplexPart2Data = {
  topicSlug: 'sat-complex-numbers-sat',
  sections: [
    {
      id: 'sat-c2-intro',
      type: 'text' as const,
      content: `
# Complex Number Operations

**Part 2 of 7 — Complex Number Operations**

Add/subtract: combine real parts and imaginary parts separately.

(a + bi) + (c + di) = (a+c) + (b+d)i.
      `
    },
    {
      id: 'sat-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Add/subtract" refer to in SAT prep?',
            options: [
              '(a + bi) + (c + di) = (a+c) + (b+d)i.',
              'Remember: i² = -1, so replace i² with -1.',
              'combine real parts and imaginary parts separately.',
              'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Add/subtract: combine real parts and imaginary parts separately. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Remember: i² = -1, so replace i² with -1.',
              'combine real parts and imaginary parts separately.',
              'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.',
              '(a + bi) + (c + di) = (a+c) + (b+d)i.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.

**SAT Tip:** Remember: i² = -1, so replace i² with -1.
      `
    },
    {
      id: 'sat-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'combine real parts and imaginary parts separately.',
              'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.',
              'Remember: i² = -1, so replace i² with -1.',
              '(a + bi) + (c + di) = (a+c) + (b+d)i.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Remember: i² = -1, so replace i² with -1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Add/subtract',
            options: ['Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.', '(a + bi) + (c + di) = (a+c) + (b+d)i.', 'Remember: i² = -1, so replace i² with -1.', 'combine real parts and imaginary parts separately.']
          },
          {
            label: 'Key Insight',
            options: ['Remember: i² = -1, so replace i² with -1.', 'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.', 'combine real parts and imaginary parts separately.', '(a + bi) + (c + di) = (a+c) + (b+d)i.']
          },
          {
            label: 'SAT Tip',
            options: ['Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.', 'Remember: i² = -1, so replace i² with -1.', 'combine real parts and imaginary parts separately.', '(a + bi) + (c + di) = (a+c) + (b+d)i.']
          }
        ],
        correctAnswers: ['combine real parts and imaginary parts separately.', 'Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i.', 'Remember: i² = -1, so replace i² with -1.'],
        hint1: 'Think about what each concept specifically describes in Complex Number Operations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Complex Number Operations describes a specific idea. Add/subtract: combine real parts and imaginary parts separately. Key Insight: Multiply using FOIL: (a + bi)(c + di) = ac + adi + bci + bdi² = (ac - bd) + (ad + bc)i. SAT Tip: Remember: i² = -1, so replace i² with -1.'
      }
    }
  ]
}
