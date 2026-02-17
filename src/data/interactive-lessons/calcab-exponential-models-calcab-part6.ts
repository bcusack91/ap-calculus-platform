export const calcABExpModelsPart6Data = {
  topicSlug: 'exponential-models-calcab',
  sections: [
    {
      id: 'expon6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'expon6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Limited growth" refer to in calculus?',
            options: [
              'rate of change = rate in - rate out',
              'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)',
              'rate proportional to remaining capacity',
              'Logistic models capture S-shaped growth curves in biology and economics'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Limited growth: rate proportional to remaining capacity. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Concentration mixing?',
            options: [
              'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)',
              'rate proportional to remaining capacity',
              'rate of change = rate in - rate out',
              'Logistic models capture S-shaped growth curves in biology and economics'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Concentration mixing: rate of change = rate in - rate out. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon6-detail',
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
      id: 'expon6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Logistic models capture S-shaped growth…?',
            options: [
              'rate of change = rate in - rate out',
              'Logistic models capture S-shaped growth curves in biology and economics',
              'rate proportional to remaining capacity',
              'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Logistic models capture S-shaped growth curves in biology and economics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'expon6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limited growth',
            options: ['rate of change = rate in - rate out', 'Logistic models capture S-shaped growth curves in biology and economics', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'rate proportional to remaining capacity']
          },
          {
            label: 'Newton\'s Law of Cooling',
            options: ['rate proportional to remaining capacity', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'Logistic models capture S-shaped growth curves in biology and economics', 'rate of change = rate in - rate out']
          },
          {
            label: 'Concentration mixing',
            options: ['Logistic models capture S-shaped growth curves in biology and economics', 'rate of change = rate in - rate out', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'rate proportional to remaining capacity']
          }
        ],
        correctAnswers: ['rate proportional to remaining capacity', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'rate of change = rate in - rate out'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Limited growth: rate proportional to remaining capacity. Newton\'s Law of Cooling: dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt). Concentration mixing: rate of change = rate in - rate out.'
      }
    }
  ]
}
