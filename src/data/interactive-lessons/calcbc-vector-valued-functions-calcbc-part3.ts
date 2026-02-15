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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integrals of vector functions?',
            options: [
              '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component'
          },
          {
            question: 'In the context of integrals of vector functions, which is accurate?',
            options: [
              'The result is a vector',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The result is a vector'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integrals of vector functions?',
            options: [
              'r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Position from velocity: r⃗(t) = r⃗(t₀) + ∫_(t₀)^t v⃗(s)ds'
          }
        ]
      }
    },
    {
      id: 'vecto3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate component by component',
            options: ['∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate componen', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Definite integral',
            options: ['∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The result is a vector',
            options: ['The result is a vector', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫r⃗(t)dt = ⟨∫f(t)dt, ∫g(t)dt⟩ — integrate componen', '∫ₐᵇ r⃗(t)dt = ⟨∫ₐᵇ f(t)dt, ∫ₐᵇ g(t)dt⟩', 'The result is a vector'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integrals of Vector Functions.'
      }
    }
  ]
}
