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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Exponential growth/decay?',
            options: [
              'dy/dt = ky → y = y₀·e^(kt)',
              't₁/₂ = ln(2)/|k|',
              'growth; k < 0: decay',
              'dT/dt = k(T - Tₛ) where Tₛ is ambient temperature'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Exponential growth/decay: dy/dt = ky → y = y₀·e^(kt). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Half-life?',
            options: [
              'dT/dt = k(T - Tₛ) where Tₛ is ambient temperature',
              'growth; k < 0: decay',
              'dy/dt = ky → y = y₀·e^(kt)',
              't₁/₂ = ln(2)/|k|'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Half-life: t₁/₂ = ln(2)/|k|. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Exponential Growth & Decay, which correctly describes Newton\'s Law of Cooling?',
            options: [
              'dT/dt = k(T - Tₛ) where Tₛ is ambient temperature',
              'growth; k < 0: decay',
              'dy/dt = ky → y = y₀·e^(kt)',
              't₁/₂ = ln(2)/|k|'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Newton\'s Law of Cooling: dT/dt = k(T - Tₛ) where Tₛ is ambient temperature. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'diffe5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential growth/decay',
            options: ['dT/dt = k(T - Tₛ) where Tₛ is ambient temperature', 't₁/₂ = ln(2)/|k|', 'growth; k < 0: decay', 'dy/dt = ky → y = y₀·e^(kt)']
          },
          {
            label: 'k > 0',
            options: ['dT/dt = k(T - Tₛ) where Tₛ is ambient temperature', 'dy/dt = ky → y = y₀·e^(kt)', 't₁/₂ = ln(2)/|k|', 'growth; k < 0: decay']
          },
          {
            label: 'Half-life',
            options: ['growth; k < 0: decay', 'dy/dt = ky → y = y₀·e^(kt)', 'dT/dt = k(T - Tₛ) where Tₛ is ambient temperature', 't₁/₂ = ln(2)/|k|']
          }
        ],
        correctAnswers: ['dy/dt = ky → y = y₀·e^(kt)', 'growth; k < 0: decay', 't₁/₂ = ln(2)/|k|'],
        hint1: 'Think about what each concept specifically describes in Exponential Growth & Decay.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Growth & Decay describes a specific idea. Exponential growth/decay: dy/dt = ky → y = y₀·e^(kt). k > 0: growth; k < 0: decay. Half-life: t₁/₂ = ln(2)/|k|.'
      }
    }
  ]
}
