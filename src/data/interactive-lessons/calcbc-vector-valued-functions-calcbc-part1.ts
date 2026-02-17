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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j…" refer to in calculus?',
            options: [
              'gives location at time t',
              'all t for which both components are defined',
              'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function',
              'The tip of r⃗(t) traces a curve in the plane'
            ],
            correctAnswer: 2,
            explanation: 'Correct — r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes The tip of r⃗(t) traces a curve in the…:',
            options: [
              'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function',
              'The tip of r⃗(t) traces a curve in the plane',
              'all t for which both components are defined',
              'gives location at time t'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The tip of r⃗(t) traces a curve in the plane. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Domain?',
            options: [
              'The tip of r⃗(t) traces a curve in the plane',
              'all t for which both components are defined',
              'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function',
              'gives location at time t'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Domain: all t for which both components are defined. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'vecto1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Position vector',
            options: ['gives location at time t', 'all t for which both components are defined', 'The tip of r⃗(t) traces a curve in the plane', 'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function']
          },
          {
            label: 'Domain',
            options: ['The tip of r⃗(t) traces a curve in the plane', 'all t for which both components are defined', 'gives location at time t', 'r⃗(t) = ⟨f(t), g(t)⟩ = f(t)i + g(t)j defines a vector-valued function']
          }
        ],
        correctAnswers: ['gives location at time t', 'all t for which both components are defined'],
        hint1: 'Think about what each concept specifically describes in ∮ Vector Valued Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Vector Valued Functions describes a specific idea. Position vector: gives location at time t. Domain: all t for which both components are defined.'
      }
    }
  ]
}
