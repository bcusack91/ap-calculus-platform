export const calcABExpModelsPart7Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'expon7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Limited growth

rate proportional to remaining capacity

### 2. Newton's Law of Cooling

dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)

### 3. Concentration mixing

rate of change = rate in - rate out

### 4. Logistic models capture S-shaped growth curves in biology and economics

Logistic models capture S-shaped growth curves in biology and economics
      `
    },
    {
      id: 'expon7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Limited growth" refer to in calculus?',
            options: [
              'Logistic models capture S-shaped growth curves in biology and economics',
              'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)',
              'rate of change = rate in - rate out',
              'rate proportional to remaining capacity'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Limited growth: rate proportional to remaining capacity. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Concentration mixing?',
            options: [
              'rate of change = rate in - rate out',
              'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)',
              'rate proportional to remaining capacity',
              'Logistic models capture S-shaped growth curves in biology and economics'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Concentration mixing: rate of change = rate in - rate out. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Limited growth**: rate proportional to remaining capacity
- **Newton's Law of Cooling**: dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)
- **Concentration mixing**: rate of change = rate in - rate out
- **Logistic models capture S-shaped growth curves in biology and economics**
      `
    },
    {
      id: 'expon7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Logistic models capture S-shaped growth… is correct?',
            options: [
              'rate of change = rate in - rate out',
              'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)',
              'Logistic models capture S-shaped growth curves in biology and economics',
              'rate proportional to remaining capacity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Logistic models capture S-shaped growth curves in biology and economics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'expon7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limited growth',
            options: ['Logistic models capture S-shaped growth curves in biology and economics', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'rate proportional to remaining capacity', 'rate of change = rate in - rate out']
          },
          {
            label: 'Newton\'s Law of Cooling',
            options: ['rate of change = rate in - rate out', 'Logistic models capture S-shaped growth curves in biology and economics', 'rate proportional to remaining capacity', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)']
          },
          {
            label: 'Concentration mixing',
            options: ['rate proportional to remaining capacity', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'Logistic models capture S-shaped growth curves in biology and economics', 'rate of change = rate in - rate out']
          }
        ],
        correctAnswers: ['rate proportional to remaining capacity', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'rate of change = rate in - rate out'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Limited growth: rate proportional to remaining capacity. Newton\'s Law of Cooling: dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt). Concentration mixing: rate of change = rate in - rate out.'
      }
    }
  ]
}
