export const precalcCompositionPart1Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'funct1-intro',
      type: 'text' as const,
      content: `
# 📈 Function Composition Inverses

**Part 1 of 7 — Function Composition**

### 1. Composition

(f ∘ g)(x) = f(g(x)) — apply g first, then f

### 2. Order matters

f(g(x)) ≠ g(f(x)) in general

### 3. Read "f composed with g" or "f of g of x"

Read "f composed with g" or "f of g of x"

### 4. Decompose complex functions into simpler compositions

Decompose complex functions into simpler compositions
      `
    },
    {
      id: 'funct1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Composition?',
            options: [
              'f(g(x)) ≠ g(f(x)) in general',
              'Read "f composed with g" or "f of g of x"',
              '(f ∘ g)(x) = f(g(x)) — apply g first, then f',
              'Decompose complex functions into simpler compositions'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Composition: (f ∘ g)(x) = f(g(x)) — apply g first, then f. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Function Composition Inverses, which explains Read "f composed with g" or "f of g of…?',
            options: [
              'Decompose complex functions into simpler compositions',
              'Read "f composed with g" or "f of g of x"',
              '(f ∘ g)(x) = f(g(x)) — apply g first, then f',
              'f(g(x)) ≠ g(f(x)) in general'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Read "f composed with g" or "f of g of x". Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'funct1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Composition**: (f ∘ g)(x) = f(g(x)) — apply g first, then f
- **Order matters**: f(g(x)) ≠ g(f(x)) in general
- **Read "f composed with g" or "f of g of x"**
- **Decompose complex functions into simpler compositions**
      `
    },
    {
      id: 'funct1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to function composition?',
            options: [
              'Decompose complex functions into simpler compositions',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Decompose complex functions into simpler compositions'
          }
        ]
      }
    },
    {
      id: 'funct1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Composition',
            options: ['f(g(x)) ≠ g(f(x)) in general', '(f ∘ g)(x) = f(g(x)) — apply g first, then f', 'Decompose complex functions into simpler compositions', 'Read "f composed with g" or "f of g of x"']
          },
          {
            label: 'Order matters',
            options: ['Decompose complex functions into simpler compositions', '(f ∘ g)(x) = f(g(x)) — apply g first, then f', 'f(g(x)) ≠ g(f(x)) in general', 'Read "f composed with g" or "f of g of x"']
          }
        ],
        correctAnswers: ['(f ∘ g)(x) = f(g(x)) — apply g first, then f', 'f(g(x)) ≠ g(f(x)) in general'],
        hint1: 'Think about what each concept specifically describes in Function Composition Inverses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Function Composition Inverses describes a specific idea. Composition: (f ∘ g)(x) = f(g(x)) — apply g first, then f. Order matters: f(g(x)) ≠ g(f(x)) in general.'
      }
    }
  ]
}
