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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of function composition?',
            options: [
              'Composition',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Composition: (f ∘ g)(x) = f(g(x)) — apply g first, then f'
          },
          {
            question: 'In the context of function composition, which is accurate?',
            options: [
              'Read "f composed with g" or "f of g of x"',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Read "f composed with g" or "f of g of x"'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Composition',
            options: ['(f ∘ g)(x) = f(g(x)) — apply g first, then f', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Order matters',
            options: ['f(g(x)) ≠ g(f(x)) in general', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Read "f composed with g" or "f of g of x"',
            options: ['Read "f composed with g" or "f of g of x"', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(f ∘ g)(x) = f(g(x)) — apply g first, then f', 'f(g(x)) ≠ g(f(x)) in general', 'Read "f composed with g" or "f of g of x"'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Function Composition.'
      }
    }
  ]
}
