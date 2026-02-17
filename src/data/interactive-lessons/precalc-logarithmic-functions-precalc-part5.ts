export const precalcLogarithmicPart5Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'logar5-intro',
      type: 'text' as const,
      content: `
# Logarithmic Modeling

**Part 5 of 7 — Logarithmic Modeling**

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
      id: 'logar5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Richter scale?',
            options: [
              'y = a + b · ln(x) for data modeling',
              'dB = 10 · log(I/I₀)',
              'M = log(I/I₀), each unit is 10× intensity',
              'pH = -log[H⁺], logarithmic measure of acidity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Richter scale: M = log(I/I₀), each unit is 10× intensity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes pH scale:',
            options: [
              'M = log(I/I₀), each unit is 10× intensity',
              'dB = 10 · log(I/I₀)',
              'pH = -log[H⁺], logarithmic measure of acidity',
              'y = a + b · ln(x) for data modeling'
            ],
            correctAnswer: 2,
            explanation: 'Correct — pH scale: pH = -log[H⁺], logarithmic measure of acidity. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logar5-detail',
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
      id: 'logar5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to logarithmic modeling?',
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
      id: 'logar5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Richter scale',
            options: ['M = log(I/I₀), each unit is 10× intensity', 'pH = -log[H⁺], logarithmic measure of acidity', 'dB = 10 · log(I/I₀)', 'y = a + b · ln(x) for data modeling']
          },
          {
            label: 'Decibel scale',
            options: ['y = a + b · ln(x) for data modeling', 'dB = 10 · log(I/I₀)', 'pH = -log[H⁺], logarithmic measure of acidity', 'M = log(I/I₀), each unit is 10× intensity']
          },
          {
            label: 'pH scale',
            options: ['y = a + b · ln(x) for data modeling', 'pH = -log[H⁺], logarithmic measure of acidity', 'dB = 10 · log(I/I₀)', 'M = log(I/I₀), each unit is 10× intensity']
          }
        ],
        correctAnswers: ['M = log(I/I₀), each unit is 10× intensity', 'dB = 10 · log(I/I₀)', 'pH = -log[H⁺], logarithmic measure of acidity'],
        hint1: 'Think about what each concept specifically describes in Logarithmic Modeling.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Logarithmic Modeling describes a specific idea. Richter scale: M = log(I/I₀), each unit is 10× intensity. Decibel scale: dB = 10 · log(I/I₀). pH scale: pH = -log[H⁺], logarithmic measure of acidity.'
      }
    }
  ]
}
