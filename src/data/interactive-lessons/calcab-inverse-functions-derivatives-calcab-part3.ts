export const calcABInverseDerivPart3Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inver3-intro',
      type: 'text' as const,
      content: `
# Derivatives of Inverse Trig Functions

**Part 3 of 7 — Derivatives of Inverse Trig Functions**

### 1. d/dx[arcsin(x)] = 1/√(1-x²)

d/dx[arcsin(x)] = 1/√(1-x²)

### 2. d/dx[arccos(x)] = -1/√(1-x²)

d/dx[arccos(x)] = -1/√(1-x²)

### 3. d/dx[arctan(x)] = 1/(1+x²)

d/dx[arctan(x)] = 1/(1+x²)

### 4. With chain rule

d/dx[arctan(g(x))] = g'(x)/(1+[g(x)]²)
      `
    },
    {
      id: 'inver3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes d/dx[arcsin(x)] = 1/√(1-x²)?',
            options: [
              'd/dx[arccos(x)] = -1/√(1-x²)',
              'd/dx[arctan(x)] = 1/(1+x²)',
              'd/dx[arcsin(x)] = 1/√(1-x²)',
              'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — d/dx[arcsin(x)] = 1/√(1-x²). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Derivatives of Inverse Trig Functions, which explains d/dx[arctan(x)] = 1/(1+x²)?',
            options: [
              'd/dx[arccos(x)] = -1/√(1-x²)',
              'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)',
              'd/dx[arcsin(x)] = 1/√(1-x²)',
              'd/dx[arctan(x)] = 1/(1+x²)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[arctan(x)] = 1/(1+x²). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'inver3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[arcsin(x)] = 1/√(1-x²)**
- **d/dx[arccos(x)] = -1/√(1-x²)**
- **d/dx[arctan(x)] = 1/(1+x²)**
- **With chain rule**: d/dx[arctan(g(x))] = g'(x)/(1+[g(x)]²)
      `
    },
    {
      id: 'inver3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about With chain rule is correct?',
            options: [
              'd/dx[arctan(x)] = 1/(1+x²)',
              'd/dx[arccos(x)] = -1/√(1-x²)',
              'd/dx[arcsin(x)] = 1/√(1-x²)',
              'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — With chain rule: d/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'inver3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[arcsin(x)] = 1/√(1-x²)',
            options: ['d/dx[arccos(x)] = -1/√(1-x²)', 'd/dx[arctan(x)] = 1/(1+x²)', 'd/dx[arcsin(x)] = 1/√(1-x²)', 'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)']
          },
          {
            label: 'd/dx[arccos(x)] = -1/√(1-x²)',
            options: ['d/dx[arccos(x)] = -1/√(1-x²)', 'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)', 'd/dx[arcsin(x)] = 1/√(1-x²)', 'd/dx[arctan(x)] = 1/(1+x²)']
          },
          {
            label: 'd/dx[arctan(x)] = 1/(1+x²)',
            options: ['d/dx[arctan(x)] = 1/(1+x²)', 'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)', 'd/dx[arccos(x)] = -1/√(1-x²)', 'd/dx[arcsin(x)] = 1/√(1-x²)']
          }
        ],
        correctAnswers: ['d/dx[arcsin(x)] = 1/√(1-x²)', 'd/dx[arccos(x)] = -1/√(1-x²)', 'd/dx[arctan(x)] = 1/(1+x²)'],
        hint1: 'Think about what each concept specifically describes in Derivatives of Inverse Trig Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivatives of Inverse Trig Functions describes a specific idea. d/dx[arcsin(x)] = 1/√(1-x²). d/dx[arccos(x)] = -1/√(1-x²). d/dx[arctan(x)] = 1/(1+x²).'
      }
    }
  ]
}
