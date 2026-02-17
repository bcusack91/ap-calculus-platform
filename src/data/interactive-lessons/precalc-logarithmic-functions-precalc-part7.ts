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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Richter scale?',
            options: [
              'dB = 10 · log(I/I₀)',
              'pH = -log[H⁺], logarithmic measure of acidity',
              'y = a + b · ln(x) for data modeling',
              'M = log(I/I₀), each unit is 10× intensity'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Richter scale: M = log(I/I₀), each unit is 10× intensity. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes pH scale:',
            options: [
              'pH = -log[H⁺], logarithmic measure of acidity',
              'dB = 10 · log(I/I₀)',
              'y = a + b · ln(x) for data modeling',
              'M = log(I/I₀), each unit is 10× intensity'
            ],
            correctAnswer: 0,
            explanation: 'Correct — pH scale: pH = -log[H⁺], logarithmic measure of acidity. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Richter scale',
            options: ['dB = 10 · log(I/I₀)', 'y = a + b · ln(x) for data modeling', 'M = log(I/I₀), each unit is 10× intensity', 'pH = -log[H⁺], logarithmic measure of acidity']
          },
          {
            label: 'Decibel scale',
            options: ['pH = -log[H⁺], logarithmic measure of acidity', 'M = log(I/I₀), each unit is 10× intensity', 'y = a + b · ln(x) for data modeling', 'dB = 10 · log(I/I₀)']
          },
          {
            label: 'pH scale',
            options: ['y = a + b · ln(x) for data modeling', 'dB = 10 · log(I/I₀)', 'pH = -log[H⁺], logarithmic measure of acidity', 'M = log(I/I₀), each unit is 10× intensity']
          }
        ],
        correctAnswers: ['M = log(I/I₀), each unit is 10× intensity', 'dB = 10 · log(I/I₀)', 'pH = -log[H⁺], logarithmic measure of acidity'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Richter scale: M = log(I/I₀), each unit is 10× intensity. Decibel scale: dB = 10 · log(I/I₀). pH scale: pH = -log[H⁺], logarithmic measure of acidity.'
      }
    }
  ]
}
