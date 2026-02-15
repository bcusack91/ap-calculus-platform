export const calcBCVectorsPart1Data = {
  topicSlug: 'vector-valued-functions-calcbc',
  sections: [
    {
      id: 'vecto1-intro',
      type: 'text' as const,
      content: `
# ∮ Vector Valued Functions

**Part 1 of 7 — Vector-Valued Functions**

### 1. r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function

r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function

### 2. Position vector

gives location at time t

### 3. The tip of r⃗(t) traces a curve in the plane

The tip of r⃗(t) traces a curve in the plane

### 4. Domain

all t for which both components are defined
      `
    },
    {
      id: 'vecto1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of vector-valued functions?',
            options: [
              'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function'
          },
          {
            question: 'In the context of vector-valued functions, which is accurate?',
            options: [
              'The tip of r⃗(t) traces a curve in the plane',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The tip of r⃗(t) traces a curve in the plane'
          }
        ]
      }
    },
    {
      id: 'vecto1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function**
- **Position vector**: gives location at time t
- **The tip of r⃗(t) traces a curve in the plane**
- **Domain**: all t for which both components are defined
      `
    },
    {
      id: 'vecto1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to vector-valued functions?',
            options: [
              'all t for which both components are defined',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Domain: all t for which both components are defined'
          }
        ]
      }
    },
    {
      id: 'vecto1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function',
            options: ['r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vec', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Position vector',
            options: ['gives location at time t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The tip of r⃗(t) traces a curve in the plane',
            options: ['The tip of r⃗(t) traces a curve in the plane', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vec', 'gives location at time t', 'The tip of r⃗(t) traces a curve in the plane'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Vector-Valued Functions.'
      }
    }
  ]
}
