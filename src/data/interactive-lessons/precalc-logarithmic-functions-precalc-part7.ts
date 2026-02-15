export const precalcLogarithmicPart7Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'logar7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Richter scale

M = log(I/I₀), each unit is 10× intensity

### 2. Decibel scale

dB = 10 · log(I/I₀)

### 3. pH scale

pH = -log[H⁺], logarithmic measure of acidity

### 4. Logarithmic regression

y = a + b · ln(x) for data modeling
      `
    },
    {
      id: 'logar7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Richter scale',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Richter scale: M = log(I/I₀), each unit is 10× intensity'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'pH = -log[H⁺], logarithmic measure of acidity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'pH scale: pH = -log[H⁺], logarithmic measure of acidity'
          }
        ]
      }
    },
    {
      id: 'logar7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Richter scale**: M = log(I/I₀), each unit is 10× intensity
- **Decibel scale**: dB = 10 · log(I/I₀)
- **pH scale**: pH = -log[H⁺], logarithmic measure of acidity
- **Logarithmic regression**: y = a + b · ln(x) for data modeling
      `
    },
    {
      id: 'logar7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'y = a + b · ln(x) for data modeling',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Logarithmic regression: y = a + b · ln(x) for data modeling'
          }
        ]
      }
    },
    {
      id: 'logar7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Richter scale',
            options: ['M = log(I/I₀), each unit is 10× intensity', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Decibel scale',
            options: ['dB = 10 · log(I/I₀)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'pH scale',
            options: ['pH = -log[H⁺], logarithmic measure of acidity', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['M = log(I/I₀), each unit is 10× intensity', 'dB = 10 · log(I/I₀)', 'pH = -log[H⁺], logarithmic measure of acidity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
