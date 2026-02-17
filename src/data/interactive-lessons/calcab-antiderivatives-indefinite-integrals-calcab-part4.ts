export const calcABAntiderivativesPart4Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'antid4-intro',
      type: 'text' as const,
      content: `
# Integrating Exponentials & Logs

**Part 4 of 7 — Integrating Exponentials & Logs**

### 1. ∫eˣ dx = eˣ + C

∫eˣ dx = eˣ + C

### 2. ∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1

∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1

### 3. ∫1/x dx = ln|x| + C

∫1/x dx = ln|x| + C

### 4. ∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C

∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C
      `
    },
    {
      id: 'antid4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains ∫eˣ dx = eˣ + C?',
            options: [
              '∫1/x dx = ln|x| + C',
              '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C',
              '∫eˣ dx = eˣ + C',
              '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ∫eˣ dx = eˣ + C. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Integrating Exponentials & Logs, which explains ∫1/x dx = ln|x| + C?',
            options: [
              '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1',
              '∫eˣ dx = eˣ + C',
              '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C',
              '∫1/x dx = ln|x| + C'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫1/x dx = ln|x| + C. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'antid4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫eˣ dx = eˣ + C**
- **∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1**
- **∫1/x dx = ln|x| + C**
- **∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C**
      `
    },
    {
      id: 'antid4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ∫1/(1+x²) dx = arctan(x) + C;…?',
            options: [
              '∫eˣ dx = eˣ + C',
              '∫1/x dx = ln|x| + C',
              '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C',
              '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'antid4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫eˣ dx = eˣ + C',
            options: ['∫1/x dx = ln|x| + C', '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C', '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1', '∫eˣ dx = eˣ + C']
          },
          {
            label: '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1',
            options: ['∫eˣ dx = eˣ + C', '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C', '∫1/x dx = ln|x| + C', '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1']
          },
          {
            label: '∫1/x dx = ln|x| + C',
            options: ['∫eˣ dx = eˣ + C', '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1', '∫1/x dx = ln|x| + C', '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C']
          }
        ],
        correctAnswers: ['∫eˣ dx = eˣ + C', '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1', '∫1/x dx = ln|x| + C'],
        hint1: 'Think about what each concept specifically describes in Integrating Exponentials & Logs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integrating Exponentials & Logs describes a specific idea. ∫eˣ dx = eˣ + C. ∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1. ∫1/x dx = ln|x| + C.'
      }
    }
  ]
}
