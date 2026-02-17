export const calcBCVectorsPart3Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vecto3-intro',
      type: 'text' as const,
      content: `
# Integrals of Vector Functions

**Part 3 of 7 — Integrals of Vector Functions**

### 1. ∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component

∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component

### 2. Definite integral

∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩

### 3. The result is a vector

The result is a vector

### 4. Position from velocity

r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds
      `
    },
    {
      id: 'vecto3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains ∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ —…?',
            options: [
              '∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩',
              '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component',
              'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds',
              'The result is a vector'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about The result is a vector?',
            options: [
              'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds',
              '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component',
              '∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩',
              'The result is a vector'
            ],
            correctAnswer: 3,
            explanation: 'Correct — The result is a vector. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'vecto3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component**
- **Definite integral**: ∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩
- **The result is a vector**
- **Position from velocity**: r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds
      `
    },
    {
      id: 'vecto3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Integrals of Vector Functions, which correctly describes Position from velocity?',
            options: [
              'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds',
              '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component',
              '∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩',
              'The result is a vector'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Position from velocity: r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'vecto3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Definite integral',
            options: ['The result is a vector', 'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds', '∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩', '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component']
          },
          {
            label: 'Position from velocity',
            options: ['∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component', '∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩', 'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds', 'The result is a vector']
          }
        ],
        correctAnswers: ['∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩', 'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds'],
        hint1: 'Think about what each concept specifically describes in Integrals of Vector Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integrals of Vector Functions describes a specific idea. Definite integral: ∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩. Position from velocity: r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds.'
      }
    }
  ]
}
