export const precalcTrigIdentitiesPart4Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'trigo4-intro',
      type: 'text' as const,
      content: `
# Double & Half Angle Formulas

**Part 4 of 7 — Double & Half Angle Formulas**

### 1. sin(2θ) = 2 sin θ cos θ

sin(2θ) = 2 sin θ cos θ

### 2. cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ

cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ

### 3. sin(θ/2) = ±√((1 - cos θ)/2)

sin(θ/2) = ±√((1 - cos θ)/2)

### 4. cos(θ/2) = ±√((1 + cos θ)/2)

cos(θ/2) = ±√((1 + cos θ)/2)
      `
    },
    {
      id: 'trigo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "sin(2θ) = 2 sin θ cos θ" refer to in precalculus?',
            options: [
              'cos(θ/2) = ±√((1 + cos θ)/2)',
              'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ',
              'sin(θ/2) = ±√((1 - cos θ)/2)',
              'sin(2θ) = 2 sin θ cos θ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — sin(2θ) = 2 sin θ cos θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes sin(θ/2) = ±√((1 - cos θ)/2):',
            options: [
              'cos(θ/2) = ±√((1 + cos θ)/2)',
              'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ',
              'sin(2θ) = 2 sin θ cos θ',
              'sin(θ/2) = ±√((1 - cos θ)/2)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — sin(θ/2) = ±√((1 - cos θ)/2). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'trigo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **sin(2θ) = 2 sin θ cos θ**
- **cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ**
- **sin(θ/2) = ±√((1 - cos θ)/2)**
- **cos(θ/2) = ±√((1 + cos θ)/2)**
      `
    },
    {
      id: 'trigo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to double & half angle formulas?',
            options: [
              'cos(θ/2) = ±√((1 + cos θ)/2)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'cos(θ/2) = ±√((1 + cos θ)/2)'
          }
        ]
      }
    },
    {
      id: 'trigo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin(2θ) = 2 sin θ cos θ',
            options: ['cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'sin(2θ) = 2 sin θ cos θ', 'cos(θ/2) = ±√((1 + cos θ)/2)', 'sin(θ/2) = ±√((1 - cos θ)/2)']
          },
          {
            label: 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 =…',
            options: ['sin(2θ) = 2 sin θ cos θ', 'cos(θ/2) = ±√((1 + cos θ)/2)', 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'sin(θ/2) = ±√((1 - cos θ)/2)']
          },
          {
            label: 'sin(θ/2) = ±√((1 - cos θ)/2)',
            options: ['cos(θ/2) = ±√((1 + cos θ)/2)', 'sin(θ/2) = ±√((1 - cos θ)/2)', 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'sin(2θ) = 2 sin θ cos θ']
          }
        ],
        correctAnswers: ['sin(2θ) = 2 sin θ cos θ', 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'sin(θ/2) = ±√((1 - cos θ)/2)'],
        hint1: 'Think about what each concept specifically describes in Double & Half Angle Formulas.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Double & Half Angle Formulas describes a specific idea. sin(2θ) = 2 sin θ cos θ. cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ. sin(θ/2) = ±√((1 - cos θ)/2).'
      }
    }
  ]
}
