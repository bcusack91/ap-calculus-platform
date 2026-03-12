export const precalcTrigFunctionsPart4Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo4-intro',
      type: 'text' as const,
      content: `
# Other Trig Functions

**Part 4 of 7 — Other Trig Functions**

### 1. tan θ = sin θ / cos θ; cot θ = cos θ / sin θ

tan θ = sin θ / cos θ; cot θ = cos θ / sin θ

### 2. sec θ = 1/cos θ; csc θ = 1/sin θ

sec θ = 1/cos θ; csc θ = 1/sin θ

### 3. Period of tan and cot

π

### 4. Tangent is undefined where cos θ = 0

Tangent is undefined where cos θ = 0
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
            question: 'Which of the following correctly describes tan θ = sin θ / cos θ; cot θ = cos θ /…?',
            options: [
              'sec θ = 1/cos θ; csc θ = 1/sin θ',
              'π',
              'Tangent is undefined where cos θ = 0',
              'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ'
            ],
            correctAnswer: 3,
            explanation: 'Correct — tan θ = sin θ / cos θ; cot θ = cos θ / sin θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Period of tan and cot:',
            options: [
              'Tangent is undefined where cos θ = 0',
              'sec θ = 1/cos θ; csc θ = 1/sin θ',
              'π',
              'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Period of tan and cot: π. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'trigo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **tan θ = sin θ / cos θ; cot θ = cos θ / sin θ**
- **sec θ = 1/cos θ; csc θ = 1/sin θ**
- **Period of tan and cot**: π
- **Tangent is undefined where cos θ = 0**
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
            question: 'Which concept relates directly to other trig functions?',
            options: [
              'Tangent is undefined where cos θ = 0',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Tangent is undefined where cos θ = 0'
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
            label: 'tan θ = sin θ / cos θ; cot θ = cos θ /…',
            options: ['tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'π', 'sec θ = 1/cos θ; csc θ = 1/sin θ', 'Tangent is undefined where cos θ = 0']
          },
          {
            label: 'sec θ = 1/cos θ; csc θ = 1/sin θ',
            options: ['Tangent is undefined where cos θ = 0', 'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'sec θ = 1/cos θ; csc θ = 1/sin θ', 'π']
          },
          {
            label: 'Period of tan and cot',
            options: ['sec θ = 1/cos θ; csc θ = 1/sin θ', 'tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'π', 'Tangent is undefined where cos θ = 0']
          }
        ],
        correctAnswers: ['tan θ = sin θ / cos θ; cot θ = cos θ / sin θ', 'sec θ = 1/cos θ; csc θ = 1/sin θ', 'π'],
        hint1: 'Think about what each concept specifically describes in Other Trig Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Other Trig Functions describes a specific idea. tan θ = sin θ / cos θ; cot θ = cos θ / sin θ. sec θ = 1/cos θ; csc θ = 1/sin θ. Period of tan and cot: π.'
      }
    }
  ]
}
