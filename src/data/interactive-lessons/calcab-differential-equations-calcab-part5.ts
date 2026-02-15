export const calcABDiffEqPart5Data = {
  topicSlug: 'differential-equations-calcab',
  sections: [
    {
      id: 'diffe5-intro',
      type: 'text' as const,
      content: `
# Exponential Growth & Decay

**Part 5 of 7 — Exponential Growth & Decay**

### 1. Exponential growth/decay

dy/dt = ky → y = y₀·e^(kt)

### 2. k > 0

growth; k < 0: decay

### 3. Half-life

t₁/₂ = ln(2)/|k|

### 4. Newton's Law of Cooling

dT/dt = k(T - Tₛ) where Tₛ is ambient temperature
      `
    },
    {
      id: 'diffe5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of exponential growth & decay?',
            options: [
              'Exponential growth/decay',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Exponential growth/decay: dy/dt = ky → y = y₀·e^(kt)'
          },
          {
            question: 'In the context of exponential growth & decay, which is accurate?',
            options: [
              't₁/₂ = ln(2)/|k|',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Half-life: t₁/₂ = ln(2)/|k|'
          }
        ]
      }
    },
    {
      id: 'diffe5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Exponential growth/decay**: dy/dt = ky → y = y₀·e^(kt)
- **k > 0**: growth; k < 0: decay
- **Half-life**: t₁/₂ = ln(2)/|k|
- **Newton's Law of Cooling**: dT/dt = k(T - Tₛ) where Tₛ is ambient temperature
      `
    },
    {
      id: 'diffe5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential growth & decay?',
            options: [
              'dT/dt = k(T - Tₛ) where Tₛ is ambient temperature',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Newton\'s Law of Cooling: dT/dt = k(T - Tₛ) where Tₛ is ambient temperature'
          }
        ]
      }
    },
    {
      id: 'diffe5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential growth/decay',
            options: ['dy/dt = ky → y = y₀·e^(kt)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'k > 0',
            options: ['growth; k < 0: decay', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Half-life',
            options: ['t₁/₂ = ln(2)/|k|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dy/dt = ky → y = y₀·e^(kt)', 'growth; k < 0: decay', 't₁/₂ = ln(2)/|k|'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Exponential Growth & Decay.'
      }
    }
  ]
}
