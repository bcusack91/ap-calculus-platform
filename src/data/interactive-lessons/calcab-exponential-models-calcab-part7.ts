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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Limited growth',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Limited growth: rate proportional to remaining capacity'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'rate of change = rate in - rate out',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Concentration mixing: rate of change = rate in - rate out'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Logistic models capture S-shaped growth curves in biology and economics',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Logistic models capture S-shaped growth curves in biology and economics'
          }
        ]
      }
    },
    {
      id: 'expon7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limited growth',
            options: ['rate proportional to remaining capacity', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Newton\'s Law of Cooling',
            options: ['dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Concentration mixing',
            options: ['rate of change = rate in - rate out', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['rate proportional to remaining capacity', 'dT/dt = k(T - Tₛ) → T(t) = Tₛ + (T₀-Tₛ)e^(kt)', 'rate of change = rate in - rate out'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
