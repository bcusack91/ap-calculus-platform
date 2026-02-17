export const calcBCIntByPartsPart2Data = {
  topicSlug: 'integration-by-parts-calcbc',
  sections: [
    {
      id: 'integ2-intro',
      type: 'text' as const,
      content: `
# Choosing u and dv (LIATE)

**Part 2 of 7 — Choosing u and dv (LIATE)**

### 1. LIATE priority for choosing u

Logarithmic, Inverse trig, Algebraic, Trig, Exponential

### 2. u should get simpler when differentiated

u should get simpler when differentiated

### 3. dv must be something you can integrate

dv must be something you can integrate

### 4. Example

∫x·eˣ dx → u = x, dv = eˣ dx
      `
    },
    {
      id: 'integ2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes LIATE priority for choosing u?',
            options: [
              'u should get simpler when differentiated',
              'Logarithmic, Inverse trig, Algebraic, Trig, Exponential',
              '∫x·eˣ dx → u = x, dv = eˣ dx',
              'dv must be something you can integrate'
            ],
            correctAnswer: 1,
            explanation: 'Correct — LIATE priority for choosing u: Logarithmic, Inverse trig, Algebraic, Trig, Exponential. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Choosing u and dv (LIATE), which explains dv must be something you can integrate?',
            options: [
              'u should get simpler when differentiated',
              'dv must be something you can integrate',
              'Logarithmic, Inverse trig, Algebraic, Trig, Exponential',
              '∫x·eˣ dx → u = x, dv = eˣ dx'
            ],
            correctAnswer: 1,
            explanation: 'Correct — dv must be something you can integrate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **LIATE priority for choosing u**: Logarithmic, Inverse trig, Algebraic, Trig, Exponential
- **u should get simpler when differentiated**
- **dv must be something you can integrate**
- **Example**: ∫x·eˣ dx → u = x, dv = eˣ dx
      `
    },
    {
      id: 'integ2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Example is correct?',
            options: [
              '∫x·eˣ dx → u = x, dv = eˣ dx',
              'Logarithmic, Inverse trig, Algebraic, Trig, Exponential',
              'dv must be something you can integrate',
              'u should get simpler when differentiated'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Example: ∫x·eˣ dx → u = x, dv = eˣ dx. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'LIATE priority for choosing u',
            options: ['∫x·eˣ dx → u = x, dv = eˣ dx', 'Logarithmic, Inverse trig, Algebraic, Trig, Exponential', 'u should get simpler when differentiated', 'dv must be something you can integrate']
          },
          {
            label: 'Example',
            options: ['∫x·eˣ dx → u = x, dv = eˣ dx', 'u should get simpler when differentiated', 'dv must be something you can integrate', 'Logarithmic, Inverse trig, Algebraic, Trig, Exponential']
          }
        ],
        correctAnswers: ['Logarithmic, Inverse trig, Algebraic, Trig, Exponential', '∫x·eˣ dx → u = x, dv = eˣ dx'],
        hint1: 'Think about what each concept specifically describes in Choosing u and dv (LIATE).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Choosing u and dv (LIATE) describes a specific idea. LIATE priority for choosing u: Logarithmic, Inverse trig, Algebraic, Trig, Exponential. Example: ∫x·eˣ dx → u = x, dv = eˣ dx.'
      }
    }
  ]
}
